import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { Inter, Cinzel, Geist } from "next/font/google";
import "./globals.css";
// import ThemeToggle from "../components/ThemeToggle";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title:
    "Prime Axis Realty | Luxury Properties in Chandigarh, Mohali & Panchkula",

  description:
    "Explore premium residential, commercial and investment properties in Chandigarh, Mohali and Panchkula. Prime Axis Realty helps you discover luxury homes, apartments, plots and commercial spaces across Tricity.",

  keywords: [
  "Prime Axis Realty",

  "Properties in Chandigarh",
  "Properties in Mohali",
  "Properties in Panchkula",

  "3 BHK Flats Chandigarh",
  "3 BHK Flats Mohali",

  "3+1 BHK Flats Chandigarh",
  "3+1 BHK Flats Mohali",

  "4 BHK Flats Chandigarh",
  "4 BHK Flats Mohali",

  "4+1 BHK Flats Chandigarh",
  "4+1 BHK Flats Mohali",

  "Luxury Apartments Chandigarh",
  "Luxury Apartments Mohali",

  "Luxury Floors Chandigarh",
  "Luxury Floors Mohali",

  "Penthouses Chandigarh",
  "Penthouses Mohali",

  "Farm Houses Chandigarh",
  "Luxury Farm Houses Punjab",

  "Residential Plots Chandigarh",
  "Residential Plots Mohali",
  "Residential Plots Panchkula",

  "Commercial SCO Mohali",
  "Commercial SCO Chandigarh",

  "Commercial Showrooms Chandigarh",
  "Commercial Showrooms Mohali",

  "Office Spaces Chandigarh",
  "Office Spaces Mohali",

  "Real Estate Chandigarh",
  "Real Estate Mohali",
  "Real Estate Panchkula",

  "Property Dealer Chandigarh",
  "Property Consultant Mohali",
  "Luxury Properties Tricity"
],

  metadataBase: new URL("https://www.primeaxisrealty.in"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Prime Axis Realty | Luxury Properties in Chandigarh, Mohali & Panchkula",

    description:
      "Discover premium residential, commercial and investment opportunities across Chandigarh, Mohali and Panchkula.",

    url: "https://www.primeaxisrealty.in",

    siteName: "Prime Axis Realty",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Prime Axis Realty",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/Favi.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" className={cn("font-sans", geist.variable)}>
    <body
      className={`${inter.variable} ${cinzel.variable}`}
    >
      <LocalBusinessSchema />

      <Navbar />

      {children}

      <Footer />

      {/* <ThemeToggle /> */}

    </body>
  </html>
);
}