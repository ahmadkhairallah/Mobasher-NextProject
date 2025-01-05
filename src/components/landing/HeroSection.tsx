"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLinkId: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  ctaText,
  ctaLinkId,
  backgroundImage,
}) => {

  return (
    <section
      className="relative h-[40vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary bg-opacity-80"></div>

      <motion.div
        className="relative z-10 max-w-xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-textDark">
          {title}
        </h1>
        <p className="text-base md:text-lg text-textMuted mb-6">
          {description}
        </p>
        <button
          // onClick={scrollToSection}
          className="inline-block px-5 py-2 md:px-6 md:py-3 text-sm md:text-base lg:text-base bg-primary text-white font-medium rounded-md hover:bg-primaryAlt transition"
        >
          {ctaText}
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
