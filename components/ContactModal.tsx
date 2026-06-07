"use client";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">

      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl rounded-[40px] overflow-hidden border border-white/10 bg-[#081510] shadow-[0_20px_100px_rgba(218,165,32,0.15)]">

        {/* Gold Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] h-[150px] bg-[#daa520]/20 blur-[100px]" />

        <div className="relative p-10">

          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl"
          >
            ✕
          </button>

          <p className="text-[#daa520] uppercase tracking-[5px] text-sm text-center">
            Prime Axis Realty
          </p>

          <h2 className="mt-4 text-center text-4xl font-[family-name:var(--font-cinzel)] text-white">
            Get In Touch
          </h2>

          <p className="mt-4 text-center text-[#bcbcbc]">
            Choose your preferred way to connect with us.
          </p>

          <div className="mt-10 grid gap-5">

            {/* WhatsApp */}
            <a
              href="https://wa.me/919888705519"
              target="_blank"
              className="group flex items-center gap-5 rounded-[24px] bg-white/5 border border-white/10 p-5 hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/15 flex items-center justify-center text-3xl">
                💬
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">
                  WhatsApp Us
                </h3>

                <p className="text-[#bcbcbc] text-sm">
                  Instant response from our team
                </p>
              </div>
            </a>

            {/* Call */}
            <a
              href="tel:+919888705519"
              className="group flex items-center gap-5 rounded-[24px] bg-white/5 border border-white/10 p-5 hover:border-[#daa520] hover:bg-[#daa520]/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#daa520]/15 flex items-center justify-center text-3xl">
                📞
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">
                  Call Us
                </h3>

                <p className="text-[#bcbcbc] text-sm">
                  +91 98887 05519
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@primeaxisrealty.in"
              className="group flex items-center gap-5 rounded-[24px] bg-white/5 border border-white/10 p-5 hover:border-[#daa520] hover:bg-[#daa520]/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#daa520]/15 flex items-center justify-center text-3xl">
                ✉️
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">
                  Email Us
                </h3>

                <p className="text-[#bcbcbc] text-sm">
                  info@primeaxisrealty.in
                </p>
              </div>
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}