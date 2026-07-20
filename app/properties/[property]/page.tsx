import type { Metadata } from "next";
import PropertySchema from "../../../components/PropertySchema";
import BackButton from "../../../components/BackButton";
import { properties } from "../../../data/properties";
import PropertyGallery from "../../../components/PropertyGallery";
import PropertyHero from "../../../components/property/PropertyHero";
import PropertyOverview from "../../../components/property/PropertyOverview";
import PropertyConfigurations from "../../../components/property/PropertyConfigurations";
import PropertyAmenities from "../../../components/property/PropertyAmenities";
import PropertyCTA from "../../../components/property/PropertyCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ property: string }>;
}): Promise<Metadata> {
  const { property } = await params;

  const data = properties.find((item) => item.slug === property);

  if (!data) {
    return {
      title: "Property Not Found | Prime Axis Realty",
    };
  }

  const propertyType =
    data.configurations?.map((c) => c.type).join(", ") || "Luxury Property";

  return {
    title: `${data.title} | ${propertyType} in ${data.location} | Prime Axis Realty`,

    description: `${data.title} offers premium ${propertyType} residences in ${data.location}. Starting from ${data.configurations[0].price}. Explore luxury living with Prime Axis Realty.`,

    alternates: {
      canonical: `https://www.primeaxisrealty.in/properties/${data.slug}`,
    },

    openGraph: {
      title: `${data.title} | Prime Axis Realty`,
      description: data.overview,
      url: `https://www.primeaxisrealty.in/properties/${data.slug}`,
      images: [
        {
          url: data.mainImage,
        },
      ],
    },
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ property: string }>;
}) {
  const { property } = await params;

  const data = properties.find((item) => item.slug === property);

  if (!data) {
    return (
      <main className="min-h-screen bg-[#050d0a] text-white flex items-center justify-center">
        <h1 className="text-4xl font-[family-name:var(--font-cinzel)]">
          Property Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050d0a] text-white overflow-x-hidden">
      {/* PROPERTY SCHEMA */}
      <PropertySchema property={data} />

      {/* BACK BUTTON */}
      <BackButton />

      {/* HERO SECTION */}
      <PropertyHero
        title={data.title}
        location={data.location}
        status={data.status}
        mainImage={data.mainImage}
        configurations={data.configurations}
      />

      {/* OVERVIEW */}
      <PropertyOverview
        title={data.title}
        overview={data.overview}
        location={data.location}
        status={data.status}
        developer={data.developer}
        startingPrice={data.configurations[0].price}
      />

      {/* PROPERTY GALLERY */}

      <PropertyGallery title={data.title} gallery={data.gallery} />

      {/* PROPERTY CONFIGURATIONS */}
      <PropertyConfigurations configurations={data.configurations} />

      {/* AMENITIES */}
      <PropertyAmenities amenities={data.amenities} />

      {/* CTA */}
      <PropertyCTA />
    </main>
  );
}
