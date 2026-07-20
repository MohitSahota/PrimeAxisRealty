import type { Configuration } from "../../data/types";

interface PropertyConfigurationsProps {
  configurations: Configuration[];
}

export default function PropertyConfigurations({
  configurations,
}: PropertyConfigurationsProps) {
  return (
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
          {configurations.map((config, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[30px] p-8 lg:p-10 backdrop-blur-md"
            >
              <div className="grid lg:grid-cols-3 gap-10 items-center">
                <div>
                  <p className="text-[#8f8f8f] uppercase tracking-[3px] text-xs">
                    Residence Type
                  </p>

                  <h3 className="mt-3 text-3xl font-[family-name:var(--font-cinzel)]">
                    {config.type}
                  </h3>
                </div>

                <div>
                  <p className="text-[#8f8f8f] uppercase tracking-[3px] text-xs">
                    Area Details
                  </p>

                  <div className="mt-4 space-y-2">
                    <p className="text-[#d7d7d7] text-lg">
                      Super Area: {config.superArea}
                    </p>
                    {config.coveredArea && (
                      <p className="text-[#d7d7d7] text-lg">
                        Covered Area: {config.coveredArea}
                      </p>
                    )}
                    <p className="text-[#d7d7d7] text-lg">
                      Carpet Area: {config.carpetArea}
                    </p>
                  </div>
                </div>

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
  );
}
