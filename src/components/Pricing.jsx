import { motion } from "framer-motion";
import Button from "./Button";

const tiers = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for early-stage MVPs and small projects.",
    features: [
      "MVP launch within weeks",
      "Basic integrations",
      "Email support",
      "Full IP ownership"
    ],
  },
  {
    name: "Growth",
    price: "$999",
    description: "Ideal for scaling businesses with custom needs.",
    features: [
      "All Starter features",
      "Advanced integrations",
      "Priority support",
      "Post-launch guidance"
    ],
  },
  {
    name: "Pro",
    price: "$1,999",
    description: "For serious teams ready to scale aggressively.",
    features: [
      "All Growth features",
      "Dedicated dev hours",
      "Feature-driven pricing",
      "ROI-focused delivery"
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for enterprises & complex projects.",
    features: [
      "Custom roadmap",
      "Scalable architecture",
      "Dedicated support team",
      "Flexible retainers"
    ],
    custom: true,
  },
];

const values = [
  "Rapid MVP Launch: We ship usable products quickly without unnecessary bloat.",
  "Transparent Costs: No hidden fees. You choose APIs, databases, and integrations that fit your goals.",
  "Feature-Driven Pricing: We quote after defining features together, so you know exactly what you pay for.",
  "Full IP Ownership: 100% rights handed over cleanly at project completion.",
  "Post-Launch Guidance: We support you for a smooth transition and offer optional retainers.",
  "ROI-Focused Delivery: Every feature is designed to generate measurable value for your business.",
];

const Pricing = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black text-[var(--text)] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-bold sm:text-4xl md:text-5xl sm:mb-16 font-heading"
        >
          Pricing Plans
        </motion.h2>

        {/* Pricing grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col justify-between p-6 border rounded-2xl bg-zinc-900 border-zinc-800"
            >
              <div>
                <h3 className="mb-2 text-xl font-semibold">{tier.name}</h3>
                <p className="mb-4 text-3xl font-bold">{tier.price}</p>
                <p className="mb-6 text-sm opacity-80">{tier.description}</p>
                <ul className="mb-6 space-y-2 text-left">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-400">✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {tier.custom ? (
                <Button
                  href="mailto:nexiscraft.dev@gmail.com?subject=Request%20Custom%20Quota%20%7C%20NexisCraft"
                  variant="prism"
                  size="md"
                >
                  Request Custom Quota
                </Button>
              ) : (
                <Button
                  href="mailto:nexiscraft.dev@gmail.com?subject=Start%20with%20${tier.name}%20Plan%20%7C%20NexisCraft"
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
          className="mt-20 mb-8 text-2xl font-bold sm:text-3xl font-heading"
        >
          Our Value
        </motion.h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {values.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-4 border sm:p-6 rounded-2xl bg-zinc-900 border-zinc-800"
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
