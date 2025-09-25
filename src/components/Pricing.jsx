import { motion } from "framer-motion";
import Button from "./Button";

const tiers = [
  {
    name: "Web Essentials",
    price: "$499",
    bestFor: "Best for small businesses & personal brands",
    description: "Custom websites that actually drive results, not cookie-cutter templates.",
    features: [
      "Pixel perfect responsive design",
      "SEO ready & fast performance",
      "Free website audit",
      "1:1 brainstorming session",
    ],
    extras: [
      "Transparent Pricing — no hidden costs",
      "Full IP Ownership",
    ],
  },
  {
    name: "Ecommerce Engine",
    price: "$1,499",
    bestFor: "Best for ecommerce founders scaling online",
    description: "Fully custom ecommerce platforms built for speed and scalability.",
    features: [
      "Custom shopping cart & checkout (no templates)",
      "Secure payment gateway integration",
      "Dynamic product management system",
      "AI-driven upsell & recommendation logic",
    ],
    extras: [
      "Scalable Delivery — future-proof foundation",
      "ROI-Focused Approach",
    ],
  },
  {
    name: "AI Integrations",
    price: "$1,999",
    bestFor: "Best for companies adding AI superpowers",
    description: "Bring AI superpowers into your existing site or workflows.",
    features: [
      "Custom AI chatbots & support agents",
      "Automated workflows (CRM, email, data sync)",
      "API integrations with leading AI services",
      "Post-launch tuning & optimization",
    ],
    extras: [
      "Brainstorming Sessions included",
      "Transparent Pricing & scope clarity",
    ],
  },
  {
    name: "SaaS Build",
    price: "$3,499",
    bestFor: "Best for startups building their first SaaS",
    description: "Production-ready SaaS products engineered for scale.",
    features: [
      "Scalable backend & clean architecture",
      "Authentication & subscription billing",
      "Analytics & reporting dashboards",
      "Ongoing feature development support",
    ],
    extras: [
      "Free Website Audit before dev",
      "ROI-Focused product strategy",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    bestFor: "Best for high-growth companies",
    description: "Tailored SaaS & AI systems for high-growth companies.",
    features: [
      "Custom roadmap & dedicated developer team",
      "Enterprise-grade AI agents & automations",
      "Infrastructure design & scaling strategy",
      "Flexible retainer models",
    ],
    extras: [
      "Dedicated long-term partner support",
      "Custom engagement, maximum ROI",
    ],
    custom: true,
  },
];

const values = [
  "Free Website Audits: Spot gaps & opportunities before you commit.",
  "Brainstorming Sessions: We work with you, not just for you.",
  "Transparent Pricing: Clear scope, no surprise bills.",
  "Full IP Ownership: You own 100% of code & assets.",
  "Scalable Delivery: From small business sites to enterprise SaaS.",
  "ROI-Focused Approach: Every feature tied to measurable outcomes.",
];

const Pricing = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black text-[var(--text)] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-3xl font-bold sm:text-4xl md:text-5xl sm:mb-16 font-heading"
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
              className="flex flex-col justify-between p-6 border rounded-2xl bg-zinc-900 border-zinc-800"
            >
              <div>
                <h3 className="mb-1 text-xl font-semibold">{tier.name}</h3>
                <p className="mb-1 text-3xl font-bold">{tier.price}</p>
                <p className="text-sm text-green-400 mb-4">{tier.bestFor}</p>
                <p className="mb-6 text-sm opacity-80">{tier.description}</p>
                
                {/* Core features */}
                <ul className="mb-4 space-y-2 text-left">
                  {tier.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
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
