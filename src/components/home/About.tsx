"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 relative min-h-screen bg-[#F8EDE3]"
      style={{
        maxWidth: "1920px",
        margin: "0 auto",
        width: "100%",
        padding: "80px 50px",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50, skewX: -5 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  skewX: 0,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.2,
                  },
                }
              : {}
          }
          className="space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.4,
                    },
                  }
                : {}
            }
            className="text-primary-hover uppercase tracking-wide font-medium text-sm"
          >
            About Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.6,
                    },
                  }
                : {}
            }
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
          >
            Crafting Spaces That
            <span className="block text-primary-hover">Inspire Living</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: 0.8,
                    },
                  }
                : {}
            }
            className="text-lg text-primary/80 leading-relaxed max-w-md"
          >
            We believe that exceptional design should be both beautiful and
            functional. Our passion lies in creating spaces that reflect your
            unique style while enhancing your daily life experience.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: 1,
                    },
                  }
                : {}
            }
            className="text-primary/70 leading-relaxed max-w-md"
          >
            With over two decades of expertise in luxury interior design, we
            transform ordinary spaces into extraordinary environments that tell
            your story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: 1.2,
                    },
                  }
                : {}
            }
            className="pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#b85842" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-full font-medium transition-all duration-300 text-lg"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, skewX: 5 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  skewX: 0,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.4,
                  },
                }
              : {}
          }
          className="relative"
        >
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about.jpeg"
              alt="Luxury Interior Design"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        delay: 1.4,
                      },
                    }
                  : {}
              }
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary-hover rounded-full blur-xl opacity-20"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        delay: 1.6,
                      },
                    }
                  : {}
              }
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-button-bg rounded-full blur-xl opacity-30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
