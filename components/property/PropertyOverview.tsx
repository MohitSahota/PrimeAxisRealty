interface PropertyOverviewProps {
  title: string;
  overview: string;
  location: string;
  status: string;
  developer: string;
  startingPrice: string;
}

export default function PropertyOverview({
  title,
  overview,
  location,
  status,
  developer,
  startingPrice,
}: PropertyOverviewProps) {
  return (
    <section className="px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-md">

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#daa520]/10 blur-[180px]" />

          <div className="relative z-10 p-10 lg:p-16">

            <p className="text-[#daa520] uppercase tracking-[6px] text-sm">
              Signature Living
            </p>

            <h2 className="mt-6 text-4xl lg:text-6xl leading-tight font-[family-name:var(--font-cinzel)] max-w-5xl">
              {title}
            </h2>

            <div className="w-24 h-[2px] bg-[#daa520] mt-8" />

            <p className="mt-10 text-[#d7d7d7] text-lg lg:text-xl leading-10 max-w-5xl">
              {overview}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

              <div className="group bg-black/20 border border-white/10 rounded-[30px] p-8 hover:border-[#daa520]/50 transition duration-500">
                <p className="text-[#888] uppercase tracking-[3px] text-xs">
                  Location
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  {location}
                </h3>
              </div>

              <div className="group bg-black/20 border border-white/10 rounded-[30px] p-8 hover:border-[#daa520]/50 transition duration-500">
                <p className="text-[#888] uppercase tracking-[3px] text-xs">
                  Status
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  {status}
                </h3>
              </div>

              <div className="group bg-black/20 border border-white/10 rounded-[30px] p-8 hover:border-[#daa520]/50 transition duration-500">
                <p className="text-[#888] uppercase tracking-[3px] text-xs">
                  Developer
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  {developer}
                </h3>
              </div>

              <div className="group bg-black/20 border border-white/10 rounded-[30px] p-8 hover:border-[#daa520]/50 transition duration-500">
                <p className="text-[#888] uppercase tracking-[3px] text-xs">
                  Starting Price
                </p>

                <h3 className="mt-4 text-2xl text-[#daa520] font-semibold">
                  {startingPrice}
                </h3>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}