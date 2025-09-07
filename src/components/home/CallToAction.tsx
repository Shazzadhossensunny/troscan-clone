"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowHeight(window.innerHeight);
      }
    };

    // Set initial height and mark as mounted
    handleResize();
    setIsMounted(true);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize scroll animations with default values
  let scrollYProgress: MotionValue<number> | undefined;
  let contentY: MotionValue<number> | undefined;
  let contentOpacity: MotionValue<number> | undefined;
  let backgroundScale: MotionValue<number> | undefined;

  if (isMounted && containerRef.current) {
    const { scrollYProgress: scroll } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"],
    });

    scrollYProgress = scroll;

    // Content slides up from bottom, stays at center, then continues up
    contentY = useTransform(
      scrollYProgress,
      [0, 0.2, 0.4, 1],
      [windowHeight * 0.5, 0, 0, -windowHeight * 0.2]
    );

    // Content fades in as it moves up, then fades out
    contentOpacity = useTransform(
      scrollYProgress,
      [0, 0.3, 0.7, 0.4, 1],
      [0, 0.5, 1, 0.5, 0]
    );

    // Subtle background zoom effect
    backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  }

  if (!isMounted) {
    return (
      <div className="relative bg-gray-900" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: "200vh" }} // Double height for scroll effect
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: backgroundScale || 1 }}
        >
          <Image
            src="/images/call-to-action-bg.jpeg"
            alt="Call to Action Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* Content Box */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            y: contentY || 200,
            opacity: contentOpacity || 0,
          }}
        >
          <motion.div
            className="bg-[#f5f0eb]/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 lg:p-16 max-w-2xl mx-4 sm:mx-6 lg:mx-8 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Content */}
            <div className="text-center">
              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-[#8b5a3c] leading-tight mb-8 sm:mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ready to reimagine your space? Connect with us at Troscán to
                bring your vision to life with our expertise in design and
                decoration.
              </motion.h2>

              <motion.button
                className="bg-[#8b5a3c] hover:bg-[#a0664a] text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-medium text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(139, 90, 60, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Progress Indicator */}
        {scrollYProgress && (
          <div className="fixed bottom-8 right-8 z-50">
            <div className="w-16 h-16 relative">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <path
                  className="text-white/20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  className="text-[#8b5a3c]"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  strokeLinecap="round"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  style={{
                    pathLength: scrollYProgress,
                  }}
                  initial={{ pathLength: 0 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-sm font-medium">CTA</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallToAction;
