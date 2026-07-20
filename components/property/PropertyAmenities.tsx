interface PropertyAmenitiesProps {
  amenities: {
    name: string;
    icon: string;
  }[];
}

export default function PropertyAmenities({
  amenities,
}: PropertyAmenitiesProps) {
  return (
    <section className="px-6 lg:px-12 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 text-center">
          <p className="text-[#daa520] uppercase tracking-[5px] text-sm">
            Amenities
          </p>

          <h2 className="mt-5 text-4xl lg:text-5xl font-[family-name:var(--font-cinzel)]">
            Luxury Lifestyle Features
          </h2>
        </div>

        <div className="relative overflow-hidden">

          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#050d0a] to-transparent z-10" />

          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#050d0a] to-transparent z-10" />

          <div className="flex gap-14 animate-[marquee_35s_linear_infinite] min-w-max">
            {[...amenities, ...amenities].map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center min-w-[140px] group"
              >
                <div className="w-20 h-20 flex items-center justify-center shadow-2xl group-hover:scale-180 transition duration-300">
                  <img
                    src={amenity.icon}
                    alt={amenity.name}
                    className="w-25 h-25 object-contain object-center"
                  />
                </div>

                <p className="mt-1 text-[#f5f5f5] text-base font-medium tracking-wide leading-7">
                  {amenity.name}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}