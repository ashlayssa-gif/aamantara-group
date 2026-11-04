"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

function PartnerLogo({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return <Award size={36} className="text-gray-300" strokeWidth={1} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="max-h-16 w-auto object-contain"
      onError={() => setError(true)}
    />
  );
}

export default function AchievementsSection() {
  const awards = [
    {
      name: "British Council",
      year: "2018",
      description: "Best Logistics Partner",
      logo: "/images/partners/british-council.jpg",
    },
    {
      name: "UNDP",
      year: "Partner",
      description: "Educational Testing Partner",
      logo: "/images/partners/undp.webp",
    },
    {
      name: "Made in Pakistan",
      year: "Since 2009",
      description: "Best Local Organizer",
      logo: "/images/partners/made-in-pakistan.png",
    },
    {
      name: "TOEFL / ETS",
      year: "2020",
      description: "Official Testing Hub",
      logo: "/images/partners/toefl.png",
    },
  ];

  return (
    <section className="bg-white">
      <div style={{ height: "80px" }}></div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            style={{ textAlign: "center" }}
            className="text-[#F58220] font-semibold tracking-[0.3em] text-xs mb-4"
          >
            RECOGNITION
          </p>
          <h2
            style={{ textAlign: "center" }}
            className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight"
          >
            Our Achievements
          </h2>
        </motion.div>

        <div style={{ height: "80px" }}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-xl p-8 border border-gray-200 hover:border-[#F58220]/50 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              
              {/* Increased logo space slightly to balance the bigger text */}
              <div className="h-20 flex items-center justify-center mb-6">
                <PartnerLogo src={award.logo} alt={award.name} />
              </div>

              {/* Increased Title Size (text-xl instead of text-lg) */}
              <h3 className="text-xl font-bold text-[#111111] mb-3">
                {award.name}
              </h3>

              {/* Increased Description Size (text-base instead of text-sm) */}
              <p className="text-base text-gray-500 font-light mb-8">
                {award.description}
              </p>

              {/* Increased Year Size slightly (text-sm instead of text-xs) */}
              <span className="text-sm font-semibold tracking-widest text-[#F58220] uppercase mt-auto">
                {award.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{ height: "140px" }}></div>
    </section>
  );
}