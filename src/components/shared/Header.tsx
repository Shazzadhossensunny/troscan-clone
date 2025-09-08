"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-[750px]"
    >
      <nav
        className="flex items-center justify-between w-full h-[60px] transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(248, 237, 227, 1)"
            : "rgba(248, 237, 227)",
          borderRadius: "8px",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 50px 0px",
          padding: "5px 5px 5px 20px",
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl md:text-2xl font-bold text-[#8d493a] flex-shrink-0"
        >
          <Link href="/">Troscán</Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.05 }}>
              <Link
                href={item.href}
                className="text-[#8d493a] text-base hover:text-[#b85842] transition-colors duration-300 font-bold"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#b85842" }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#8d493a] text-white px-6 py-3 rounded-[5px] font-medium transition-all duration-300 flex-shrink-0 text-[16px]"
        >
          Contact us
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
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
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-[#403A34] hover:text-[#b85842] transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
