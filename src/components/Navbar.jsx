import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

// Navigation items array
const navItems = [
  { name: "Home", href: "/", hash: "#home" },
  { name: "Why Us ?", href: "/", hash: "#quickvalue" },
  { name: "Projects", href: "/", hash: "#projects" },
  { name: "Services", href: "/", hash: "#services" },
  { name: "Process", href: "/", hash: "#process" },
  { name: "Pricing", href: "/", hash: "#pricing" },
  { name: "FAQ", href: "/", hash: "#faq" },
  { name: "Contact", href: "/", hash: "#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  // State to toggle mobile hamburger menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to section if on homepage
  const handleNavClick = (item) => {
    setMenuOpen(false); // Close mobile menu on click
    if (isHomePage) {
      const element = document.querySelector(item.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 
                 bg-gradient-to-b from-[#A855F7] via-[#3b0a6d] to-transparent
                 shadow-lg backdrop-blur-md"
    >
      {/* Brand + Hamburger flex container */}
      <div className="flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-white tracking-wide cursor-pointer">
            NexisCraft
          </h1>
        </Link>

        {/* Hamburger menu button for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Desktop navigation */}
        <ul className="hidden md:flex gap-4 md:gap-6 lg:gap-8 text-sm sm:text-base font-medium tracking-wide mx-auto">
          {navItems.map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {isHomePage ? (
                <button
                  onClick={() => handleNavClick(item)}
                  className="text-white/80 hover:text-[#e7ceff] transition-colors duration-300 bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.href + item.hash}
                  className="text-white/80 hover:text-[#A855F7] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:hidden mt-4 gap-4 bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg"
          >
            {navItems.map((item, idx) => (
              <li key={idx}>
                {isHomePage ? (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="w-full text-left text-white/90 hover:text-[#e7ceff] transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.href + item.hash}
                    className="w-full text-left text-white/90 hover:text-[#A855F7] transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
