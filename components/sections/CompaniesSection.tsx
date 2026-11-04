"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// 8 FEATURED companies — shown in the carousel (all WITH logos)
const featuredCompanies = [
  {
    slug: "newa-quest",
    title: "Newa Quest",
    sector: "Finance",
    tagline: "Financing and savings made accessible.",
    logo: "/images/logos/newaquest.png",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
  },
  {
    slug: "smart-trust",
    title: "Smart Trust",
    sector: "Finance",
    tagline: "A complete banking solution platform.",
    logo: "/images/logos/Smart_Trust.png",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=1200&q=80",
  },
  {
    slug: "koshi-international",
    title: "Koshi International",
    sector: "Service",
    tagline: "Recruitment meeting international standards.",
    logo: "/images/logos/Koshi_international.png",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  },
  {
    slug: "gsg-service-nepal",
    title: "GSG Service Nepal",
    sector: "Service",
    tagline: "Recruitment and workforce solutions.",
    logo: "/images/logos/GSGnepal.png",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
  },
  {
    slug: "decc-nepal",
    title: "DECC Nepal",
    sector: "Service",
    tagline: "50,000 sqft of event and exhibition space.",
    logo: "/images/logos/decc_nepal.png",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
  },
  {
    slug: "queens-queens",
    title: "Queens & Queens",
    sector: "Service",
    tagline: "Global service excellence.",
    logo: "/images/logos/Q&Q.png",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
  },
  {
    slug: "aranya-boutique-hotel",
    title: "Aranya Boutique Hotel",
    sector: "Hospitality",
    tagline: "Luxury and historic accommodation.",
    logo: "/images/logos/Aranya_Botique.png",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
  },
  {
    slug: "moxy-hotels",
    title: "Moxy Hotels by Marriott",
    sector: "Hospitality",
    tagline: "Future project in Pokhara, Nepal.",
    logo: "/images/logos/moxy_hotels.png",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
  },
];

// 5 companies WITHOUT logos — shown as an editorial numbered list
const otherCompanies = [
  { name: "Smart Trust Investment Pvt Ltd", sector: "Finance" },
  { name: "DECC English Language Training Center", sector: "Education" },
  { name: "ACE Testing Hub", sector: "Education" },
  { name: "Tibet Guest House", sector: "Hospitality" },
  { name: "Holiday Tibet Travels and Tours", sector: "Hospitality" },
];

