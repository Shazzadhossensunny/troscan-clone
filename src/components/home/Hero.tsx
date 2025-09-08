"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.jpeg"
          alt="Luxury Interior Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white mb-12 sm:mb-16 leading-tight"
          >
            Timeless Comfort & <br /> Endless Luxury
          </motion.h1>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Our Vision Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(248, 237, 227, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f8ede3] text-primary px-6 py-4 rounded-[5px] font-medium transition-all duration-300 text-base sm:text-lg min-w-[180px]"
            >
              Our Vision
            </motion.button>

            {/* Explore Expertise Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f8ede3",
                color: "#8d493a",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-[#f8ede3] text-white px-6 py-4 rounded-[5px] font-medium transition-all duration-300 text-base sm:text-lg min-w-[180px]"
            >
              Explore Expertise
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
