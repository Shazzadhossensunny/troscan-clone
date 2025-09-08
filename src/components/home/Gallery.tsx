"use client";

import {
  motion,
  useScroll,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = [
  "/images/g1.jpeg",
  "/images/g2.jpeg",
  "/images/g3.jpeg",
  "/images/g4.jpeg",
  "/images/g5.jpeg",
  "/images/g6.jpeg",
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: mounted ? sectionRef : undefined,
    offset: ["start start", "end end"],
  });

  const STEP_A = 0.33;
  const STEP_B = 0.66;

  // phase (0 = stack, 1 = spread, 2 = text)
  const phase = useMotionValue(0);

  // ✅ Smooth spring-based phase
  const phaseSpring = useSpring(phase, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      if (latest < STEP_A) {
        phase.set(0);
      } else if (latest < STEP_B) {
        phase.set(1);
      } else {
        phase.set(2);
      }
    });
  }, [scrollYProgress, phase]);

  // Spread grid positions
  const spreadX = (i: number) =>
    [-((1920 - 100) / 2 - 200), 0, (1920 - 100) / 2 - 200][i % 3];
  const spreadY = (i: number) => (i < 3 ? -250 : 250);

  // Stack offsets
  const stackOffsets = [
    { x: 0, y: 0 },
    { x: 60, y: 10 },
    { x: -100, y: -30 },
    { x: 180, y: -40 },
    { x: -50, y: -100 },
    { x: -180, y: -80 },
  ];

  // Text animation (phase 1 → 2)
  const textOpacity = useTransform(phaseSpring, [1, 2], [0, 1]);
  const textY = useTransform(phaseSpring, [1, 2], [150, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-[#f5f1eb]"
      style={{
        maxWidth: "1920px",
        margin: "0 auto",
        width: "100%",
        padding: "0 50px",
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full w-full flex items-center justify-center">
          {IMAGES.map((src, i) => {
            const sx = stackOffsets[i].x;
            const sy = stackOffsets[i].y;
            const gx = spreadX(i);
            const gy = spreadY(i);

            return (
              <motion.div
                key={src}
                style={{
                  x: useTransform(phaseSpring, [0, 1, 2], [sx, gx, gx]),
                  y: useTransform(phaseSpring, [0, 1, 2], [sy, gy, gy]),
                  scale: useTransform(phaseSpring, [0, 1, 2], [1, 1.05, 1.05]),
                  opacity: 1,
                  zIndex: IMAGES.length - i,
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                           w-[300px] sm:w-[340px] md:w-[360px] lg:w-[380px]
                           h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px]
                           rounded-xl shadow-xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Interior ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </motion.div>
            );
          })}

          {/* Text */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="pointer-events-none absolute left-1/2 top-1/2
                       -translate-x-1/2 -translate-y-1/2 text-center px-6 max-w-4xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8d493a] leading-snug">
              Transforming spaces with style,
              <br />
              through Troscán&apos;s exquisite design expertise.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
