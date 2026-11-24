#!/usr/bin/env node
// check-site.mjs: measures alphacrew.org against the findings in SITE-REVIEW.md.
//
//   npm i -D playwright            (once; it drives the Chrome already on this machine)
//   npm run build && npm start     (in one terminal)
//   node scripts/check-site.mjs    (in another; add a URL to test something other than localhost:3000)
//
// Every line prints PASS or FAIL with the measured number. The exit code is 1 while anything fails.
// Options: --root <repo folder> if this file is not in <repo>/scripts, and CHECK_FONT_CSS=<file.css>
// to stand in for Google Fonts when the machine is offline.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const args = process.argv.slice(2);
const rootFlag = args.indexOf('--root');
const ROOT = rootFlag >= 0 ? path.resolve(args[rootFlag + 1]) : path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const URL_ = args.find((a, i) => /^https?:/.test(a) && (rootFlag < 0 || i !== rootFlag + 1)) || 'http://localhost:3000';

const results = [];
const check = (group, label, ok, measured, target) => results.push({ group, label, ok, measured: String(measured), target });
const info = (group, label, measured) => results.push({ group, label, ok: null, measured: String(measured), target: '' });

// the em dash is built from its code point so this file itself contains none
const EM = String.fromCharCode(0x2014);
const emInSource = new RegExp(`${EM}|&mdash;`, 'g');

