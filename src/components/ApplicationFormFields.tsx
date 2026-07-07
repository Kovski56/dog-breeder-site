"use client";

// Shared form fields used by both AdoptionApplicationForm and GuardianApplicationForm.

export const inputCls =
  "mt-1.5 w-full rounded-xl border border-brand/20 bg-white px-4 py-2.5 text-foreground outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30";
export const labelCls = "block font-bold text-foreground/80";

export function Field({
  label,
  name,
  type = "text",
  required = true,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelCls}>
        {label}
        {required && <span className="ml-1 text-brand-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={inputCls}
      />
    </div>
  );
}

export function TextArea({
  label,
  name,
  rows = 3,
  required = true,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelCls}>
        {label}
        {required && <span className="ml-1 text-brand-accent">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        className={`${inputCls} resize-y`}
      />
    </div>
  );
}

export function RadioGroup({
  label,
  name,
  options,
  required = true,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <div>
      <p className={labelCls}>
        {label}
        {required && <span className="ml-1 text-brand-accent">*</span>}
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-1.5">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={opt.value}
              required={required}
              className="accent-[color:var(--deep-olive)]"
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export function ColorRank({ color, name }: { color: string; name: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="min-w-[140px] font-bold text-foreground/80">{color}</span>
      <select
        name={name}
        required
        defaultValue=""
        className="rounded-lg border border-brand/20 bg-white px-3 py-2 text-foreground outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
      >
        <option value="" disabled>Pick 1–7</option>
        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
          <option key={n} value={String(n)}>{n}</option>
        ))}
      </select>
    </div>
  );
}

