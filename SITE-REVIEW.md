# alphacrew.org: review and build plan

Reviewed November 23, 2026 against commit `669f5c4` and the live site. This file sits at the repo root and the check script at `scripts/check-site.mjs`. The numbers come from `scripts/check-site.mjs` and from the repo. Today the site passes 5 of the script's 25 checks. The finished site passes all 26, because one more check appears once a link preview image exists.

## The short version

The site holds the whole record: 73 posts across 32 days, 168 photos, alt text on every one. A visitor who does not click gets 17 of the photos and 18% of the words. The work is mostly subtraction. The accordion, the stat bar, the numbered steps and the 2026 narration come out, and the 2017 posts and photos carry the page.

## Measured today

| What | Today |
|---|---|
| Photos on the page with nothing clicked | 17 of 168, and 9 of those are the darkened hero backdrop |
| Words on the page with nothing clicked | 1,570 of about 8,700 |
| Clicks to read the whole log | 72 |
| Log titles cut off on a phone | 72 of 73, with 33 to 40 px left for the title |
| Text below 12 px | 151 elements at 9, 10 and 11 px |
| Text under WCAG AA contrast | 173 elements, 36% of the text, the worst at 1.34 to 1 |
| Photos cropped by a quarter or more | 60 of the 144 that sit in grids, and no photo can be opened |
| Links on the page | 4, and the press link returns 404 |
| Page length | 14 screens on desktop and 16 on a phone, 65% of it closed rows |
| Structure | one h1, no other headings, no main landmark |
| Link preview tags | none, so a shared link shows no image |
| Em dashes in the copy | 116 |
| Places that still say 100,000 lbs | 5 |
| Load | 454 KB over 18 requests, first paint in about half a second |

Speed is fine and needs no work beyond the font and preload cleanup in step 8.

## Against the five rules

### Amazon Go / SpaceX rule: no interaction the visitor did not ask for

- Reading the record takes 72 clicks. The posts and photos are not in the page until a row is opened, so a skimmer, a search engine and a link preview never see them.
- On a phone the row cannot be read before it is tapped. The date takes the width and the title gets 33 to 40 px, so the rows read "Fiv...", "Th...", "65,0...".
- The one row that opens by default is the last post, a gluten-free food delivery on November 10. That is a blog rule (newest first) applied to an archive.
- Photos in multi-photo posts are forced to 4:3. The 51 portrait shots in those grids lose 44% to 58% of the picture. The photo of the eight generators for the Vieques hospital is cut through its top row. No photo can be opened at full size.
- There is nothing to steer by: no headings, no anchors, and Press sits under 8,000 px of rows.
- Three dead ends: the press link (404), the October 9 photo (file missing), and the only contact, an email address in 10 px text at 1.9 to 1.

### Layer rule: each layer stands when the one above is removed

- The hero stands on its own.
- The stat bar is a second telling of the story in four numbers. Remove it and nothing is lost, so it is not a layer.
- The eight numbered steps describe the supply chain in words. Photos of every link in that chain are already in the repo.
- The log has no layer beneath its rows until a click creates one. Remove the click and 82% of the words and 151 photos are gone.
- The receipts layer is one dead press link and five partner links, three of them inside closed rows. The page never names who ran Alpha CREW and links to no person.

### Volume rule: loud once, then let the content talk

- The hero is the one loud moment, and that is right.
- Everything after it is the same whisper: 10 px labels with wide tracking, nine greys, 36% of the text under the contrast minimum. With one volume there is no emphasis, so the 65,000 lb shipment carries the same weight as "1,000 likes by nightfall".
- The 2017 posts are the real voice and they are the faintest text on the site: 12 px italic at 2.6 to 1, under narration written in 2026 at full strength.
- The stat bar, the 01 to 08 steps, the micro labels, the amber hairlines and the film grain are one template kit. The stat bar is already on Joey's list of things to avoid, and the rest of the kit goes with it.
- The page needs three volumes: loud for the hero, medium for six missions, quiet and fully readable for the log.

### 10x rule: ten times better than the next best

The next best is the old Facebook page, and on a phone it is the easier read today. The site wins on five things Facebook cannot do:

