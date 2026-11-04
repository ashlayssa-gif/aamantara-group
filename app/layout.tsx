import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AAMANTARA GROUP — Building Communities Through Enterprise",
  description:
    "A multi-sector conglomerate across Finance, Service, Education, and Hospitality. Connecting Nepal to the world.",
  keywords: [
    "Aamantara Group",
    "Nepal conglomerate",
    "Smart Trust",
    "DECC Nepal",
    "Aranya Hotel",
    "GSG Service Nepal",
    "Nepal recruitment",
    "Moxy Pokhara",
  ],
  openGraph: {
    title: "AAMANTARA GROUP",
    description: "Building Communities Through Enterprise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}