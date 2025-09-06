"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
  "/images/g1.jpeg", // Image 1 (bottom of stack)
  "/images/g2.jpeg", // Image 2
  "/images/g3.jpeg", // Image 3
  "/images/g4.jpeg", // Image 4
  "/images/g5.jpeg", // Image 5
  "/images/g6.jpeg", // Image 6 (top of stack)
];

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[300vh] bg-[#f5f1eb]"
      style={{
        maxWidth: "1920px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Sticky container */}
      <div
        className="sticky top-0 h-screen overflow-hidden flex items-center justify-center"
        style={{ padding: "0 50px" }}
      >
        {/* Images */}
        {images.map((src, i) => {
          // Calculate positions for grid (2 rows, 3 columns)
          const isTopRow = i >= 3; // Images 4,5,6 go to top row
          const colIndex = isTopRow ? i - 3 : i; // 0,1,2 position in each row

          // Grid positions
          const finalX = (colIndex - 1) * 450; // -450, 0, 450
          const finalY = isTopRow ? -200 : 200; // -200 for top, 200 for bottom

          // Initial stacked positions (more spread out)
          const initialX = i * 80; // Much more spread
          const initialY = i * 60;
          const initialRotate = i * 20; // More rotation

          return (
            <motion.div
              key={i}
              style={{
                x: useTransform(scrollYProgress, [0, 0.6], [initialX, finalX]),
                y: useTransform(scrollYProgress, [0, 0.6], [initialY, finalY]),
                rotate: useTransform(
                  scrollYProgress,
                  [0, 0.6],
                  [initialRotate, 0]
                ),
                scale: useTransform(scrollYProgress, [0, 0.6], [1, 1]),
                zIndex: images.length - i, // Top image has highest zIndex
              }}
              className="absolute w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px]
                         h-[200px] sm:h-[220px] md:h-[250px] lg:h-[280px]
                         rounded-2xl shadow-2xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`Interior design ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 300px, (max-width: 1024px) 340px, 420px"
              />
            </motion.div>
          );
        })}

        {/* Text */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0.7, 1], [0, 1]),
            y: useTransform(scrollYProgress, [0.7, 1], [100, 0]),
          }}
          className="absolute z-50 text-center max-w-5xl mx-auto px-6"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         font-bold text-[#8d493a] leading-tight"
          >
            Transforming spaces with style,
            <br />
            through Troscán's exquisite
            <br />
            design expertise.
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
