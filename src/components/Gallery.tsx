"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryEntries } from "@/data/gallery";

export default function Gallery() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({
    // Most recent entry open by default
    [galleryEntries.length - 1]: true,
  });

  const toggle = (i: number) =>
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section className="py-20 md:py-28 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100 mb-4">
          From the field
        </h2>
        <p className="text-zinc-300 text-base leading-relaxed max-w-2xl mb-10">
          These are our posts as we wrote them on Facebook in 2017.
        </p>

        <div className="space-y-4">
          {galleryEntries.map((entry, i) => {
            const isOpen = expanded[i] ?? false;
            const photoCount = entry.photos.length;

            return (
              <div
                key={i}
                className="border border-zinc-800/60 rounded-sm overflow-hidden"
              >
                {/* Header: always visible, clickable */}
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-4 sm:px-6 py-4 flex items-start justify-between gap-4 hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="min-w-0 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                    <div className="text-xs text-zinc-400 uppercase tracking-[0.08em] sm:w-40 sm:flex-shrink-0">
                      {entry.date}
                    </div>
                    <div className="text-base text-zinc-100 font-medium">
                      {entry.title}
                    </div>
                    {photoCount > 0 && (
                      <div className="text-xs text-zinc-400 sm:whitespace-nowrap">
                        {photoCount} {photoCount === 1 ? "photo" : "photos"}
                      </div>
                    )}
                  </div>
                  <div
                    className={`text-zinc-400 transition-transform duration-300 flex-shrink-0 mt-1 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* Expandable content */}
                {isOpen && (
                  <div className="px-4 sm:px-6 pb-6">
                    {/* Context, only where a post needs it */}
                    {entry.note && (
                      <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mb-2">
                        {entry.note}
                      </p>
                    )}

                    {/* The post as it was written in 2017 */}
                    <p className="text-zinc-300 text-base leading-relaxed max-w-2xl mb-6">
                      {entry.caption}
                    </p>

                    {/* Partner links */}
                    {entry.partners && entry.partners.length > 0 && (
                      <div className="max-w-2xl mb-6 flex flex-wrap gap-3">
                        {entry.partners.map((partner, k) => (
                          <a
                            key={k}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-amber-300 uppercase tracking-[0.08em] border border-zinc-700 rounded-sm px-3 py-1.5 hover:text-amber-200 hover:border-zinc-500 transition-colors"
                          >
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {partner.name}
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Photo grid */}
                    {photoCount === 0 ? null : photoCount === 1 ? (
                      <div className="max-w-2xl">
                        <Image
                          src={`/assets/photos/${entry.photos[0].src}`}
                          alt={entry.photos[0].alt}
                          width={800}
                          height={600}
                          className="w-full object-cover rounded-sm"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
                        {entry.photos.map((photo, j) => (
                          <div
                            key={j}
                            className={`overflow-hidden ${
                              j === 0 ? "md:col-span-2 md:row-span-2" : ""
                            }`}
                          >
                            <Image
                              src={`/assets/photos/${photo.src}`}
                              alt={photo.alt}
                              width={j === 0 ? 800 : 400}
                              height={j === 0 ? 600 : 300}
                              className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
