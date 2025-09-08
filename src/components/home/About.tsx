"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const isImageInView = useInView(imageRef, { once: false, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative flex items-center"
      style={{
        maxWidth: "1920px",
        margin: "0 auto",
        width: "100%",
        padding: "80px 50px",
        minHeight: "100vh",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50, skewX: -5 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  skewX: 0,
                  transition: { duration: 1, ease: "easeOut" },
                }
              : {}
          }
          className="flex flex-col justify-between"
        >
          {/* Top part (span + heading) */}
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.2 },
                    }
                  : {}
              }
              className="text-primary-hover tracking-wide font-medium text-sm"
            >
              • About Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.4 },
                    }
                  : {}
              }
              className="text-4xl md:text-5xl lg:text-[64px] font-normal text-primary leading-tight max-w-xl"
            >
              Where Spaces Inspire, and Design Comes Alive
            </motion.h2>
          </div>

          {/* Bottom part (paragraphs + button) */}
          <div className="space-y-4 mt-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.6 },
                    }
                  : {}
              }
              className="text-sm text-primary leading-relaxed max-w-md"
            >
              At Troscán, we believe that every space has a story to tell. As a
              premier furniture design and room decorating agency.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.8 },
                    }
                  : {}
              }
              className="text-primary text-sm leading-relaxed max-w-md"
            >
              Our expert team blends timeless craftsmanship with innovative
              designs, ensuring each piece and layout reflects your unique taste
              and lifestyle. Whether you're looking to reimagine your living
              room.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 1 },
                    }
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#b85842" }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 py-4 rounded-[5px] font-medium transition-all duration-300 text-base"
              >
                More About Us
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div ref={imageRef} className="relative w-full">
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
              x: 50,
            }}
            animate={
              isImageInView
                ? {
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1,
                      ease: "easeOut",
                      delay: 0.3,
                    },
                  }
                : {
                    scale: 0.9,
                    opacity: 0,
                    x: 50,
                    transition: {
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                  }
            }
            whileInView={{
              scale: [1, 1.05, 1],
              transition: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/about.jpeg"
              alt="Luxury Interior Design"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay for better visual depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
