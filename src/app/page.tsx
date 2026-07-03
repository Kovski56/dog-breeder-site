import Image from "next/image";
import Link from "next/link";
import { badges, site } from "@/lib/site";
import GalleryCarousel from "@/components/GalleryCarousel";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-main-green-dark">
        <div className="grid w-full items-center md:grid-cols-2">
          <div className="px-10 py-16 text-center md:py-24 md:pl-20 md:pr-6 md:text-right">
            <h1 className="text-6xl font-bold leading-[0.95] tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-7xl md:text-8xl">
              {site.breed}
            </h1>
            <p className="mt-4 text-3xl font-bold text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] sm:text-4xl md:text-5xl">
              From Our Home To Yours!
            </p>
            <div className="mt-10 flex justify-center md:justify-end">
              <Link
                href="/inquiries"
                className="inline-flex items-center justify-center bg-deep-olive px-14 py-5 text-2xl font-bold text-white shadow-md transition-transform hover:scale-[1.03] md:px-16 md:py-6 md:text-3xl"
                style={{ borderRadius: "50% 14px 50% 14px" }}
              >
                Apply To Adopt
              </Link>
            </div>
          </div>

          <div className="flex items-end justify-center md:justify-start">
            <Image
              src="/images/hero-doodle.png"
              alt="A happy Australian Labradoodle"
              width={700}
              height={1120}
              priority
              className="h-auto w-auto max-h-[28rem] object-contain drop-shadow-xl md:max-h-[90vh]"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/images/about-photo.jpg"
              alt="Lily carrying puppies in slings with a friend"
              width={800}
              height={800}
              className="w-full rounded-2xl object-cover shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold tracking-tight text-brand">About Lily&apos;s Labradoodles</h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              We are a small, home-based breeder of small and medium multi-generational Australian Labradoodles.
              Lily&apos;s was born from a deeply personal place — the loss of our beloved Toby, a Labrador mix
              rescue who was a cherished member of our family for 17 years. In searching for a dog with that same
              gentle, loyal spirit, we discovered Australian Labradoodles: a breed renowned for their sweet
              temperament, trainability, and eagerness to please. After years of dedicated research, we welcomed
              our own Australian Labradoodles into our home and never looked back.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/70">
              As a retired Adoption Social Worker with 35 years of experience placing children with loving
              families, I bring that same care and discernment to matching our puppies with the right forever
              homes. Prospective families are thoughtfully screened to ensure they can provide the love and
              environment these special dogs deserve.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Every puppy is born and raised in our home — handled with love from their very first days,
              thoroughly health tested, and socialized to be confident and ready to become a treasured part of
              your family. We look forward to walking alongside you on this journey.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming litter */}
      <section id="upcoming-litter" className="bg-brand-muted/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand">
            Upcoming Litter
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center leading-relaxed text-foreground/70">
            We are now accepting reservations for our upcoming litter from Ruby &amp; Roo.
          </p>

          {/* Litter card */}
          <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl bg-white shadow-md">
            {/* Parent photos */}
            <div className="grid grid-cols-2">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src="/images/dogs/ruby.jpg"
                  alt="Ruby — Dam"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-brand/70 py-1 text-center text-sm font-bold text-white">
                  Ruby — Dam
                </div>
              </div>
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src="/images/dogs/roo.jpg"
                  alt="Roo — Sire"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-brand/70 py-1 text-center text-sm font-bold text-white">
                  Roo — Sire
                </div>
              </div>
            </div>

            {/* Litter details */}
            <div className="px-8 py-6">
              <div className="space-y-2 text-foreground/80">
                <p className="text-lg font-bold text-brand">Accepting Reservations</p>
                <p><span className="font-bold">Estimated Breeding:</span> June / July 2026</p>
                <p><span className="font-bold">Estimated Go Home:</span> Nov / Dec 2026</p>
                <p><span className="font-bold">Size:</span> Small / Medium — 20–30 lbs</p>
                <p><span className="font-bold">Breed:</span> Multi-gen Australian Labradoodles</p>
              </div>

              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/inquiries"
                  className="inline-flex items-center justify-center rounded bg-brand-accent px-8 py-3 font-bold uppercase tracking-wide text-white shadow transition-opacity hover:opacity-90"
                >
                  Application
                </Link>
                <a
                  href="https://www.alaa-labradoodles.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded border-2 border-brand px-8 py-3 font-bold text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  ALAA — Breeder Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-brand">
          Our Dogs &amp; Puppies
        </h2>
        <GalleryCarousel />
      </section>

      {/* Health-testing & membership badges */}
      <section className="border-t border-black/5 bg-soft-beige">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand">
            Health-Tested &amp; Accredited
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-foreground/70">
            Proud to meet the standards of these trusted organizations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {badges.map((badge) => {
              const card = (
                <div className="relative h-28 rounded-xl bg-white p-3 shadow-sm ring-1 ring-black/5">
                  <Image
                    src={badge.src}
                    alt={badge.alt}
                    fill
                    sizes="(min-width: 640px) 160px, 45vw"
                    className="object-contain p-2"
                  />
                </div>
              );
              return (
                <div key={badge.src} className="w-36 sm:w-40">
                  {badge.href ? (
                    <a
                      href={badge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-transform hover:scale-[1.03]"
                    >
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Puppy flower accent — centered above the footer */}
      <div className="flex justify-center py-10">
        <Image
          src="/images/puppy-flower.png"
          alt="Puppy in a flower"
          width={140}
          height={140}
          className="drop-shadow-xl"
        />
      </div>
    </main>
  );
}
