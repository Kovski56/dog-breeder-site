// Central place for site-wide content and contact details.
// Edit these values once and they update everywhere on the site.

export const site = {
  name: "Lily's Labradoodles",
  legalName: "Lilyslabradoodles LLC",
  tagline: "From our home to yours.",
  breed: "Australian Labradoodles",
  email: "Lilyslabradoodles@gmail.com",
  phone: "(909) 261-2913",
  location: "Rancho Cucamonga, CA",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61579250552219",
    instagram: "https://www.instagram.com/michellegoodlander",
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
] as const;
