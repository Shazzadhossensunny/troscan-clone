"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Projects = () => {
  const containerRef = useRef(null);

  const projects = [
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

  return (
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Image 1 */}
        <motion.div
          className="absolute inset-0"
          style={{
            y: useTransform(
              scrollYProgress,
              [0, 1 / 3],
              [0, -window.innerHeight]
            ),
          }}
        >
          <Image
            src="/images/p1.jpeg"
            alt="Project 1"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center max-w-4xl mx-auto px-12">
              <div className="text-lg font-light mb-4 tracking-widest opacity-80">
                01
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Serene Urban Retreat
              </h2>
              <p className="text-lg md:text-xl font-light mb-12 opacity-90 max-w-2xl mx-auto">
                Where modern comfort meets peaceful sophistication.
              </p>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium text-lg border border-white/20 hover:bg-white/20">
                View Project
              </button>
            </div>
          </div>
        </motion.div>

        {/* Image 2 */}
        <motion.div
          className="absolute inset-0"
          style={{
            y: useTransform(
              scrollYProgress,
              [0, 1 / 3, 2 / 3],
              [window.innerHeight, 0, -window.innerHeight]
            ),
          }}
        >
          <Image
            src="/images/p2.jpeg"
            alt="Project 2"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center max-w-4xl mx-auto px-12">
              <div className="text-lg font-light mb-4 tracking-widest opacity-80">
                02
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Luxurious Living Space
              </h2>
              <p className="text-lg md:text-xl font-light mb-12 opacity-90 max-w-2xl mx-auto">
                Contemporary design with timeless elegance.
              </p>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium text-lg border border-white/20 hover:bg-white/20">
                View Project
              </button>
            </div>
          </div>
        </motion.div>

        {/* Image 3 */}
        <motion.div
          className="absolute inset-0"
          style={{
            y: useTransform(
              scrollYProgress,
              [1 / 3, 2 / 3],
              [window.innerHeight, 0]
            ),
            zIndex: 3,
          }}
        >
          <Image
            src="/images/p3.jpeg"
            alt="Project 3"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center max-w-4xl mx-auto px-12">
              <div className="text-lg font-light mb-4 tracking-widest opacity-80">
                03
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Elegant Modern Interior
              </h2>
              <p className="text-lg md:text-xl font-light mb-12 opacity-90 max-w-2xl mx-auto">
                Sophisticated spaces for refined living.
              </p>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium text-lg border border-white/20 hover:bg-white/20">
                View Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
