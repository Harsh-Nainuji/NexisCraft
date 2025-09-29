import { motion } from "framer-motion";
import Button from "./Button";

// Pricing tiers (with SaaS + AI agent integration language)
const tiers = [
  {
    name: "Web Essentials",
    price: "$499",
    description: "Perfect for early-stage SaaS MVPs and AI-driven prototypes.",
    features: [
      "MVP launch within weeks",
      "Basic SaaS integrations",
      "Email + chat support",
      "AI assistant trial included",
      "Full IP ownership",
    ],
  },
  {
    name: "Growth",
    price: "$999",
    description: "Ideal for scaling SaaS products with AI agents built-in.",
    features: [
      "All Starter features",
      "Advanced SaaS integrations",
      "Priority AI agent support",
      "Analytics & insights dashboards",
      "Post-launch guidance",
    ],
  },
  {
    name: "AI Integrations",
    price: "$1,999",
    description: "For serious teams scaling SaaS with AI-first workflows.",
    features: [
      "All Growth features",
      "Dedicated dev & AI training hours",
      "Feature-driven pricing",
      "Custom AI agent integration",
      "ROI-focused delivery",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored SaaS + AI agent solutions for enterprises.",
    features: [
      "Custom roadmap & AI strategy",
      "Scalable architecture",
      "Dedicated support team",
      "Flexible retainers",
      "Enterprise-grade security",
    ],
    custom: true,
  },
];

// Value points (updated for SaaS + AI agent branding)
const values = [
  "AI-Ready Architecture: Every project designed to integrate AI agents effortlessly.",
  "Rapid SaaS MVP Launch: We ship usable SaaS products quickly without bloat.",
  "Transparent Costs: No hidden fees — you choose APIs, AI models & integrations.",
  "Feature-Driven Pricing: We quote after defining features together, no surprises.",
  "Full IP Ownership: 100% rights handed over cleanly at project completion.",
  "Post-Launch Guidance: Smooth transition with optional SaaS retainers.",
  "ROI-Focused Delivery: Features designed to generate measurable business value.",
];

const Pricing = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#0a0014] via-[#130025] to-black text-[var(--text)] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-bold sm:text-4xl md:text-5xl sm:mb-16 font-heading text-white"
        >
          Pricing Plans
        </motion.h2>

        {/* Pricing grid: 3 top row, 2 second row */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
              className="relative flex flex-col justify-between p-6 border rounded-2xl bg-white/5 backdrop-blur-xl border-white/10 shadow-xl"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 transition duration-500 opacity-0 bg-gradient-to-tr from-green-500/10 via-transparent to-blue-500/10 group-hover:opacity-100 rounded-2xl"></div>

              <div className="relative z-10">
                <h3 className="mb-2 text-xl font-semibold text-white">{tier.name}</h3>
                <p className="mb-4 text-3xl font-bold text-green-400">{tier.price}</p>
                <p className="mb-6 text-sm text-zinc-300">{tier.description}</p>

                <ul className="mb-6 space-y-2 text-left">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-zinc-200">
                      <span className="text-green-400">✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Extras */}
                <ul className="mb-6 space-y-2 text-left opacity-80">
                  {tier.extras?.map((e, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-yellow-400">★</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tier.custom ? (
                <Button
                  href="mailto:nexiscraft.dev@gmail.com?subject=Request%20Custom%20Quote%20%7C%20NexisCraft"
                  variant="prism"
                  size="md"
                >
                  Request Custom Quote
                </Button>
              ) : (
                <Button
                  href={`mailto:nexiscraft.dev@gmail.com?subject=Start%20with%20${tier.name}%20Plan%20%7C%20NexisCraft`}
                  href={`mailto:nexiscraft.dev@gmail.com?subject=Start%20with%20${tier.name}%20Plan%20%7C%20NexisCraft`}
                  variant="prism"
                  size="md"
                >
                  Get Started
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Our Values */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 mb-8 text-2xl font-bold sm:text-3xl font-heading text-white"
        >
          Why Choose Us
        </motion.h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {values.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-4 border sm:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border-white/10 text-zinc-200"
            >
              <div className="flex items-start gap-3">
                <span className="text-green-400">✔</span>
                <p>{point}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
