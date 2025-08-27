import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { useMemo } from "react";

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

const Card = ({ title, points }) => (
  <motion.div
    className="relative p-4 overflow-hidden text-left border rounded-2xl sm:p-6 bg-zinc-900 border-zinc-800 group"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    {/* Subtle shine overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-30 pointer-events-none animate-[shine_1.5s_infinite]"></div>
    
    <h3 className="mb-3 text-lg font-semibold text-[var(--text)] sm:text-xl sm:mb-4">{title}</h3>
    
    <ul className="space-y-2 text-sm text-[var(--text-muted)] sm:text-base">
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
  // Memoize the services data to prevent unnecessary re-renders
  const memoizedServicesData = useMemo(() => servicesData, []);

  return (
    <section id="services" className="relative px-4 py-16 bg-black sm:py-20 md:py-24 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-4 mb-8 text-3xl font-bold text-[var(--text)] sm:text-4xl md:text-5xl sm:mb-12"
        >
          Our <span className="text-purple-500">Services & Outcomes</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 md:gap-8">
          {memoizedServicesData.map((item, idx) => (
            <Card key={idx} title={item.title} points={item.points} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
