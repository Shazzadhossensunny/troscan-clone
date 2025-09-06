"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "News", href: "#news" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300`}
      style={{ width: "750px", height: "60px" }}
    >
      <nav
        className={`w-full h-full rounded-full px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xl"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-primary flex-shrink-0"
        >
          Troscan
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className="text-primary hover:text-primary-hover transition-colors duration-300 font-medium"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#b85842" }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-6 py-2 rounded-full font-medium transition-all duration-300 flex-shrink-0"
        >
          Contact us
        </motion.button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl p-4 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-primary hover:text-primary-hover transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
