import { galleryEntries } from "@/data/gallery";
import { founders, links, partners, people, press } from "@/data/receipts";

// An organization or a person is listed only if a post names them.
const posts = galleryEntries.map((entry) => entry.caption).join("\n");
for (const named of [...partners.map((p) => p.posted ?? p.name), ...people]) {
  if (!posts.includes(named)) {
    throw new Error(`${named} is not named in a post`);
  }
}

const h2 =
  "text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100 mb-6";
const h3 = "text-lg font-semibold text-zinc-100 mb-2";
const lead = "text-zinc-400 text-sm leading-relaxed mb-4";
const link =
  "inline-block py-0.5 text-amber-300 underline underline-offset-4 hover:text-amber-200 transition-colors";
const list =
  "text-zinc-300 text-base leading-relaxed sm:columns-2 md:columns-3 gap-x-8";

// Who helped, who founded it, and where the work can be checked.
// The organizations and the people the posts name come first. The founders line comes last.
export default function Who() {
  return (
    <>
      <section id="who" className="py-20 md:py-28 border-t border-zinc-800/60">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={h2}>Who</h2>

          <h3 className={h3}>Organizations</h3>
          <p className={lead}>
            The 2017 posts name these {partners.length} organizations.
          </p>
          <ul role="list" className={list}>
            {partners.map((partner) => (
              <li
                key={partner.name}
                className={`break-inside-avoid ${partner.url ? "" : "py-0.5"}`}
              >
                {partner.url ? (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link}
                  >
                    {partner.name}
                  </a>
                ) : (
                  partner.name
                )}
              </li>
            ))}
          </ul>

          <h3 className={`${h3} mt-12`}>People</h3>
          <p className={lead}>The 2017 posts name these people.</p>
          <ul role="list" className={list}>
            {people.map((person) => (
              <li key={person} className="break-inside-avoid py-0.5">
                {person}
              </li>
            ))}
          </ul>

          <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mt-12">
            {founders}
          </p>
        </div>
      </section>

      <section
        id="press"
        className="py-20 md:py-28 border-t border-zinc-800/60"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={h2}>Press and links</h2>

          <a
            href={press.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group max-w-3xl"
          >
            <div className="border border-zinc-800/60 rounded-sm p-6 md:p-8 hover:border-zinc-600 transition-colors">
              <div className="text-xs text-zinc-400 uppercase tracking-[0.08em] mb-3">
                {press.source}
              </div>
              <div className="text-amber-300 text-lg font-semibold group-hover:underline underline-offset-4 mb-2">
                {press.title}
              </div>
              <div className="text-zinc-300 text-base leading-relaxed">
                {press.summary}
              </div>
            </div>
          </a>

          <ul role="list" className="mt-6 space-y-1 text-base">
            {links.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={link}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
