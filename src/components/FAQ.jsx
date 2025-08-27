import { motion } from 'framer-motion';
import { useMemo } from 'react';

const FAQ = () => {
  // Memoize the FAQ data to prevent unnecessary re-renders
  const faqs = useMemo(() => [
    
    { q: 'Who owns the code?', a: 'You do. Full handoff, clean repo, and documentation included.' },
    { q: 'Do you build production-ready AI?', a: 'Yes, we integrate practical AI features that drive ROI, not just experiments.' },
    { q: 'What industries do you serve?', a: 'We\'ve worked with SaaS, fintech, marketplaces, health tech, and B2B tools, but we adapt to your niche.' },
    { q: 'Can you work with my in-house engineers?', a: 'Absolutely, we collaborate, augment, or transfer work seamlessly as needed.' },
  ], []);

  return (
    <div className="max-w-3xl px-4 py-12 mx-auto sm:px-6 sm:py-16">
      <h2 className="mb-8 text-2xl font-bold text-center sm:text-3xl sm:mb-10">FAQ</h2>
      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 transition shadow-md sm:p-6 bg-white/5 rounded-2xl hover:shadow-lg"
          >
            <h3 className="mb-2 text-lg font-semibold leading-tight sm:text-xl sm:mb-3">{faq.q}</h3>
            <p className="text-sm leading-relaxed text-gray-300 sm:text-base">{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
