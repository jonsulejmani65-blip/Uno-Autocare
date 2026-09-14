import { siteConfig } from "@/lib/site-config";

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: {
      "@type": "AutoRepair",
      name: siteConfig.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.contact.address.city,
        addressRegion: siteConfig.contact.address.region,
        addressCountry: siteConfig.contact.address.country,
      },
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Region Solothurn",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