1. Every post and photo open, in order, on one page.
2. The six big missions told with their own photos.
3. The supply chain shown in six photos, from the pallets in Florida to the front door.
4. Receipts that work: a live Air Force article, the Facebook page, the 27 organizations the posts name, the crew by name.
5. A link preview with a real photo when the site is shared.

Strong material that is buried today: the iPhone screenshot from the Vieques ferry that reads "No Service" at 10% battery, the hand-painted ALPHA CREW truck, the taped-up sign, and the October 17 post about labeling and manifesting every item.

### Step by step

The plan below is nine steps. Each one ships alone, touches a few files, and ends with a check.

## Facts to correct

| Where | Now | Change to |
|---|---|---|
| Hero, story, stat bar, closing, meta description | 100,000 lbs | 200,000+ lbs |
| Story, footer, first log entry | "the Duren family" organized it | Joey Duren founded Alpha CREW and led it. His father ran shipping. |
| Stat bar, closing, story, "Final Push" label | Seven weeks, ended November 10 | The posts cover September 25 to November 10. The work went on after that. |
| Story, and the October 9 title | Maria hit Puerto Rico as a Category 5 | Category 4 at Puerto Rico, with 155 mph winds |
| Story | Active duty Air Force gave access to C-130s | National Guard C-130s out of Savannah, as the numbered steps and the 2017 Air Force article say |
| Narration, September 27 | Vieques promise kept "six weeks later" | The crew reached Vieques on October 3, six days later |
| Narration, November 6 | Vieques is "reachable only by ferry" | Delete. The October 10 post has aircraft flying to Vieques. |
| Press card | Links to AFRC article 1347866 | 404. Use the live article in the reference section. |
| October 9 entry | `vieques-destroyed-structure.jpg` | The file is not in the repo. Restore it or drop the reference. |
| Log order | Two September 26 posts sit after September 27 | Sort by date |
| Stat bar | "20+ partner organizations", 4 linked | List the 27 organizations the posts name |

Details that appear only in the 2026 narration and in no post: a garage (twice), a warehouse (six times), and that the generators were bought.

## Voice

The 2017 posts are first person and plain. They say we, our or us 131 times. The narration around them is third person and dramatized. It says they, their or them 49 times and never says we. It carries 73 of the 116 em dashes, eight "wasn't just" or "not just" turns, and lines like "Just tape and conviction." The hero opens with volunteers who "braved the destruction".

The fix is to let the posts be the text. Each post keeps a plain title that says what happened. The narration is dropped, or cut to one plain first-person sentence where a post needs context.

## Keep

- The hero collage as the one loud moment, and the dark palette.
- All 168 photos and their alt text.
- The original posts, word for word.
- The static build and its speed.
- The closing line: "This site exists so it isn't forgotten."

## Defaults this plan uses

Joey can change any of these. Steps that depend on one are marked.

1. The total is written "200,000+ lbs". Settled.
2. The site says "Joey Duren founded Alpha CREW and led it" and links to his LinkedIn profile. His father is credited with running shipping, by name if Joey supplies it.
3. No end date is given. The log is described as the first seven weeks.
4. The 2017 posts become the main text and the narration is removed. (Step 2)
5. The October 2 "Las Vegas" post is removed. The three posts about page likes and the first $1,000 raised stay as ordinary posts on their days. (Step 2)
6. The crew are listed by name, exactly as the posts name them. (Step 7)
7. The link to one person's private Facebook profile is removed and her name stays. (Step 7)
8. The link preview photo is the truck handout in Vieques with ALPHA CREW painted on the side. (Step 8)

## The page after the work

One page, same stack, same palette, top to bottom:

1. **Hero.** Name, one sentence with the total, who led it.
2. **Six missions.** A title, two or three plain sentences and three to five uncropped photos each, with a link to that day in the log.
3. **How it moved.** Six photos in order with one line under each. This replaces the stat bar and the eight numbered steps.
4. **Who and receipts.** Who ran it, the partners, the crew, the press.
5. **The log.** All 73 posts open, grouped under 32 day headings, photos uncropped and tappable.
6. **Closing line and footer.**

The log goes last so nothing sits beneath it.

## Draft copy

These are drafts for Joey to edit. Every fact in them comes from a 2017 post, a photo in the repo, or the decisions above.

**Hero.** After Hurricane Maria we moved 200,000+ lbs of water, food, medicine and generators from Florida to Puerto Rico by truck, C-130 and boat.

