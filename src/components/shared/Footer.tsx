"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#8d493a] text-white py-16 px-4 sm:px-6 lg:px-12 xl:px-16">
      <div className="max-w-[1920px] mx-auto w-full">
        {/* Main Content */}
        <div className="text-center mb-16 max-w-[1200px] mx-auto">
          {/* Logo */}
          <h1 className="text-2xl sm:text-3xl font-bold mb-10">Troscán</h1>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Sitemap Column */}
            <div>
              <h3 className="text-sm sm:text-base font-medium mb-6 opacity-80">
                Sitemap
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-base sm:text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-base sm:text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-base sm:text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-base sm:text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Socials Column */}
            <div>
              <h3 className="text-sm sm:text-base font-medium mb-6 opacity-80">
                Socials
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base sm:text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base sm:text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base sm:text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base sm:text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            {/* More Column */}
            <div>
              <h3 className="text-sm sm:text-base font-medium mb-6 opacity-80">
                More
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-base sm:text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    License
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base sm:text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Grainient
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base sm:text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Inspirux
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-base sm:text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Store
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex justify-center items-center">
            <p className="text-sm sm:text-base opacity-80">
              © 2025, All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
