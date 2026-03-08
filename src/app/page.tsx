import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative text-center px-6 max-w-4xl mx-auto">
          {/* Small marker */}
          <div className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] font-light mb-12">
            September 2017 &mdash; March 2018
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-6">
            ALPHA
            <br />
            CREW
          </h1>

          {/* Subtitle */}
          <div className="text-[11px] text-zinc-500 uppercase tracking-[0.3em] mb-16">
            Catastrophe Relief Expeditionary Workforce
          </div>

          {/* The line */}
          <div className="max-w-xl mx-auto">
            <div className="w-12 h-px bg-amber-700/60 mx-auto mb-8" />
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
              The story of the volunteers who braved the destruction of
              Hurricane Maria to deliver 100,000 lbs of life-sustaining
              supplies to Puerto Rico.
            </p>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-zinc-700 mx-auto" />
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-12">
            The Story
          </div>

          <div className="space-y-8 text-zinc-400 leading-relaxed text-lg">
            <p>
              On September 20, 2017, Hurricane Maria made landfall in Puerto
              Rico as a Category 5 hurricane. The island lost power.
              Communications went dark. Roads were destroyed. Supply chains
              collapsed.
            </p>

            <p>
              Within days, the Duren family organized Alpha CREW &mdash; a
              volunteer-driven operation to collect and deliver life-sustaining
              supplies to the island. Working with military and civilian
              communities across Florida, the team collected water, food,
              generators, batteries, medical supplies, and clothing. Active duty
              Air Force members became key partners, providing access to C-130
              aircraft to airlift cargo from Savannah, Georgia to San Juan.
            </p>

            <p className="text-zinc-300">
              In a single two-day stretch, Alpha CREW shipped 65,000 lbs of
              supplies. By the end of the operation, total aid delivered exceeded
              100,000 lbs.
            </p>

            <p>
              On the ground in Puerto Rico, the operation went far beyond
              logistics. Crew members delivered medical supplies to the
              children&apos;s hospital in Bayam&oacute;n, ferried generators to
              Vieques by boat, ran welfare checks on isolated seniors,
              distributed hot meals door to door with Fundaci&oacute;n El Plato
              Caliente, evacuated animals from a flooded shelter with the Humane
              Society, and drove convoys of food into the mountains of Utuado
              and Jayuya.
            </p>

            <p>
              Seven weeks later, the volunteers ran out of vacation time. Puerto
              Rico was slowly coming back online. The operation wound down
              quietly &mdash; the way most real relief work ends.
            </p>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 border-y border-zinc-800/60">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "100K+", unit: "lbs", label: "Supplies delivered" },
              { value: "65K", unit: "lbs", label: "In 48 hours" },
              { value: "7", unit: "weeks", label: "Sep 25 — Nov 10" },
              { value: "20+", unit: "", label: "Partner organizations" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  {stat.value}
                  {stat.unit && (
                    <span className="text-lg text-zinc-600 font-normal ml-1">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <div className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Operation */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Stateside Chain */}
            <div>
              <div className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-12">
                Stateside &mdash; Florida to Puerto Rico
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
                On the Ground &mdash; Puerto Rico
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

      {/* From the Field — Gallery */}
      <Gallery />

      {/* Press */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-12">
            Press
          </div>

          <a
            href="https://www.afrc.af.mil/News/Article-Display/Article/1347866/citizen-airmen-rally-to-help-puerto-rico/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="border border-zinc-800/60 rounded-sm p-8 hover:border-zinc-700 transition-colors">
              <div className="text-[10px] text-zinc-600 uppercase tracking-[0.2em] mb-3">
                U.S. Air Force Reserve Command
              </div>
              <div className="text-white text-lg font-semibold group-hover:text-amber-200/80 transition-colors mb-2">
                Citizen Airmen rally to help Puerto Rico
              </div>
              <div className="text-zinc-600 text-sm">
                Official AFRC coverage of Alpha CREW&apos;s hurricane relief
                operation, including coordination with the Puerto Rico National
                Guard and military airlift logistics.
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
            Seven weeks. 100,000 lbs of supplies. Airlifted by C-130,
            ferried to Vieques, hand-delivered to hospitals, shelters, and
            front porches. Then the volunteers went home, the island came
            back online, and the operation quietly ended.
          </p>
          <p className="text-lg text-zinc-500 font-light leading-relaxed mt-6">
            This site exists so it isn&apos;t forgotten.
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
            Alpha CREW was founded in 2017 by the Duren family and fellow
            service members in response to Hurricane Maria. The organization
            is no longer actively operating.
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