**Under it.** Joey Duren founded Alpha CREW and led it.

**Story.** Hurricane Maria hit Puerto Rico on September 20, 2017. The island lost power and communications, roads washed out, and supplies stopped moving.

Five days later we laid our gear out on a table in Florida and started collecting. Airmen at Patrick Air Force Base, churches, businesses and families sent what they had. We labeled every item, logged it on a manifest, trucked the loads to Savannah, and flew them to San Juan on National Guard C-130s.

On the island the crew took it the rest of the way: generators to the hospital on Vieques by ferry, medical supplies to the children's hospital in Bayamón, food into the mountains of Utuado and Jayuya, and hot meals to people who could not leave home.

**Missions.**

- *Generators for the Vieques hospital, September 29 to October 7.* The island's health director told us the hospital's generators were failing. We sent eight 4,000-watt generators 1,100 miles by air, 55 by truck and 20 by boat. The crew reached Vieques on October 3. Three days later the hospital and the dialysis clinic had power, and more than 500 families had food, water and supplies.
- *65,000 lbs in 48 hours, October 24 and 25.* We sent 15,000 lbs on Tuesday and 50,000 lbs on Wednesday from Florida to Georgia for the airlift to Puerto Rico. Every item was labeled and on a manifest.
- *Medical supplies to two hospitals, October 20 and November 6.* Partners for World Health sent the supplies. We carried one load from the San Juan airport to the children's hospital in Bayamón and another by plane, truck and ferry to the hospital on Vieques.
- *Into the mountains, October 15 to 26.* We scouted Utuado and found people crossing a river because their bridge had collapsed. We went back with Climbing Puerto Rico to help farmers and clear a family's driveway, and again with six other groups to bring food and baby supplies to eight barrios in Utuado and Jayuya.
- *Door to door, October 16 to November 10.* In Aguas Buenas we found seniors eating once a day and left water purifiers. In St. Just we checked on Ms. Carmen Rivera for her family in New Jersey and handed her a phone. With Fundación El Plato Caliente and Voces we carried hot meals to people who could not leave home.
- *The animals, October 2 to 17.* We moved supplies for Veterinarians for Puerto Rico and the Humane Society, helped get dogs on a flight to New York with Guardians of Rescue, kept vaccines cold in a crew member's refrigerator, and helped move the animals out when the Guaynabo shelter flooded.

**How it moved.** One line under each of six photos: We collected and palletized in Florida. We trucked it to Savannah. Airmen loaded it onto a C-130. We loaded the CREW trucks. We took the ferry to Vieques. We handed it out from the truck.

**Who.** Joey Duren founded Alpha CREW and led it. His father ran shipping. Everyone else was a volunteer: airmen, church members and families.

**Closing.** Alpha CREW is no longer operating. This site exists so the work and the people who did it are not forgotten.

**Page title.** Alpha CREW | Hurricane Maria relief, 2017

**Description.** Alpha CREW moved 200,000+ lbs of water, food, medicine and generators to Puerto Rico after Hurricane Maria. The posts and photos from 2017.

## Build steps

Rules for every step: do one step, run `npm run check`, show Joey the page at 390 px and 1440 px, and stop. Commit or push only when he asks. Add no dependencies beyond the ones named here.

### Step 0. Ground rules (nothing visible changes)

- Replace `CLAUDE.md` with the text at the end of this file. The current one describes a different project and tells the reader to use Mapbox, shadcn and a "Mission Control" look.
- Add `scripts/check-site.mjs`, `playwright` as a dev dependency, and `"check": "node scripts/check-site.mjs"` in `package.json`. The script drives the Chrome already on the machine.
- Rename the package from `project-ard` to `alphacrew`.
- Remove the 15 unused runtime dependencies listed in the reference section, plus `tw-animate-css` and `src/lib/utils.ts`.
- Done when: the build passes, the page looks the same, and the check prints 5 passing and 20 failing.

### Step 1. Facts and dead ends (copy and data, no layout)

- Files: `src/app/page.tsx`, `src/app/layout.tsx`, `src/components/HeroCollage.tsx`, `src/data/gallery.ts`.
- Apply the facts table to the page copy. The two narration rows and the October 9 title are handled in step 2. Use the draft hero, story, closing and description.
- Delete the stat bar section.
- Replace the press card with the live article.
- Restore or drop the October 9 photo. Sort the log by date.
- Done when these lines pass: missing photos, "100,000", "200,000", description.

