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
  { src: "/images/g1.jpeg", alt: "Luxury Living Room 1" },
  { src: "/images/g2.jpeg", alt: "Luxury Living Room 2" },
  { src: "/images/g3.jpeg", alt: "Luxury Living Room 3" },
  { src: "/images/g4.jpeg", alt: "Luxury Bedroom 1" },
  { src: "/images/g5.jpeg", alt: "Luxury Bedroom 2" },
  { src: "/images/g6.jpeg", alt: "Luxury Kitchen Design" },
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

  const phase = useMotionValue(0);

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

  const spreadX = (i: number) =>
    [-((1920 - 100) / 2 - 200), 0, (1920 - 100) / 2 - 200][i % 3];
  const spreadY = (i: number) => (i < 3 ? -250 : 250);

  const stackOffsets = [
    { x: 0, y: 0 },
    { x: 60, y: 10 },
    { x: -100, y: -30 },
    { x: 180, y: -40 },
    { x: -50, y: -100 },
    { x: -180, y: -80 },
  ];

  const textOpacity = useTransform(phaseSpring, [1, 2], [0, 1]);
  const textY = useTransform(phaseSpring, [1, 2], [150, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full w-full flex items-center justify-center">
          {IMAGES.map((image, i) => {
            const sx = stackOffsets[i].x;
            const sy = stackOffsets[i].y;
            const gx = spreadX(i);
            const gy = spreadY(i);

            return (
              <motion.div
                key={image.src}
                style={{
                  x: useTransform(phaseSpring, [0, 1, 2], [sx, gx, gx]),
                  y: useTransform(phaseSpring, [0, 1, 2], [sy, gy, gy]),
                  scale: useTransform(phaseSpring, [0, 1, 2], [1, 1.05, 1.05]),
                  zIndex: IMAGES.length - i,
                  willChange: "transform",
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                           w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px]
                           h-[180px] sm:h-[200px] md:h-[220px] lg:h-[260px]
                           rounded-xl shadow-xl overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
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
                       -translate-x-1/2 -translate-y-1/2 text-center px-4 sm:px-6 max-w-4xl"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-medium text-[#8d493a] leading-snug">
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
