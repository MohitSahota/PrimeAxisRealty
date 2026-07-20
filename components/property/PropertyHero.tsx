interface PropertyHeroProps {
  title: string;
  location: string;
  status: string;
  mainImage: string;
  configurations: {
    type: string;
  }[];
}

export default function PropertyHero({
  title,
  location,
  status,
  mainImage,
  configurations,
}: PropertyHeroProps) {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <img
        src={mainImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050d0a]/95 via-[#050d0a]/60 to-[#050d0a]/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
          <div className="max-w-4xl">
            <p className="text-[#daa520] uppercase tracking-[5px] text-sm font-semibold">
              {status}
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl leading-tight font-[family-name:var(--font-cinzel)]">
              {title}
              <span className="block text-[#daa520] text-2xl md:text-3xl mt-4">
                {configurations.map((c) => c.type).join(" • ")} in {location}
              </span>
            </h1>

            <p className="mt-8 text-xl text-[#e5e5e5] flex items-center gap-3">
              {location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}