### Step 2. The log's words (data and one text block)

- Files: `src/data/gallery.ts`, the text block in `src/components/Gallery.tsx`.
- Remove `narrative` and `phase`. Add an optional `note` for the few posts that need one plain first-person sentence of context.
- Give each post a plain title that says what happened, including the October 9 one. Remove the 9 em dashes in titles and the 25 in alt text. In the three quoted posts that carry an em dash, use a hyphen with spaces, as it would have been typed in 2017.
- Remove the "Las Vegas" post.
- Show the post as normal reading text, with no italics and no quote marks. One line at the top of the log says the posts are shown as they were written on Facebook in 2017.
- Done when these lines pass: em dashes in copy, em dashes in rendered text, "Duren family". Joey reads the titles once.

### Step 3. Legibility (styles and tags, no content)

- Files: the three components and `globals.css`.
- Nothing under 12 px. Labels are 12 to 13 px with tracking of 0.08em or less. Log text is 16 px and story text is 18 px.
- Three text colors only: `zinc-100` for headings, `zinc-300` for reading text, `zinc-400` for dates and labels. Nothing dimmer carries text. Amber is for links.
- Each section gets a real `h2`. Add `header`, `main` and `footer`, and a skip link.
- On a phone the date sits on its own line above the title, and titles wrap.
- Make the footer email a normal-size link.
- Done when these lines pass on both widths: text below 12 px, contrast, ellipsis, links under 24 px, headings.

### Step 4. Open the log

- File: `src/components/Gallery.tsx`.
- Remove the accordion. Make it a server component with no state, so the posts render as HTML and the data leaves the client bundle.
- Group the posts under 32 day headings (`h3`), each with an anchor such as `#2017-10-25`. Put a row of seven week links at the top of the log.
- Move the log to the bottom of the page, above the closing line.
- Store each photo's real width and height in the data so nothing jumps while photos load.
- Done when "photos on the page with nothing clicked" passes and the phone view scrolls from September 25 to November 10 without a tap.

### Step 5. Photos

- Show every photo at its own shape. Remove the forced 4:3 crop and the oversized first tile.
- A tap opens the photo at full size in a native `dialog`: arrows and swipe move through that day's photos, Esc closes it, focus returns to the thumbnail, and the alt text shows as the caption. This is the only client code on the page.
- Never upscale. Thirteen photos are under 800 px on both sides.
- Done when the generator photo shows all eight boxes in the grid, and a portrait photo opens whole on a phone.

### Step 6. Top of the page

- Hero: use the draft sentence and the line under it. In the top-left cell, crop the iPhone chrome out or swap the photo. Keep `priority` on the first two cells only and let the rest load lazily, so a phone skips the three cells it hides.
- Replace the eight numbered steps with "How it moved": six photos in order, one line under each, no text on the photos. Files: `333rd-warehouse-overhead`, `65k-flatbed-forklift-loading`, `vieques-c130-loading-tarmac`, `vieques-trucks-loaded-staging`, `vieques-ferry-crossing`, `vieques-truck-handout-alphacrew`.
- Add the six missions from the draft copy. Tag posts in the data with a `mission` so each block pulls its own photos and links to its first day.
- In the Vieques mission, show the ferry screenshot whole and let the caption point at its "No Service" bar. In the hero and in "How it moved", crop the phone chrome out.
- Done when Joey can get the whole story on a phone in the first four screens.

### Step 7. Who and receipts

- "Who" block with the link to `https://www.linkedin.com/in/joeduren/`.
- Partners and supporters: the 27 organizations in the reference section as a plain list, linked where an official page is known.
- Crew: the people the posts name.
- Press: the live article and its DVIDS copy. Add a link to the Alpha CREW Facebook page.
- Done when "a link to a LinkedIn profile" passes and every outside link in the check output opens.

### Step 8. Sharing and delivery

