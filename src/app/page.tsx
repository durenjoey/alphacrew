import Gallery from "@/components/Gallery";
import HeroCollage from "@/components/HeroCollage";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300">
      {/* Hero */}
      <HeroCollage />

      {/* The Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-12">
            The Story
          </div>

          <div className="space-y-8 text-zinc-400 leading-relaxed text-lg">
            <p>
              Hurricane Maria hit Puerto Rico on September 20, 2017. The
              island lost power and communications, roads washed out, and
              supplies stopped moving.
            </p>

            <p>
              Five days later we laid our gear out on a table in Florida and
              started collecting. Airmen at Patrick Air Force Base, churches,
              businesses and families sent what they had. We labeled every
              item, logged it on a manifest, trucked the loads to Savannah,
              and flew them to San Juan on National Guard C-130s.
            </p>

            <p>
              On the island the crew took it the rest of the way: generators
              to the hospital on Vieques by ferry, medical supplies to the
              children&apos;s hospital in Bayam&oacute;n, food into the
              mountains of Utuado and Jayuya, and hot meals to people who
              could not leave home.
            </p>
          </div>
        </div>
      </section>

      {/* The Operation */}
      <section className="py-24 md:py-32 border-t border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Stateside Chain */}
            <div>
              <div className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-12">
                Stateside, Florida to Puerto Rico
              </div>
              <div className="space-y-0">
                {[
                  {
                    step: "01",
                    title: "Collection",
                    detail:
                      "Military bases, churches, and civilian communities across Florida donate supplies",
                  },
                  {
                    step: "02",
                    title: "Processing",
                    detail:
                      "Volunteers sort, label, manifest, and palletize every item in the warehouse",
                  },
                  {
                    step: "03",
                    title: "Ground Transport",
                    detail:
                      "Semi trucks move palletized cargo from Florida to Savannah, Georgia",
                  },
                  {
                    step: "04",
                    title: "Military Airlift",
                    detail:
                      "National Guard C-130 aircraft fly supplies from Savannah to San Juan",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-6 py-6 border-b border-zinc-800/40 last:border-0"
                  >
                    <div className="text-amber-700/50 font-mono text-sm font-bold w-8 flex-shrink-0 pt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        {item.title}
                      </div>
                      <div className="text-zinc-500 text-sm leading-relaxed">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PR-Side Chain */}
            <div>
              <div className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-12">
                On the ground in Puerto Rico
              </div>
              <div className="space-y-0">
                {[
                  {
                    step: "05",
                    title: "Airport Pickup",
                    detail:
                      "Crew receives cargo at LMM Airport in San Juan and loads CREW trucks",
                  },
                  {
                    step: "06",
                    title: "Island Transport",
                    detail:
                      "Trucks and ferries move supplies to hospitals, shelters, and outer islands like Vieques",
                  },
                  {
                    step: "07",
                    title: "Community Distribution",
                    detail:
                      "Convoys drive into barrios, mountain towns, and neighborhoods to hand-deliver supplies",
                  },
                  {
                    step: "08",
                    title: "Direct Care",
                    detail:
                      "Welfare checks, hot meals to homebound residents, medical outreach, and animal rescue",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-6 py-6 border-b border-zinc-800/40 last:border-0"
                  >
                    <div className="text-amber-700/50 font-mono text-sm font-bold w-8 flex-shrink-0 pt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">
                        {item.title}
                      </div>
                      <div className="text-zinc-500 text-sm leading-relaxed">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The log */}
      <Gallery />

      {/* Press */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-12">
            Press
          </div>

          <a
            href="https://www.afrc.af.mil/News/Article-Display/Article/1354296/reserve-citizen-airman-aids-hurricane-maria-victims-in-puerto-rico/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="border border-zinc-800/60 rounded-sm p-8 hover:border-zinc-700 transition-colors">
              <div className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] mb-3">
                Air Force Reserve Command, October 25, 2017
              </div>
              <div className="text-white text-lg font-semibold group-hover:text-amber-200/80 transition-colors mb-2">
                Reserve Citizen Airman aids Hurricane Maria victims in Puerto
                Rico
              </div>
              <div className="text-zinc-600 text-sm">
                The article follows Master Sgt. Gerardo Ramos, who escorted
                our shipment to San Juan on a National Guard C-130 out of
                Savannah, Georgia.
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* The Mission */}
      <section className="py-24 md:py-32 border-t border-zinc-800/40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-px bg-amber-700/60 mx-auto mb-12" />
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            Alpha CREW is no longer operating. This site exists so the work
            and the people who did it are not forgotten.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-zinc-800/40 bg-[#080808]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-white font-bold text-lg tracking-tight mb-2">
            ALPHA CREW
          </div>
          <div className="text-[10px] text-zinc-700 uppercase tracking-[0.2em] mb-8">
            Catastrophe Relief Expeditionary Workforce
          </div>

          <p className="text-zinc-600 text-sm leading-relaxed max-w-lg mx-auto mb-8">
            Joey Duren founded Alpha CREW in 2017 and led it. His father ran
            shipping.
          </p>

          <div className="text-[10px] text-zinc-800 tracking-wider mb-3">
            &copy; 2017&ndash;2026 Alpha CREW
          </div>
          <a
            href="mailto:durenjoey@gmail.com"
            className="text-[10px] text-zinc-700 hover:text-zinc-500 transition-colors tracking-wider"
          >
            durenjoey@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
