import { motion } from "framer-motion";

const services = [
  {
    title: "Webcraft",
    subtitle: "Fast, SEO-first websites built to convert.",
    points: [
      "Lightning fast performance",
      "Growth optimized UX",
      "SEO & analytics built-in",
    ],
  },
  {
    title: "Commerce Core",
    subtitle: "Secure, smart storefronts with full analytics.",
    points: [
      "Payment & subscription ready",
      "Insightful analytics dashboards",
      "Optimized checkout flow",
    ],
  },
  {
    title: "Revive",
    subtitle: "Modernize legacy products into delightful experiences.",
    points: [
      "UX redesign & modernization",
      "Performance & accessibility upgrades",
      "Future-proof architecture",
    ],
  },
  {
    title: "Command Desk",
    subtitle: "Dashboards & CRMs teams actually enjoy using.",
    points: [
      "Custom dashboard design",
      "Intuitive user workflow",
      "Actionable insights for teams",
    ],
  },
];

const ServiceCard = ({ title, subtitle, points, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
    transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
    className="relative p-6 border shadow-xl bg-white/5 backdrop-blur-xl border-white/10 rounded-2xl sm:p-8 group"
  >
    {/* Glow behind card */}
    <div className="absolute inset-0 transition duration-500 opacity-0 bg-gradient-to-tr from-green-500/10 via-transparent to-blue-500/10 group-hover:opacity-100 rounded-2xl"></div>

    <div className="relative z-10">
      <h3 className="mb-2 text-xl font-semibold text-white sm:text-2xl sm:mb-3">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-zinc-300 sm:mb-6 sm:text-base">{subtitle}</p>

      <ul className="space-y-2 text-sm text-gray-300 list-none sm:space-y-3 sm:text-base">
        {points.map((p, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="flex items-start gap-2 sm:gap-3"
          >
            <span className="flex-shrink-0 mt-1 text-green-400">●</span>
            <span className="leading-relaxed">{p}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const CoreWebServices = () => {
  return (
    <section className="px-4 py-20 sm:py-24 md:py-28 bg-gradient-to-b from-black via-zinc-950 to-black sm:px-6 lg:px-8">
      <div className="mx-auto text-center max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 mb-10 text-3xl font-bold text-white sm:text-4xl md:text-5xl sm:mb-14 font-heading"
        >
          Core Web Services
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 lg:gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreWebServices;