- `layout.tsx`: `metadataBase`, canonical `https://www.alphacrew.org/`, Open Graph and Twitter tags, and a 1200 by 630 link preview image cut from `vieques-truck-handout-alphacrew.jpg`, with alt text.
- Add `robots.ts`, `sitemap.ts` and a `favicon.ico`. All three return 404 today.
- Load Inter through `next/font` and delete the Google Fonts `@import`, which blocks rendering and pulls seven weights.
- Done when all 26 checks pass. Then share the link in a LinkedIn draft and look at the card.

## Reference

**Press.** "Reserve Citizen Airman aids Hurricane Maria victims in Puerto Rico", Air Force Reserve Command, October 25, 2017, by Tech. Sgt. Lindsey Maurice, 920th Rescue Wing Public Affairs. It names Alpha CREW and describes Master Sgt. Gerardo Ramos escorting its shipment to San Juan on a National Guard C-130 out of Savannah. Live on November 23, 2026:

- https://www.afrc.af.mil/News/Article-Display/Article/1354296/reserve-citizen-airman-aids-hurricane-maria-victims-in-puerto-rico/
- DVIDS copy: https://dvidshub.net/news/258083/citizen-airman-aids-hurricane-maria-victims-puerto-rico

The article the site links to now (AFRC 1347866, "Citizen Airmen rally to help Puerto Rico") returns 404 under both the old and new address formats. It is not on AFRC's Puerto Rico tag page, and the Wayback Machine has no capture of that address.

**Facebook page.** https://www.facebook.com/profile.php?id=61551422976226

**Organizations the posts name (27).** 920th Rescue Wing, 333rd Recruiting Squadron, Air National Guard Emergency Family Assistance Center, Partners for World Health, Humane Society of Puerto Rico, Veterinarians for Puerto Rico, Guardians of Rescue, Puerto Rico Rises, Voces, Fundación Topy Mamery, Fundación El Plato Caliente, UNICEF, Lote 23, Grupo de Amigos de Margarita Santos, Foundation for Puerto Rico, Climbing Puerto Rico, Activados por Puerto Rico, City of San Juan, ABBA La Casa De Mi Padre, The Church of Doral, Catacumba 5, Sparks, Kinnikinnick, Alianza de Autismo de Puerto Rico, Wang and Cortes Dental, Weddings in Vieques, iHeart Latino Mia 92.1.

**People the posts name.** Michael Cook, Jennifer Cook-Gilpin, Sandra Christian, Jorgito, Blaine Stevenson, Ismael "Tico" Marques, Bryan of Climbing Puerto Rico, Jose Galindez, Byankah Sobá, Pastor Evelyn Martinez, Luis A. Martinez, Glorianne Ruiz, the Rivera and Caraballo family, and the first donors: Christopher Soto Nieves, Richard Santiago, Rand Duren and Humberto De La Pena. The Air Force article adds Master Sgt. Gerardo Ramos.

**Unused dependencies.** `@radix-ui/react-navigation-menu`, `@radix-ui/react-separator`, `@radix-ui/react-slot`, `@react-email/render`, `@types/mapbox-gl`, `class-variance-authority`, `clsx`, `html2canvas`, `jspdf`, `lucide-react`, `mapbox-gl`, `react-map-gl`, `react-to-print`, `resend`, `tailwind-merge`. Only `next`, `react` and `react-dom` are used.

**Photos.** 167 files for 168 references. 61 are portrait, 104 landscape, 2 square. The median width is 1,124 px.

## New CLAUDE.md

````markdown
# CLAUDE.md

alphacrew.org is the public record of Alpha CREW's relief work after Hurricane Maria in 2017. It is one static page. Every claim on it has to be true and checkable.

## Commands

- `npm run dev` starts the dev server.
- `npm run build` and `npm start` build and serve production.
- `npm run lint` runs ESLint.
- `npm run check` measures the running site against SITE-REVIEW.md. It needs `npm start` running.

## Stack

Next.js 15 with the App Router, React 19, Tailwind CSS 4 (theme in `src/app/globals.css`, no config file), TypeScript in strict mode, path alias `@/*`. There is no UI library, map, email or PDF code, and none should be added.

## Files

- `src/app/layout.tsx`: metadata and the page shell.
- `src/app/page.tsx`: the page.
- `src/components/HeroCollage.tsx`: the hero.
- `src/components/Gallery.tsx`: the log.
- `src/data/gallery.ts`: the 2017 posts and their photos.
- `public/assets/photos`: the photos.

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
````
