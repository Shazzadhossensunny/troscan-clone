"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  // Scroll progress - only use after component is mounted

  const scrollOpts =
    ready && containerRef.current
      ? { target: containerRef, offset: ["start start", "end end"] }
      : undefined;
  const { scrollYProgress } = useScroll(scrollOpts as any);

  // Content moves from bottom → center → stays
  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ready ? [300, 0, 0] : [300, 300, 300]
  );

  // Opacity animation for smooth appearance
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    ready ? [0, 0.5, 1] : [0, 0, 0]
  );

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      {/* Background Image */}
      <div className="sticky top-0 h-screen w-full">
        <Image
          src="/images/call-to-action-bg.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Content Box */}
        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-[#f5f0eb]/95 rounded-3xl p-10 max-w-2xl text-center shadow-xl">
            <h2 className="text-2xl md:text-4xl font-light text-[#8b5a3c] mb-6">
              Ready to reimagine your space? Connect with us at Troscán to bring
              your vision to life with our expertise in design and decoration.
            </h2>
            <button className="bg-[#8b5a3c] hover:bg-[#a0664a] text-white px-8 py-4 rounded-full font-medium text-lg transition-all">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
