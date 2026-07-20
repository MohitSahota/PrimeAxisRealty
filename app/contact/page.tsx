export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden px-1 py-10">

      {/* HERO */}
      <section className="relative max-w-6xl mx-auto">

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#daa520]/10 blur-[160px]" />

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 lg:p-12">

          {/* Gold Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#daa520]/10 blur-[140px]" />

          {/* Decorative Circles */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full border border-[#daa520]/10" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-[#daa520]/10" />

          <div className="relative text-center">

            <div className="flex items-center justify-center gap-4 mt-6">

              <div className="w-16 md:w-24 h-[1px] bg-[#daa520]" />

              <span className="text-[#daa520] text-xs tracking-[4px] uppercase">
                Private Consultation
              </span>

              <div className="w-16 md:w-24 h-[1px] bg-[#daa520]" />

            </div>

            <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl leading-tight font-[family-name:var(--font-cinzel)] text-[var(--theme-text)]">

              Let's Start Your
              <br />
              Property Journey

            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-8 text-[var(--theme-text-secondary)]">

              Whether you're searching for a luxury residence,
              investment opportunity, premium plot or commercial space,
              our advisors are available to assist you throughout your
              real estate journey across Chandigarh, Mohali and Panchkula.

            </p>

            {/* CONTACT ACTIONS */}

            <div className="mt-10 space-y-4 max-w-2xl mx-auto">

              {/* WhatsApp */}

              <a
                href="https://wa.me/919888705519"
                target="_blank"
                className="group flex items-center justify-between rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5 hover:border-[#25D366] hover:-translate-y-1 transition-all duration-500"
              >

                <div className="text-left">

                  <p className="text-[#25D366] uppercase tracking-[3px] text-xs">
                    Instant Response
                  </p>

                  <h3 className="mt-2 text-2xl text-[var(--theme-text)] font-semibold">
                    WhatsApp Us
                  </h3>

                </div>

                <span className="text-3xl text-[#25D366]">
                  →
                </span>

              </a>

              {/* Call */}

              <a
                href="tel:+919888705519"
                className="group flex items-center justify-between rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5 hover:border-[#daa520] hover:-translate-y-1 transition-all duration-500"
              >

                <div className="text-left">

                  <p className="text-[#daa520] uppercase tracking-[3px] text-xs">
                    Direct Consultation
                  </p>

                  <h3 className="mt-2 text-2xl text-[var(--theme-text)] font-semibold">
                    Call +91 98887 05519
                  </h3>

                </div>

                <span className="text-3xl text-[#daa520]">
                  →
                </span>

              </a>

              {/* Email */}

              <a
                href="mailto:info@primeaxisrealty.in"
                className="group flex items-center justify-between rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5 hover:border-[#daa520] hover:-translate-y-1 transition-all duration-500"
              >

                <div className="text-left">

                  <p className="text-[#daa520] uppercase tracking-[3px] text-xs">
                    Detailed Inquiry
                  </p>

                  <h3 className="mt-2 text-lg md:text-2xl text-[var(--theme-text)] font-semibold break-all">
                    info@primeaxisrealty.in
                  </h3>

                </div>

                <span className="text-3xl text-[#daa520]">
                  →
                </span>

              </a>

            </div>

            {/* SERVICE AREAS */}

            <div className="mt-16 pt-10 border-t border-white/10">

              <p className="text-[#daa520] uppercase tracking-[4px] text-sm">
                Service Areas
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-4">

                <span className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-[var(--theme-text)]">
                  Chandigarh
                </span>

                <span className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-[var(--theme-text)]">
                  Mohali
                </span>

                <span className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-[var(--theme-text)]">
                  Panchkula
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}