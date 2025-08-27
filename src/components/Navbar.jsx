/* ✅ Navbar.jsx */
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/", hash: "#home" },
  { name: "Services", href: "/", hash: "#services" },
  { name: "Projects", href: "/", hash: "#projects" },
  { name: "Process", href: "/", hash: "#process" },
  { name: "Pricing", href: "/", hash: "#pricing" },
  { name: "FAQ", href: "/", hash: "#faq" },
  { name: "Contact", href: "/", hash: "#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (item) => {
    if (isHomePage) {
      // On home page, scroll to section
      const element = document.querySelector(item.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If not home page, Link component will handle navigation
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-3 sm:py-4 bg-black/90 backdrop-blur-md border-b border-white/10"
    >
      {/* Brand */}
      <div className="flex justify-center mb-3 sm:mb-4">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-[var(--accent)] tracking-wide cursor-pointer">
            NexisCraft
          </h1>
        </Link>
      </div>

      {/* Navigation - Centered */}
      <div className="flex justify-center">
        <div className="px-2 sm:px-4 py-1 sm:py-2 rounded-xl border border-white/20 bg-black/30 shadow-md backdrop-blur-md">
          <ul className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 text-xs sm:text-sm font-medium tracking-wide">
            {navItems.map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {isHomePage ? (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-white/90 hover:text-[var(--accent)] transition-colors duration-300 whitespace-nowrap bg-transparent border-none cursor-pointer"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.href + item.hash}
                    className="text-white/90 hover:text-[var(--accent)] transition-colors duration-300 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
