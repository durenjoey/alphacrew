import Gallery from "@/components/Gallery";
import HeroCollage from "@/components/HeroCollage";
import PhotoViewer from "@/components/PhotoViewer";

const h2 =
  "text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100 mb-8";
const h3 =
  "text-sm font-semibold uppercase tracking-[0.08em] text-zinc-400 mb-4";

const stateside = [
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
];

const island = [
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
];

function Steps({ items }: { items: typeof stateside }) {
  return (
    <ol>
      {items.map((item) => (
        <li
          key={item.step}
          className="flex gap-6 py-5 border-b border-zinc-800/60 last:border-0"
        >
          <div className="text-zinc-400 font-mono text-sm font-bold w-8 flex-shrink-0 pt-0.5">
            {item.step}
          </div>
          <div>
            <div className="text-zinc-100 font-semibold mb-1">{item.title}</div>
            <div className="text-zinc-300 text-base leading-relaxed">
              {item.detail}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300">
      <a
        href="#main"
        className="absolute left-4 top-4 z-50 -translate-y-[300%] focus:translate-y-0 rounded-sm bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-900 transition-transform"
      >
        Skip to the story
      </a>

      <header>
        <HeroCollage />
      </header>

      <main id="main">
        {/* The story */}
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className={h2}>The story</h2>

            <div className="space-y-6 text-zinc-300 leading-relaxed text-lg">
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

        {/* The operation */}
        <section className="py-20 md:py-28 border-t border-zinc-800/60">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className={h2}>The operation</h2>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h3 className={h3}>Stateside, Florida to Puerto Rico</h3>
                <Steps items={stateside} />
              </div>
              <div>
                <h3 className={h3}>On the ground in Puerto Rico</h3>
                <Steps items={island} />
              </div>
            </div>
          </div>
        </section>

        {/* Press */}
        <section className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className={h2}>Press</h2>

            <a
              href="https://www.afrc.af.mil/News/Article-Display/Article/1354296/reserve-citizen-airman-aids-hurricane-maria-victims-in-puerto-rico/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="border border-zinc-800/60 rounded-sm p-6 md:p-8 hover:border-zinc-600 transition-colors">
                <div className="text-xs text-zinc-400 uppercase tracking-[0.08em] mb-3">
                  Air Force Reserve Command, October 25, 2017
                </div>
                <div className="text-amber-300 text-lg font-semibold group-hover:underline underline-offset-4 mb-2">
                  Reserve Citizen Airman aids Hurricane Maria victims in Puerto
                  Rico
                </div>
                <div className="text-zinc-300 text-base leading-relaxed">
                  The article follows Master Sgt. Gerardo Ramos, who escorted
                  our shipment to San Juan on a National Guard C-130 out of
                  Savannah, Georgia.
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* The log */}
        <Gallery />

        {/* Closing */}
        <section className="py-20 md:py-28 border-t border-zinc-800/60">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
              Alpha CREW is no longer operating. This site exists so the work
              and the people who did it are not forgotten.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-16 border-t border-zinc-800/60 bg-[#080808]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-zinc-100 font-bold text-lg tracking-tight mb-1">
            ALPHA CREW
          </div>
          <div className="text-xs text-zinc-400 uppercase tracking-[0.08em] mb-6">
            Catastrophe Relief Expeditionary Workforce
          </div>

          <p className="text-zinc-300 text-base leading-relaxed max-w-lg mx-auto mb-4">
            Joey Duren founded Alpha CREW in 2017 and led it. His father ran
            shipping.
          </p>

          <p>
            <a
              href="mailto:durenjoey@gmail.com"
              className="inline-block py-1 text-base text-amber-300 underline underline-offset-4 hover:text-amber-200 transition-colors"
            >
              durenjoey@gmail.com
            </a>
          </p>

          <div className="text-xs text-zinc-400 mt-6">
            &copy; 2017&ndash;2026 Alpha CREW
          </div>
        </div>
      </footer>

      <PhotoViewer />
    </div>
  );
}
