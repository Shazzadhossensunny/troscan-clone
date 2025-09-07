"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Set initial height and mark as mounted
    handleResize();
    setIsMounted(true);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects: Project[] = [
    {
      id: "01",
      title: "Serene Urban Retreat",
      subtitle: "Where modern comfort meets peaceful sophistication.",
      image: "/images/p1.jpeg",
    },
    {
      id: "02",
      title: "Luxurious Living Space",
      subtitle: "Contemporary design with timeless elegance.",
      image: "/images/p2.jpeg",
    },
    {
      id: "03",
      title: "Elegant Modern Interior",
      subtitle: "Sophisticated spaces for refined living.",
      image: "/images/p3.jpeg",
    },
  ];

  // Fix the TypeScript error by casting the ref to the correct type
  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end start"],
  });

  // Calculate transforms for each project
  const y1 = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, -windowHeight, -windowHeight, -windowHeight]
  );

  const y2 = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [windowHeight, 0, -windowHeight, -windowHeight]
  );

  const y3 = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [windowHeight, windowHeight, 0, 0]
  );

  // Opacity transforms for smooth fade transitions
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.15, 0.33, 0.5],
    [1, 1, 0.3, 0]
  );

  const opacity2 = useTransform(
    scrollYProgress,
    [0.15, 0.33, 0.5, 0.66],
    [0, 1, 1, 0.3]
  );

  const opacity3 = useTransform(
    scrollYProgress,
    [0.5, 0.66, 0.85, 1],
    [0, 1, 1, 1]
  );

  if (!isMounted) {
    return (
      <div className="relative bg-[#8b5a3c]" style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="text-white text-xl">Loading Projects...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative bg-[#8b5a3c]"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Project 1 */}
        <motion.div
          className="absolute inset-0"
          style={{
            y: y1,
            opacity: opacity1,
          }}
        >
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${projects[0].image})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-lg sm:text-xl font-light mb-4 sm:mb-6 tracking-[0.2em] opacity-80 text-[#f5f0eb]">
                  {projects[0].id}
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 sm:mb-8 leading-[0.9] text-white">
                  {projects[0].title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-light mb-10 sm:mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed text-[#f5f0eb]">
                  {projects[0].subtitle}
                </p>
                <button className="bg-[#8b5a3c] hover:bg-[#a0664a] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-medium text-lg sm:text-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="absolute inset-0"
          style={{
            y: y2,
            opacity: opacity2,
          }}
        >
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${projects[1].image})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-lg sm:text-xl font-light mb-4 sm:mb-6 tracking-[0.2em] opacity-80 text-[#f5f0eb]">
                  {projects[1].id}
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 sm:mb-8 leading-[0.9] text-white">
                  {projects[1].title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-light mb-10 sm:mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed text-[#f5f0eb]">
                  {projects[1].subtitle}
                </p>
                <button className="bg-[#8b5a3c] hover:bg-[#a0664a] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-medium text-lg sm:text-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="absolute inset-0"
          style={{
            y: y3,
            opacity: opacity3,
          }}
        >
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${projects[2].image})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-lg sm:text-xl font-light mb-4 sm:mb-6 tracking-[0.2em] opacity-80 text-[#f5f0eb]">
                  {projects[2].id}
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 sm:mb-8 leading-[0.9] text-white">
                  {projects[2].title}
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-light mb-10 sm:mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed text-[#f5f0eb]">
                  {projects[2].subtitle}
                </p>
                <button className="bg-[#8b5a3c] hover:bg-[#a0664a] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-medium text-lg sm:text-xl border-2 border-white/20 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
