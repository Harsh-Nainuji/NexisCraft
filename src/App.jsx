import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickValue from "./components/QuickValue";
import ProjectsTeaser from "./components/ProjectsTeaser";
import Services from "./components/Services";
import SignatureServices from "./components/SignatureServices";
import CoreWebServices from "./components/CoreWebServices";
import TheBridgeMethod from "./components/TheBridgeMethod";
// import Pricing from "./components/Pricing"; // 🔹 Commented out for now
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// ---- Section wrapper with zero vertical gap ----
function Section({ children, id, className }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative ${className || ""}`} // NO padding/margin
    >
      {children}
    </motion.section>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen relative text-white">
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero */}
      <Section id="home">
        <Hero />
      </Section>

      {/* Main sections */}
      <div>
        <Section id="quickvalue">
          <QuickValue />
        </Section>

        <Section id="projects">
          <ProjectsTeaser />
        </Section>

        <Section id="services">
          <CoreWebServices />
        </Section>

        <Section id="signature">
          <SignatureServices />
        </Section>

        <Section id="process">
          <TheBridgeMethod />
        </Section>

        {/* 🔹 Pricing section temporarily disabled */}
        {/*
        <Section id="pricing">
          <Pricing />
        </Section>
        */}

        <Section id="faq">
          <FAQ />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;