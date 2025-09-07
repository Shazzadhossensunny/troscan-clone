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

  useEffect(() => {
    // Set initial window height and handle resize
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Calculate y transforms for each project based on scroll progress
  const y1 = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [0, -windowHeight, -windowHeight * 2, -windowHeight * 2]
  );

  const y2 = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [windowHeight, 0, -windowHeight, -windowHeight]
  );

  const y3 = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [windowHeight * 2, windowHeight, 0, 0]
  );

  return (
    <div
      ref={containerRef}
      className="relative bg-gray-900"
      style={{ height: `${projects.length * 100}vh` }}
    >
      {/* Background elements for visual appeal */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500 to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-b from-purple-500 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-1/3 bg-gradient-to-b from-indigo-500 to-transparent"></div>
      </div>

      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Project 1 */}
        <motion.div className="absolute inset-0" style={{ y: y1 }}>
          <div className="relative w-full h-full">
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-lg font-light mb-2 sm:mb-4 tracking-widest opacity-80">
                  {projects[0].id}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                  {projects[0].title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-12 opacity-90 max-w-2xl mx-auto">
                  {projects[0].subtitle}
                </p>
                <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div className="absolute inset-0" style={{ y: y2 }}>
          <div className="relative w-full h-full">
            <Image
              src={projects[1].image}
              alt={projects[1].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-lg font-light mb-2 sm:mb-4 tracking-widest opacity-80">
                  {projects[1].id}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                  {projects[1].title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-12 opacity-90 max-w-2xl mx-auto">
                  {projects[1].subtitle}
                </p>
                <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div className="absolute inset-0" style={{ y: y3 }}>
          <div className="relative w-full h-full">
            <Image
              src={projects[2].image}
              alt={projects[2].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-lg font-light mb-2 sm:mb-4 tracking-widest opacity-80">
                  {projects[2].id}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                  {projects[2].title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-light mb-8 sm:mb-12 opacity-90 max-w-2xl mx-auto">
                  {projects[2].subtitle}
                </p>
                <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
        <div className="text-white text-sm mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
