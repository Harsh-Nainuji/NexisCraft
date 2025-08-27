import { useEffect, useState } from "react";
import gsap from "gsap";

const QuickValue = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(!!mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      const cards = document.querySelectorAll(".qv-card");
      cards.forEach((el) => {
        el.style.transform = "translateY(0)";
        el.style.opacity = "1";
      });
      return;
    }
    gsap.fromTo(
      ".qv-card",
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

  return (
    <section className="relative px-4 py-16 overflow-hidden text-white bg-black sm:py-20 md:py-24 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="px-4 mb-12 text-3xl font-bold sm:text-4xl md:text-5xl sm:mb-16 font-heading">
          Why Teams Choose Us
        </h2>

        {/* Wrapper for scrollable cards on mobile */}
        <div className="flex gap-6 space-x-6 overflow-x-auto md:grid md:grid-cols-3 sm:gap-8 md:overflow-visible md:block md:space-x-0 snap-x snap-mandatory scrollbar-hide">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="qv-card relative p-6 sm:p-8 md:p-10 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[var(--accent)] transition-all group overflow-hidden flex-shrink-0 w-80 sm:w-96 md:w-auto snap-center"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

              <h3 className="mb-4 text-xl font-semibold sm:text-2xl sm:mb-6">
                {value.title}
              </h3>

              <ul className="space-y-3 text-sm text-left text-gray-300 sm:space-y-4 sm:text-base">
                {value.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex items-center justify-center flex-shrink-0 w-5 h-5 text-xs font-bold text-white bg-indigo-600 rounded-full sm:w-6 sm:h-6">
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
