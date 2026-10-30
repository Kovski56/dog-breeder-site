import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Available Puppies",
  description:
    "Meet the available Australian Labradoodle puppies from Lily's Labradoodles — available now.",
};

const puppies = [
  {
    name: "Mr Green Jeans",
    src: "/images/puppies/mr-green-jeans.jpg",
    alt: "Mr Green Jeans, a red and white Australian Labradoodle puppy standing on a white chair",
  },
  {
    name: "Ms Pinky",
    src: "/images/puppies/ms-pinky.jpg",
    alt: "Ms Pinky, a deep red Australian Labradoodle puppy with a white chest, held outdoors",
  },
  {
    name: "Blossom",
    src: "/images/puppies/blossom.jpg",
    alt: "Blossom, a curly red Australian Labradoodle puppy held in gentle hands",
  },
];

const litterDetails = [
  { label: "Bred", value: "July 3 & 5, 2026" },
  { label: "Born", value: "September 4, 2026" },
  { label: "Going Home", value: "November 1, 2026" },
  { label: "Size", value: "Mini / Small Medium" },
  { label: "Breed", value: "Multi-gen Australian Labradoodles", wide: true },
];

export default function AvailablePuppiesPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-main-green-dark py-14 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          Available Puppies
        </h1>
        <p className="mx-auto mt-3 max-w-xl px-6 text-xl font-bold text-white/90">
          Meet the wonderful puppies from Ruby &amp; Roo&apos;s litter, available now.
        </p>
      </section>

      {/* Litter details */}
      <section className="mx-auto w-full max-w-3xl px-6 py-14">
        <div className="rounded-2xl bg-white p-8 text-center shadow-md ring-1 ring-black/5">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-accent">
            Ruby &amp; Roo&apos;s Litter
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-brand">
            Available Now
          </h2>

          <dl className="mx-auto mt-6 grid max-w-xl gap-3 text-left text-foreground/80 sm:grid-cols-2">
            {litterDetails.map((item) => (
              <div key={item.label} className={"wide" in item ? "sm:col-span-2" : undefined}>
                <dt className="text-sm font-bold uppercase tracking-wide text-foreground/60">
                  {item.label}
                </dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <Link
            href="/inquiries"
            className="mt-8 inline-flex items-center justify-center rounded bg-brand-accent px-8 py-3 font-bold uppercase tracking-wide text-white shadow transition-opacity hover:opacity-90"
          >
            Application
          </Link>
        </div>
      </section>

      {/* Puppies */}
      <section className="bg-brand-muted/30">
        <div className="mx-auto w-full max-w-5xl px-6 py-16">
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand">
            Meet the Puppies
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {puppies.map((puppy) => (
              <div
                key={puppy.name}
                className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={puppy.src}
                    alt={puppy.alt}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="px-6 py-5 text-center font-handwriting text-4xl font-bold text-brand">
                  {puppy.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