// ---------------------------------------------------------------- source files
const walk = (dir) => fs.existsSync(dir) ? fs.readdirSync(dir, { withFileTypes: true }).flatMap(d => d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]) : [];
const srcFiles = walk(path.join(ROOT, 'src')).filter(f => /\.(tsx?|jsx?|css|mdx?|json)$/.test(f));
const src = srcFiles.map(f => fs.readFileSync(f, 'utf8'));
const all = src.join('\n');
// comments are not copy, so drop them before counting punctuation
const copy = all.replace(/\{\/\*[\s\S]*?\*\/\}/g, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
const count = (re, s = copy) => (s.match(re) || []).length;

const photoDir = path.join(ROOT, 'public/assets/photos');
const onDisk = new Set(fs.existsSync(photoDir) ? fs.readdirSync(photoDir) : []);
const referenced = new Set([...all.matchAll(/["'`/]([\w.-]+\.(?:jpe?g|png|webp|avif))["'`]/gi)].map(m => m[1]).filter(n => !/^(favicon|logo|og|opengraph)/i.test(n)));
const missing = [...referenced].filter(n => !onDisk.has(n));

check('Source', 'Photos named in src/ that are missing from public/assets/photos', missing.length === 0, missing.length ? `${missing.length}: ${missing.join(', ')}` : 0, '0');
check('Source', 'Em dashes in copy, titles and alt text', count(emInSource) === 0, count(emInSource), '0');
check('Source', '"100,000" or "100K" still in the copy', count(/100,000|100K/g) === 0, count(/100,000|100K/g), '0');
check('Source', '"200,000" in the copy', count(/200,000/g) > 0, count(/200,000/g), '1 or more');
// Joey, November 24, 2026: the Duren family founded Alpha CREW. This line used to fail on "Duren family". It now fails on a single-founder credit.
check('Source', 'Founders credited as the Duren family, not one person', count(/Duren family/g) > 0 && count(/founded Alpha CREW and led it/g) === 0, `"Duren family" ${count(/Duren family/g)}, single-founder credit ${count(/founded Alpha CREW and led it/g)}`, '1 or more, and 0');
info('Source', 'Photos referenced', referenced.size);

// ---------------------------------------------------------------- rendered page
const launch = async () => {
  const base = { args: process.getuid?.() === 0 ? ['--no-sandbox'] : [] };
  if (process.env.CHROME_PATH) return chromium.launch({ ...base, executablePath: process.env.CHROME_PATH });
  try { return await chromium.launch({ ...base, channel: 'chrome' }); } catch { return chromium.launch(base); }
};
const browser = await launch();

const measure = () => {
  const cv = document.createElement('canvas'); cv.width = cv.height = 1;
  const cx = cv.getContext('2d', { willReadFrequently: true });
  // the canvas turns any CSS color (oklch, lab, hex, rgba) into plain RGBA
  const parse = (c) => { cx.clearRect(0, 0, 1, 1); cx.fillStyle = '#000'; cx.fillStyle = c; cx.fillRect(0, 0, 1, 1); const d = cx.getImageData(0, 0, 1, 1).data; return { r: d[0], g: d[1], b: d[2], a: d[3] / 255 }; };
  const lum = ({ r, g, b }) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const over = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
  const pageBg = (() => { const c = parse(getComputedStyle(document.body).backgroundColor); return c.a > 0 ? over(c, { r: 255, g: 255, b: 255, a: 1 }) : { r: 255, g: 255, b: 255, a: 1 }; })();
  const bgOf = (el) => { let bg = pageBg; const chain = []; for (let e = el; e; e = e.parentElement) chain.unshift(e); for (const e of chain) { const c = parse(getComputedStyle(e).backgroundColor); if (c.a > 0) bg = over(c, bg); } return bg; };
  const q = (s) => [...document.querySelectorAll(s)];
  const meta = (n) => document.querySelector(`meta[name="${n}"],meta[property="${n}"]`)?.content ?? null;

  const rows = []; let chars = 0, failChars = 0, small = 0; const smallSizes = new Set();
  for (const el of q('body *')) {
    const own = [...el.childNodes].filter(n => n.nodeType === 3 && n.textContent.trim()).map(n => n.textContent.trim()).join(' ');
    if (!own || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(el.tagName)) continue;
    const cs = getComputedStyle(el); const box = el.getBoundingClientRect();
    if (cs.visibility === 'hidden' || cs.display === 'none' || !box.width || !box.height) continue;
    const size = parseFloat(cs.fontSize);
    if (size < 12) { small++; smallSizes.add(size); }
    // text laid over photographs cannot be scored from CSS alone: judge the hero by eye
    if (el.closest('[data-over-photo]') || el.closest('section')?.querySelector('h1')) continue;
    const bg = bgOf(el); const fg = over(parse(cs.color), bg);
    const a = lum(fg), b = lum(bg); const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
    const large = size >= 24 || (size >= 18.66 && +cs.fontWeight >= 700);
    chars += own.length;
    if (ratio < (large ? 3 : 4.5)) { failChars += own.length; rows.push({ ratio: +ratio.toFixed(2), size, text: own.slice(0, 44) }); }
  }
  rows.sort((x, y) => x.ratio - y.ratio);
  const worst = []; const seen = new Set();
  for (const r of rows) { const k = r.ratio + '|' + r.size; if (!seen.has(k)) { seen.add(k); worst.push(`${r.ratio}:1 at ${r.size}px "${r.text}"`); } }

  const cut = q('body *').filter(el => {
    const cs = getComputedStyle(el); if (!el.textContent.trim() || !el.clientWidth) return false;
    const ellipsis = cs.textOverflow === 'ellipsis' && cs.overflowX !== 'visible' && el.scrollWidth > el.clientWidth + 1;
    const clamp = cs.webkitLineClamp && cs.webkitLineClamp !== 'none' && el.scrollHeight > el.clientHeight + 1;
    return ellipsis || clamp;
  });
  const imgs = q('img');
  // a link inside a sentence is exempt from the target-size rule (WCAG 2.5.8)
  const inSentence = (e) => getComputedStyle(e).display === 'inline' && [...e.parentElement.childNodes].some(n => n.nodeType === 3 && n.textContent.trim().length > 1);
  const targets = q('a[href],button').filter(e => !inSentence(e)).map(e => e.getBoundingClientRect()).filter(b => b.width && b.height);
  return {
    text: document.body.innerText,
    words: document.body.innerText.trim().split(/\s+/).length,
    contrastFailElements: rows.length, contrastFailShare: chars ? Math.round(failChars / chars * 100) : 0, worst: worst.slice(0, 4),
    small, smallSizes: [...smallSizes].sort((x, y) => x - y),
    cut: cut.length, cutExample: cut[0] ? `${cut[0].clientWidth}px left for "${cut[0].textContent.trim().slice(0, 40)}"` : '',
    overflowX: document.documentElement.scrollWidth > innerWidth + 1,
    imgs: imgs.length, broken: imgs.filter(i => i.complete && i.naturalWidth === 0).map(i => (i.alt || i.currentSrc).slice(0, 50)), pending: imgs.filter(i => !i.complete).length,
    h1: q('h1').length, h2: q('h2').length, main: q('main').length,
    tinyTargets: targets.filter(b => b.height < 24 || b.width < 24).length,
    screens: +(document.documentElement.scrollHeight / innerHeight).toFixed(1),
    og: { title: meta('og:title'), description: meta('og:description'), image: meta('og:image'), card: meta('twitter:card') },
    description: meta('description'),
    canonical: document.querySelector('link[rel=canonical]')?.href ?? null,
    links: q('a[href]').map(a => a.href).filter(h => /^https?:/.test(h) && new URL(h).host !== location.host),
    profileLink: q('a[href]').some(a => /linkedin\.com\/in\//.test(a.href)),
  };
};

const views = { Desktop: { width: 1440, height: 900 }, Phone: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true } };
let desktop;
for (const [name, v] of Object.entries(views)) {
  const ctx = await browser.newContext({ viewport: { width: v.width, height: v.height }, deviceScaleFactor: v.deviceScaleFactor || 1, isMobile: !!v.isMobile, hasTouch: !!v.hasTouch });
  const page = await ctx.newPage();
  const bad = [];
  page.on('response', r => { if (r.status() >= 400 && new URL(r.url()).host === new URL(URL_).host) bad.push(r.status()); });
  if (process.env.CHECK_FONT_CSS) await page.route('**fonts.googleapis.com/**', r => r.fulfill({ status: 200, contentType: 'text/css', body: fs.readFileSync(process.env.CHECK_FONT_CSS, 'utf8') }));
  await page.goto(URL_, { waitUntil: 'networkidle', timeout: 60000 });
  const atLoad = await page.evaluate(() => ({ imgs: document.querySelectorAll('img').length }));
  // walk the page once so lazy photos load, then measure with nothing clicked
  await page.evaluate(async () => { for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.8) { scrollTo(0, y); await new Promise(r => setTimeout(r, 90)); } scrollTo(0, 0); });
  await page.waitForLoadState('networkidle').catch(() => {});
  await page.waitForTimeout(400);
  const m = await page.evaluate(measure);
  if (name === 'Desktop') desktop = m;

  check(name, 'Text below 12px', m.small === 0, m.small ? `${m.small} elements (${m.smallSizes.join(', ')}px)` : 0, '0');
  check(name, 'Text under WCAG AA contrast', m.contrastFailElements === 0, m.contrastFailElements ? `${m.contrastFailElements} elements, ${m.contrastFailShare}% of the text` : 0, '0');
  for (const w of m.worst) info(name, '   worst', w);
  check(name, 'Text cut off with an ellipsis', m.cut === 0, m.cut ? `${m.cut} (${m.cutExample})` : 0, '0');
  check(name, 'Sideways scroll', !m.overflowX, m.overflowX ? 'yes' : 'no', 'no');
  check(name, 'Photos on the page with nothing clicked', atLoad.imgs >= referenced.size, `${atLoad.imgs} of ${referenced.size}`, 'all of them');
  check(name, 'Broken images or failed requests', m.broken.length === 0 && bad.length === 0, m.broken.length || bad.length ? `${m.broken.length} broken, ${bad.length} failed requests ${m.broken.join(' | ')}` : 0, '0');
  check(name, 'Links and buttons under 24px', m.tinyTargets === 0, m.tinyTargets, '0');
  info(name, 'Words on the page', m.words);
  info(name, 'Length in screens', m.screens);
  await ctx.close();
}

const m = desktop;
check('Page', 'One h1, section headings as h2, a <main>', m.h1 === 1 && m.h2 >= 3 && m.main === 1, `h1 ${m.h1}, h2 ${m.h2}, main ${m.main}`, 'h1 1, h2 3+, main 1');
check('Page', 'Em dashes in the rendered text', !m.text.includes(EM), m.text.split(EM).length - 1, '0');
check('Page', 'Description says 200,000', /200,000/.test(m.description || ''), (m.description || 'none').slice(0, 60), 'has 200,000');
check('Page', 'Link preview tags (og:title, og:description, og:image, twitter:card)', !!(m.og.title && m.og.description && m.og.image && m.og.card), Object.entries(m.og).filter(([, v]) => !v).map(([k]) => k).join(', ') ? 'missing: ' + Object.entries(m.og).filter(([, v]) => !v).map(([k]) => k).join(', ') : 'all present', 'all present');
check('Page', 'Canonical URL', !!m.canonical, m.canonical || 'none', 'set');
check('Page', 'A link to a LinkedIn profile', m.profileLink, m.profileLink ? 'yes' : 'no', 'yes');

// outside links: reported, never failed, because some .mil hosts refuse scripts
const req = (await browser.newContext()).request;
if (m.og.image) { const r = await req.get(new URL(m.og.image, URL_).href).catch(() => null); check('Page', 'og:image loads', !!r && r.ok(), r ? r.status() : 'no answer', '200'); }
for (const href of [...new Set(m.links)]) {
  const r = await req.get(href, { timeout: 20000, maxRedirects: 5 }).catch(() => null);
  info('Outside links', `${r ? r.status() : 'no answer'}`, href);
}
await browser.close();

// ---------------------------------------------------------------- report
let group = '';
for (const r of results) {
  if (r.group !== group) { group = r.group; console.log(`\n${group}`); }
  const tag = r.ok === null ? '    ' : r.ok ? 'PASS' : 'FAIL';
  console.log(`  ${tag}  ${r.label.padEnd(62)} ${r.measured}${r.ok === false ? `   (target: ${r.target})` : ''}`);
}
const fails = results.filter(r => r.ok === false).length;
const passes = results.filter(r => r.ok === true).length;
console.log(`\n${passes} passing, ${fails} failing  (${URL_})`);
process.exit(fails ? 1 : 0);
