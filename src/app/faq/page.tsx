import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ & Puppy Tips",
  description:
    "Guidance on understanding and managing puppy biting, and raising a well-mannered Australian Labradoodle.",
};

type Method = {
  title: string;
  body: string[];
  bullets?: { label: string; text: string }[];
};

const methods: Method[] = [
  {
    title: "Establish a Consistent Training Routine",
    body: [
      "Consistency is the foundation of successful puppy training, and teaching bite inhibition is no exception. Dogs thrive on routine, so a steady, predictable approach helps your puppy understand what is expected of them.",
      "Keep training sessions short and frequent rather than long and sporadic — this keeps your puppy engaged without overwhelming them. Choose a calm, distraction-free space, and make sure everyone in the household follows the same approach so your puppy receives clear, consistent signals.",
    ],
  },
  {
    title: "Use Positive Reinforcement",
    body: [
      "Teaching a simple verbal cue such as “no bite” gives your puppy a clear signal. When they respond by softening their mouth or stopping altogether, reward them right away with a treat, praise, or affection. This positive reinforcement helps your puppy associate gentle behavior with pleasant outcomes, making them far more likely to repeat it.",
    ],
  },
  {
    title: "Redirect to Appropriate Outlets",
    body: [
      "Even with your best efforts, your puppy will still test their teeth from time to time, and redirection is one of the most effective tools you have. The moment your puppy tries to nip, guide their attention to a more appropriate outlet, such as a toy or chew.",
      "Because puppies are often chasing movement, a wiggling hand is irresistible — if your puppy latches onto your fingers, simply close your hand into a still fist and it quickly becomes far less interesting. Keep a variety of toys and chews within easy reach so you can redirect their energy the instant biting begins.",
    ],
  },
  {
    title: "Encourage Proper Chew-Toy Behavior",
    body: [
      "Teaching your puppy not to bite does not mean suppressing their natural urge to chew — it means guiding that urge toward appropriate items. When introducing a new chew toy, make it exciting: play with it and show your puppy how fun it is, then praise them warmly when they engage with it.",
      "Choose puppy-specific toys made from softer materials that are gentle on developing teeth and gums, and avoid anything that resembles household objects, which can send mixed messages. Durable toys that can withstand an enthusiastic chewer are always a wise choice.",
    ],
  },
  {
    title: "Practice Patience and Consistency",
    body: [
      "Bite inhibition takes time, patience, and repetition. Your puppy is still learning about the world and will not master this overnight, so stay consistent, reward good behavior, and gently redirect nipping whenever it occurs.",
      "If you feel frustrated, take a breath — setbacks are a normal part of the process. Leaning on fellow puppy parents or a professional trainer can help you stay motivated and discover new techniques.",
    ],
  },
  {
    title: "Address Biting in Different Situations",
    body: [
      "Biting can show up in many settings, and each calls for a slightly different response:",
    ],
    bullets: [
      {
        label: "During playtime",
        text: "Puppies often get overexcited and nip — it is simply how they communicate. Set clear boundaries by calmly pausing play the moment biting happens.",
      },
      {
        label: "In social settings",
        text: "When your puppy interacts with other dogs or people, keep a close eye on their body language. Canine play can look alarming to us — dogs naturally growl, bark, and mouth one another — so understanding this natural communication helps you tell healthy play from a situation that needs your attention.",
      },
    ],
  },
  {
    title: "Seek Professional Help When Needed",
    body: [
      "If your puppy’s biting becomes aggressive, unusually frequent, or simply is not improving despite consistent training, do not hesitate to reach out to a professional. A qualified dog trainer can assess your specific situation and provide tailored guidance to address the challenges you and your puppy are facing.",
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-main-green-dark py-14 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          Puppy FAQ &amp; Tips
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-xl font-bold text-white/90">
          Helpful guidance for raising a happy, well-mannered Australian Labradoodle.
        </p>
      </section>

      <div className="mx-auto w-full max-w-3xl px-6 py-14 space-y-12">
        {/* Why puppies bite */}
        <section>
          <p className="text-sm font-bold uppercase tracking-wide text-brand-accent">
            Understanding Why Puppies Bite
          </p>
          <h2 className="mt-1 text-3xl font-bold text-brand">Why Do Puppies Bite?</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-foreground/80">
            <p>
              Just as human babies explore the world with their hands, puppies explore it with
              their mouths. Your puppy has just come from a litter, where they communicated with
              their mother and siblings through mouthing and gentle biting. Combined with the
              discomfort of teething, this makes nipping a completely natural — and temporary —
              part of puppyhood.
            </p>
            <p>
              Biting typically improves as your puppy matures, and teaching them what is and is
              not acceptable to bite is an important part of early training. This lesson becomes
              especially important as your puppy grows larger and stronger.
            </p>
          </div>
        </section>

        {/* Methods */}
        <section>
          <h2 className="text-3xl font-bold text-brand">
            Teaching Your Puppy Not to Bite
          </h2>
          <div className="mt-6 space-y-5">
            {methods.map((method, i) => (
              <div
                key={method.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-accent text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold text-brand">{method.title}</h3>
                    <div className="mt-2 space-y-3 leading-relaxed text-foreground/80">
                      {method.body.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                      {method.bullets && (
                        <ul className="space-y-3">
                          {method.bullets.map((b) => (
                            <li key={b.label} className="flex gap-2">
                              <span className="font-bold text-brand-accent">•</span>
                              <span>
                                <span className="font-bold text-brand">{b.label}:</span>{" "}
                                {b.text}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final thoughts */}
        <section className="rounded-2xl bg-brand-muted/20 p-8">
          <h2 className="text-2xl font-bold text-brand">Final Thoughts</h2>
          <div className="mt-3 space-y-4 leading-relaxed text-foreground/80">
            <p>
              Teaching your puppy not to bite takes patience, consistency, and proven training
              methods. By understanding why puppies bite, establishing a routine, using positive
              reinforcement, redirecting unwanted behavior, and encouraging proper chew-toy
              habits, you will help your puppy grow into a well-mannered and affectionate
              companion.
            </p>
            <p>
              Celebrate the small victories along the way, be patient with the setbacks, and
              remember that professional support is always available if you need it. With time and
              a thoughtful approach, your puppy will develop good manners and a gentle mouth.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
