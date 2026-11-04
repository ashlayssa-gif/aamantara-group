"use client";

import Link from "next/link";
import { ArrowLeft, Lightbulb, Handshake, Scale, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    { 
      icon: Lightbulb, 
      title: "Innovation", 
      label: "Innovation", 
      desc: "We constantly seek for ways to keep our clients satisfied by coming up ways to innovatively serve them and their needs." 
    },
    { 
      icon: Handshake, 
      title: "Professionalism", 
      label: "Professionalism", 
      desc: "Professionalism during each stage and with all stakeholders is of utmost importance to us as it helps maintain efficiency & effectiveness." 
    },
    { 
      icon: Scale, 
      title: "Ethics", 
      label: "Ethics", 
      desc: "We stand by our ethical standards in order to achieve our goals for community building." 
    },
    { 
      icon: Users, 
      title: "Community Building", 
      label: "Community Building", 
      desc: "All our ventures' main aim is to build communities through entrepreneurship and create an environment where each venture's stakeholders can cross benefit from." 
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* ═══════════════════════════════════════════════
          SECTION 1: HERO WITH LARGE CORNER CURVE
      ═══════════════════════════════════════════════ */}
      <section className="relative w-full h-screen min-h-[700px] bg-white">
        
        {/* 
          The Image Container has the massive curve applied to the bottom-right.
          The white background of the section shows through the cut-out.
        */}
        <div className="absolute inset-0 overflow-hidden rounded-br-[150px] lg:rounded-br-[350px] bg-[#111111]">
          
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80"
            alt="Aamantara Team"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-l from-black/95 via-black/70 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#111111] via-[#111111]/60 to-transparent z-10 pointer-events-none" />

          {/* Soft Orange Hue in Top Left */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#F58220] opacity-30 blur-[120px] pointer-events-none z-10" />
        </div>

        {/* Back Button (Pops out with shadow) */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-30">
          <Link 
            href="/" 
            aria-label="Back to Home"
            className="group flex items-center justify-center w-14 h-14 bg-[#F58220] hover:bg-[#D96C15] text-white rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(245,130,32,0.5)] hover:scale-105"
          >
            <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Hero Text */}
        <div className="absolute bottom-16 right-6 md:bottom-24 md:right-16 lg:right-24 z-20 w-full max-w-[90%] md:max-w-xl lg:max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-14">
              <h1 
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                className="text-2xl md:text-3xl lg:text-[34px] font-bold text-white leading-[1.35] tracking-wide"
              >
                The AAMANTARA Group has played a crucial role in safely facilitating{" "}
                <span className="text-[#F58220]">enterprise and community building</span>{" "}
                across Nepal, as one of the country's leading{" "}
                <span className="text-[#F58220]">multi-sector conglomerates.</span>
              </h1>
            </div>
            
            <div className="border-l-[1.5px] border-white/50 pl-5 md:pl-6">
              <p className="text-white/90 text-[14px] md:text-[15px] leading-[1.8] font-light">
                From finance and global recruitment to world-class hospitality and education, our diverse portfolio creates opportunities and drives progress. We are committed to making a positive impact on citizens' lives and lifestyles through sustainable growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HARD WHITE GAP (Now outside the curve) */}
      <div style={{ height: "120px" }} className="bg-white w-full"></div>

      {/* ═══════════════════════════════════════════════
          SECTION 2: FOUNDATIONAL PRINCIPLES
      ═══════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#F58220] rounded-tr-[120px] lg:rounded-tr-[200px] pt-32 pb-20 pl-12 md:pl-24 lg:pl-40 pr-8 md:pr-16 overflow-hidden">
        
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-0">
            <div className="w-full lg:w-[40%]">
              <h2 
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
              >
                Our <br /> Foundational <br /> Principles
              </h2>
            </div>
            
            <div className="w-full lg:w-[60%]">
              <div style={{ marginTop: '40px', marginLeft: '-48px' }}>
                <p 
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  className="text-white text-lg md:text-[22px] font-light leading-[1.6] max-w-xl"
                >
                  "Growth is never by mere chance; it is the result of forces working together."
                </p>
              </div>
            </div>
          </div>

          <div style={{ height: "80px" }} className="w-full"></div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-start text-left"
                >
                  <Icon size={48} className="text-white mb-6" strokeWidth={1} />
                  <h3 
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    className="text-white font-bold text-lg md:text-xl tracking-wide mb-3"
                  >
                    {val.label}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed font-light">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
          
          <div style={{ height: "60px" }}></div>
        </div>
      </section>

      {/* HARD WHITE GAP BELOW THE RED SECTION */}
      <div style={{ height: "120px" }} className="bg-white w-full"></div>

      {/* ═══════════════════════════════════════════════
          SECTION 3: ACHIEVEMENTS & MILESTONES
      ═══════════════════════════════════════════════ */}
      <section className="pb-24 md:pb-32">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute top-1/2 -right-6 md:-right-10 -translate-y-1/2 w-24 h-48 bg-[#F58220] rounded-l-full z-0 hidden md:block" />
              
              <div className="relative z-10 h-[400px] md:h-[500px] rounded-bl-[120px] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80" 
                  alt="Team celebrating success and achievements"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="py-6 lg:py-0"
            >
              <h2 
                style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-10 tracking-tight"
              >
                Achievements & <br className="hidden md:block" /> Milestones
              </h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2.5 h-2.5 bg-[#F58220] shrink-0" />
                    <h3 
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      className="font-bold text-[#111111] text-xl"
                    >
                      Partnerships
                    </h3>
                  </div>
                  <p 
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    className="text-gray-600 text-base md:text-lg leading-[1.8] font-light"
                  >
                    We have been constantly working in partnership with UNDP and British Council to ease the testing process for Nepalese to apply for educational & career prospects abroad.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-2.5 h-2.5 bg-[#F58220] shrink-0" />
                    <h3 
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                      className="font-bold text-[#111111] text-xl"
                    >
                      Tax Compliance
                    </h3>
                  </div>
                  <p 
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    className="text-gray-600 text-base md:text-lg leading-[1.8] font-light"
                  >
                    GSG has been one of the highest tax paying company of the country in 2017 and we are persistently working towards maintaining the record.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4: STRATEGIC ORIENTATION 
      ═══════════════════════════════════════════════ */}
      <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
        <div className="container-custom max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="relative flex flex-col lg:flex-row items-stretch min-h-[600px]">
            
            <div className="w-full h-[300px] lg:hidden mb-8 rounded-2xl overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80" 
                 alt="Team strategy"
                 className="w-full h-full object-cover"
               />
            </div>

            <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[50%] z-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80" 
                alt="Team strategy"
                className="w-full h-full object-cover object-left"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative z-10 w-full lg:w-[65%] bg-white flex flex-col justify-center py-10 lg:py-16 lg:pr-24 lg:rounded-br-[180px]"
            >
              
              <div style={{ marginBottom: "40px" }}>
                <h2 
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-[1.1] tracking-tight"
                >
                  Our strategic <br /> orientation
                </h2>
              </div>
              
              <div style={{ marginBottom: "50px" }}>
                <p 
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  className="text-gray-600 text-base md:text-lg lg:text-xl leading-[1.7] font-light max-w-lg"
                >
                  At AAMANTARA Group, we focus on continuously improving our services to ensure excellent customer experience. We believe in sustainable growth that benefits the community.
                </p>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <h3 
                  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  className="font-bold text-[#111111] text-base md:text-lg"
                >
                  Strategic priorities
                </h3>
              </div>
              
              <ul className="space-y-4 max-w-xl">
                {[
                  "Delivering high quality and exceptional customer service across all channels.",
                  "Fostering a culture of employee well-being, engagement, and continuous development.",
                  "Transforming the business model for efficiency and sustainability.",
                  "Accelerating omnichannel growth and e-commerce capabilities.",
                  "Driving digital transformation to enhance customer experience."
                ].map((item, i) => (
                  <li 
                    key={i} 
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    className="flex items-start gap-3 text-sm md:text-[15px] text-gray-600 font-light leading-[1.7]"
                  >
                    <span className="w-2 h-2 bg-[#F58220] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </motion.div>

          </div>
        </div>
      </section>

      <div className="h-24 bg-white"></div>
    </div>
  );
}