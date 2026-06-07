"use client";

import { useState } from "react";

interface PropertyGalleryProps {
  title: string;
  gallery: string[];
}

export default function PropertyGallery({
  title,
  gallery,
}: PropertyGalleryProps) {
  const [activeImage, setActiveImage] = useState(gallery?.[0]);

  const scrollLeft = () => {
    const container = document.getElementById("gallery-scroll");

    if (container) {
      container.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("gallery-scroll");

    if (container) {
      container.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-6 lg:px-12 pt-2 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-6 text-center">
          <p className="text-[#daa520] uppercase tracking-[5px] text-xl">
            Property Showcase
          </p>

          
        </div>

        {/* Main Wrapper */}
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-5 lg:p-6 backdrop-blur-md">
          <div className="space-y-6">
            {/* LEFT LARGE IMAGE */}
            <div
  className="
    relative
    overflow-hidden
    rounded-[32px]
    aspect-square
    sm:aspect-auto
    sm:h-[500px]
    lg:h-[700px]
  "
>
              <img
                src={activeImage}
                alt={title}
                className="w-full h-full object-cover transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-[#daa520] uppercase tracking-[4px] text-xs">
                  Prime Axis Realty
                </p>

                <h3 className="mt-3 text-3xl lg:text-4xl text-white font-[family-name:var(--font-cinzel)]">
                  {title}
                </h3>
              </div>
            </div>
            {/* THUMBNAILS BELOW MAIN IMAGE */}
            <div className="relative">
              {/* LEFT ARROW */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#daa520] hover:text-black transition duration-300"
              >
                ←
              </button>

              {/* THUMBNAILS */}
              <div
                id="gallery-scroll"
                className="flex gap-4 overflow-x-auto scrollbar-hide px-12 lg:px-16 py-2"
              >
                {gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(image)}
                    className={`flex-shrink-0 overflow-hidden rounded-[20px] border-2 transition duration-300
w-[90px] h-[90px]
sm:w-[120px] sm:h-[120px]
lg:w-[160px] lg:h-[160px]

          ${
            activeImage === image
              ? "border-[#daa520] scale-95 shadow-[0_0_25px_rgba(218,165,32,0.35)]"
              : "border-white/10 hover:border-white/30"
          }
        `}
                  >
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* RIGHT ARROW */}
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#daa520] hover:text-black transition duration-300"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
