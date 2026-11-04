"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const bottomStats = [
  { value: 4, suffix: "", label: "Sectors" },
  { value: 15, suffix: "+", label: "Companies" },
  { value: 83, suffix: "+", label: "Hotel Rooms" },
  { value: 30000, suffix: "+", label: "Recruited Abroad" },
];

const destinations = [
  { name: "Saudi Arabia", x: 51, y: 46, recruited: "2,000+" },
  { name: "UAE", x: 56, y: 47, recruited: "2,800+" },
  { name: "Qatar", x: 55, y: 49, recruited: "2,100+" },
  { name: "Malaysia", x: 74, y: 58, recruited: "25,000+" },
];

const nepalPosition = { x: 63, y: 44 };

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState(bottomStats.map(() => 0));
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(bottomStats.map((s) => Math.floor(s.value * eased)));
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="bg-white pt-32 md:pt-40 overflow-hidden"
    >
      <div className="w-full">
        {/* Split layout — 60/40 */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] items-center">
          {/* LEFT — Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white p-8 md:p-12">
              <div className="relative aspect-[16/9]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                  alt="World map"
                  className="absolute inset-0 w-full h-full object-contain opacity-25"
                  style={{ filter: "grayscale(100%) brightness(1.6)" }}
                />

                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                >
                  {destinations.map((dest, index) => (
                    <motion.line
                      key={dest.name}
                      x1={nepalPosition.x}
                      y1={nepalPosition.y}
                      x2={dest.x}
                      y2={dest.y}
                      stroke="#F58220"
                      strokeWidth="0.35"
                      strokeDasharray="1.5 1.5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.7 }}
                      transition={{ duration: 1.2, delay: 0.6 + index * 0.15 }}
                      viewport={{ once: true }}
                    />
                  ))}
                </svg>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute z-20"
                  style={{
                    top: `${nepalPosition.y}%`,
                    left: `${nepalPosition.x}%`,
                  }}
                >
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    <span className="absolute inset-0 w-6 h-6 -m-2 rounded-full bg-[#111111] opacity-15 animate-ping" />
                    <span className="relative block w-3 h-3 bg-[#111111] rounded-full border-2 border-white shadow" />
                  </div>
                </motion.div>

                {destinations.map((dest, index) => (
                  <motion.div
                    key={dest.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.12 }}
                    viewport={{ once: true }}
                    className="absolute z-20 group"
                    style={{ top: `${dest.y}%`, left: `${dest.x}%` }}
                  >
                    <div className="relative -translate-x-1/2 -translate-y-1/2">
                      <span className="absolute inset-0 w-4 h-4 -m-1 rounded-full bg-[#F58220] opacity-20 animate-ping" />
                      <span className="relative block w-2.5 h-2.5 bg-[#F58220] rounded-full border-2 border-white shadow" />
                      <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#111111] text-white text-[10px] font-medium px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30">
                        {dest.name} — {dest.recruited}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-8 mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#111111] rounded-full"></span>
                  <span className="text-xs text-gray-500 font-medium">
                    Nepal
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#F58220] rounded-full"></span>
                  <span className="text-xs text-gray-500 font-medium">
                    4 Destinations
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="px-6 md:px-10 lg:px-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-[#F58220] rounded-full"></span>
              <p className="text-[#F58220] font-semibold tracking-[0.3em] text-xs">
                OUR GLOBAL REACH
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] leading-[1.3] tracking-tight mb-14">
              Connecting Nepal
              <br />
              to the World
            </h2>

            <div className="border-l-2 border-[#F58220] pl-6 mb-12">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-5xl md:text-6xl font-bold text-[#111111] leading-none tracking-tight">
                  30,000
                </span>
                <span className="text-5xl md:text-6xl font-bold text-[#F58220] leading-none">
                  +
                </span>
              </div>
              <p className="text-gray-500 text-sm font-medium">
                People Placed in Global Careers
              </p>
            </div>

            <p className="text-gray-600 text-base leading-[1.8] mb-10">
              For over a decade, we have been placing Nepalese talent in
              meaningful careers across the Gulf and Southeast Asia — building
              brighter futures for thousands of families.
            </p>

            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 text-[#111111] hover:text-[#F58220] font-semibold text-sm border-b-2 border-[#F58220] pb-1 transition-colors"
            >
              View Our Impact
              <span>→</span>
            </Link>
          </motion.div>
        </div>

        {/* Forced spacer */}
        <div style={{ height: "120px" }}></div>

        {/* Bottom stats */}
        <div className="container-custom">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-20"></div>

          <div className="grid grid-cols-2 md:grid-cols-4">
            {bottomStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className={`
                  text-center px-6 py-8 relative
                  ${index > 0 ? "md:border-l md:border-gray-100" : ""}
                `}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 leading-none tracking-tight">
                  {counts[index].toLocaleString()}
                  <span className="text-[#F58220]">{stat.suffix}</span>
                </div>

                <div className="w-6 h-0.5 bg-[#F58220] mx-auto mb-4"></div>

                <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}