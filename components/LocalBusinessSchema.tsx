export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",

    name: "Prime Axis Realty",

    url: "https://primeaxisrealty.in",

    telephone: "+91-9888705519",

    email: "info@primeaxisrealty.in",

    areaServed: [
      "Chandigarh",
      "Mohali",
      "Panchkula",
      "Zirakpur",
      "New Chandigarh",
      "Kharar",
      "Derabassi"
    ],

    description:
      "Prime Axis Realty specializes in luxury residential, commercial and investment properties across Chandigarh, Mohali and Panchkula.",

    sameAs: [
      "https://www.instagram.com/primeaxis_realtor/",
      "https://www.facebook.com/profile.php?id=61582163470031",
      "https://www.linkedin.com/company/primeaxisrealty",
      "https://www.youtube.com/@ThisIsPrimeAxisRealty"
    ]
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