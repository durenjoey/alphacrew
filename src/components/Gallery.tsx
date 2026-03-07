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
    <section className="py-24 md:py-32 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-[10px] text-zinc-600 uppercase tracking-[0.4em] mb-16">
          From the Field
        </div>

        <div className="space-y-6">
          {galleryEntries.map((entry, i) => {
            const isOpen = expanded[i] ?? false;
            const photoCount = entry.photos.length;

            return (
              <div key={i} className="border border-zinc-800/40 rounded-sm overflow-hidden">
                {/* Header — always visible, clickable */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-zinc-900/50 transition-colors"
                >
                  <div className="flex items-center gap-6 min-w-0">
                    <div className="text-[10px] text-zinc-700 uppercase tracking-[0.2em] whitespace-nowrap">
                      {entry.date}
                    </div>
                    <div className="text-sm text-zinc-400 font-medium truncate">
                      {entry.title}
                    </div>
                    <div className="text-[10px] text-zinc-700 whitespace-nowrap">
                      {photoCount} {photoCount === 1 ? "photo" : "photos"}
                    </div>
                  </div>
                  <div
                    className={`text-zinc-600 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
                  <div className="px-6 pb-6">
                    {/* Narrative */}
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl mb-4">
                      {entry.narrative}
                    </p>

                    {/* Original FB post as source */}
                    <div className="max-w-2xl mb-6 pl-4 border-l border-zinc-800/60">
                      <p className="text-zinc-600 text-xs leading-relaxed italic">
                        &ldquo;{entry.caption}&rdquo;
                      </p>
                      <div className="text-[9px] text-zinc-700 uppercase tracking-[0.2em] mt-1">
                        — Original Facebook post
                      </div>
                    </div>

                    {/* Photo grid */}
                    {photoCount === 1 ? (
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
