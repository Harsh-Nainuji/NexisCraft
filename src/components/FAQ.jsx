import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      q: "Who owns the code?",
      a: "You do. We provide full handoff with a clean repository, deployment guides, and documentation.",
    },
    {
      q: "Do you build production-ready AI?",
      a: "Yes. We integrate practical AI agents, copilots, and automations designed to deliver measurable ROI—not just experiments.",
    },
    {
      q: "Do you work with SaaS businesses?",
      a: "Absolutely. We've built SaaS platforms, subscription systems, dashboards, and onboarding flows tailored for scale.",
    },
    {
      q: "Can you build AI agents for my business?",
      a: "Yes. We design and deploy AI agents that handle customer queries, streamline workflows, and integrate directly with your tools.",
    },
    {
      q: "What industries do you serve?",
      a: "We've worked with SaaS, fintech, marketplaces, healthcare, and B2B tools, but we adapt quickly to any niche.",
    },
    {
      q: "Can you work with my in-house engineers?",
      a: "Definitely. We collaborate seamlessly with internal teams—augmenting, co-developing, or transferring work as needed.",
    },
  ];

  return (
    <section className="px-4 py-20 bg-gradient-to-b from-black via-zinc-950 to-black sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 text-3xl font-bold text-white sm:text-4xl md:text-5xl font-heading"
        >
          Frequently Asked Questions
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
            className="group overflow-hidden border shadow-xl bg-white/5 backdrop-blur-xl border-white/10 rounded-2xl"
          >
            {/* Question */}
            <div className="flex items-center justify-between w-full px-5 py-4 cursor-pointer sm:px-6 sm:py-5">
              <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
                {faq.q}
              </h3>
              <motion.span
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-green-400 text-xl font-bold"
              >
                +
              </motion.span>
            </div>

            {/* Answer (smooth expand) */}
            <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-48 group-hover:opacity-100 transition-all duration-700 ease-in-out px-5 sm:px-6">
              <p className="pb-5 text-sm leading-relaxed text-gray-300 sm:text-base">
                {faq.a}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;