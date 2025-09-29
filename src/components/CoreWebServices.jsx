import { motion } from "framer-motion";

// 🔥 Redesigned Service List with SaaS & AI Agents added
const services = [
  {
    title: "Webcraft",
    subtitle: "Lightning-fast, SEO-first websites built to convert visitors into customers.",
    points: [
      "Next-gen performance & speed",
      "Conversion-optimized UX",
      "SEO + analytics baked in",
    ],
  },
  {
    title: "Commerce Core",
    subtitle: "Smart, scalable eCommerce solutions with powerful analytics and automation.",
    points: [
      "Payments, subscriptions & upsells",
      "Real-time sales dashboards",
      "Optimized checkout funnels",
    ],
  },
  {
    title: "SaaS Systems",
    subtitle: "Custom SaaS platforms designed to scale with your startup or enterprise.",
    points: [
      "Subscription & multi-tenant ready",
      "Usage-based billing integrations",
      "High-availability architecture",
    ],
  },
  {
    title: "AI Agents",
    subtitle: "Deploy intelligent AI assistants for customer support, sales, and automation.",
    points: [
      "Conversational chat & voice agents",
      "Custom workflows & automations",
      "Integrates with your existing stack",
    ],
  },
  {
    title: "Revive",
    subtitle: "Transform legacy products into delightful, modern digital experiences.",
    points: [
      "UX/UI redesign & modernization",
      "Accessibility & performance upgrades",
      "Future-proof architecture",
    ],
  },
  {
    title: "Command Desk",
    subtitle: "CRMs and dashboards that teams actually love using.",
    points: [
      "Custom workflows & pipelines",
      "Intuitive dashboards",
      "Actionable insights for growth",
    ],
  },
];

// 🔥 Single Service Card
const ServiceCard = ({ title, subtitle, points, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
    transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
    className="relative p-6 border shadow-xl bg-white/5 backdrop-blur-xl border-white/10 rounded-2xl sm:p-8 group"
  >
    {/* Glow Behind Card */}
    <div className="absolute inset-0 transition duration-500 opacity-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10 group-hover:opacity-100 rounded-2xl"></div>

    {/* Card Content */}
    <div className="relative z-10">
      <h3 className="mb-2 text-xl font-semibold text-white sm:text-2xl sm:mb-3">
        {title}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-zinc-300 sm:mb-6 sm:text-base">
        {subtitle}
      </p>

      <ul className="space-y-2 text-sm text-gray-300 list-none sm:space-y-3 sm:text-base">
        {points.map((p, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className="flex items-start gap-2 sm:gap-3"
          >
            <span className="flex-shrink-0 mt-1 text-cyan-400">●</span>
            <span className="leading-relaxed">{p}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

// 🔥 Main Section
const CoreWebServices = () => {
  return (
    <section className="px-4 py-20 sm:py-24 md:py-28 bg-gradient-to-b from-black via-[#1a0033] to-black sm:px-6 lg:px-8">
      <div className="mx-auto text-center max-w-7xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 mb-10 text-3xl font-bold sm:text-4xl md:text-5xl sm:mb-14 font-heading bg-gradient-to-r from-white via-zinc-200 to-white bg-clip-text text-transparent"
        >
          Core Web Services
        </motion.h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreWebServices;