export default function CompaniesSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => {
    setCurrent((prev) => (prev + 1) % featuredCompanies.length);
  };

  const prev = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + featuredCompanies.length) % featuredCompanies.length
    );
  };

  // Auto-advance every 6 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredCompanies.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const company = featuredCompanies[current];
  const nextCompany =
    featuredCompanies[(current + 1) % featuredCompanies.length];

  return (
    <section className="bg-white pt-32 md:pt-40 pb-32 md:pb-40">
      {/* ═══════════════════════════════════════════════
          HEADER
      ═══════════════════════════════════════════════ */}
      <div
        className="w-full"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-[#F58220] font-semibold tracking-[0.35em] text-xs mb-6 text-center">
            OUR PORTFOLIO
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-[1.05] tracking-[-0.02em] text-center">
            Companies Under{" "}
            <span className="text-[#F58220]">AAMANTARA</span>
          </h2>
        </motion.div>
      </div>

      {/* Space between header and carousel */}
      <div style={{ height: "160px" }}></div>

      {/* ═══════════════════════════════════════════════
          CAROUSEL — with hover-pause for auto-play
      ═══════════════════════════════════════════════ */}
      <div
        className="w-full"
        style={{ paddingLeft: "10%", paddingRight: "6%" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* LEFT — Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4"
            >
              <div style={{ marginBottom: "24px" }}>
                <span className="text-base font-bold text-gray-400 tracking-[0.15em]">
                  {String(current + 1).padStart(2, "0")}
                </span>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <h3 className="text-4xl md:text-5xl font-bold text-[#111111] leading-[1.1] tracking-[-0.01em]">
                  {company.title}
                </h3>
              </div>

              <div style={{ marginBottom: "56px" }}>
                <p className="text-xl text-gray-600">{company.sector}</p>
              </div>

              <div style={{ marginBottom: "48px" }}>
                <div style={{ height: "80px" }} className="flex items-center">
                  <LogoWithFallback
                    src={company.logo}
                    alt={`${company.title} logo`}
                    fallbackText={company.title}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "56px" }}>
                <p className="text-xl text-[#111111] leading-relaxed">
                  {company.tagline}
                </p>
              </div>

              <div>
                <Link
                  href={`/companies/${company.slug}`}
                  className="inline-flex items-center gap-3 text-[#111111] font-semibold text-xl border-b-2 border-[#F58220] pb-2 hover:text-[#F58220] transition-colors duration-500"
                >
                  Explore Company
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CENTER — Big Image with SLIDE transition */}
          <div className="lg:col-span-5">
            <Link
              href={`/companies/${company.slug}`}
              className="block relative h-[420px] md:h-[480px] overflow-hidden group"
              style={{
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0",
                borderBottomLeftRadius: "240px",
                borderBottomRightRadius: "0",
              }}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`image-${current}`}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1500ms] ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${company.image}')` }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Persistent gradient overlay (doesn't slide) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none z-10" />
            </Link>
          </div>

          {/* RIGHT — Next Preview */}
          <div className="hidden lg:block lg:col-span-3">
            <button
              onClick={next}
              aria-label="Next company"
              className="block w-full text-left"
            >
              <div
                className="relative h-[480px] overflow-hidden opacity-50 hover:opacity-80 transition-opacity duration-700"
                style={{
                  borderTopLeftRadius: "0",
                  borderTopRightRadius: "0",
                  borderBottomLeftRadius: "160px",
                  borderBottomRightRadius: "0",
                }}
              >
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={`preview-${current}`}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{
                      duration: 0.9,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${nextCompany.image}')`,
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-10" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          GAP between carousel and controls
      ═══════════════════════════════════════════════ */}
      <div style={{ height: "80px" }}></div>

      {/* ═══════════════════════════════════════════════
          NAVIGATION — Arrows + Progress Bar
      ═══════════════════════════════════════════════ */}
      <div
        className="w-full flex items-center gap-8"
        style={{ paddingLeft: "10%", paddingRight: "6%" }}
      >
        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            onClick={prev}
            aria-label="Previous company"
            className="w-14 h-14 rounded-full border border-gray-300 hover:border-[#F58220] hover:bg-[#F58220] hover:text-white flex items-center justify-center transition-all duration-500"
          >
            <ArrowLeft size={22} />
          </button>
          <button
            onClick={next}
            aria-label="Next company"
            className="w-14 h-14 rounded-full border border-gray-300 hover:border-[#F58220] hover:bg-[#F58220] hover:text-white flex items-center justify-center transition-all duration-500"
          >
            <ArrowRight size={22} />
          </button>
        </div>

        <div className="flex-1 flex items-center gap-6 max-w-2xl">
          <span className="text-sm font-semibold text-[#111111] tracking-wider whitespace-nowrap">
            {String(current + 1).padStart(2, "0")}
          </span>

          <div className="flex-1 relative h-px bg-gray-200">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#F58220]"
              initial={false}
              animate={{
                width: `${((current + 1) / featuredCompanies.length) * 100}%`,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F58220] shadow-md"
              initial={false}
              animate={{
                left: `${((current + 1) / featuredCompanies.length) * 100}%`,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginLeft: "-6px" }}
            />
          </div>

          <span className="text-sm font-semibold text-gray-400 tracking-wider whitespace-nowrap">
            {String(featuredCompanies.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          GAP between controls and "Also Under" label
      ═══════════════════════════════════════════════ */}
      <div style={{ height: "100px" }}></div>

      {/* ═══════════════════════════════════════════════
          ALSO UNDER AAMANTARA — label (its own div)
      ═══════════════════════════════════════════════ */}
      <div
        className="w-full"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <p className="text-[#F58220] text-xs tracking-[0.35em] font-semibold whitespace-nowrap">
            ALSO UNDER AAMANTARA
          </p>
          <div className="flex-1 h-px bg-gray-200"></div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════
          SPACER between label and list
      ═══════════════════════════════════════════════ */}
      <div style={{ height: "60px" }}></div>

      {/* ═══════════════════════════════════════════════
          NUMBERED LIST — its own div
      ═══════════════════════════════════════════════ */}
      <div
        className="w-full"
        style={{ paddingLeft: "10%", paddingRight: "10%" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl">
            {otherCompanies.map((c, index) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                className="group flex items-start gap-8 py-6 border-b border-gray-100 hover:border-[#F58220] transition-colors duration-500"
              >
                <span className="text-xs font-medium text-gray-400 group-hover:text-[#F58220] tracking-[0.15em] transition-colors duration-500 pt-2 min-w-[24px]">
                  {String(index + 9).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-lg md:text-xl font-medium text-[#111111] group-hover:text-[#F58220] tracking-[-0.01em] transition-colors duration-500 mb-1">
                    {c.name}
                  </p>
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.25em] group-hover:text-[#F58220]/70 transition-colors duration-500">
                    {c.sector}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex justify-end max-w-3xl">
            <Link
              href="/companies"
              className="group inline-flex items-center gap-3 text-[#111111] hover:text-[#F58220] font-semibold text-base border-b-2 border-[#F58220] pb-1 transition-colors duration-500"
            >
              <span>View All Companies</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-500"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Logo with elegant fallback
 */
function LogoWithFallback({
  src,
  alt,
  fallbackText,
}: {
  src: string;
  alt: string;
  fallbackText: string;
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <span className="text-lg font-bold text-[#111111] tracking-[-0.01em] leading-tight">
        {fallbackText}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-auto object-contain"
      onError={() => setError(true)}
    />
  );
}