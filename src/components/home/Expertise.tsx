"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Expertise = () => {
  const [hoveredIndex, setHoveredIndex] = useState(1); // Default to "Room Decoration & Styling"

  const expertiseItems = [
    {
      id: 1,
      number: "01",
      title: "Custom Furniture Design",
      image: "/api/placeholder/600/500", // Replace with your actual image URL
    },
    {
      id: 2,
      number: "02",
      title: "Room Decoration & Styling",
      image: "/api/placeholder/600/500", // Replace with your actual image URL
    },
    {
      id: 3,
      number: "03",
      title: "Space Planning & Interior Layout",
      image: "/api/placeholder/600/500", // Replace with your actual image URL
    },
    {
      id: 4,
      number: "04",
      title: "Home Renovations & Remodeling",
      image: "/api/placeholder/600/500", // Replace with your actual image URL
    },
    {
      id: 5,
      number: "05",
      title: "Lighting Design",
      image: "/api/placeholder/600/500", // Replace with your actual image URL
    },
    {
      id: 6,
      number: "06",
      title: "Virtual Interior Design Consultations",
      image: "/api/placeholder/600/500", // Replace with your actual image URL
    },
  ];

  // For demo purposes, using different placeholder images
  const demoImages = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=500&fit=crop", // Custom furniture
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=500&fit=crop", // Room styling
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=500&fit=crop", // Space planning
    "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&h=500&fit=crop", // Renovations
    "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=600&h=500&fit=crop", // Lighting
    "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&h=500&fit=crop", // Virtual consultations
  ];

  const currentImage = demoImages[hoveredIndex - 1];

  return (
    <section className="relative min-h-screen bg-[#f5f0eb] overflow-hidden">
      {/* Container with responsive padding */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 sm:py-16 md:py-20">
        {/* Our Expertise Label */}
        <div className="mb-8 sm:mb-12">
          <span className="text-sm sm:text-base text-[#8b5a3c] font-medium tracking-wider">
            • Our Expertise
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24">
          {/* Left Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] overflow-hidden rounded-lg">
              <motion.img
                key={hoveredIndex}
                src={currentImage}
                alt={`Interior design - ${
                  expertiseItems[hoveredIndex - 1]?.title
                }`}
                className="w-full h-full object-cover"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            {/* Main Heading */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#8b5a3c] leading-tight">
                Selecting the ideal elements to elevate your space
              </h2>
            </div>

            {/* Expertise List */}
            <div className="space-y-0">
              {expertiseItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative cursor-pointer group"
                  onMouseEnter={() => setHoveredIndex(item.id)}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Background animation */}
                  <motion.div
                    className="absolute inset-0 bg-[#8b5a3c] rounded-sm"
                    initial={{ height: 0, y: "100%" }}
                    animate={{
                      height: hoveredIndex === item.id ? "100%" : 0,
                      y: hoveredIndex === item.id ? 0 : "100%",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />

                  {/* Content */}
                  <div className="relative z-10 py-3 sm:py-4 lg:py-5 px-4 sm:px-6 border-b border-[#8b5a3c]/20 flex items-center gap-4 sm:gap-6">
                    {/* Number */}
                    <motion.span
                      className={`text-sm sm:text-base font-medium transition-colors duration-300 ${
                        hoveredIndex === item.id
                          ? "text-white"
                          : "text-[#8b5a3c]/60"
                      }`}
                      animate={{
                        color:
                          hoveredIndex === item.id ? "#ffffff" : "#8b5a3c99",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.number}
                    </motion.span>

                    {/* Title */}
                    <motion.h3
                      className={`text-lg sm:text-xl lg:text-2xl font-medium transition-colors duration-300 ${
                        hoveredIndex === item.id
                          ? "text-white"
                          : "text-[#8b5a3c]"
                      }`}
                      animate={{
                        color: hoveredIndex === item.id ? "#ffffff" : "#8b5a3c",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
