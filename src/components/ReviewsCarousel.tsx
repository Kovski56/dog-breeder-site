"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Review = {
  name: string;
  initial: string;
  color: string;
  date: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Sarah M.",
    initial: "S",
    color: "#b26a49",
    date: "2 weeks ago",
    text: "I honestly can't say enough good things. We named her Willow and she is the calmest, sweetest puppy — she just flops down next to the kids and lets them love on her. Michelle sent us little photo updates every week and we looked forward to them so much. Would do it all over again in a heartbeat.",
  },
  {
    name: "James & Rebecca T.",
    initial: "J",
    color: "#556b2f",
    date: "a month ago",
    text: "We were super nervous first-time puppy owners and Michelle walked us through every step. Our little guy came home healthy, already using the pad most of the time, and honestly not scared of anything. You can just tell these pups are raised inside a home and not stuck in a kennel somewhere.",
  },
  {
    name: "Danielle R.",
    initial: "D",
    color: "#9aa34f",
    date: "a month ago",
    text: "I have never had a dog this easy. He wags his tail at literally everyone, and he is so gentle with my mom who is 82 and a little unsteady on her feet — it's like he knows to be careful around her. Couldn't have asked for a better match for our family.",
  },
  {
    name: "Kevin P.",
    initial: "K",
    color: "#8b7d6b",
    date: "2 months ago",
    text: "Michelle answered about a million questions from me and never once made me feel like I was bugging her. It's been a couple months now and she still checks in to see how our girl is doing. That kind of follow-up is honestly so rare these days.",
  },
  {
    name: "Amanda & Chris L.",
    initial: "A",
    color: "#b26a49",
    date: "3 months ago",
    text: "We went with an Australian Labradoodle mostly because my husband has allergies, and that part has been amazing — zero sneezing. But the biggest surprise was her personality. She's patient, crazy smart, and had sit and down figured out in like two days!",
  },
  {
    name: "Monica F.",
    initial: "M",
    color: "#556b2f",
    date: "4 months ago",
    text: "Yes there's a waitlist, and yes it is 100% worth it. Our puppy is confident, a total goofball, and clearly really well bred. All the health testing gave us real peace of mind, especially after a rough experience with a different breeder a few years back.",
  },
  {
    name: "Robert H.",
    initial: "R",
    color: "#9aa34f",
    date: "5 months ago",
    text: "Best thing we've done as a family, hands down. Our doodle is the gentlest, snuggliest dog and he settled into our chaos right away. The grandkids are completely obsessed with him. Thank you Michelle for everything — he really is the perfect fit.",
  },
];

const AUTO_DELAY = 6000;
const PAUSE_AFTER_INTERACT = 12000;

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-amber-400" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.293 9.373c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" className="h-6 w-6 shrink-0" aria-label="Google" role="img">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer = useCallback((delay = AUTO_DELAY) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const tick = () => {
      setCurrent((i) => (i + 1) % reviews.length);
      timerRef.current = setTimeout(tick, AUTO_DELAY);
    };
    timerRef.current = setTimeout(tick, delay);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [startTimer]);

  const go = useCallback(
    (index: number) => {
      setCurrent(index);
      startTimer(PAUSE_AFTER_INTERACT);
    },
    [startTimer],
  );

  const prev = () => go((current - 1 + reviews.length) % reviews.length);
  const next = () => go((current + 1) % reviews.length);

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* Sliding track */}
      <div className="overflow-hidden">
        <div
          className="flex items-stretch transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {reviews.map((r) => (
            <div key={r.name} className="w-full flex-none px-0 sm:px-1">
              <div className="flex h-full flex-col rounded-none bg-white p-8 shadow-md ring-1 ring-black/5 sm:rounded-2xl">
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.initial}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-foreground">{r.name}</p>
                    <p className="text-sm text-foreground/50">{r.date}</p>
                  </div>
                  <GoogleG />
                </div>

                <div className="mt-3">
                  <Stars />
                </div>

                <p className="mt-3 leading-relaxed text-foreground/80">
                  {r.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls: prev arrow · dots · next arrow */}
      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous review"
          className="rounded-full bg-white p-2 text-brand shadow ring-1 ring-black/5 transition hover:bg-soft-beige"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === current ? "scale-125 bg-brand" : "bg-brand/30 hover:bg-brand/60"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next review"
          className="rounded-full bg-white p-2 text-brand shadow ring-1 ring-black/5 transition hover:bg-soft-beige"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
