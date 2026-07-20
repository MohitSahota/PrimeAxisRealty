"use client";

import Link from "next/link";
import { properties } from "../data/properties";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ContactModal from "../components/ContactModal";
import PropertySearch from "../components/PropertySearch";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden pt-20 md:pt-24">
      {/* HERO */}
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#091E19]">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
        linear-gradient(
          90deg,
          rgba(9,30,25,.90) 0%,
          rgba(9,30,25,.78) 28%,
          rgba(9,30,25,.45) 55%,
          rgba(9,30,25,.12) 80%,
          rgba(9,30,25,0) 100%
        ),
        url('/images/hero-bg.png')
      `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div
            className="
      flex
      items-center

      h-[calc(100vh-80px)]

      min-h-[520px]
      sm:min-h-[620px]
      lg:min-h-[760px]
      "
          >
            <div className="w-full max-w-3xl">
              {/* Top Text */}

              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[1px] bg-[#D4AF37]" />

                <span
                  className="
            uppercase
            text-[#D4AF37]
            tracking-[3px]

            text-[11px]
            sm:text-xs
            lg:text-sm
          "
                >
                  Welcome To Prime Axis Realty
                </span>
              </div>

              {/* Heading */}

              <h1
                className="
          font-[family-name:var(--font-cinzel)]
          font-semibold
          text-white

          leading-tight

          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
              >
                Luxury Properties
                <br />
                In
                <span className="text-[#D4AF37]">
                  {" "}
                  Chandigarh,
                  <br />
                  Mohali & Panchkula
                </span>
              </h1>

              {/* Description */}

              <p
                className="
          mt-7

          text-white/80

          text-sm
          sm:text-base
          lg:text-lg

          leading-7

          max-w-2xl
        "
              >
                Discover premium apartments, luxury floors, residential plots,
                commercial spaces and investment opportunities across
                Chandigarh, Mohali & Panchkula with trusted guidance from Prime
                Axis Realty.
              </p>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/properties?category=residential"
                  className="
                            bg-[#D4AF37]
                            text-[#091E19]
                            px-7
                            py-4
                            rounded-full
                            font-semibold
                            hover:scale-105
                            transition
                            "
                >
                  Explore Properties
                </Link>

                <button
                  onClick={() => setContactModalOpen(true)}
                  className="
                            backdrop-blur-xl
                            bg-white/10
                            border
                            border-white/20
                            text-white
                            px-7
                            py-4
                            rounded-full
                            hover:bg-white/20
                            transition
                            "
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH BAR */}
      <PropertySearch className="mt-10 px-6" />



      {/* FEATURED */}
      <section className="px-6 pb-28 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-[#daa520]" />

              <p className="text-[#daa520] uppercase tracking-[4px] text-sm">
                Featured Properties
              </p>

              <div className="w-12 h-[1px] bg-[#daa520]" />
            </div>

            <p className="text-[#333333] mt-6 max-w-2xl mx-auto leading-8">
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
                      className="mt-4 inline-flex items-center justify-center w-full bg-[#081510] text-white py-4 rounded-2xl hover:bg-[#daa520] hover:text-[#081510] transition duration-300 font-semibold"
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
              Prime Axis Realty specializes in premium residential and
              commercial properties across Chandigarh, Mohali and Panchkula. Our
              portfolio includes luxury 3 BHK flats, 3+1 BHK apartments, 4 BHK
              residences, 4+1 BHK luxury homes, penthouses, independent floors,
              residential plots and farm houses.
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
