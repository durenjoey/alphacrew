import Image from "next/image";
import type { CSSProperties } from "react";
import type { GalleryPhoto } from "@/data/gallery";

// How wide a photo usually shows, so the browser asks for a copy of about the right size.
const SIZES: Record<"one" | "two" | "many", string> = {
  one: "(max-width: 768px) 92vw, 760px",
  two: "(max-width: 768px) 46vw, 420px",
  many: "(max-width: 768px) 46vw, 300px",
};

// A row of photos, each at its own shape. Nothing is cropped and nothing shows larger than the file really is.
// Every photo is a link to the full file, so it still opens without scripts. PhotoViewer opens it in place.
export default function Photos({
  photos,
  group,
  className = "",
}: {
  photos: GalleryPhoto[];
  // photos that share a group can be paged through in the viewer
  group: string;
  className?: string;
}) {
  if (photos.length === 0) return null;
  const count = photos.length === 1 ? "one" : photos.length === 2 ? "two" : "many";

  return (
    <div className={`photo-row ${className}`} data-count={count}>
      {photos.map((photo) => (
        <a
          key={photo.src}
          href={`/assets/photos/${photo.src}`}
          data-photo=""
          data-group={group}
          className="photo-item"
          style={
            {
              "--ratio": (photo.width / photo.height).toFixed(4),
              "--natural": `${photo.width}px`,
            } as CSSProperties
          }
        >
          <Image
            src={`/assets/photos/${photo.src}`}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={SIZES[count]}
            quality={75}
          />
        </a>
      ))}
    </div>
  );
}
