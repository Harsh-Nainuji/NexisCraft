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
      className="py-24 sm:py-32 bg-gradient-to-b from-[#0a0014] via-[#1a0033] to-[#0a0014] relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-20 text-center text-white font-heading"
        >
          The Bridge Method From Idea to Impact
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Mobile (Vertical) */}
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
                {/* Node */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group shadow-md"
                    whileHover={{ scale: 1.15, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="text-zinc-200 font-semibold text-sm relative z-10">
                      {i + 1}
                    </span>
                  </motion.div>

                  {/* Connecting line */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-12 left-1/2 w-px h-12 bg-gradient-to-b from-green-500/40 via-blue-500/30 to-transparent -translate-x-1/2" />
                  )}
                </div>

                {/* Step content */}
                <div className="flex-1 pt-1">
                  <h3 className="text-green-400 font-semibold text-sm uppercase tracking-wide mb-2">
                    {step.split(":")[0]}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {step.split(":")[1]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop (Horizontal) */}
          <div className="hidden lg:block relative">
            {/* Animated Line */}
            <motion.div
              ref={lineRef}
              initial={{ scaleX: 0 }}
              animate={controls}
              className="absolute top-8 left-0 w-full h-[2px] bg-gradient-to-r from-green-500 via-blue-400 to-purple-500 origin-left"
            />

            <div className="flex justify-between items-start relative">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col items-center w-1/5 px-4"
                >
                  {/* Node */}
                  <motion.div
                    className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-8 group relative shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -4 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="text-zinc-200 font-bold relative z-10">
                      {i + 1}
                    </span>
                  </motion.div>

                  {/* Content */}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            href="mailto:nexiscraft.dev@gmail.com?subject=Request%20Pricing%20%7C%20NexisCraft"
            variant="prism"
            size="lg"
            prismStops={["#22d3eeaa", "#4ade80aa", "#a78bfa", "#60a5faaa"]}
          >
            Book a Free Diagnosis{" "}
            <span className="ml-2 text-xs text-zinc-300">(limited spots)</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TheBridgeMethod;
