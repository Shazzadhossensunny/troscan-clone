"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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

  // Smooth spring-based animation for delayed effect
  const springConfig = { stiffness: 80, damping: 20, mass: 0.5 };

  const contentY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      ready ? [400, 0, 0] : [400, 400, 400]
    ),
    springConfig
  );

  const contentOpacity = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.3, 0.5],
      ready ? [0, 0.5, 1] : [0, 0, 0]
    ),
    springConfig
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
          className="absolute inset-0 flex items-center justify-center px-4 sm:px-6"
        >
          <div className="bg-[#f5f0eb] rounded-[10px] p-14 sm:p-16 md:p-20 max-w-3xl text-center shadow-xl">
            <h2 className="text-2xl md:text-[28px] text-[#8b5a3c] font-normal mb-6">
              Ready to reimagine your space? Connect with us at Troscán to bring
              your vision to life with our expertise in design and decoration.
            </h2>
            <button className="bg-[#8d493a] hover:bg-[#a0664a] text-white px-6 py-4 rounded-[5px] font-medium text-base transition-all">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
