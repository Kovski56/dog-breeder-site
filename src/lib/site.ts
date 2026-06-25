// Central place for site-wide content and contact details.
// Edit these values once and they update everywhere on the site.

export const site = {
  name: "Lily's Labradoodles",
  tagline: "From our home to yours.",
  breed: "Australian Labradoodles",
  // TODO: confirm real contact details
  email: "hello@lilyslabradoodles.com",
  phone: "(555) 555-5555",
  location: "Sacramento, CA",
  social: {
    facebook: "",
    instagram: "",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/inquiries", label: "Puppy Inquiries" },
] as const;

// Health-testing & membership badges shown in the gallery near the footer.
// Save each image to public/images/badges/ using the filename below.
// Add an `href` (a profile/verification URL) to make a badge clickable.
export const badges = [
  { src: "/images/badges/ofa.png", alt: "OFA — Canine Health Information Center", href: "" },
  { src: "/images/badges/paw-print-genetics.png", alt: "Paw Print Genetics — Pedigrees Breeder", href: "" },
  { src: "/images/badges/good-dog.png", alt: "Good Dog — Excellent health testing", href: "" },
  { src: "/images/badges/alaa-member.png", alt: "Australian Labradoodle Association of America — Member", href: "" },
  { src: "/images/badges/alaa-platinum.png", alt: "ALAA Platinum Breeder", href: "" },
  { src: "/images/badges/wala.png", alt: "World Australian Labradoodle Association", href: "" },
] as const;
