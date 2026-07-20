"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
  className="fixed top-0 left-0 right-0 z-50 w-full bg-[#091E19] border-b border-[var(--theme-border)] transition-all duration-300"
      style={{
        boxShadow: "var(--nav-shadow)",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-10 py-2 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center min-w-[120px] md:min-w-[220px]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Prime Axis Realty"
              width={115}
              height={115}
              className="object-contain"
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center gap-14">
            <Link
              href="/"
              className="nav-item  text-[var(--theme-text)] text-[15px] tracking-[2.5px] uppercase"
            >
              Home
            </Link>

            <Link
              href="/properties?category=residential"
              className="nav-item text-[var(--theme-text)] text-[15px] tracking-[2.5px] uppercase"
            >
              Properties
            </Link>

            <Link
              href="/contact"
              className="nav-item text-[var(--theme-text)] text-[15px] tracking-[2.5px] uppercase"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CALL BUTTON */}
        <div className="hidden md:flex items-center justify-end min-w-[220px]">
          <a
            href="tel:+919888705519"
            className="relative rounded-full bg-[#FEFAE9] px-4 py-2 font-mono font-bold text-[#091E19] transition-colors duration-300 ease-linear before:absolute before:right-1/2 before:top-1/2 before:-z-[1] before:h-3/4 before:w-2/3 before:origin-centter before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping before:rounded-full before:bg-[#FEFAE9] hover:bg-[#D4AF37] hover:before:[#FEFAE9]"
          >
            Call Us
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[var(--theme-text)] text-3xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden relative z-[100] bg-[var(--theme-card)] border-t border-[var(--theme-border)] px-6 py-6 flex flex-col gap-5 backdrop-blur-md">
          <Link
            href="/"
            className="text-[var(--theme-text)] hover:text-[#daa520] transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/properties?category=residential"
            className="text-[var(--theme-text)] hover:text-[#daa520] transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Properties
          </Link>

          <Link
            href="/contact"
            className="text-[var(--theme-text)] hover:text-[#daa520] transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <a
            href="tel:+919888705519"
            className="bg-[#daa520] text-[#081510] px-5 py-3 rounded-2xl text-center font-semibold"
          >
            Call Us
          </a>
        </div>
      )}
    </nav>
  );
}
