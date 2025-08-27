import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Button from "./Button";

const steps = [
  "Diagnose: Clarify single ROI goal, users, and success metrics.",
  "Draft: Wireframes + clickable prototype outlining the scope.",
  "Build: Iterative releases; core features first; continuous feedback.",
  "Launch: Seamless go-live with tracking, support & handoff docs.",
  "Accelerate: Optimization backlog, A/B tests, growth automation.",
];

const TheBridgeMethod = () => {
  const lineRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scaleX: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  }, [controls]);

  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-black relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-20 text-center text-white font-heading"
        >
          From Idea to Impact
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Mobile Timeline (Vertical) */}
          <div className="lg:hidden space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex items-start gap-6"
              >
                {/* Minimal circle node */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="text-zinc-300 font-medium text-sm relative z-10">
                      {i + 1}
                    </span>
                  </motion.div>

                  {/* Connecting line for mobile */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-12 left-1/2 w-px h-12 bg-gradient-to-b from-zinc-700 to-transparent -translate-x-1/2" />
                  )}
                </div>

                {/* Step content */}
                <div className="flex-1 pt-1">
                  <motion.div
                    className="text-left"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <h3 className="text-green-400 font-semibold text-sm uppercase tracking-wide mb-2">
                      {step.split(":")[0]}
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {step.split(":")[1]}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Timeline (Horizontal) */}
          <div className="hidden lg:block relative">
            {/* Animated connecting line */}
            <motion.div
              ref={lineRef}
              initial={{ scaleX: 0 }}
              animate={controls}
              className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-zinc-700 via-green-400 to-zinc-700 origin-left"
            />

            <div className="flex justify-between items-start relative">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col items-center w-1/5 px-4"
                >
                  {/* Minimal circle node */}
                  <motion.div
                    className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-8 group relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="text-zinc-300 font-medium relative z-10">
                      {i + 1}
                    </span>
                  </motion.div>

                  {/* Step content */}
                  <div className="text-center">
                    <h3 className="text-green-400 font-semibold text-sm uppercase tracking-wide mb-3">
                      {step.split(":")[0]}
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {step.split(":")[1]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button href="mailto:nexiscraft.dev@gmail.com?subject=Request%20Pricing%20%7C%20NexisCraft" variant="prism" size="lg">
            Book a Free Diagnosis <span className="ml-2 text-xs text-zinc-300">(limited spots)</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TheBridgeMethod;
