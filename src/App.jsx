import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickValue from './components/QuickValue';
import ProjectsTeaser from './components/ProjectsTeaser';
import Services from './components/Services';
import SignatureServices from './components/SignatureServices';
import CoreWebServices from './components/CoreWebServices';
import TheBridgeMethod from './components/TheBridgeMethod';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Section({ children, id, className }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`py-12 sm:py-16 md:py-20 ${className || ''}`}
    >
      {children}
    </motion.section>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Sections */}
      <Section id="home">
        <Hero />
      </Section>

      <Section id="quickvalue">
        <QuickValue />
      </Section>

      <Section id="projects" className="pt-0">
        <ProjectsTeaser />
      </Section>

      <Section id="services">
        <Services />
      </Section>

      <Section id="signature">
        <SignatureServices />
      </Section>

      <Section id="coreweb">
        <CoreWebServices />
      </Section>

      <Section id="process">
        <TheBridgeMethod />
      </Section>

      <Section id="pricing">
        <Pricing />
      </Section>

      <Section id="faq">
        <FAQ />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
