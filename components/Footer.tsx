export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-[var(--theme-border)] bg-[#091E19] backdrop-blur-xl overflow-hidden">
      {/* Gold Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#daa520] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-[family-name:var(--font-cinzel)] text-[var(--theme-text)]">
              Prime Axis Realty
            </h3>

            <p className="mt-2 text-sm text-[var(--theme-text-secondary)]">
              Residential • Commercial • Investment Properties Across Tricity
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-[2px]">
            <a
              href="/"
              className="text-[var(--theme-text-secondary)] hover:text-[#daa520] transition"
            >
              Home
            </a>

            <a
              href="/properties?category=residential"
              className="text-[var(--theme-text-secondary)] hover:text-[#daa520] transition"
            >
              Properties
            </a>

            <a
              href="/contact"
              className="text-[var(--theme-text-secondary)] hover:text-[#daa520] transition"
            >
              Contact
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
  href="https://www.instagram.com/primeaxis_realtor/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full border border-[var(--theme-border)] flex items-center justify-center hover:border-[#dd2a7b] hover:bg-gradient-to-r hover:from-[#f58529]/10 hover:via-[#dd2a7b]/10 hover:to-[#515bd4]/10 transition-all duration-300"
>
  <img
    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
    alt="Instagram"
    className="w-4 h-4"
  />
</a>

            <a
              href="https://www.facebook.com/profile.php?id=61582163470031"
              className="w-10 h-10 rounded-full border border-[var(--theme-border)] flex items-center justify-center hover:border-[#1877F2] hover:bg-[#1877F2]/10 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-4 h-4"
              />
            </a>

            <a
              href="https://www.youtube.com/@ThisIsPrimeAxisRealty"
              className="w-10 h-10 rounded-full border border-[var(--theme-border)] flex items-center justify-center hover:border-[#FF0000] hover:bg-[#FF0000]/10 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="Youtube"
                className="w-4 h-4"
              />
            </a>

            <a
              href="https://wa.me/919888705519"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[var(--theme-border)] flex items-center justify-center hover:border-[#25D366] hover:bg-[#25D366]/10 transition"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                className="w-4 h-4"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[var(--theme-border)] my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex flex-wrap justify-center gap-6 text-[var(--theme-text-secondary)]">
            <a
              href="tel:+919888705519"
              className="hover:text-[#daa520] transition"
            >
              +91 98887 05519
            </a>

            <a
              href="mailto:info@primeaxisrealty.in"
              className="hover:text-[#daa520] transition"
            >
              info@primeaxisrealty.in
            </a>

            <a
              href="https://www.primeaxisrealty.in"
              target="_blank"
              className="hover:text-[#daa520] transition"
            >
              www.primeaxisrealty.in
            </a>
          </div>

          <p className="text-[var(--theme-text-secondary)] text-center">
            © 2026 Prime Axis Realty. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
