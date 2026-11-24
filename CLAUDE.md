# CLAUDE.md

alphacrew.org is the public record of Alpha CREW's relief work after Hurricane Maria in 2017. It is one static page. Every claim on it has to be true and checkable.

## Commands

- `npm run dev` starts the dev server.
- `npm run build` and `npm start` build and serve production. The build fetches the Inter font from Google, so it needs a network connection.
- `npm run lint` runs ESLint.
- `npm run check` measures the running site against SITE-REVIEW.md. It needs `npm start` running.
- `npm run check:viewer` opens the photo viewer on a phone-sized and a desktop-sized screen and measures the photo rows. It needs `npm start` running.

## Stack

Next.js 15 with the App Router, React 19, Tailwind CSS 4 (theme in `src/app/globals.css`, no config file), TypeScript in strict mode, path alias `@/*`. There is no UI library, map, email or PDF code, and none should be added.

## Files

- `src/app/layout.tsx`: metadata, link preview tags, the font and the page shell.
- `src/app/page.tsx`: the page. It holds the story, the closing line, the footer and the order of the sections.
- `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/favicon.ico`, `src/app/apple-icon.png`: what crawlers and browsers ask for.
- `src/components/HeroCollage.tsx`: the hero.
- `src/components/Missions.tsx`, `HowItMoved.tsx`, `Who.tsx`: the sections between the story and the log.
- `src/components/Gallery.tsx`: the log.
- `src/components/Photos.tsx`: a row of photos at their own shapes.
- `src/components/PhotoViewer.tsx`: the full-size photo viewer. It is the only client code.
- `src/data/gallery.ts`: the 2017 posts and their photos.
- `src/data/missions.ts`: the six missions and the six "How it moved" photos.
- `src/data/receipts.ts`: the founder line, the partners, the people and the press links.
- `src/data/days.ts`, `src/data/site.ts`: date helpers and the site address.
- `public/assets/photos`: the photos.
- `public/og.jpg`: the photo a shared link shows.
- `scripts/check-site.mjs`: the site check run by `npm run check`.
- `scripts/check-viewer.mjs`: the photo row and photo viewer check run by `npm run check:viewer`.

## Facts

Do not change these without Joey.

- Alpha CREW moved 200,000+ lbs of supplies. Write it as "200,000+ lbs".
- Joey Duren founded Alpha CREW and led it. His father ran shipping. Never write "the Duren family" as the organizer.
- The posts run from September 25 to November 10, 2017. The work continued after that. Do not write that it lasted seven weeks or ended on November 10.
- One shipment was 65,000 lbs over two days, October 24 and 25, 2017.
- Maria reached Puerto Rico on September 20, 2017 as a Category 4 hurricane.
- The airlift was on National Guard C-130s out of Savannah, Georgia.
- Alpha CREW is no longer operating.

## Writing

- The 2017 posts are quotes. Do not reword them.
- New copy is first person plural, plain, in complete sentences.
- No em dashes anywhere, including titles and alt text.
- No "not just X, it was Y" turns, no dramatic fragments, no heroics.
- Add no fact that is not in a post, a photo or the list above.

## Design

- Layer rule: each section stands on its own if the one above is removed.
- Amazon Go rule: nothing is hidden behind a click the visitor did not ask for.
- Volume rule: the hero is the one loud moment. Missions are medium. The log is quiet and fully readable.
- 10x rule: the page has to beat the old Facebook page on a phone.
- No stat bars or stat cards. No text on photos outside the hero.
- No text under 12 px. Three text colors: `zinc-100`, `zinc-300`, `zinc-400`. All text meets WCAG AA.
- Photos are never cropped to a fixed shape and never upscaled. Every photo has alt text.

## Working

- Do one step of SITE-REVIEW.md at a time. Run `npm run check`, show Joey the page at 390 px and 1440 px, and stop.
- Commit or push only when Joey asks.
