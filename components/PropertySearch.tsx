"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PropertySearchProps {
  className?: string;
}

export default function PropertySearch({
  className = "",
}: PropertySearchProps) {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState("");
  return (
    <section className={`relative z-20 ${className}`}>
      <div
        className="
          max-w-7xl
          mx-auto
          rounded-[32px]
          border border-white/10
          bg-[#091E19]/55
          backdrop-blur-3xl
          supports-[backdrop-filter]:bg-[#091E19]/45
          p-5
          lg:p-6
        "
      >
        <form
          action="/properties"
          method="GET"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          <input type="hidden" name="location" value={location} />
          <input type="hidden" name="type" value={type} />
          <input type="hidden" name="budget" value={budget} />
          <input type="hidden" name="status" value={status} />
          
          {/* LOCATION */}
<div
  className="
    relative
    rounded-2xl
    border border-white/10
    bg-white/5
    backdrop-blur-2xl
    px-5
    py-4
    transition-all
    duration-300
    hover:border-[#D4AF37]/50
    hover:bg-white/10
    focus-within:border-[#D4AF37]
    focus-within:shadow-[0_0_25px_rgba(212,175,55,.18)]
  "
>
  <p className="text-white text-sm font-semibold tracking-wide">
    Location
  </p>

  <Select
    value={location}
    onValueChange={(value) => setLocation(value ?? "")}
  >
    <SelectTrigger
      className="
        mt-3
        h-auto
        w-full
        border-none
        bg-transparent
        p-0
        text-white
        shadow-none
        ring-0
        focus:ring-0
        focus:ring-offset-0
        data-[placeholder]:text-white/60

        [&_svg]:text-[#FFFFFF]
    [&_svg]:stroke-[#FFFFFF]
    [&_svg]:opacity-100
      "
    >
      <SelectValue placeholder="Select Location" />
    </SelectTrigger>

    <SelectContent
      className="
        border border-[#D4AF37]/20
        bg-[#091E19]
        text-white
        backdrop-blur-xl
      "
    >
      <SelectItem value="Chandigarh">Chandigarh</SelectItem>
      <SelectItem value="Mohali">Mohali</SelectItem>
      <SelectItem value="Panchkula">Panchkula</SelectItem>
    </SelectContent>
  </Select>
</div>

          {/* PROPERTY TYPE */}
          <div
            className="
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              px-5
              py-4
              transition-all
              duration-300
              hover:border-[#D4AF37]/40
              hover:bg-white/10
            "
          >
            <p className="text-white text-sm font-semibold tracking-wide">
              Property Type
            </p>

            <Select
  value={type || "all"}
  onValueChange={(value) => {
    const selected = value ?? "all";
    setType(selected === "all" ? "" : selected);
  }}
>
  <SelectTrigger
    className="
      mt-3
      h-auto
      w-full
      border-none
      bg-transparent
      p-0
      text-white
      shadow-none
      ring-0
      focus:ring-0
      focus:ring-offset-0
      data-[placeholder]:text-white/60

      [&_svg]:text-[#FFFFFF]
    [&_svg]:stroke-[#FFFFFF]
    [&_svg]:opacity-100
    "
  >
    <SelectValue placeholder="All" />
  </SelectTrigger>

  <SelectContent
    className="
      border border-[#D4AF37]/20
      bg-[#091E19]
      text-white
      backdrop-blur-xl
    "
  >
    <SelectItem value="All">All Types</SelectItem>
    <SelectItem value="3BHK">3BHK</SelectItem>
    <SelectItem value="3+1 BHK">3+1 BHK</SelectItem>
    <SelectItem value="4BHK">4BHK</SelectItem>
    <SelectItem value="4+1 BHK">4+1 BHK</SelectItem>
  </SelectContent>
</Select>
          </div>

          {/* BUDGET */}
          <div
            className="
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              px-5
              py-4
              transition-all
              duration-300
              hover:border-[#D4AF37]/40
              hover:bg-white/10
            "
          >
            <p className="text-white text-sm font-semibold tracking-wide">
              Budget Range
            </p>

            <Select
  value={budget || "All"}
  onValueChange={(value) => {
    const selected = value ?? "all";
    setBudget(selected === "all" ? "" : selected);
  }}
>
  <SelectTrigger
    className="
      mt-3
      h-auto
      w-full
      border-none
      bg-transparent
      p-0
      text-white
      shadow-none
      ring-0
      focus:ring-0
      focus:ring-offset-0
      data-[placeholder]:text-white/60

      [&_svg]:text-[#FFFFFF]
    [&_svg]:stroke-[#FFFFFF]
    [&_svg]:opacity-100
    "
  >
    <SelectValue placeholder="Min - Max" />
  </SelectTrigger>

  <SelectContent
    className="
      border border-[#D4AF37]/20
      bg-[#091E19]
      text-white
      backdrop-blur-xl
    "
  >
    <SelectItem value="all">Min - Max</SelectItem>

    <SelectItem value="under1">
      Under 1 Cr
    </SelectItem>

    <SelectItem value="1to2">
      1 Cr - 2 Cr
    </SelectItem>

    <SelectItem value="above2">
      Above 2 Cr
    </SelectItem>
  </SelectContent>
</Select>
          </div>

          {/* STATUS */}
          <div
            className="
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              px-5
              py-4
              transition-all
              duration-300
              hover:border-[#D4AF37]/40
              hover:bg-white/10
            "
          >
            <p className="text-white text-sm font-semibold tracking-wide">
              Property Status
            </p>

            <Select
  value={status || "All"}
  onValueChange={(value) => {
    const selected = value ?? "all";
    setStatus(selected === "all" ? "" : selected);
  }}
>
  <SelectTrigger
    className="
      mt-3
      h-auto
      w-full
      border-none
      bg-transparent
      p-0
      text-white
      shadow-none
      ring-0
      focus:ring-0
      focus:ring-offset-0
      data-[placeholder]:text-white/60

      [&_svg]:text-[#FFFFFF]
    [&_svg]:stroke-[#FFFFFF]
    [&_svg]:opacity-100
    "
  >
    <SelectValue placeholder="Any" />
  </SelectTrigger>

  <SelectContent
    className="
      border border-[#D4AF37]/20
      bg-[#091E19]
      text-white
      backdrop-blur-xl
    "
  >
    <SelectItem value="all">Any</SelectItem>

    <SelectItem value="Ready To Move">
      Ready To Move
    </SelectItem>

    <SelectItem value="Under Construction">
      Under Construction
    </SelectItem>
  </SelectContent>
</Select>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
              min-h-[72px]
              rounded-2xl
              bg-gradient-to-r
              from-[#D4AF37]
              via-[#E9C86A]
              to-[#D4AF37]
              text-[#091E19]
              font-semibold
              shadow-[0_15px_35px_rgba(212,175,55,.35)]
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:shadow-[0_20px_45px_rgba(212,175,55,.45)]
            "
          >
            Search Properties
          </button>
        </form>
      </div>
    </section>
  );
}
