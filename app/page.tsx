"use client";

import Link from "next/link";
import { properties } from "../data/properties";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ContactModal from "../components/ContactModal";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-[92vh] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(4,12,10,0.92) 22%, rgba(4,12,10,0.72) 42%, rgba(4,12,10,0.25) 100%), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-32 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1px] bg-[#daa520]" />

              <p className="text-[#daa520] uppercase tracking-[4px] text-sm font-semibold">
                Welcome To Prime Axis Realty
              </p>
            </div>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl leading-[1.08] font-[family-name:var(--font-cinzel)] text-white">
              Luxury Properties In
              <br />
              Chandigarh, Mohali &
              <span className="text-[#daa520]"> Panchkula</span>
            </h1>

            <p className="mt-8 text-[#d7d7d7] text-lg leading-9 max-w-2xl">
  Discover premium 3 BHK, 3+1 BHK, 4 BHK, 4+1 BHK apartments,
  luxury floors, penthouses, residential plots, SCOs, showrooms
  and office spaces across Chandigarh, Mohali and Panchkula with
  Prime Axis Realty.
</p>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/properties?category=residential"
                className="inline-flex items-center justify-center bg-[#daa520] text-[#081510] px-8 py-4 rounded-2xl font-semibold shadow-[0_0_40px_rgba(218,165,32,0.2)] hover:scale-105 transition duration-300"
              >
                Explore Properties
              </Link>

              <button
                onClick={() => setContactModalOpen(true)}
                className="border border-white/20 bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-2xl hover:bg-white/10 transition duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-[34px] shadow-[0_20px_80px_rgba(0,0,0,0.15)] p-5 lg:p-6">
          <form
            action="/properties"
            method="GET"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {/* LOCATION */}
            <div className="border border-[#ececec] rounded-2xl px-5 py-4">
              <p className="text-[#081510] text-sm font-semibold">
                Search Location
              </p>

              <select
                name="location"
                className="w-full mt-3 outline-none text-[#666] bg-transparent"
              >
                <option value="">Select Location</option>

                <option value="Chandigarh">Chandigarh</option>

                <option value="Mohali">Mohali</option>

                <option value="Panchkula">Panchkula</option>
              </select>
            </div>

            {/* PROPERTY TYPE */}
            <div className="border border-[#ececec] rounded-2xl px-5 py-4">
              <p className="text-[#081510] text-sm font-semibold">
                Property Type
              </p>

              <select
                name="type"
                className="w-full mt-3 outline-none text-[#666] bg-transparent"
              >
                <option value="">All Types</option>

                <option value="3BHK">3BHK</option>

                <option value="3+1 BHK">3+1 BHK</option>

                <option value="4BHK">4BHK</option>
              </select>
            </div>

            {/* BUDGET */}
            <div className="border border-[#ececec] rounded-2xl px-5 py-4">
              <p className="text-[#081510] text-sm font-semibold">
                Budget Range
              </p>

              <select
                name="budget"
                className="w-full mt-3 outline-none text-[#666] bg-transparent"
              >
                <option value="">Min - Max</option>

                <option value="under1">Under 1 Cr</option>

                <option value="1to2">1 Cr - 2 Cr</option>

                <option value="above2">Above 2 Cr</option>
              </select>
            </div>

            {/* STATUS */}
            <div className="border border-[#ececec] rounded-2xl px-5 py-4">
              <p className="text-[#081510] text-sm font-semibold">
                Property Status
              </p>

              <select
                name="status"
                className="w-full mt-3 outline-none text-[#666] bg-transparent"
              >
                <option value="">Any</option>

                <option value="Ready To Move">Ready To Move</option>

                <option value="Under Construction">Under Construction</option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-[#0b2f24] text-white rounded-2xl font-semibold hover:bg-[#14513f] transition duration-300 min-h-[70px]"
            >
              Search Properties
            </button>
          </form>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
                alt=""
                className="w-8 h-8 object-contain"
              />
            </div>

            <div>
              <h3 className="text-white text-xl font-semibold">
                Premium Properties
              </h3>

              <p className="text-[#bcbcbc] mt-3 leading-7">
                Handpicked premium properties for luxury lifestyles.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png"
                alt=""
                className="w-8 h-8 object-contain"
              />
            </div>

            <div>
              <h3 className="text-white text-xl font-semibold">
                Trusted & Transparent
              </h3>

              <p className="text-[#bcbcbc] mt-3 leading-7">
                Honest advice and transparent dealings always.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png"
                alt=""
                className="w-8 h-8 object-contain"
              />
            </div>

            <div>
              <h3 className="text-white text-xl font-semibold">
                Expert Guidance
              </h3>

              <p className="text-[#bcbcbc] mt-3 leading-7">
                Professional support at every step of your journey.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                alt=""
                className="w-8 h-8 object-contain"
              />
            </div>

            <div>
              <h3 className="text-white text-xl font-semibold">
                Dedicated Support
              </h3>

              <p className="text-[#bcbcbc] mt-3 leading-7">
                We are here before and after your property purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-[#daa520]" />

              <p className="text-[#daa520] uppercase tracking-[4px] text-sm">
                Featured Properties
              </p>

              <div className="w-12 h-[1px] bg-[#daa520]" />
            </div>

            <h2 className="mt-6 text-5xl font-[family-name:var(--font-cinzel)] text-white">
              Explore Luxury Properties In Chandigarh, Mohali & Panchkula
            </h2>

            <p className="text-[#bcbcbc] mt-6 max-w-2xl mx-auto leading-8">
              Discover handpicked luxury properties that match your lifestyle
              and aspirations.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {properties
              .filter((property) => property.featured)
              .map((property, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[30px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition duration-500"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={property.mainImage}
                      alt={property.title}
                      className="h-[270px] w-full object-cover hover:scale-105 transition duration-700"
                    />

                    <div className="absolute top-4 left-4 bg-[#0b2f24] text-white text-xs tracking-[2px] uppercase px-4 py-2 rounded-full">
                      Premium
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-[#081510] text-2xl font-semibold leading-snug">
                      {property.title}
                    </h3>

                    <p className="text-[#777] mt-3 flex items-center gap-2">
                      📍 {property.location}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <div>
                        <p className="text-[#888] text-sm">Starting From</p>

                        <h4 className="text-[#daa520] text-3xl font-bold mt-1">
                          {property.configurations[0].price}
                        </h4>
                      </div>
                    </div>

                    <Link
                      href={`/properties/${property.slug}`}
                      className="mt-8 inline-flex items-center justify-center w-full bg-[#081510] text-white py-4 rounded-2xl hover:bg-[#daa520] hover:text-[#081510] transition duration-300 font-semibold"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="px-6 pb-28">
  <div className="max-w-6xl mx-auto">

    <div className="text-center">

      <p className="text-[#daa520] uppercase tracking-[4px] text-sm">
        Prime Axis Realty
      </p>

      <h2 className="mt-5 text-4xl md:text-5xl font-[family-name:var(--font-cinzel)]">
        Trusted Real Estate Consultants In Tricity
      </h2>

    </div>

    <div className="mt-12 space-y-8 text-lg leading-9 text-[#bcbcbc]">

      <p>
        Prime Axis Realty specializes in premium residential and commercial
        properties across Chandigarh, Mohali and Panchkula. Our portfolio
        includes luxury 3 BHK flats, 3+1 BHK apartments, 4 BHK residences,
        4+1 BHK luxury homes, penthouses, independent floors, residential
        plots and farm houses.
      </p>

      <p>
        For commercial investors and business owners, we offer carefully
        selected SCOs, showrooms and office spaces in some of the most
        promising locations across Tricity. Whether you are searching for
        a dream home or a strategic investment opportunity, our team helps
        you make informed property decisions.
      </p>

      <p>
        With local market expertise, transparent guidance and access to
        premium developments, Prime Axis Realty is committed to helping
        buyers, investors and families discover the right property in
        Chandigarh, Mohali and Panchkula.
      </p>

    </div>

  </div>
</section>
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </main>
  );
}
