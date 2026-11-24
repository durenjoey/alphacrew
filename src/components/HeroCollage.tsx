import Image from "next/image";

const HERO_PHOTOS = [
  {
    // the frame cut from the phone screenshot, without the phone's bars
    src: "/assets/photos/vieques-ferry-crossing-frame.jpg",
    alt: "Alpha CREW truck loaded with pallets on the Vieques ferry",
    tx: "-8vw",
    ty: "-6vh",
    objectPosition: "center 22%",
    hideMobile: false,
  },
  {
    src: "/assets/photos/333rd-warehouse-overhead.jpg",
    alt: "Overhead view of warehouse packed with supply pallets",
    tx: "3vw",
    ty: "-10vh",
    objectPosition: "center 30%",
    hideMobile: false,
  },
  {
    src: "/assets/photos/vieques-trucks-loaded-staging.jpg",
    alt: "Alpha CREW truck convoy loaded with supply pallets at staging area",
    tx: "12vw",
    ty: "-4vh",
    objectPosition: "center 40%",
    hideMobile: true,
  },
  {
    src: "/assets/photos/vieques-truck-handout-alphacrew.jpg",
    alt: "Line of residents receiving supplies from Alpha CREW truck in Vieques",
    tx: "-10vw",
    ty: "2vh",
    objectPosition: "center 30%",
    hideMobile: false,
  },
  {
    src: "/assets/photos/vieques-c130-loading-tarmac.jpg",
    alt: "Airmen loading pallets into C-130 on the tarmac",
    tx: "0vw",
    ty: "8vh",
    objectPosition: "center 40%",
    hideMobile: false,
  },
  {
    src: "/assets/photos/hotmeals-elderly-delivery.jpg",
    alt: "Volunteer handing food to elderly resident at home gate",
    tx: "8vw",
    ty: "5vh",
    objectPosition: "center 35%",
    hideMobile: false,
  },
  {
    src: "/assets/photos/utuado-climbing-pr-jeep-crew.jpg",
    alt: "Two crew members with Alpha CREW Jeep in Utuado mountains",
    tx: "-6vw",
    ty: "10vh",
    objectPosition: "center 45%",
    hideMobile: true,
  },
  {
    src: "/assets/photos/65k-flatbed-forklift-loading.jpg",
    alt: "Forklift loading pallets onto King Transport flatbed truck",
    tx: "4vw",
    ty: "12vh",
    objectPosition: "center 40%",
    hideMobile: true,
  },
  {
    src: "/assets/photos/vieques-c130-in-flight.jpg",
    alt: "C-130 cargo aircraft in flight over Puerto Rico",
    tx: "10vw",
    ty: "6vh",
    objectPosition: "center 45%",
    hideMobile: false,
  },
];

const STAGGER_MS = 120;

export default function HeroCollage() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Photo Grid: 2x3 on mobile, 3x3 on desktop */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-3 gap-0.5">
        {HERO_PHOTOS.map((photo, i) => (
          <div
            key={i}
            className={`relative overflow-hidden hero-photo-cell ${
              photo.hideMobile ? "hidden md:block" : ""
            }`}
            style={
              {
                "--scatter-x": photo.tx,
                "--scatter-y": photo.ty,
                animationDelay: `${i * STAGGER_MS}ms`,
              } as React.CSSProperties
            }
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              quality={75}
              priority={i < 2}
              className="object-cover"
              style={{ objectPosition: photo.objectPosition }}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/[0.55] md:bg-black/[0.58]" />

      {/* Radial gradient: extra darkness behind title */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(0,0,0,0.4) 0%, transparent 100%)",
        }}
      />

      {/* Vignette: darker edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Text content */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-6 drop-shadow-2xl">
            ALPHA
            <br />
            CREW
          </h1>

          <div className="text-xs md:text-sm text-zinc-100 uppercase tracking-[0.08em] mb-16">
            Catastrophe Relief Expeditionary Workforce
          </div>

          <div className="max-w-xl mx-auto">
            <p className="text-lg md:text-xl text-zinc-100 leading-relaxed font-light drop-shadow-lg">
              After Hurricane Maria we moved 200,000+ lbs of water, food,
              medicine and generators from Florida to Puerto Rico by truck,
              C-130 and boat.
            </p>
            <p className="text-base text-zinc-100 leading-relaxed font-light drop-shadow-lg mt-4">
              Joey Duren founded Alpha CREW and led it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
