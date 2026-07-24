/**
 * AYK Solutions — Central Business Identity Configuration
 *
 * Single source of truth for all business contact details.
 * Import this in Footer, Contact page, structured data, and legal pages.
 * Never hardcode these values in individual components.
 */

export const businessIdentity = {
  name: "AYK Solutions",
  legalName: "AYK Solutions", // Update with confirmed registered legal name
  tagline: "Professional websites for small businesses",
  phone: "+32 466 31 77 14",
  phonePlain: "+32466317714", // For tel: links
  whatsappUrl:
    "https://wa.me/32466317714?text=Hi%20AYK%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project.",
  email: "hello@ayksolutions.com",
  streetAddress: "Chau. d\u2019Anvers 11",
  postalCode: "1000",
  city: "Brussels",
  cityFr: "Bruxelles",
  cityNl: "Brussel",
  country: "Belgium",
  countryCode: "BE",
  website: "https://ayksolutions.com",
  /** Label to use near the address — honest, no fake walk-in claims */
  addressLabel: "Belgium Business Contact",
} as const;

export const socialProfiles = {
  // Add confirmed social profile URLs below.
  // linkedin: "https://www.linkedin.com/company/ayk-solutions",
  // instagram: "https://www.instagram.com/ayksolutions",
} as const;

export const markets = {
  be: { name: "Belgium", flag: "🇧🇪", lang: ["en", "fr", "nl"] },
  sa: { name: "Saudi Arabia", flag: "🇸🇦", lang: ["en", "ar"] },
  au: { name: "Australia", flag: "🇦🇺", lang: ["en"] },
} as const;
