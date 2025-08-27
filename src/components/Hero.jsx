import { useEffect, useRef, useMemo, useState } from "react";
import gsap from "gsap";
import Prism from "./Prism";
import Button from "./Button";

const Hero = () => {
  const headingRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(!!mql.matches);
    update();
    mql.addEventListener?.('change', update);
    return () => mql.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    const letters = headingRef.current?.querySelectorAll?.(".char");
    if (!letters || letters.length === 0) return;
    if (reducedMotion) {
      letters.forEach((el) => {
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
      });
      return;
    }
    gsap.fromTo(
      letters,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.05 }
    );
  }, [reducedMotion]);

  // Memoize heading letters to prevent unnecessary re-renders
  const headingLetters = useMemo(() => {
    const headingText = "Build. Ship. Scale.";
    return headingText
      .replace(/\./g, "")
      .split("")
      .map((char, i) => (
        <span key={i} className="inline-block char">
          {char}
        </span>
      ));
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-8 overflow-hidden text-center bg-black hero-section sm:px-6 lg:px-8">
      {/* Prism Background */}
      <div className="absolute inset-0 z-0">
        <Prism
          height={3.5}
          baseWidth={5.5}
          animationType="3drotate"
          glow={0.8}
          noise={0.3}
          transparent={true}
          scale={2.5}
          hueShift={0}
          colorFrequency={1.2}
          timeScale={reducedMotion ? 0 : 0.3}
          bloom={0.8}
          suspendWhenOffscreen={true}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-[var(--accent)] leading-tight mb-6 sm:mb-8 px-2"
        >
          {headingLetters}
        </h1>

        <p className="max-w-2xl mx-auto text-[var(--text-muted)] mb-8 sm:mb-12 text-base sm:text-lg md:text-xl px-4 leading-relaxed">
          Crafting AI-enabled products and growth-ready systems that convert
          visitors into paying customers.
        </p>

        {/* Prism-styled Buttons */}
        <div className="flex flex-col justify-center w-full max-w-md gap-4 px-4 mx-auto sm:flex-row sm:gap-6 sm:max-w-none">
          <Button href="#quickvalue" variant="prism" size="lg" className="w-full sm:w-auto">
            Explore Why Teams Choose Us
          </Button>
          <Button href="#services" variant="glass" size="lg" className="w-full sm:w-auto">
            See What We Do
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
