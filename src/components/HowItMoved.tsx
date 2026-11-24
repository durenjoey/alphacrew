import Image from "next/image";
import { howItMoved } from "@/data/missions";

// The supply chain in six photos, in order, with one line under each. No text sits on the photos.
export default function HowItMoved() {
  return (
    <section
      id="how-it-moved"
      className="py-20 md:py-28 border-t border-zinc-800/60"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100 mb-10">
          How it moved
        </h2>

        <ol className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 items-start">
          {howItMoved.map((step) => (
            <li key={step.photo.src}>
              <figure>
                <a
                  href={`/assets/photos/${step.photo.src}`}
                  data-photo=""
                  data-group="how-it-moved"
                  className="block overflow-hidden rounded-sm bg-zinc-900"
                  style={{ maxWidth: `${step.photo.width}px` }}
                >
                  <Image
                    src={`/assets/photos/${step.photo.src}`}
                    alt={step.photo.alt}
                    width={step.photo.width}
                    height={step.photo.height}
                    sizes="(max-width: 768px) 46vw, 320px"
                    quality={75}
                    className="block w-full h-auto"
                  />
                </a>
                <figcaption className="text-zinc-300 text-base leading-snug mt-3">
                  {step.line}
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
