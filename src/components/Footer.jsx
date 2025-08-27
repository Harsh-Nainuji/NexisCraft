import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-[var(--text)] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Left: Logo / Brand */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h3 className="text-lg sm:text-xl font-heading font-bold">NexisCraft</h3>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1">Built for founders who want product + growth.</p>
        </motion.div>

        {/* Right: Contact / Socials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-zinc-400 text-xs sm:text-sm"
        >
          <p className="break-all">nexiscraft.dev@gmail.com</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/nexiscraft/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--red)] hover:text-[var(--red-hover)] transition-colors duration-300 p-2 hover:bg-[var(--red)]/10 rounded-lg"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/nexiscraft/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--yellow)] hover:text-[var(--yellow-hover)] transition-colors duration-300 p-2 hover:bg-[var(--yellow)]/10 rounded-lg"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://x.com/NexisCraft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:text-white transition-colors duration-300 p-2 hover:bg-[var(--accent)]/10 rounded-lg"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom copyright */}
      <motion.div
        className="mt-6 sm:mt-8 text-center text-zinc-500 text-xs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        © {new Date().getFullYear()} NexisCraft. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
