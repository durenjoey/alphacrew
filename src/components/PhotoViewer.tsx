"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Shot = { src: string; alt: string; el: HTMLAnchorElement };

// The only script on the page. A tap on any photo link opens the full file in a native dialog.
// Arrow keys and swipes move through the photos in the same group, Esc closes it,
// and focus goes back to the thumbnail of the photo that was showing.
export default function PhotoViewer() {
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
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
      if (!link || !dialog.current) return;
      e.preventDefault();
      const group = link.dataset.group ?? "";
      const links = Array.from(
        document.querySelectorAll<HTMLAnchorElement>("a[data-photo]")
      ).filter((a) => (a.dataset.group ?? "") === group);
      setShots(
        links.map((el) => ({
          src: el.href,
          alt: el.querySelector("img")?.alt ?? "",
          el,
        }))
      );
      setIndex(Math.max(0, links.indexOf(link)));
      dialog.current.showModal();
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const shot = shots[index];
  const many = shots.length > 1;

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
        touchX.current = e.changedTouches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null || !many) return;
        const moved = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(moved) > 48) step(moved < 0 ? 1 : -1);
      }}
    >
      {shot && (
        <figure className="photo-viewer-figure">
          {/* the original file at its real size: never enlarged, only fitted to the screen */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img key={shot.src} src={shot.src} alt={shot.alt} />
          <figcaption>
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
