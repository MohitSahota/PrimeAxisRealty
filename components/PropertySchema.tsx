export default function PropertySchema({
  property,
}: {
  property: any;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Residence",

    name: property.title,

    description: property.overview,

    image: property.mainImage,

    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
      addressCountry: "India",
    },

    offers: {
      "@type": "Offer",
      price: property.configurations?.[0]?.price || "",
      priceCurrency: "INR",
      availability:
        property.status === "Ready To Move"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}