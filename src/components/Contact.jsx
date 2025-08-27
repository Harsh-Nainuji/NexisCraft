import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./Button";

const Contact = () => {
  return (
    <section className="relative bg-black text-[var(--text)] py-16 sm:py-20 md:py-24 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* subtle top hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Left: copy */}
        <motion.div
          className="md:col-span-7 text-center md:text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Tell us the outcome.
            <br className="hidden md:block" />
            We'll map the shortest path.
          </h2>

          <p className="mt-4 sm:mt-5 text-zinc-400 max-w-xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
            No forms. No fluff. One clear conversation to align on scope,
            milestones, and the fastest route to a live result.
          </p>

          {/* tiny divider accent */}
          <div className="mt-6 sm:mt-8 h-px w-32 bg-gradient-to-r from-zinc-700 to-zinc-500/40 mx-auto md:mx-0" />
        </motion.div>

        {/* Right: action block */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-sm p-4 sm:p-6 md:p-7 group overflow-hidden">
            {/* shine sweep on hover */}
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-zinc-500">
                Start here
              </p>
              <h3 className="mt-1 text-lg sm:text-xl font-semibold">
                Book a quick diagnosis call
              </h3>
              <br />

              <Button
                href="mailto:nexiscraft.dev@gmail.com?subject=Diagnosis%20Call%20%7C%20NexisCraft"
                variant="prism"
                size="md"
                className="w-full sm:w-auto"
              >
                Email to schedule
              </Button>

              {/* socials */}
              <div className="mt-4 sm:mt-6 flex items-center gap-4 justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/nexiscraft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--red)] hover:text-[var(--red-hover)] transition-colors duration-300 p-2 hover:bg-[var(--red)]/10 rounded-lg"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nexiscraft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--yellow)] hover:text-[var(--yellow-hover)] transition-colors duration-300 p-2 hover:bg-[var(--yellow)]/10 rounded-lg"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://x.com/NexisCraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:text-white transition-colors duration-300 p-2 hover:bg-[var(--accent)]/10 rounded-lg"
                >
                  <FaXTwitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* subtle bottom hairline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />
    </section>
  );
};

export default Contact;
