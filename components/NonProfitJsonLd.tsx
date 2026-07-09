import { site } from "@/lib/site";

/**
 * NGO / NonProfit structured data (schema.org). Rendered on the home
 * and contact pages.
 */
export default function NonProfitJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: site.name,
    alternateName: "Samson Foundation",
    slogan: site.motto,
    description: site.description,
    url: site.url,
    logo: `${site.url}/images/brand/samson-foundation-logo.png`,
    email: site.email,
    telephone: site.phones.map((p) => p.tel),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.landmark}`,
      addressRegion: site.address.state,
      addressCountry: "NG",
    },
    areaServed: "Nigeria",
    nonprofitStatus: "Nonprofit", // TODO: add CAC registration number when supplied
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
