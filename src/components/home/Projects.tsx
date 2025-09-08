"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  // mark mounted so we don't pass an un-hydrated ref to useScroll
  useEffect(() => {
    setReady(true);
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

  // only attach the target after mount and when ref is available
  const scrollOpts =
    ready && containerRef.current
      ? { target: containerRef, offset: ["start start", "end end"] }
      : undefined;

  const { scrollYProgress } = useScroll(scrollOpts as any);

  // step for ranges
  const n = projects.length;
  const step = 1 / n;

  // ranges arrays: [0, step, 2*step, 1]
  const range = [0, step, 2 * step, 1];

  // y mappings produce the stacked behaviour (no opacity change)
  const y0 = useTransform(
    scrollYProgress,
    range,
    // first image: stay 0 until second phase then move up
    ["0%", "0%", "-100%", "-100%"]
  );

  const y1 = useTransform(
    scrollYProgress,
    range,
    // second image: below, then move to center, then move up for third
    ["100%", "0%", "0%", "-100%"]
  );

  const y2 = useTransform(
    scrollYProgress,
    range,
    // third image: below until its phase, then center
    ["100%", "100%", "0%", "0%"]
  );

  // slight scale/zoom while the image is active (gives depth)
  const s0 = useTransform(scrollYProgress, range, [1, 1.06, 1, 1]);
  const s1 = useTransform(scrollYProgress, range, [1, 1.06, 1.06, 1]);
  const s2 = useTransform(scrollYProgress, range, [1, 1, 1.06, 1.06]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        // provide enough scroll length: each slide gets ~100vh worth of scroll
        height: `${n * 100}vh`,
        background: "#000", // optional
      }}
    >
      {/* pinned area */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* order: render first -> last so later ones naturally sit above earlier ones */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${projects[0].image})`,
            y: y0,
            scale: s0,
            zIndex: 1,
          }}
        >
          <Overlay project={projects[0]} />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${projects[1].image})`,
            y: y1,
            scale: s1,
            zIndex: 2,
          }}
        >
          <Overlay project={projects[1]} />
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${projects[2].image})`,
            y: y2,
            scale: s2,
            zIndex: 3,
          }}
        >
          <Overlay project={projects[2]} />
        </motion.div>
      </div>
    </div>
  );
}

function Overlay({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0">
      {/* slight dark overlay for readable text */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center text-white px-6">
        <div className="max-w-4xl text-center">
          <div className="text-sm tracking-widest opacity-80 mb-3">
            {project.id}
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-4">
            {project.title}
          </h2>
          <p className="text-base md:text-lg opacity-90 mb-6">
            {project.subtitle}
          </p>
          <button className="bg-[#f8ede3] text-[#8d493a] px-6 py-3 rounded-full">
            View Project
          </button>
        </div>
      </div>
    </div>
  );
}
