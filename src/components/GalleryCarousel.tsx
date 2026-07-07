"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const images = [
  { src: "/images/gallery/1.jpeg", alt: "Gallery photo 1" },
  { src: "/images/gallery/2.jpeg", alt: "Gallery photo 2" },
  { src: "/images/gallery/3.jpeg", alt: "Gallery photo 3" },
  { src: "/images/gallery/4.jpeg", alt: "Gallery photo 4" },
  { src: "/images/gallery/5.jpeg", alt: "Gallery photo 5" },
  { src: "/images/gallery/6.jpeg", alt: "Gallery photo 6" },
  { src: "/images/puppies/sapphire.jpg", alt: "Sapphire the puppy" },
  { src: "/images/puppies/garnet.jpg", alt: "Garnet the puppy" },
  { src: "/images/puppies/diamond.jpg", alt: "Diamond the puppy" },
];

const AUTO_DELAY = 5000;
const PAUSE_AFTER_INTERACT = 10000;

export default function GalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer = useCallback((delay = AUTO_DELAY) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const tick = () => {
      setCurrent((i) => (i + 1) % images.length);
      timerRef.current = setTimeout(tick, AUTO_DELAY);
    };
    timerRef.current = setTimeout(tick, delay);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [startTimer]);

  const go = useCallback((index: number) => {
    setCurrent(index);
    startTimer(PAUSE_AFTER_INTERACT);
  }, [startTimer]);

  const prev = () => go((current - 1 + images.length) % images.length);
  const next = () => go((current + 1) % images.length);

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.2)]">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Sliding track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={img.src} className="relative aspect-[4/3] w-full flex-none">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-contain"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow backdrop-blur-sm transition hover:bg-white"
          >
            <svg className="h-5 w-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow backdrop-blur-sm transition hover:bg-white"
          >
            <svg className="h-5 w-5 text-brand" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === current ? "scale-125 bg-brand" : "bg-brand/30 hover:bg-brand/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
