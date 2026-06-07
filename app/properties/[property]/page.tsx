import type { Metadata } from "next";
import PropertySchema from "../../../components/PropertySchema";
import BackButton from "../../../components/BackButton";
import { properties } from "../../../data/properties";
import PropertyGallery from "../../../components/PropertyGallery";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ property: string }>;
}): Promise<Metadata> {
  const { property } = await params;

  const data = properties.find(
    (item) => item.slug === property
  );

  if (!data) {
    return {
      title: "Property Not Found | Prime Axis Realty",
    };
  }

  const propertyType =
    data.configurations
      ?.map((c) => c.type)
      .join(", ") || "Luxury Property";

  return {
    title: `${data.title} | ${propertyType} in ${data.location} | Prime Axis Realty`,

    description: `${data.title} offers premium ${propertyType} residences in ${data.location}. Starting from ${data.configurations[0].price}. Explore luxury living with Prime Axis Realty.`,

    alternates: {
      canonical: `https://primeaxisrealty.in/properties/${data.slug}`,
    },

    openGraph: {
      title: `${data.title} | Prime Axis Realty`,
      description: data.overview,
      url: `https://primeaxisrealty.in/properties/${data.slug}`,
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
      <PropertySchema property={data} />
      <BackButton />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <img
          src={data.mainImage}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d0a]/95 via-[#050d0a]/60 to-[#050d0a]/20" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
            <div className="max-w-4xl">
              <p className="text-[#daa520] uppercase tracking-[5px] text-sm font-semibold">
                {data.status}
              </p>

              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl leading-tight font-[family-name:var(--font-cinzel)]">
  {data.title}
  <span className="block text-[#daa520] text-2xl md:text-3xl mt-4">
    {data.configurations.map(c => c.type).join(" • ")} in {data.location}
  </span>
</h1>

              <p className="mt-8 text-xl text-[#e5e5e5] flex items-center gap-3">
                {data.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
<section className="px-6 lg:px-12 py-24">

  <div className="max-w-7xl mx-auto">

    <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-md">

      {/* Gold Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#daa520]/10 blur-[180px]" />

      <div className="relative z-10 p-10 lg:p-16">

        <p className="text-[#daa520] uppercase tracking-[6px] text-sm">
          Signature Living
        </p>

        <h2 className="mt-6 text-4xl lg:text-6xl leading-tight font-[family-name:var(--font-cinzel)] max-w-5xl">
          {data.title}
        </h2>

        <div className="w-24 h-[2px] bg-[#daa520] mt-8" />

        <p className="mt-10 text-[#d7d7d7] text-lg lg:text-xl leading-10 max-w-5xl">
          {data.overview}
        </p>

        {/* Property Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

          <div className="group bg-black/20 border border-white/10 rounded-[30px] p-8 hover:border-[#daa520]/50 transition duration-500">

            <p className="text-[#888] uppercase tracking-[3px] text-xs">
              Location
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              {data.location}
            </h3>

          </div>

          <div className="group bg-black/20 border border-white/10 rounded-[30px] p-8 hover:border-[#daa520]/50 transition duration-500">

            <p className="text-[#888] uppercase tracking-[3px] text-xs">
              Status
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              {data.status}
            </h3>

          </div>

          <div className="group bg-black/20 border border-white/10 rounded-[30px] p-8 hover:border-[#daa520]/50 transition duration-500">

            <p className="text-[#888] uppercase tracking-[3px] text-xs">
              Developer
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              {data.developer}
            </h3>

          </div>

          <div className="group bg-black/20 border border-white/10 rounded-[30px] p-8 hover:border-[#daa520]/50 transition duration-500">

            <p className="text-[#888] uppercase tracking-[3px] text-xs">
              Starting Price
            </p>

            <h3 className="mt-4 text-2xl text-[#daa520] font-semibold">
              {data.configurations[0].price}
            </h3>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      <PropertyGallery title={data.title} gallery={data.gallery} />

      {/* CONFIGURATIONS */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[#daa520] uppercase tracking-[5px] text-sm">
              Configurations
            </p>

            <h2 className="mt-5 text-4xl lg:text-5xl font-[family-name:var(--font-cinzel)]">
              Available Residences
            </h2>
          </div>

          <div className="space-y-6">
            {data.configurations.map((config, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[30px] p-8 lg:p-10 backdrop-blur-md"
              >
                <div className="grid lg:grid-cols-3 gap-10 items-center">
                  {/* Type */}
                  <div>
                    <p className="text-[#8f8f8f] uppercase tracking-[3px] text-xs">
                      Residence Type
                    </p>

                    <h3 className="mt-3 text-3xl font-[family-name:var(--font-cinzel)]">
                      {config.type}
                    </h3>
                  </div>

                  {/* Area */}
                  <div>
                    <p className="text-[#8f8f8f] uppercase tracking-[3px] text-xs">
                      Area Details
                    </p>

                    <div className="mt-4 space-y-2">
                      <p className="text-[#d7d7d7] text-lg">
                        Super Area: {config.superArea}
                      </p>

                      <p className="text-[#d7d7d7] text-lg">
                        Carpet Area: {config.carpetArea}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="lg:text-right">
                    <p className="text-[#8f8f8f] uppercase tracking-[3px] text-xs">
                      Starting Price
                    </p>

                    <h3 className="mt-3 text-4xl text-[#daa520] font-semibold">
                      {config.price}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="px-6 lg:px-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-16 text-center">
            <p className="text-[#daa520] uppercase tracking-[5px] text-sm">
              Amenities
            </p>

            <h2 className="mt-5 text-4xl lg:text-5xl font-[family-name:var(--font-cinzel)]">
              Luxury Lifestyle Features
            </h2>
          </div>

          {/* Moving Amenities */}
          <div className="relative overflow-hidden">
            {/* Blur Effect Left */}
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#050d0a] to-transparent z-10" />

            {/* Blur Effect Right */}
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#050d0a] to-transparent z-10" />

            {/* Marquee */}
            <div className="flex gap-14 animate-[marquee_35s_linear_infinite] min-w-max">
              {[...data.amenities, ...data.amenities].map((amenity, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center min-w-[140px] group"
                >
                  {/* Icon Circle */}
                  <div className="w-20 h-20  flex items-center justify-center shadow-2xl  group-hover:scale-180 transition duration-300">
                    <img
                      src={amenity.icon}
                      alt={amenity.name}
                      className="w-25 h-25 object-contain object-center"
                    />
                  </div>

                  {/* Amenity Name */}
                  <p className="mt-1 text-[#f5f5f5] text-base font-medium tracking-wide leading-7">
                    {amenity.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 pb-28">
        <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-10 lg:p-16 backdrop-blur-md">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <p className="text-[#daa520] uppercase tracking-[5px] text-sm">
                Prime Axis Realty
              </p>

              <h2 className="mt-5 text-4xl lg:text-5xl leading-tight font-[family-name:var(--font-cinzel)]">
                Need More Information For this Property ?
              </h2>

              <p className="mt-6 text-[#d7d7d7] text-lg leading-8">
                Connect with our experts to explore premium residences and
                experience luxury living in Tricity.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-5 lg:justify-end">
              <a
                href="https://wa.me/919888705519"
                target="_blank"
                className="bg-[#daa520] text-[#081510] px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-2xl"
              >
                WhatsApp Inquiry
              </a>

              <a
                href="tel:+919888705519"
                className="bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl backdrop-blur-md hover:bg-white/20 transition duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
