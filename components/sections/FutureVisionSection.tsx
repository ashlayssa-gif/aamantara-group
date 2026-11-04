"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FutureVisionSection() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      
      {/* THE ORANGE CONTAINER */}
      <div className="relative w-[95%] bg-[#F58220] rounded-tr-[100px] lg:rounded-tr-[200px] rounded-br-[20px] overflow-hidden py-16 md:py-24 pl-8 md:pl-16 lg:pl-24 pr-8 md:pr-16 lg:pr-32">
        
        {/* THE BLENDED IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0 pointer-events-none"
        >
          <img 
            src="/images/moxy-render.png" 
            alt="Moxy Hotels by Marriott Pokhara"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F58220] via-[#F58220]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F58220]/80 via-transparent to-transparent" />
        </motion.div>

        <div className="container-custom max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* LEFT SIDE — The Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col items-start pt-10 pb-10 lg:py-0"
            >
              <p className="text-white font-semibold tracking-[0.35em] text-xs mb-6 uppercase">
                FUTURE VISION
              </p>

              <h2 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-[-0.02em] mb-8">
                Seek Infinite <br />
                <span className="text-[#111111]">Possibilities</span>
              </h2>

              <div className="w-20 h-1 bg-[#111111] mb-8" />

              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-md">
                We are bringing Moxy Hotels by Marriott to Pokhara, Nepal — a new chapter in our hospitality journey.
              </p>

              {/* =========================================
                  THE BUTTON 
                  Changed marginTop from 100px to 60px to move it up
              ========================================= */}
              <div style={{ marginTop: "60px" }}>
                <Link
                  href="/growth"
                  className="group flex items-center gap-3 text-white hover:text-[#111111] font-semibold text-xl border-b-2 border-[#111111] pb-1 transition-all duration-500"
                >
                  Explore Future Projects
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              {/* ========================================= */}

            </motion.div>

            {/* Empty Right Column */}
            <div className="hidden lg:block min-h-[400px]"></div>

          </div>
        </div>
      </div>

      {/* HARD SPACER (Keeps the gap between this section and the footer) */}
      <div style={{ height: "120px" }} className="bg-white w-full"></div>

    </section>
  );
}