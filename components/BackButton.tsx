"use client";

import Link from "next/link";

interface BackButtonProps {
  href?: string;
}

export default function BackButton({
  href = "/properties?category=residential",
}: BackButtonProps) {
  return (
    <div className="absolute top-35 left-5 lg:left-12 z-50">
      <Link
        href={href}
        className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full text-white hover:bg-[#daa520] hover:text-[#081510] transition duration-300"
      >
        <span className="text-xl">←</span>

      </Link>
    </div>
  );
}