"use client";

import { Lightbulb, Handshake, Scale, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function PrinciplesSection() {
  const principles = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly seek new ways to serve our clients better.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
    {
      icon: Handshake,
      title: "Professionalism",
      description:
        "Efficiency and effectiveness with all stakeholders.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    },
    {
      icon: Scale,
      title: "Ethics",
      description:
        "We stand by our ethical standards for community building.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    },
    {
      icon: Users,
      title: "Community Building",
      description:
        "All our ventures build communities through entrepreneurship.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
  ];

  return (
    <section className="bg-white">
      <div style={{ height: "100px" }}></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <p
          style={{ textAlign: "center" }}
          className="text-[#F58220] font-semibold tracking-[0.35em] text-xs mb-5"
        >
          WHAT DRIVES US
        </p>

        <h2
          style={{ textAlign: "center" }}
          className="text-5xl md:text-6xl font-bold text-[#111111] leading-[1.05] tracking-[-0.02em]"
        >
          Our Foundational{" "}
          <span className="text-[#F58220]">Principles</span>
        </h2>

        <div
          style={{ marginLeft: "auto", marginRight: "auto" }}
          className="w-16 h-1 bg-[#F58220] mt-8 mb-8"
        ></div>

        <p
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="text-gray-600 text-lg leading-relaxed max-w-2xl px-6"
        >
          Four values shape every decision we make and every company we build.
        </p>
      </motion.div>

      <div style={{ height: "100px" }}></div>

      {/* Cards grid — rounded, taller, softer like Fourlis */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-3">
        {principles.map((principle, index) => {
          const Icon = principle.icon;
          return (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="group relative h-[600px] overflow-hidden cursor-pointer rounded-3xl"
            >
              {/* Background image — slow, elegant zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${principle.image}')` }}
              />

              {/* Softer overlay */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors duration-700" />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center text-white p-8">
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="mb-8">
                    <Icon
                      size={52}
                      className="text-white/60 group-hover:text-[#F58220] transition-colors duration-700"
                      strokeWidth={1}
                    />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-white/95 leading-tight">
                    {principle.title}
                  </h3>
                </div>

                {/* Bottom — description */}
                <div className="w-full grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-out">
                  <div className="overflow-hidden">
                    <div className="flex flex-col items-center pt-6 border-t border-white/20">
                      <p className="text-sm text-white/70 leading-relaxed text-center mx-auto max-w-[240px]">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div style={{ height: "100px" }}></div>
    </section>
  );
}