import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const QuickValue = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(!!mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      cardRefs.current.forEach((el) => {
        if (!el) return;
        el.style.transform = "translateY(0) rotateX(0) rotateY(0)";
        el.style.opacity = "1";
      });
      return;
    }

    gsap.fromTo(
      cardRefs.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
      }
    );
  }, [reducedMotion]);

  const values = [
    {
      title: "Launch in Weeks",
      points: [
        "MVP ready in record time",
        "No unnecessary bloat",
        "Rapid market feedback",
      ],
    },
    {
      title: "Conversion First",
      points: [
        "Every design choice drives growth",
        "Focus on measurable results",
        "Turn traffic into leads",
      ],
    },
    {
      title: "AI-Ready Systems",
      points: [
        "Future-proof your product",
        "Automate workflows",
        "Scale with ease",
      ],
    },
  ];

  const handleMouseMove = (e, idx) => {
    const card = cardRefs.current[idx];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // mouse X inside card
    const y = e.clientY - rect.top; // mouse Y inside card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8; // max 8deg
    const rotateY = ((x - centerX) / centerX) * -8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const handleMouseLeave = (idx) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <section
      className="relative px-4 py-16 overflow-hidden text-white
                 sm:py-20 md:py-24 sm:px-6 lg:px-8
                 bg-gradient-to-b from-[#0a0014] via-[#1a0033] to-[#0a0014]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="px-4 mb-12 text-3xl font-bold sm:text-4xl md:text-5xl sm:mb-16 font-heading">
          Why Teams Choose Us
        </h2>

        <div className="flex gap-6 space-x-6 overflow-x-auto md:grid md:grid-cols-3 sm:gap-8 md:overflow-visible md:block md:space-x-0 snap-x snap-mandatory scrollbar-hide">
          {values.map((value, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              className="qv-card relative p-6 sm:p-8 md:p-10 rounded-2xl 
                         border border-white/20 bg-white/5 backdrop-blur-md 
                         shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                         hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]
                         transition-all transform-gpu flex-shrink-0 w-80 sm:w-96 md:w-auto snap-center"
            >
              {/* White highlight shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/20 to-white/5 
                              opacity-30 pointer-events-none rounded-2xl"></div>

              <h3 className="mb-4 text-xl font-semibold sm:text-2xl sm:mb-6 transform-gpu transition-transform duration-500 hover:translate-x-3 hover:rotate-3">
                {value.title}
              </h3>

              <ul className="space-y-3 text-sm text-left text-gray-200 sm:space-y-4 sm:text-base">
                {value.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex items-center justify-center flex-shrink-0 w-5 h-5 text-xs font-bold 
                                     text-white bg-white/30 rounded-full sm:w-6 sm:h-6">
                      ✓
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickValue;
