import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useMemo } from "react";

// Services Data
const servicesData = [
  {
    title: "AI-Powered MVPs",
    points: [
      "Launch future-ready MVPs quickly",
      "Validate with real users",
      "Integrate AI automation",
    ],
  },
  {
    title: "Conversion Websites",
    points: [
      "Optimized UX for conversions",
      "Clear CTA strategies",
      "Growth-driven design choices",
    ],
  },
  {
    title: "Seamless Integrations",
    points: [
      "Connect all your tools",
      "Automate repetitive workflows",
      "Real-time analytics integration",
    ],
  },
  {
    title: "Faster Sprints",
    points: [
      "Cut development cycles",
      "Reduce overhead and delays",
      "Focus on core features",
    ],
  },
  {
    title: "Higher ROI",
    points: [
      "Every feature drives value",
      "Increase sales predictably",
      "Minimize wasted effort",
    ],
  },
  {
    title: "Scalable Growth",
    points: [
      "Build systems that scale",
      "Grow user base seamlessly",
      "Future-proof architecture",
    ],
  },
];

// Card Component with glass & shine effect
const Card = ({ title, points }) => (
  <motion.div
    className="relative p-6 overflow-hidden text-left border rounded-2xl bg-white/5 border-white/10 backdrop-blur-md shadow-lg group transition-all duration-500"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    {/* Subtle shine overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-20 pointer-events-none animate-[shine_1.5s_infinite]" />

    <h3 className="mb-4 text-xl font-semibold text-white sm:text-2xl">{title}</h3>

    <ul className="space-y-2 text-sm text-zinc-300 sm:text-base">
      {points.map((point, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <FaCheckCircle className="flex-shrink-0 mt-1 text-green-400" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => {
  const memoizedServicesData = useMemo(() => servicesData, []);

  return (
    <section
      id="services"
      className="relative px-4 py-16 sm:py-20 md:py-24 sm:px-6 lg:px-8 bg-[#0a0014]"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-4 mb-12 text-3xl font-bold sm:text-4xl md:text-5xl bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent"
        >
          Our Services & Outcomes
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {memoizedServicesData.map((item, idx) => (
            <Card key={idx} title={item.title} points={item.points} />
          ))}
        </div>
      </div>

      {/* Subtle background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none" />
    </section>
  );
};

export default Services;
