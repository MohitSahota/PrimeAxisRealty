export default function PropertyCTA() {
  return (
    <section className="px-6 lg:px-12 pb-28">
      <div className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-10 lg:p-16 backdrop-blur-md">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <p className="text-[#daa520] uppercase tracking-[5px] text-sm">
              Prime Axis Realty
            </p>

            <h2 className="mt-5 text-4xl lg:text-5xl leading-tight font-[family-name:var(--font-cinzel)]">
              Need More Information For this Property ?
            </h2>

            <p className="mt-6 text-[#d7d7d7] text-lg leading-8">
              Connect with our experts to explore premium residences and
              experience luxury living in Tricity.
            </p>
          </div>

          <div className="flex flex-wrap gap-5 lg:justify-end">
            <a
              href="https://wa.me/919888705519"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#daa520] text-[#081510] px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-2xl"
            >
              WhatsApp Inquiry
            </a>

            <a
              href="tel:+919888705519"
              className="bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl backdrop-blur-md hover:bg-white/20 transition duration-300"
            >
              Call Now
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}