"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white pt-24">
      
      {/* Footer Container with the subtle top-left curve */}
      <footer className="bg-[#111111] text-white rounded-tl-[60px] md:rounded-tl-[80px] pt-20 pb-12 overflow-hidden">
        
        <div className="container-custom">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16">
            
            {/* Column 1: Brand & Contact Info */}
            <div className="flex flex-col gap-8">
              <Link href="/" className="flex flex-col">
                <span className="text-3xl font-bold tracking-[0.15em] text-white">AAMANTARA</span>
                <span className="text-[10px] tracking-[0.4em] text-[#F58220] mt-1 font-semibold">GROUP</span>
              </Link>
              
              <div className="text-gray-400 text-sm leading-relaxed flex flex-col gap-4">
                <p>
                  Address: Kathmandu, Nepal<br />
                  Bagmati Province
                </p>
                <p className="text-base text-white font-light">
                  +977 1 XXXXXXX
                </p>
                <a href="mailto:info@aamantara.com" className="inline-block pb-1 border-b border-gray-600 hover:border-[#F58220] hover:text-white transition-all w-fit">
                  info@aamantara.com
                </a>
              </div>
            </div>

            {/* Column 2: Activities */}
            <div>
              {/* HARDCODED MARGIN ADDED HERE */}
              <h4 className="font-bold mb-8 text-base text-white" style={{ marginTop: "30px" }}>
                Activities
              </h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-400">
                <li><Link href="/sectors/finance" className="inline-block hover:text-[#F58220] transition-colors">Finance</Link></li>
                <li><Link href="/sectors/service" className="inline-block hover:text-[#F58220] transition-colors">Service</Link></li>
                <li><Link href="/sectors/education" className="inline-block hover:text-[#F58220] transition-colors">Education</Link></li>
                <li><Link href="/sectors/hospitality" className="inline-block hover:text-[#F58220] transition-colors">Hospitality</Link></li>
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              {/* HARDCODED MARGIN ADDED HERE */}
              <h4 className="font-bold mb-8 text-base text-white" style={{ marginTop: "30px" }}>
                Quick Links
              </h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-400">
                <li><Link href="/about" className="inline-block hover:text-[#F58220] transition-colors">About Us</Link></li>
                <li><Link href="/companies" className="inline-block hover:text-[#F58220] transition-colors">Companies</Link></li>
                <li><Link href="/achievements" className="inline-block hover:text-[#F58220] transition-colors">Achievements</Link></li>
                <li><Link href="/growth" className="inline-block hover:text-[#F58220] transition-colors">Growth</Link></li>
                <li><Link href="/contact" className="inline-block hover:text-[#F58220] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 4: Socials */}
            <div>
              {/* HARDCODED MARGIN ADDED HERE */}
              <h4 className="font-bold mb-8 text-base text-white" style={{ marginTop: "30px" }}>
                Follow us
              </h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-400">
                <li><a href="#" className="inline-block hover:text-[#F58220] transition-colors">LinkedIn</a></li>
                <li><a href="#" className="inline-block hover:text-[#F58220] transition-colors">YouTube</a></li>
                <li><a href="#" className="inline-block hover:text-[#F58220] transition-colors">Facebook</a></li>
                <li><a href="#" className="inline-block hover:text-[#F58220] transition-colors">Instagram</a></li>
              </ul>
            </div>

          </div>

          {/* Copyright Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 tracking-wide">
              © 2020 AAMANTARA GROUP. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 tracking-widest uppercase">
              Building Communities Through Enterprise
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}