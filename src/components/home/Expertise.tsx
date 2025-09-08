"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Expertise = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(2); // default item

  const expertiseItems = [
    {
      id: 1,
      number: "01",
      title: "Custom Furniture Design",
      image: "/images/expertise.jpeg",
    },
    {
      id: 2,
      number: "02",
      title: "Room Decoration & Styling",
      image: "/images/decor.jpeg",
    },
    {
      id: 3,
      number: "03",
      title: "Space Planning & Interior Layout",
      image: "/images/interior.jpeg",
    },
    {
      id: 4,
      number: "04",
      title: "Home Renovations & Remodeling",
      image: "/images/home.jpeg",
    },
    {
      id: 5,
      number: "05",
      title: "Lighting Design",
      image: "/images/lighiting.jpeg",
    },
    {
      id: 6,
      number: "06",
      title: "Virtual Interior Design Consultations",
      image: "/images/virtual.jpeg",
    },
  ];

  // Current image: if hovered, show hovered; else default
  const currentItem =
    expertiseItems.find((item) => item.id === hoveredIndex) ||
    expertiseItems[1];

  return (
    <section className="relative min-h-screen overflow-hidden w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-start">
        {/* Left Image */}
        <div className="relative order-2 lg:order-1 lg:self-start lg:mt-12">
          <div className="relative w-full h-[600px] sm:h-[650px] md:h-[700px] lg:h-[750px] xl:h-[800px] rounded-lg overflow-hidden">
            <motion.div
              key={currentItem.id}
              className="w-full h-full"
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2 flex flex-col justify-start">
          {/* Label */}
          <div className="mb-6 sm:mb-8">
            <span className="text-sm sm:text-base text-[#8b5a3c] font-normal tracking-wide">
              • Our Expertise
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:max-w-full lg:max-w-[630px] font-normal text-[#8b5a3c] leading-tight">
              Selecting the ideal elements to elevate your space
            </h2>
          </div>

          {/* Expertise List */}
          <div className="space-y-2 sm:space-y-3">
            {expertiseItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative cursor-pointer group"
                onMouseEnter={() => setHoveredIndex(item.id)}
                onMouseLeave={() => setHoveredIndex(null)} // reset hover
              >
                {/* Background hover */}
                <motion.div
                  className="absolute inset-0 bg-[#8b5a3c]"
                  initial={{ height: 0, y: "100%" }}
                  animate={{
                    height: hoveredIndex === item.id ? "100%" : 0,
                    y: hoveredIndex === item.id ? "0%" : "100%",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Content */}
                <motion.div
                  className="relative z-10 py-2 sm:py-2.5  border-b border-[#8b5a3c] flex items-start gap-4 sm:gap-4"
                  animate={{
                    x: hoveredIndex === item.id ? 10 : 0, // slide content right 10px on hover
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Number above title */}
                  <span
                    className={`text-sm sm:text-base font-normal transition-colors duration-300 ${
                      hoveredIndex === item.id ? "text-white" : "text-[#8b5a3c]"
                    }`}
                  >
                    {item.number}
                  </span>
                  <h3
                    className={`text-lg sm:text-xl lg:text-2xl font-normal transition-colors duration-300 ${
                      hoveredIndex === item.id ? "text-white" : "text-[#8b5a3c]"
                    }`}
                  >
                    {item.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
