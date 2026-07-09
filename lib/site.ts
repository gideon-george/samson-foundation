/**
 * Central site facts. Every figure and detail here comes from the
 * Foundation's own brief — nothing invented. Update in one place.
 */
export const site = {
  name: "The Samson Foundation",
  motto: "Move to help the less privileged.",
  description:
    "The Samson Foundation is a non-profit, humanitarian, and community development organization committed to transforming lives through compassion, empowerment, and sustainable development.",
  url: "https://thesamsonfoundation.org", // TODO: replace with the real domain once registered
  email: "thesamsonfoundation@gmail.com",
  phones: [
    { display: "0706 267 2205", tel: "+2347062672205" },
    { display: "0903 842 5082", tel: "+2349038425082" },
  ],
  whatsapp: "+2347062672205", // TODO: confirm which number receives WhatsApp messages
  address: {
    street: "No. 26 NC Ali, Lassandi",
    landmark: "Opposite Jolly Nyame Stadium",
    state: "Taraba State",
    country: "Nigeria",
  },
  impactLine:
    "Through strategic partnerships and community-driven interventions, The Samson Foundation has positively impacted more than 2,000 lives.",
} as const;

export const addressLine = `${site.address.street}, ${site.address.landmark}, ${site.address.state}, ${site.address.country}`;

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
