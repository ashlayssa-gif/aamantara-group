"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    year: "2009",
    event: "DECC becomes the Best Local Organizer for the renowned 'Made in Pakistan' International Expo.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", // Conference
  },
  {
    year: "2011",
    event: "Newa Quest Saving & Credit Co-op established to make financing accessible to the Nepalese market.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&q=80", // Finance
  },
  {
    year: "2017",
    event: "GSG Service Nepal becomes one of the highest tax-paying companies in the country.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", // Corporate
  },
  {
    year: "2018",
    event: "Awarded Best Logistics Partner by the British Council for conducting IELTS exams seamlessly.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80", // Education
  },
  {
    year: "2020",
    event: "ACE Testing Hub launched in partnership with TOEFL and ETS to provide direct testing options.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80", // Lab
  },
  {
    year: "2020",
    event: "Moxy Hotels by Marriott announced for Pokhara, Nepal, expanding our hospitality footprint.",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80", // Hotel
  },
];

export default function AchievementsPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % milestones.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + milestones.length) % milestones.length);
  };

  const active = milestones[activeIndex];

  return (
    <div className="bg-white min-h-screen">
      
      {/* ═══════════════════════════════════════════════
          SECTION 1: HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[50vh] bg-[#111111] rounded-br-[120px] lg:rounded-br-[250px] overflow-hidden flex flex-col justify-center pt-24 pb-16">
        
        {/* Soft Orange Hue */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#F58220] opacity-20 blur-[120px] pointer-events-none z-0" />

        {/* Floating Back Button */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-30">
          <Link 
            href="/" 
            aria-label="Back to Home"
            className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#F58220] hover:bg-[#D96C15] text-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(245,130,32,0.4)] hover:scale-105"
          >
            <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative z-10 container-custom max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#F58220] font-semibold tracking-[0.35em] text-xs md:text-sm mb-6 uppercase">
              Our Journey
            </p>
            <h1 
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl"
            >
              Achievements & <br />
              <span className="text-[#F58220]">Milestones.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* HARD WHITE GAP 1 */}
      <div style={{ height: "150px" }} className="bg-white w-full"></div>

      {/* ═══════════════════════════════════════════════
          SECTION 2: KEY HIGHLIGHTS (Centered Colored Cards)
      ═══════════════════════════════════════════════ */}
      <section className="bg-white pb-10">
        <div className="container-custom max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Partnership Card (Red) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#E51A2D] p-10 md:p-16 rounded-tl-[80px] rounded-br-[80px] rounded-tr-3xl rounded-bl-3xl flex flex-col items-center justify-center text-center min-h-[380px] shadow-xl"
            >
              <h3 
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }} 
                className="font-bold text-white text-3xl mb-6"
              >
                Global Partnerships
              </h3>
              <p 
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }} 
                className="text-white/90 text-lg leading-[1.8] font-light max-w-md"
              >
                We have been constantly working in partnership with <strong className="text-white font-semibold">UNDP</strong> and the <strong className="text-white font-semibold">British Council</strong> to ease the testing process for Nepalese applying for educational and career prospects abroad.
              </p>
            </motion.div>

            {/* Tax Milestone Card (Orange) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-[#F58220] p-10 md:p-16 rounded-tl-[80px] rounded-br-[80px] rounded-tr-3xl rounded-bl-3xl flex flex-col items-center justify-center text-center min-h-[380px] shadow-xl"
            >
              <h3 
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }} 
                className="font-bold text-white text-3xl mb-6"
              >
                National Impact
              </h3>
              <p 
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }} 
                className="text-white/90 text-lg leading-[1.8] font-light max-w-md"
              >
                <strong className="text-white font-semibold">GSG Service Nepal</strong> has been recognized as one of the highest tax-paying companies in the country since 2017, contributing significantly to national development while we persistently work towards maintaining the record.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* HARD WHITE GAP 2 */}
      <div style={{ height: "100px" }} className="bg-white w-full"></div>

      {/* ═══════════════════════════════════════════════
          SECTION 3: INTERACTIVE TIMELINE
      ═══════════════════════════════════════════════ */}
      <section className="bg-white overflow-hidden">
        <div className="container-custom max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header Row */}
          <div className="relative text-center mb-16 md:mb-20">
            <p 
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              className="text-gray-400 font-semibold tracking-widest text-sm mb-2 uppercase"
            >
              Timeline
            </p>
            <h2 
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
              className="text-5xl md:text-6xl font-bold text-[#111111] tracking-tight"
            >
              Our History
            </h2>
            
            {/* Navigation Arrows (Top Right) */}
            <div className="absolute right-0 bottom-0 flex gap-6">
              <button 
                onClick={handlePrev}
                className="text-gray-400 hover:text-[#111111] transition-colors"
              >
                <ArrowLeft size={28} strokeWidth={1.5} />
              </button>
              <button 
                onClick={handleNext}
                className="text-gray-400 hover:text-[#111111] transition-colors"
              >
                <ArrowRight size={28} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Main Content Area (Grid System) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-12 md:mt-16">
            
            {/* Column 1: Year (Horizontal now) */}
            <div className="lg:col-span-3 flex justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={active.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  className="text-[100px] md:text-[140px] lg:text-[120px] font-bold text-[#F58220] leading-none tracking-tighter"
                >
                  {active.year}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Column 2: Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative z-10 w-full max-w-[400px] h-[400px] md:h-[500px] shadow-2xl bg-white rounded-tl-[60px] rounded-br-[60px] rounded-tr-2xl rounded-bl-2xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.image}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    src={active.image}
                    alt={active.year}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Column 3: Text */}
            <div className="lg:col-span-5 flex items-center lg:pl-12">
              <AnimatePresence mode="wait">
                <motion.p
                  key={active.event}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  className="text-[#111111] text-lg md:text-xl font-light leading-[1.8]"
                >
                  {active.event}
                </motion.p>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          BOTTOM GAP BEFORE FOOTER
      ═══════════════════════════════════════════════ */}
      <div style={{ height: "120px" }} className="bg-white w-full"></div>
      
    </div>
  );
}