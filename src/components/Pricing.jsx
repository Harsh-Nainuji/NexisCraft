import { motion } from "framer-motion";
import { useMemo } from "react";
import Button from "./Button";

const points = [
  "Rapid MVP Launch: We ship usable products quickly without unnecessary bloat.",
  "Transparent Costs: No hidden fees. You choose APIs, databases, and integrations that fit your goals.",
  "Feature-Driven Pricing: We quote after defining features together, so you know exactly what you pay for.",
  "Full IP Ownership: 100% rights handed over cleanly at project completion.",
  "Post-Launch Guidance: We support you for a smooth transition and offer optional retainers.",
  "ROI-Focused Delivery: Every feature is designed to generate measurable value for your business.",
];

const Pricing = () => {
  // Memoize the points data to prevent unnecessary re-renders
  const memoizedPoints = useMemo(() => points, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black text-[var(--text)] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 font-heading px-4"
        >
          Pricing & Engagement
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {memoizedPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-4 sm:p-6 rounded-2xl bg-zinc-900 border border-zinc-800 group overflow-hidden cursor-default"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none rounded-2xl"></div>

              <div className="relative z-10 text-left flex items-start gap-3 sm:gap-4">
                <span className="text-green-400 text-lg sm:text-xl mt-1 flex-shrink-0">✔</span>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">{point}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="text-center mt-8 sm:mt-12"
>
  <Button href="mailto:nexiscraft.dev@gmail.com?subject=Request%20Pricing%20%7C%20NexisCraft" variant="prism" size="lg">
    Request Your Pricing
  </Button>
</motion.div>

      </div>
    </section>
  );
};

export default Pricing;
