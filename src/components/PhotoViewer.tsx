"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type Shot = {
  src: string;
  alt: string;
  // the file's real size, read from the thumbnail, so the viewer holds the photo's place while it loads
  width: number;
  height: number;
  el: HTMLAnchorElement;
};

// The only script on the page. A tap on any photo link opens the full file in a native dialog.
// Arrow keys and swipes move through the photos in the same group, Esc closes it,
// and focus goes back to the thumbnail of the photo that was showing.
export default function PhotoViewer() {
  const dialog = useRef<HTMLDialogElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const [shots, setShots] = useState<Shot[]>([]);
  const [index, setIndex] = useState(0);

  const step = useCallback(
    (by: number) => {
      setIndex((i) => (shots.length ? (i + by + shots.length) % shots.length : 0));
    },
    [shots.length]
  );

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // leave modified clicks alone so a photo can still be opened in a new tab
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[data-photo]");
      const box = dialog.current;
      // a browser without dialog support keeps the plain link, which opens the file
      if (!link || !box || typeof box.showModal !== "function") return;
      e.preventDefault();
      const group = link.dataset.group ?? "";
      const links = Array.from(
        document.querySelectorAll<HTMLAnchorElement>("a[data-photo]")
      ).filter((a) => (a.dataset.group ?? "") === group);
      setShots(
        links.map((el) => {
          const img = el.querySelector("img");
          return {
            src: el.href,
            alt: img?.alt ?? "",
            width: Number(img?.getAttribute("width")) || 0,
            height: Number(img?.getAttribute("height")) || 0,
            el,
          };
        })
      );
      setIndex(Math.max(0, links.indexOf(link)));
      box.showModal();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const shot = shots[index];
  const many = shots.length > 1;

  // The photo's final box, known before the file arrives: as wide as the screen, the file or the
  // available height allows, whichever is smallest. It is never larger than the file.
  const fit: CSSProperties | undefined =
    shot && shot.width && shot.height
      ? {
          width: `min(calc(100vw - 1.5rem), ${shot.width}px, calc((100dvh - 11rem) * ${(
            shot.width / shot.height
          ).toFixed(4)}))`,
          aspectRatio: `${shot.width} / ${shot.height}`,
        }
      : undefined;

  return (
    <dialog
      ref={dialog}
      className="photo-viewer"
      aria-label="Photo"
      onClose={() => {
        shot?.el.focus();
        setShots([]);
      }}
      onClick={(e) => {
        // a click on the dark area around the photo closes the viewer
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      onKeyDown={(e) => {
        if (!many) return;
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
      onTouchStart={(e) => {
        // one finger only, so a pinch never turns the page
        touch.current =
          e.touches.length === 1
            ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
            : null;
      }}
      onTouchEnd={(e) => {
        const from = touch.current;
        touch.current = null;
        if (!from || !many) return;
        const dx = e.changedTouches[0].clientX - from.x;
        const dy = e.changedTouches[0].clientY - from.y;
        // a sideways swipe, not a diagonal drag
        if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
      }}
    >
      {shot && (
        <figure className="photo-viewer-figure">
          {/* the original file at its real size: never enlarged, only fitted to the screen.
              The caption below carries the description, so the image itself has no alt text. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img key={shot.src} src={shot.src} alt="" style={fit} />
          <figcaption aria-live="polite">
            {many && (
              <span className="photo-viewer-count">
                {index + 1} of {shots.length}
              </span>
            )}
            {shot.alt}
          </figcaption>
        </figure>
      )}

      <button
        type="button"
        className="photo-viewer-button photo-viewer-close"
        aria-label="Close photo"
        onClick={() => dialog.current?.close()}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      </button>

      {many && (
        <>
          <button
            type="button"
            className="photo-viewer-button photo-viewer-prev"
            aria-label="Previous photo"
            onClick={() => step(-1)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M12.5 4L6.5 10L12.5 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className="photo-viewer-button photo-viewer-next"
            aria-label="Next photo"
            onClick={() => step(1)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M7.5 4L13.5 10L7.5 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}
    </dialog>
  );
}
