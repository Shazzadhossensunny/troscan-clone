const Footer = () => {
  return (
    <footer className="bg-[#8b5a3c] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center mb-16">
          {/* Logo */}
          <h1 className="text-3xl lg:text-4xl font-light mb-16">Troscán</h1>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {/* Sitemap Column */}
            <div>
              <h3 className="text-lg font-medium mb-8 opacity-80">Sitemap</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/about"
                    className="text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/news"
                    className="text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials Column */}
            <div>
              <h3 className="text-lg font-medium mb-8 opacity-80">Socials</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            {/* More Column */}
            <div>
              <h3 className="text-lg font-medium mb-8 opacity-80">More</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    License
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Grainient
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg hover:opacity-80 transition-opacity duration-300"
                  >
                    Inspirux
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-lg hover:opacity-80 transition-opacity duration-300"
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">© 2025, All rights reserved</p>

            {/* Made in Framer badge (optional) */}
            <div className="mt-4 md:mt-0">
              <span className="text-sm opacity-60 bg-white/10 px-3 py-1 rounded-full">
                ⚡ Made in Framer
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
