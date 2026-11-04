"use client";

import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const links = [
    { name: "About", href: "/about" },
    { name: "Companies", href: "/companies" },
    { name: "Achievements", href: "/achievements" },
    { name: "Growth", href: "/growth" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <section className="relative bg-white min-h-screen overflow-hidden flex">
      
      {/* LEFT PANEL — Navigation */}
      <aside className="hidden lg:flex w-[320px] flex-col justify-center items-center px-8 py-16 bg-white border-r border-gray-100 z-30 relative shrink-0">
        <div className="absolute top-16 left-0 right-0 flex justify-center">
          <Link href="/" className="flex flex-col items-center">
            <span className="text-2xl font-bold tracking-[0.15em] text-[#111111]">AAMANTARA</span>
            <span className="text-[10px] tracking-[0.4em] text-[#F58220] mt-2 font-semibold">GROUP</span>
          </Link>
        </div>

        <nav className="flex flex-col items-center gap-8 w-full mt-10">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="group relative text-base font-medium tracking-wide text-gray-500 hover:text-[#111111]">
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#F58220] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <div className="w-12 h-px bg-gray-200 my-2" />
          <Link href="/contact" className="text-base font-semibold text-[#F58220] hover:text-[#D96C15]">Get in Touch</Link>
        </nav>

        <div className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-3">
          <span className="text-[9px] tracking-[0.3em] uppercase text-gray-400 font-semibold">EST. 2020</span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-gray-400 font-semibold">NEPAL</span>
        </div>
      </aside>

      {/* RIGHT PANEL — Image & Content */}
      <div className="relative flex-1 h-screen min-h-[700px]">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80')",
            borderBottomLeftRadius: "350px" 
          }}
        >
          {/* Increased radius to 350px to match the massive curve */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent rounded-bl-[350px]" />
        </div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 h-full w-full grid grid-cols-[15%_1fr] items-center">
          
          {/* Empty space for the gap */}
          <div></div>

          {/* Text Content */}
          <div className="flex flex-col pr-10">
            
            {/* HEADLINE */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-[-0.02em]">
                Building
                <br />
                communities
                <br />
                through <span className="text-[#F58220]">enterprise.</span>
              </h1>
            </div>

            {/* PARAGRAPH */}
            <div className="border-l-2 border-[#F58220] pl-6">
              <p className="text-base md:text-lg text-white/80 leading-relaxed font-light max-w-lg">
                A multi-sector group operating across Finance, Service,
                Education, and Hospitality — serving thousands of families
                across Nepal and beyond.
              </p>
            </div>

            {/* BUTTONS DIV CLASS */}
            <div 
              style={{ marginTop: "100px" }} 
              className="flex flex-col sm:flex-row items-start gap-10"
            >
              
              <Link
                href="/companies"
                className="group flex items-center gap-3 text-white hover:text-[#F58220] font-semibold text-xl border-b-2 border-[#F58220] pb-1 transition-all duration-500"
              >
                Explore Companies
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/about"
                className="group flex items-center gap-3 text-white/80 hover:text-white font-semibold text-xl border-b-2 border-transparent hover:border-white/50 pb-1 transition-all duration-500"
              >
                Our Story
              </Link>

            </div>

          </div>
        </div>

        {/* SCROLL CUE */}
        <div className="hidden lg:flex absolute bottom-10 right-12 z-20 items-center gap-4">
          <span className="text-[10px] tracking-[0.3em] font-semibold text-white/50">SCROLL</span>
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white">
            <ArrowDown size={18} />
          </div>
        </div>

      </div>
    </section>
  );
}