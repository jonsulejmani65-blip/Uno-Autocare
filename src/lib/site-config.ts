export const siteConfig = {
  name: "UNO AutoCare",
  tagline: "Autopflege & Fahrzeugaufbereitung",
  region: "Recherswil, Region Solothurn",
  url: "https://www.uno-autocare.ch",
  description:
    "UNO AutoCare in Recherswil steht für professionelle Fahrzeugaufbereitung, Detailing, Polierung und Innen- sowie Aussenreinigung in der Region Solothurn.",
  // Platzhalter – bitte mit den echten Angaben ersetzen, sobald verfügbar.
  contact: {
    phone: "+41 00 000 00 00",
    phoneDisplay: "+41 00 000 00 00",
    email: "info@uno-autocare.ch",
    address: {
      street: "Musterstrasse 1",
      zip: "4565",
      city: "Recherswil",
      region: "Solothurn",
      country: "CH",
    },
    openingHours: [
      { days: "Montag – Freitag", hours: "08:00 – 18:00 Uhr" },
      { days: "Samstag", hours: "09:00 – 15:00 Uhr" },
      { days: "Sonntag", hours: "geschlossen" },
    ],
    mapsEmbedUrl: "https://maps.google.com/maps?q=Recherswil&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  },
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Dienstleistungen", href: "/dienstleistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Standorte", href: "/standorte" },
  { label: "Kontakt", href: "/kontakt" },
];
