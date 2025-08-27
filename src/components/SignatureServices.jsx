import { motion } from 'framer-motion';
import Button from './Button';

const SignatureServices = () => {
  const services = [
    {
      title: 'AI Spine: Intelligence that actually pays for itself',
      pitch: 'We embed focused AI features that impact your KPIs, not vanity ML experiments.',
      deliver: [
        'Chat search with ranked answers',
        'Summarizers for long content',
        'Workflow automations',
        'User-intent routing'
      ],
      outcomes: [
        '30–50% time savings on repetitive tasks',
        'Faster onboarding',
        'Fewer support escalations'
      ],
      cta: 'Add AI to my product',
      subject: 'Add%20AI%20Spine',
    },
    {
      title: 'MVP Sprint: Market-ready product, fast',
      pitch: 'Launch a lean, tested product with auth, payments, analytics, and deploy — built for growth.',
      deliver: [
        'Wireframe to Clickable prototype',
        'Live MVP deployment',
        'Handover docs'
      ],
      outcomes: [
        'Validate pricing fast',
        'Early customer feedback',
        'Launch-ready in weeks'
      ],
      cta: 'Start my sprint now',
      subject: 'Start%20MVP%20Sprint',
    },
    {
      title: 'Lead Engine: Your site becomes a sales asset',
      pitch: 'Page-level optimization + AI chat + automated follow-ups that convert.',
      deliver: [
        'Conversion copy & landing pages',
        'AI-powered FAQ',
        'Email/WhatsApp follow-ups'
      ],
      outcomes: [
        'Lower CAC',
        'Higher demo conversions',
        'Predictable pipeline'
      ],
      cta: 'Build my lead engine',
      subject: 'Build%20Lead%20Engine',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-heading font-bold text-center mb-20"
      >
        Signature Services
      </motion.h2>

      <div className="space-y-32">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Title + CTA */}
            <div className="md:w-1/2">
              <h3 className="text-3xl font-semibold mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="mb-6 text-lg text-gray-300">{service.pitch}</p>
              <Button
                href={`mailto:nexiscraft.dev@gmail.com?subject=${service.subject}`}
                variant="prism"
                size="md"
                className=""
                prismStops={index === 0
                  ? ['#6366f1aa','#22d3eeaa','#a78bfaaa','#0ea5e9aa']
                  : index === 1
                  ? ['#22c55eaa','#84cc16aa','#10b981aa','#16a34aaa']
                  : ['#a855f7aa','#ec4899aa','#f472b6aa','#8b5cf6aa']}
              >
                {service.cta}
              </Button>
            </div>

            {/* Deliver + Outcomes */}
            <div className="md:w-1/2 space-y-6">
              <div>
                <p className="font-semibold mb-2 text-indigo-400">What we deliver</p>
                <ul className="space-y-2 text-gray-200">
                  {service.deliver.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-indigo-600 text-white text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Business outcomes</p>
                <ul className="space-y-2 text-gray-200">
                  {service.outcomes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-purple-600 text-white text-xs">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SignatureServices;
