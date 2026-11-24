#!/usr/bin/env node
// check-viewer.mjs: exercises the photo rows and the photo viewer on a phone-sized and a desktop-sized screen.
//
//   npm run build && npm start        (in one terminal)
//   node scripts/check-viewer.mjs     (in another; add a URL to test something other than localhost:3000)
//
// It drives the Chrome already on this machine, like check-site.mjs. Every line prints PASS or FAIL.
// The exit code is 1 while anything fails. Add --shots <folder> to save a picture of the open viewer.

import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const args = process.argv.slice(2);
const shotsFlag = args.indexOf('--shots');
const shots = shotsFlag >= 0 ? path.resolve(args[shotsFlag + 1]) : null;
const url = args.find((a, i) => /^https?:/.test(a) && (shotsFlag < 0 || i !== shotsFlag + 1)) || 'http://localhost:3000';
if (shots) fs.mkdirSync(shots, { recursive: true });

const launch = async () => {
  const base = { args: process.getuid?.() === 0 ? ['--no-sandbox'] : [] };
  if (process.env.CHROME_PATH) return chromium.launch({ ...base, executablePath: process.env.CHROME_PATH });
  try { return await chromium.launch({ ...base, channel: 'chrome' }); } catch { return chromium.launch(base); }
};
const browser = await launch();
const results = [];
const ok = (name, pass, detail = '') => { results.push(pass); console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`); };

const screens = {
  phone: { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1 },
};

for (const [name, v] of Object.entries(screens)) {
  const ctx = await browser.newContext({ viewport: { width: v.width, height: v.height }, isMobile: !!v.isMobile, hasTouch: !!v.hasTouch, deviceScaleFactor: v.deviceScaleFactor });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto(url, { waitUntil: 'networkidle' });

  // 1. the photo rows: nothing cropped, nothing shown wider than the file
  const rows = await page.evaluate(() => {
    const out = { photos: 0, cropped: [], upscaled: [], tallest: 0, widest: 0 };
    for (const a of document.querySelectorAll('a[data-photo]')) {
      const img = a.querySelector('img'); if (!img) continue;
      const box = a.getBoundingClientRect(); if (!box.width) continue;
      out.photos++;
      const file = a.getAttribute('href').split('/').pop();
      const natural = +img.getAttribute('width') / +img.getAttribute('height');
      const shown = box.width / box.height;
      if (Math.abs(shown / natural - 1) > 0.02) out.cropped.push(`${file} ${shown.toFixed(2)} vs ${natural.toFixed(2)}`);
      if (box.width > +img.getAttribute('width') + 1) out.upscaled.push(`${file} ${Math.round(box.width)} > ${img.getAttribute('width')}`);
      out.tallest = Math.max(out.tallest, Math.round(box.height)); out.widest = Math.max(out.widest, Math.round(box.width));
    }
    return out;
  });
  ok(`${name}: ${rows.photos} photos keep their own shape`, rows.photos > 0 && rows.cropped.length === 0, rows.cropped.slice(0, 3).join(' | '));
  ok(`${name}: no photo shown wider than its file`, rows.upscaled.length === 0, rows.upscaled.slice(0, 3).join(' | '));
  console.log(`      ${name}: widest ${rows.widest}px, tallest ${rows.tallest}px`);

  // 2. open the viewer from a portrait photo in the log
  const portrait = await page.evaluateHandle(() => [...document.querySelectorAll('a[data-photo]')].find((a) => { const i = a.querySelector('img'); return i && +i.getAttribute('height') > +i.getAttribute('width') * 1.2 && a.closest('#log'); }));
  const link = portrait.asElement();
  await link.scrollIntoViewIfNeeded();
  const href = await link.getAttribute('href');
  await link.click();
  await page.waitForSelector('dialog.photo-viewer[open]', { timeout: 5000 });
  await page.waitForFunction(() => { const i = document.querySelector('dialog.photo-viewer img'); return i && i.complete && i.naturalWidth > 0; });
  const open = await page.evaluate(() => {
    const d = document.querySelector('dialog.photo-viewer'); const i = d.querySelector('img'); const b = i.getBoundingClientRect();
    return { src: i.getAttribute('src'), w: Math.round(b.width), h: Math.round(b.height), nw: i.naturalWidth, nh: i.naturalHeight, inView: b.top >= 0 && b.left >= 0 && b.bottom <= innerHeight && b.right <= innerWidth, caption: d.querySelector('figcaption').innerText.trim().slice(0, 70), buttons: d.querySelectorAll('button').length };
  });
  ok(`${name}: a portrait photo opens whole`, open.inView && Math.abs(open.w / open.h - open.nw / open.nh) < 0.02 && open.src.endsWith(href.split('/').pop()), `${open.w}x${open.h} of ${open.nw}x${open.nh}`);
  ok(`${name}: the viewer never enlarges the photo`, open.w <= open.nw + 1);
  ok(`${name}: the photo's description is the caption`, open.caption.length > 10, open.caption);
  if (shots) await page.screenshot({ path: path.join(shots, `viewer-${name}.jpg`), type: 'jpeg', quality: 72 });

  // 3. arrows move through the day's photos, Esc closes, focus returns to a thumbnail
  if (open.buttons > 1) {
    const first = open.src;
    await page.keyboard.press('ArrowRight');
    await page.waitForFunction((s) => document.querySelector('dialog.photo-viewer img')?.getAttribute('src') !== s, first);
    const second = await page.evaluate(() => document.querySelector('dialog.photo-viewer img').getAttribute('src'));
    ok(`${name}: the arrow key moves to the next photo`, second !== first, second.split('/').pop());
  }
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => !document.querySelector('dialog.photo-viewer').open);
  const focus = await page.evaluate(() => ({ tag: document.activeElement?.tagName, photo: document.activeElement?.hasAttribute?.('data-photo') }));
  ok(`${name}: Esc closes it and focus returns to a thumbnail`, focus.tag === 'A' && focus.photo === true);
  ok(`${name}: no script errors`, errors.length === 0, errors.slice(0, 2).join(' | '));
  await ctx.close();
}
await browser.close();
console.log(`\n${results.filter(Boolean).length} of ${results.length} viewer checks pass  (${url})`);
process.exit(results.every(Boolean) ? 0 : 1);
