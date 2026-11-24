import Photos from "@/components/Photos";
import { galleryEntries, type GalleryEntry } from "@/data/gallery";
import { isoDay, longDay, shortDay, utc } from "@/data/days";

// the posts are already in date order, so each new date starts a new day
const days: { iso: string; posts: GalleryEntry[] }[] = [];
for (const entry of galleryEntries) {
  const iso = isoDay(entry.date);
  const last = days[days.length - 1];
  if (last && last.iso === iso) last.posts.push(entry);
  else days.push({ iso, posts: [entry] });
}

// one link per week, pointing at the first day in that week that has a post
const weeks: { iso: string; label: string }[] = [];
if (days.length) {
  const first = utc(days[0].iso).getTime();
  const WEEK = 7 * 24 * 60 * 60 * 1000;
  for (const day of days) {
    const index = Math.floor((utc(day.iso).getTime() - first) / WEEK);
    if (!weeks[index]) {
      weeks[index] = {
        iso: day.iso,
        label: shortDay.format(new Date(first + index * WEEK)),
      };
    }
  }
}

export default function Gallery() {
  return (
    <section id="log" className="py-20 md:py-28 bg-[#080808] border-t border-zinc-800/60">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100 mb-4">
          The log
        </h2>
        <p className="text-zinc-300 text-base leading-relaxed max-w-2xl mb-6">
          These are our posts as we wrote them on Facebook in 2017.
        </p>

        <nav aria-label="Weeks in the log" className="mb-12">
          <div className="text-sm text-zinc-400 mb-3">Jump to the week of</div>
          <ul className="flex flex-wrap gap-2">
            {weeks.filter(Boolean).map((week) => (
              <li key={week.iso}>
                <a
                  href={`#${week.iso}`}
                  className="inline-flex items-center min-h-9 px-3 py-1.5 text-sm text-amber-300 border border-zinc-700 rounded-sm hover:text-amber-200 hover:border-zinc-500 transition-colors"
                >
                  {week.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-14">
          {days.map((day) => (
            <section key={day.iso} aria-labelledby={day.iso}>
              <h3
                id={day.iso}
                className="scroll-mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-zinc-400 pb-3 mb-6 border-b border-zinc-800/60"
              >
                {longDay.format(utc(day.iso))}
              </h3>

              <div className="space-y-10">
                {day.posts.map((entry) => (
                  <article key={entry.title}>
                    <h4 className="text-lg font-semibold text-zinc-100 mb-2">
                      {entry.title}
                    </h4>

                    {/* Context, only where a post needs it */}
                    {entry.note && (
                      <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mb-2">
                        {entry.note}
                      </p>
                    )}

                    {/* The post as it was written in 2017 */}
                    <p className="text-zinc-300 text-base leading-relaxed max-w-2xl">
                      {entry.caption}
                    </p>

                    {/* Partner links */}
                    {entry.partners && entry.partners.length > 0 && (
                      <div className="max-w-2xl mt-4 flex flex-wrap gap-3">
                        {entry.partners.map((partner) => (
                          <a
                            key={partner.url}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center min-h-8 text-sm text-amber-300 border border-zinc-700 rounded-sm px-3 py-1.5 hover:text-amber-200 hover:border-zinc-500 transition-colors"
                          >
                            {partner.name}
                          </a>
                        ))}
                      </div>
                    )}

                    <Photos photos={entry.photos} group={day.iso} className="mt-5" />
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
