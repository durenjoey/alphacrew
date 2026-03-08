import Image from "next/image";

const HERO_PHOTOS = [
  {
    src: "/assets/photos/vieques-ferry-crossing.jpg",
    alt: "Alpha CREW truck loaded with pallets on the Vieques ferry",
    tx: "-8vw",
    ty: "-6vh",
    objectPosition: "center 40%",
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
      {/* Photo Grid — 2x3 on mobile, 3x3 on desktop */}
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
              priority
              className="object-cover"
              style={{ objectPosition: photo.objectPosition }}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/[0.55] md:bg-black/[0.58]" />

      {/* Radial gradient — extra darkness behind title */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(0,0,0,0.4) 0%, transparent 100%)",
        }}
      />

      {/* Vignette — darker edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
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

          <div className="text-[11px] text-zinc-400 uppercase tracking-[0.3em] mb-16">
            Catastrophe Relief Expeditionary Workforce
          </div>

          <div className="max-w-xl mx-auto">
            <div className="w-12 h-px bg-amber-700/60 mx-auto mb-8" />
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light drop-shadow-lg">
              The story of the volunteers who braved the destruction of
              Hurricane Maria to deliver 100,000 lbs of life-sustaining
              supplies to Puerto Rico.
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-zinc-600 mx-auto" />
        </div>
      </div>
    </section>
  );
}
