import Photos from "@/components/Photos";
import { missions, missionFirstDay, missionPhotos } from "@/data/missions";
import { monthDay, utc } from "@/data/days";

// The six missions: a title, a few plain sentences, a few photos, and a link to that day in the log.
export default function Missions() {
  return (
    <section
      id="missions"
      className="py-20 md:py-28 border-t border-zinc-800/60"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100 mb-10">
          Six missions
        </h2>

        <div className="space-y-16">
          {missions.map((mission) => {
            const firstDay = missionFirstDay(mission);
            return (
              <article key={mission.id}>
                <h3 className="text-xl md:text-2xl font-semibold text-zinc-100">
                  {mission.title}
                </h3>
                <p className="text-sm uppercase tracking-[0.08em] text-zinc-400 mt-1 mb-4">
                  {mission.when}
                </p>
                <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl">
                  {mission.text}
                </p>

                <Photos
                  photos={missionPhotos(mission)}
                  group={`mission-${mission.id}`}
                  className="mt-6"
                />

                {mission.photoNote && (
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mt-3">
                    {mission.photoNote}
                  </p>
                )}

                <p className="mt-4">
                  <a
                    href={`#${firstDay}`}
                    className="inline-block py-1 text-base text-amber-300 underline underline-offset-4 hover:text-amber-200 transition-colors"
                  >
                    Read the posts, starting {monthDay.format(utc(firstDay))}
                  </a>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
