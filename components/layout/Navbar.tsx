"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "About", href: "/about" },
    { name: "Companies", href: "/companies" },
    { name: "Achievements", href: "/achievements" },
    { name: "Growth", href: "/growth" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════════
          MOBILE NAVBAR — top bar
      ═══════════════════════════════════════════════ */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#111111]/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 h-16">
          <Link href="/" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-[#A88B4A] flex items-center justify-center text-white font-bold text-sm">
              A
            </span>
            <span className="text-base font-bold text-white">AAMANTARA</span>
          </Link>
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="bg-[#111111] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-white/80 hover:text-[#A88B4A] transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center bg-[#A88B4A] hover:bg-[#8B7332] text-white font-medium text-sm px-6 py-3 rounded-lg transition-colors mt-2"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}