import Link from "next/link";
import { properties } from "../../data/properties";

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{
    location?: string;
    type?: string;
    budget?: string;
    status?: string;
    category?: string;
  }>;
}) {
  const params = await searchParams;

  const filteredProperties = properties.filter((property) => {
    const selectedCategory =
  params.category || "residential";

const matchesCategory =
  property.category === selectedCategory;

    const matchesLocation =
      !params.location || property.location === params.location;

    const matchesStatus = !params.status || property.status === params.status;

    const matchesType =
      !params.type ||
      property.configurations.some((config) => config.type === params.type);

    const matchesBudget =
      !params.budget ||
      property.configurations.some((config) => {
        const cleanedPrice = config.price.replace(/[₹,\s]/g, "");

        const numericPrice = parseFloat(cleanedPrice);

        const priceInCrore = cleanedPrice.toLowerCase().includes("cr")
          ? numericPrice
          : numericPrice / 100;

        if (params.budget === "under1") {
          return priceInCrore < 1;
        }

        if (params.budget === "1to2") {
          return priceInCrore >= 1 && priceInCrore <= 2;
        }

        if (params.budget === "above2") {
          return priceInCrore > 2;
        }

        return true;
      });

    return matchesLocation && matchesStatus && matchesType && matchesBudget &&
  matchesCategory
  });

  return (
    <main className="min-h-screen px-3 md:px-6 py-20 overflow-x-hidden text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto">

{/* PROPERTY CATEGORY */}
<div className="mb-4">

  <div className="max-w-8xl mx-auto">

    <div className="grid grid-cols-3 bg-[var(--theme-card)] border border-[var(--theme-border)] rounded-[24px] md:rounded-[50px] p-1 w-full overflow-hidden">

      <Link
  href="/properties?category=residential"
  className={`text-center py-3 md:py-5 px-1 rounded-[20px] md:rounded-[50px] text-[11px] sm:text-sm md:text-base font-semibold transition duration-300 ${
    (params.category ?? "residential") === "residential"
      ? "bg-[#daa520] text-[#081510]"
      : "text-[var(--tab-text)] hover:bg-[var(--theme-card)]"
  }`}
>
  Residential
</Link>

<Link
  href="/properties?category=land"
  className={`text-center py-3 md:py-5 px-1 rounded-[20px] md:rounded-[50px] text-[11px] sm:text-sm md:text-base font-semibold transition duration-300 ${
    params.category === "land"
      ? "bg-[#daa520] text-[#081510]"
      : "text-[var(--tab-text)] hover:bg-[var(--theme-card)]"
  }`}
>
  Land
</Link>

<Link
  href="/properties?category=commercial"
  className={`text-center py-3 md:py-5 px-1 rounded-[20px] md:rounded-[50px] text-[11px] sm:text-sm md:text-base font-semibold transition duration-300 ${
    params.category === "commercial"
      ? "bg-[#daa520] text-[#081510]"
      : "text-[var(--tab-text)] hover:bg-[var(--theme-card)]"
  }`}
>
  Commercial
</Link>

    </div>

  </div>

</div>

        {filteredProperties.length > 0 ? (
          <div className="mt-20 space-y-24">
            {/* CHANDIGARH */}
            {filteredProperties.some(
              (property) => property.location === "Chandigarh",
            ) && (
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-[1px] bg-[#daa520]" />

                  <h2 className="text-2xl md:text-4xl text-[var(--page-text)] font-[family-name:var(--font-cinzel)]">
                    Chandigarh Properties
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-6 lg:gap-8">
                  {filteredProperties
                    .filter((property) => property.location === "Chandigarh")
                    .map((property, index) => (
                      <div
                        key={index}
                        className="bg-[var(--theme-card)] border border-[var(--theme-border)] rounded-[18px] md:rounded-[30px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition duration-500"
                      >
                        {/* IMAGE */}
                        <div className="relative overflow-hidden">
                          <img
                            src={property.mainImage}
                            alt={property.title}
                            className="h-[140px] md:h-[270px] w-full object-cover hover:scale-105 transition duration-700"
                          />

                          <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#0b2f24] text-white text-[9px] md:text-xs tracking-[1px] md:tracking-[2px] uppercase px-2 md:px-4 py-1 md:py-2 rounded-full">
                            {property.status}
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-3 md:p-6">
                          <h3 className="text-[var(--theme-text)] text-sm md:text-2xl font-semibold leading-snug">
                            {property.title}
                          </h3>

                          <p className="text-[var(--theme-text-secondary)] mt-3 flex items-center gap-2">
                            {property.location}
                          </p>

                          <div className="mt-6">
                            <p className="text-[var(--theme-text-secondary)] text-sm">Starting From</p>

                            <h4 className="text-[#daa520] text-sm sm:text-lg md:text-3xl font-bold mt-1">
                              {property.configurations[0].price}
                            </h4>
                          </div>

                          <Link
                            href={`/properties/${property.slug}`}
                            className="mt-4 md:mt-8 inline-flex items-center justify-center w-full bg-[#daa520] text-[#081510] py-2 md:py-4 rounded-xl md:rounded-2xl hover:bg-[#daa520] hover:text-[#081510] transition duration-300 text-xs md:text-base font-semibold"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* MOHALI */}
            {filteredProperties.some(
              (property) => property.location === "Mohali",
            ) && (
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-[1px] bg-[#daa520]" />

                  <h2 className="text-2xl md:text-4xl text-[var(--page-text)] font-[family-name:var(--font-cinzel)]">
                    Mohali Properties
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-6 lg:gap-8">
                  {filteredProperties
                    .filter((property) => property.location === "Mohali")
                    .map((property, index) => (
                      <div
                        key={index}
                        className="bg-[var(--theme-card)] border border-[var(--theme-border)] rounded-[18px] md:rounded-[30px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition duration-500"
                      >
                        {/* IMAGE */}
                        <div className="relative overflow-hidden">
                          <img
                            src={property.mainImage}
                            alt={property.title}
                            className="h-[140px] md:h-[270px] w-full object-cover hover:scale-105 transition duration-700"
                          />

                          <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#0b2f24] text-white text-[9px] md:text-xs tracking-[1px] md:tracking-[2px] uppercase px-2 md:px-4 py-1 md:py-2 rounded-full">
                            {property.status}
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-3 md:p-6">
                          <h3 className="text-[var(--theme-text)] text-sm md:text-2xl font-semibold leading-snug">
                            {property.title}
                          </h3>

                          <p className="text-[var(--theme-text-secondary)] mt-3 flex items-center gap-2">
                            {property.location}
                          </p>

                          <div className="mt-6">
                            <p className="text-[var(--theme-text-secondary)] text-sm">Starting From</p>

                            <h4 className="text-[#daa520] text-sm sm:text-lg md:text-3xl font-bold mt-1">
                              {property.configurations[0].price}
                            </h4>
                          </div>

                          <Link
                            href={`/properties/${property.slug}`}
                            className="mt-4 md:mt-8 inline-flex items-center justify-center w-full bg-[#daa520] text-[#081510] py-2 md:py-4 rounded-xl md:rounded-2xl hover:bg-[#daa520] hover:text-[#081510] transition duration-300 text-xs md:text-base font-semibold"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* PANCHKULA */}
            {filteredProperties.some(
              (property) => property.location === "Panchkula",
            ) && (
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-[1px] bg-[#daa520]" />

                  <h2 className="text-2xl md:text-4xl text-[var(--page-text)] font-[family-name:var(--font-cinzel)]">
                    Panchkula Properties
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-6 lg:gap-8">
                  {filteredProperties
                    .filter((property) => property.location === "Panchkula")
                    .map((property, index) => (
                      <div
                        key={index}
                        className="bg-[var(--theme-card)] border border-[var(--theme-border)] rounded-[18px] md:rounded-[30px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition duration-500"
                      >
                        {/* IMAGE */}
                        <div className="relative overflow-hidden">
                          <img
                            src={property.mainImage}
                            alt={property.title}
                            className="h-[140px] md:h-[270px] w-full object-cover hover:scale-105 transition duration-700"
                          />

                          <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#0b2f24] text-white text-[9px] md:text-xs tracking-[1px] md:tracking-[2px] uppercase px-2 md:px-4 py-1 md:py-2 rounded-full">
                            {property.status}
                          </div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-3 md:p-6">
                          <h3 className="text-[var(--theme-text)] text-sm md:text-2xl font-semibold leading-snug">
                            {property.title}
                          </h3>

                          <p className="text-[var(--theme-text-secondary)] mt-3 flex items-center gap-2">
                            {property.location}
                          </p>

                          <div className="mt-6">
                            <p className="text-[var(--theme-text-secondary)] text-sm">Starting From</p>

                            <h4 className="text-[#daa520] text-sm sm:text-lg md:text-3xl font-bold mt-1">
                              {property.configurations[0].price}
                            </h4>
                          </div>

                          <Link
                            href={`/properties/${property.slug}`}
                            className="mt-4 md:mt-8 inline-flex items-center justify-center w-full bg-[#daa520] text-[#081510] py-2 md:py-4 rounded-xl md:rounded-2xl hover:bg-[#daa520] hover:text-[#081510] transition duration-300 text-xs md:text-base font-semibold"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-24">
            <h2 className="text-2xl md:text-4xl text-[var(--page-text)] font-[family-name:var(--font-cinzel)]">
              No Properties Found
            </h2>

            <p className="mt-6 text-[var(--muted-text)]">
              We are working to add more inventory for you.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
