"use client";

import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";

type Faq = { q: string; a: ReactNode };

const faqs: Faq[] = [
  {
    q: "Puppy Foundation",
    a: (
      <div className="space-y-4">
        <p>
          {"At Lily’s Labradoodles, we follow a comprehensive, intentional approach to raising and socializing every puppy. Our goal is to give each pup a strong foundation by thoughtfully exposing them to a wide variety of experiences and stimuli during their most critical developmental windows."}
        </p>
        <p>
          {"Every puppy is born and raised in our home, surrounded by love and attention. They are gently handled from birth, begin Early Neurological Stimulation (ENS) in their first days, and are gradually introduced to new sounds, surfaces, and people to build confidence and resilience. Through deliberate, careful socialization with adults, children, and other animals — paired with quality nutrition and attentive veterinary care — we give each puppy the very best possible start, so they grow into confident, well-balanced companions ready to become cherished members of their forever families."}
        </p>

        <p className="pt-1 text-base font-bold text-brand">Our Core Values</p>

        <div>
          <p className="font-bold text-brand">Health Tested</p>
          <p className="mt-1">
            {"We breed only exceptional, top-quality Australian Labradoodles. Before any dog joins our breeding program, it must pass thorough health testing — including genetic screening to rule out inheritable conditions and diseases, and Orthopedic Foundation for Animals (OFA) clearances for hips, elbows, patellas, cardiac function, and eyes. A dog is bred only when every result is favorable. This is the highest level of testing available, and it reflects our commitment to meeting and exceeding the most rigorous, ethical breeding standards."}
          </p>
        </div>

        <div>
          <p className="font-bold text-brand">Raised in Our Family Home</p>
          <p className="mt-1">
            {"Because we intentionally raise only a very limited number of puppies, every litter is brought up inside our family home — never in a kennel. Our puppies are part of the family from day one, spending their days with the whole household and our other animals, including cats, tortoises, and birds. Each pup is handled from birth, begins Early Neurological Stimulation on day four, and is raised using the Puppy Culture socialization program, giving every puppy every possible advantage to truly thrive."}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 pt-3 sm:flex-row">
          <div className="flex flex-col items-center">
            <Image
              src="/images/badges/paw-print-genetics.png"
              alt="Paw Print Genetics"
              width={120}
              height={120}
              className="h-24 w-auto object-contain"
            />
            <p className="mt-2 max-w-[15rem] text-center text-sm">
              Currently in the application process for Paw Print Genetics.
            </p>
          </div>
          <div className="rounded-2xl bg-brand px-7 py-4 text-center text-white">
            <p className="text-4xl font-bold leading-none">7+</p>
            <p className="mt-1 text-sm font-bold">Years of Experience</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    q: "What is an Australian Labradoodle?",
    a: "The Australian Labradoodle is a thoughtfully developed, multi-generational breed whose roots trace back to Australia. Originally bred for therapy work and companionship, they pair a gentle, people-loving temperament with a low-shedding, allergy-friendly coat — which is exactly why we fell in love with them.",
  },
  {
    q: "How are your puppies raised?",
    a: "Every puppy is born and raised right in our home, underfoot and woven into daily family life. From their very first days they take part in Early Neurological Stimulation (ENS) and are gradually introduced to a wide range of sounds, surfaces, people, and other animals. Combined with quality nutrition and attentive veterinary care, this early foundation helps them grow into confident, well-adjusted companions.",
  },
  {
    q: "How much do your puppies cost?",
    a: "All of our puppies are $3,000 plus California sales tax (8.75%), and each is sold on a spay/neuter, non-breeding agreement. A non-refundable $500 reservation fee holds your spot on the litter of your choice. We accept five to six reservations per litter prior to birth, and once the puppies arrive we may reopen reservations if the number of available pups allows. The final balance is due when the puppies are six weeks old. We accept check, cash, Venmo, and Zelle. Reservation lists fill quickly, and a space cannot be held until your $500 reservation fee has been received.",
  },
  {
    q: "Extended Training",
    a: "We offer extended training for families who would like extra help through the puppy stage and a smoother transition into home life. Training is available for one to four weeks at $600 per week. We work with a select group of trainers whose availability fills quickly, so a reservation is required.",
  },
  {
    q: "Puppy Selection Process",
    a: (
      <div className="space-y-3">
        <p>
          Puppies are reserved prior to birth by assignment to a specific litter, unless a
          particular puppy is listed for sale after birth. Reservations are filled in the order
          that deposits are received. Once you have been assigned to a litter, you will be given a
          picking spot based on when your deposit was received — this is the order in which you
          will choose your puppy from the litter on pick-up day.
        </p>
        <p>
          You will select your puppy in person in our home and take it home at around eight weeks
          of age. For families joining us from out of state, we are happy to schedule a video
          selection call during your scheduled pick-up time.
        </p>
        <p>
          If, for any reason, your puppy cannot be picked up at eight weeks of age, individual
          arrangements can be made to hold your puppy for a specified period of time. This must be
          arranged prior to the pick-up day, and a holding fee of $75 per day applies.
        </p>
      </div>
    ),
  },
  {
    q: "What sizes do you have?",
    a: "We breed Medium and Mini Australian Labradoodles. Our Medium Australian Labradoodles are 30–45 lbs and stand 17–21 inches tall, and our Mini Australian Labradoodles are 20–29 lbs and stand 14–16 inches tall. A puppy’s final size can vary somewhat, and we are happy to help guide you toward the right fit for your family.",
  },
  {
    q: "Training and Crate Training",
    a: (
      <div className="space-y-3">
        <p>
          {"Your puppy’s training begins right here in our home, but it is an ongoing process that must continue the moment you arrive home with your pup. Everything in your world is brand new to them — after all, they are still babies. They will need to be taught how to interact with your family and everything else it takes to fit into your life."}
        </p>
        <p>
          {"Your puppy will need to learn where to potty, where to eat, and where the boundaries are in their new home. Along the way, they will get into just about everything, explore with their mouths, nibble on hands, and have the occasional potty accident — all a normal part of growing up. We do everything possible to give each puppy a wonderful start and a solid foundation, but that foundation must be followed up with your own consistent, in-home training, time, and commitment to help your pup grow into a great family dog."}
        </p>
        <p>
          {"Everything we do is simply a starting point to help you raise the best dog you can. We highly recommend continuing with group puppy classes, online classes, and beginner and advanced classes. Finding a positive-reinforcement trainer is a wonderful way to build on the foundation we have already begun. Please note: to protect against parvo exposure, puppies should not attend in-person classes until their final puppy immunizations are complete at around 14 weeks — and only with extreme caution before then."}
        </p>
      </div>
    ),
  },
  {
    q: "How are your puppies with children?",
    a: "Our puppies are raised in a busy household and are wonderfully social with kids. That said, young puppies still need clear boundaries and gentle handling, so we also encourage teaching children how to interact calmly and respectfully with their new companion.",
  },
  {
    q: "Female vs. Male Puppies",
    a: "All of our puppies are required to be spayed or neutered by six months of age as part of your adoption contract. Because they are altered so young, the differences you might expect between the sexes never really come into play — without the influence of sex hormones at this age, there are no known temperament differences between males and females. For that reason, we encourage you to choose your puppy based on the temperament and personality of the individual pup rather than gender. It is also worth considering the gender of any dog you may already have at home.",
  },
  {
    q: "Health Testing for Mom and Dad Dogs",
    a: (
      <div className="space-y-3">
        <p>
          Health testing is a strict, non-negotiable requirement in our breeding program. Every
          one of our dogs is fully health tested before being included, ensuring that only the
          healthiest dogs contribute to our litters.
        </p>
        <p>DNA testing is completed through Paw Print Genetics and screens for:</p>
        <ul className="list-disc space-y-1 pl-5 marker:text-brand-accent">
          <li>Degenerative Myelopathy</li>
          <li>Exercise-Induced Collapse</li>
          <li>Hereditary Nasal Parakeratosis</li>
          <li>Progressive Retinal Atrophy</li>
          <li>Cone-Rod Dystrophy 4 &amp; Progressive Rod-Cone Degeneration</li>
          <li>Rod-Cone Dysplasia 4</li>
          <li>Retinal Dysplasia</li>
          <li>Von Willebrand Disease I</li>
        </ul>
        <p>
          In addition, our dogs hold OFA (Orthopedic Foundation for Animals) clearances for hips,
          elbows, patellas, and heart, as well as an OFA CERF eye clearance. Test results for our
          parent dogs are available upon request.
        </p>
      </div>
    ),
  },
  {
    q: "Are your puppies registered?",
    a: "Yes — all of our dogs and puppies are registered with the ALAA (Australian Labradoodle Association of America). You will receive your registration paperwork once your puppy has been spayed or neutered.",
  },
  {
    q: "Puppy Grooming Requirements",
    a: (
      <div className="space-y-3">
        <p>
          All of our puppies have curly to soft, wavy fleece coats that absolutely require regular
          maintenance. Australian Labradoodles have hair that simply keeps growing — and because
          they do not shed, caring for their coat is much like caring for human hair.
        </p>
        <p>
          A good grooming routine includes keeping the coat clean and blown out (a professional
          blow dryer works best), daily line brushing and combing all the way down to the skin, and
          learning to trim carefully around the eyes on a regular basis. Your puppy will also need a
          full professional grooming roughly every six to seven weeks. If you take your puppy
          outside the home for grooming, plan to begin after all puppy immunizations are complete at
          around 16 weeks of age.
        </p>
        <Image
          src="/images/faq/pupgrooming.jpg"
          alt="Doodle puppy cut grooming guide — what to tell your groomer"
          width={1071}
          height={1299}
          className="mx-auto mt-1 w-full max-w-sm rounded-xl shadow-sm"
        />
      </div>
    ),
  },
  {
    q: "Where Are You Located & Pickup",
    a: "We are located in Rancho Cucamonga, California, just east of and near Ontario International Airport. You are welcome to come to our home to pick up your puppy, or we can meet you at the local Ontario airport. We also offer the option of having your puppy flown to you via a flight nanny — a professional who travels on board with your pup and meets you at your local airport anywhere in the USA. Flight nanny prices vary depending on timing and whether the ticket is standby or reserved; a quote is available upon request. This service should be arranged three to four weeks in advance.",
  },
  {
    q: "Do you ever have older puppies or adult dogs available?",
    a: "Only occasionally. Most of the time, our Puppy Head Start training program is the best option for families who would like to skip some of the earliest puppy stages while still bringing home a young dog with a wonderful foundation.",
  },
  {
    q: "What happens if a litter does not fill the reservation list?",
    a: "If a litter is smaller than expected, your reservation simply rolls over to our next available litter — you keep your spot and your deposit.",
  },
  {
    q: "My puppy keeps nipping — how do I teach them not to bite?",
    a: "Mouthing and nipping are completely normal — it is how puppies explored the world with their littermates, and it helps them cope with teething. The good news is that it fades with maturity and a little consistent guidance. Keep training sessions short and consistent, reward gentle behavior with a calm “no bite” cue and praise, and redirect those needle teeth to an appropriate chew toy the moment they start. Keep plenty of puppy-safe chews within reach, pause playtime the instant biting gets too rough, and be patient — bite inhibition takes time. If nipping ever becomes intense or does not improve, a professional trainer can help.",
  },
  {
    q: "Can I call and get more information?",
    a: (
      <div className="space-y-3">
        <p>
          Of course — we love hearing from prospective families! Michelle is always happy to answer
          your questions and to help you decide whether an Australian Labradoodle is the right fit
          for your home. Phone or text is often the quickest way to reach us, and we will get back
          to you as soon as we can.
        </p>
        <div className="rounded-xl bg-brand-muted/15 p-4">
          <p className="font-bold text-brand">Michelle Goodlander</p>
          <p className="mt-1">
            Call or text:{" "}
            <a href="tel:9092612913" className="font-bold text-brand hover:underline">
              (909) 261-2913
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:Lilyslabradoodles@gmail.com"
              className="font-bold text-brand hover:underline"
            >
              Lilyslabradoodles@gmail.com
            </a>
          </p>
        </div>
        <p>You are also welcome to follow along and message us on Facebook and Instagram.</p>
      </div>
    ),
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="overflow-hidden rounded-xl border border-brand/15 bg-white shadow-sm">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-brand-muted/10"
            >
              <span className="text-lg font-bold text-brand">{f.q}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-brand-accent transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div className="border-t border-brand/10 px-5 pb-5 pt-4 leading-relaxed text-foreground/80">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
