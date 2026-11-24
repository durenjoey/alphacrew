import Gallery from "@/components/Gallery";
import HeroCollage from "@/components/HeroCollage";
import HowItMoved from "@/components/HowItMoved";
import Missions from "@/components/Missions";
import PhotoViewer from "@/components/PhotoViewer";
import Who from "@/components/Who";
import { founder } from "@/data/receipts";

const h2 =
  "text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100 mb-8";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300">
      <a
        href="#main"
        className="absolute left-4 top-4 z-50 -translate-y-[300%] focus:translate-y-0 rounded-sm border border-zinc-600 bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-100 transition-transform"
      >
        Skip to the story
      </a>

      <header>
        <HeroCollage />
      </header>

      <main id="main">
        {/* The story */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className={h2}>The story</h2>

            <div className="space-y-6 text-zinc-300 leading-relaxed text-lg max-w-2xl">
              <p>
                Hurricane Maria hit Puerto Rico on September 20, 2017. Roads
                were destroyed or flooded, and first responders could not reach
                the remote parts of the island.
              </p>

              <p>
                Five days later we laid out the gear our crew would take to
                Puerto Rico. Airmen at Patrick Air Force Base, churches,
                businesses and families sent what they had. We labeled every
                item, logged it on a manifest and trucked the loads to
                Savannah, where National Guard C-130s flew them to San Juan.
              </p>

              <p>
                On the island the crew took it the rest of the way: generators
                to the hospital on Vieques by boat, medical supplies to the
                children&apos;s hospital in Bayam&oacute;n, food into the
                mountains of Utuado and Jayuya, and hot meals to people who
                were bedridden or without means.
              </p>
            </div>
          </div>
        </section>

        {/* Six missions */}
        <Missions />

        {/* How it moved */}
        <HowItMoved />

        {/* Who and receipts */}
        <Who />

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
            Joey Duren founded Alpha CREW and led it. His father ran shipping.
          </p>

          <p className="flex flex-wrap justify-center gap-x-6 gap-y-1">
            <a
              href={founder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-1 text-base text-amber-300 underline underline-offset-4 hover:text-amber-200 transition-colors"
            >
              {founder.linkText}
            </a>
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