export function ApplicationFields() {
  return (
    <>
      {/* Contact */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 space-y-5">
        <h3 className="text-xl font-bold text-brand">Contact Information</h3>
        <Field label="Email" name="email" type="email" autoComplete="email" />
        <Field label="Name (First, Last)" name="name" autoComplete="name" />
        <Field label="Cell Phone" name="cellPhone" type="tel" autoComplete="tel" />
        <Field label="Evening Phone" name="eveningPhone" type="tel" />
        <Field label="Street Address" name="address" autoComplete="street-address" />
        <div className="grid gap-4 sm:grid-cols-3">
          <Field label="City" name="city" autoComplete="address-level2" />
          <Field label="State" name="state" autoComplete="address-level1" />
          <Field label="Zip / Postal Code" name="zip" autoComplete="postal-code" />
        </div>
        <RadioGroup
          label="Do you own or rent?"
          name="ownRent"
          options={[{ value: "own", label: "Own" }, { value: "rent", label: "Rent" }]}
        />
        <RadioGroup
          label="If you rent, do you have written permission in your lease for a pet?"
          name="leasePermission"
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
            { value: "na", label: "N/A" },
          ]}
        />
      </div>

      {/* Litter */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 space-y-5">
        <h3 className="text-xl font-bold text-brand">Litter Information</h3>
        <Field label="Application for the litter of: (dog names)" name="litter" />
        <RadioGroup
          label="Does anyone in your family suffer from asthma or allergies?"
          name="allergies"
          options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
        />
      </div>

      {/* Preferences */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 space-y-5">
        <h3 className="text-xl font-bold text-brand">Puppy Preferences</h3>
        <p className="text-sm text-foreground/60">
          Preferences are for reference only — we do not reserve by sex, color, or size within a litter.
        </p>
        <RadioGroup
          label="Gender preference"
          name="genderPref"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "flexible", label: "Flexible" },
          ]}
        />
        <RadioGroup
          label="Size preference"
          name="sizePref"
          options={[
            { value: "mini", label: 'Mini (15–24 lbs, 13–17")' },
            { value: "smallMedium", label: 'Small/Medium (25–30 lbs, 17–20")' },
            { value: "medium", label: 'Medium (31–45 lbs, 19"+)' },
            { value: "flexible", label: "Flexible" },
          ]}
        />
        <div>
          <p className={labelCls}>
            Color preference ranking (1 = most preferred, 7 = least)
            <span className="ml-1 text-brand-accent">*</span>
          </p>
          <p className="mt-1 text-sm text-foreground/60 mb-3">
            We do not reserve by color — this is for reference only.
          </p>
          <div className="space-y-3">
            <ColorRank color="White / Chalk" name="colorWhite" />
            <ColorRank color="Cream / Golden" name="colorCream" />
            <ColorRank color="Apricot / Red" name="colorApricot" />
            <ColorRank color="Chocolate / Cafe" name="colorChocolate" />
            <ColorRank color="Black" name="colorBlack" />
            <ColorRank color="Phantom (tri-color)" name="colorPhantom" />
            <ColorRank color="Caramel" name="colorCaramel" />
            <ColorRank color="Flexible" name="colorFlexible" />
          </div>
        </div>
        <RadioGroup
          label="Coat type preference"
          name="coatPref"
          options={[
            { value: "curly", label: "Curly" },
            { value: "wavy", label: "Wavy" },
            { value: "flexible", label: "Flexible" },
          ]}
        />
      </div>

      {/* Household */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 space-y-5">
        <h3 className="text-xl font-bold text-brand">Your Household</h3>
        <RadioGroup
          label="Does your family have:"
          name="familyIncludes"
          options={[
            { value: "children", label: "Children" },
            { value: "elderly", label: "Elderly" },
            { value: "disabled", label: "Disabled" },
            { value: "none", label: "None of the above" },
          ]}
        />
        <Field label="If you have children, please enter their ages." name="childrenAges" required={false} />
        <RadioGroup
          label="Is this your first dog?"
          name="firstDog"
          options={[
            { value: "no", label: "No" },
            { value: "yes", label: "Yes — please describe how you have prepared in the comments" },
          ]}
        />
        <RadioGroup
          label="Does your family have other pets?"
          name="otherPets"
          options={[
            { value: "no", label: "No" },
            { value: "dogs", label: "Dogs" },
            { value: "cats", label: "Cats" },
            { value: "other", label: "Other" },
          ]}
        />
        <TextArea
          label="If you have other pets, share breed, how many, gender, and if they are spayed/neutered."
          name="otherPetsDetail"
          rows={2}
        />
        <TextArea
          label="Have you ever surrendered a pet? If so, what were the circumstances?"
          name="surrendered"
          rows={2}
        />
      </div>

      {/* Home environment */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 space-y-5">
        <h3 className="text-xl font-bold text-brand">Home Environment</h3>
        <RadioGroup
          label="Do you have a fenced yard?"
          name="fencedYard"
          options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]}
        />
        <TextArea
          label="If your yard is not fenced, how do you plan to confine/protect your puppy? How do you plan to exercise them?"
          name="confinementPlan"
          rows={2}
        />
        <RadioGroup
          label="Where will your puppy mainly live?"
          name="puppyLocation"
          options={[
            { value: "inside", label: "Inside" },
            { value: "outside", label: "Outside" },
          ]}
        />
        <TextArea
          label="How do you plan to care for your puppy during the day if you are gone?"
          name="daytimeCare"
          rows={2}
        />
        <Field label="How many hours a day will the puppy be alone?" name="hoursAlone" />
        <TextArea label="Do you plan to crate train?" name="crateTrain" rows={2} />
      </div>

      {/* About you as an owner */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 space-y-5">
        <h3 className="text-xl font-bold text-brand">About You as an Owner</h3>
        <TextArea label="Why would you like to adopt this breed of puppy?" name="whyBreed" rows={3} />
        <TextArea label="What is your understanding of the grooming requirements of this breed?" name="grooming" rows={2} />
        <TextArea label="What are your plans for basic puppy training? (in-person, online, etc.)" name="training" rows={2} />
        <TextArea label="When would you like to take possession of your pup?" name="possessionDate" rows={1} />
        <TextArea label="Additional comments or information you'd like to share:" name="comments" rows={3} />
        <TextArea label="If you need a Flight Nanny, please list the nearest major airports." name="airport" rows={1} />
        <TextArea label="How did you find out about Lily's Labradoodles?" name="referral" rows={1} />
      </div>

      {/* Final agreement */}
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 space-y-5">
        <h3 className="text-xl font-bold text-brand">Agreement & Signature</h3>
        <RadioGroup
          label="I have read and agree to the Reservation Policy and Puppy Selection Process above."
          name="agreement"
          options={[
            { value: "yes", label: "Yes — I have read and agree, please continue" },
            { value: "no", label: "I do not agree with the Policy & Process" },
          ]}
        />
        <RadioGroup
          label="Have you read and do you agree to our Reservation Policy? (final confirmation)"
          name="finalAgreement"
          options={[
            { value: "yes", label: "Yes" },
            { value: "no", label: "No" },
          ]}
        />
        <RadioGroup
          label="Please indicate how your deposit was paid"
          name="paymentMethod"
          options={[
            { value: "paypal", label: "PayPal" },
            { value: "venmo", label: "Venmo" },
            { value: "zelle", label: "Zelle" },
            { value: "gooddog", label: "Good Dog" },
            { value: "other", label: "Other" },
          ]}
        />
        <Field label="Signature (type your full name as electronic signature)" name="signature" />
        <Field label="Today's Date" name="date" type="date" />
      </div>
    </>
  );
}
