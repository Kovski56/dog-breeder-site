"use server";

import { sendApplicationEmail } from "@/lib/mailer";

export type ApplicationState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitGuardianApplication(
  _prevState: ApplicationState,
  formData: FormData,
): Promise<ApplicationState> {
  const get = (key: string) => String(formData.get(key) ?? "").trim();

  const email = get("email");
  const name = get("name");
  const agreement = get("agreement");

  if (!name) return { status: "error", message: "Please enter your name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return { status: "error", message: "Please enter a valid email address." };
  if (agreement !== "yes")
    return {
      status: "error",
      message: "You must agree to the Reservation Policy to continue.",
    };

  const fields: Record<string, string> = {
    "Name": name,
    "Email": email,
    "Street Address": get("address"),
    "City": get("city"),
    "State": get("state"),
    "Zip": get("zip"),
    "Own or Rent": get("ownRent"),
    "Lease Permission for Pet": get("leasePermission"),
    "Cell Phone": get("cellPhone"),
    "Evening Phone": get("eveningPhone"),
    "Applying for Litter": get("litter"),
    "Allergies/Asthma in Family": get("allergies"),
    "Gender Preference": get("genderPref"),
    "Size Preference": get("sizePref"),
    "Color — White/Chalk": get("colorWhite"),
    "Color — Cream/Golden": get("colorCream"),
    "Color — Apricot/Red": get("colorApricot"),
    "Color — Chocolate/Cafe": get("colorChocolate"),
    "Color — Black": get("colorBlack"),
    "Color — Phantom": get("colorPhantom"),
    "Color — Caramel": get("colorCaramel"),
    "Color — Flexible": get("colorFlexible"),
    "Coat Preference": get("coatPref"),
    "Family Includes": get("familyIncludes"),
    "Children Ages": get("childrenAges"),
    "First Dog?": get("firstDog"),
    "Other Pets": get("otherPets"),
    "Other Pets Detail": get("otherPetsDetail"),
    "Ever Surrendered a Pet": get("surrendered"),
    "Fenced Yard": get("fencedYard"),
    "Confinement / Exercise Plan": get("confinementPlan"),
    "Where Will Puppy Live": get("puppyLocation"),
    "Daytime Care Plan": get("daytimeCare"),
    "Hours Alone Per Day": get("hoursAlone"),
    "Crate Training Plan": get("crateTrain"),
    "Why This Breed": get("whyBreed"),
    "Grooming Understanding": get("grooming"),
    "Training Plans": get("training"),
    "Desired Possession Date": get("possessionDate"),
    "Additional Comments": get("comments"),
    "Flight Nanny Airport": get("airport"),
    "How Did You Hear About Us": get("referral"),
    "Read & Agreed to Policy": get("finalAgreement"),
    "Payment Method": get("paymentMethod"),
    "Signature": get("signature"),
    "Date": get("date"),
  };

  try {
    await sendApplicationEmail(
      fields,
      `New Guardian Application — ${fields["Name"] ?? "Unknown"}`,
      "Guardian Application",
    );
  } catch (err) {
    console.error("Guardian application email failed:", err);
    return {
      status: "error",
      message:
        "Sorry, something went wrong submitting your application. Please try again or email us directly at Lilyslabradoodles@gmail.com.",
    };
  }

  return {
    status: "success",
    message:
      "Your Guardian Application has been received! We will review it and be in touch soon.",
  };
}
