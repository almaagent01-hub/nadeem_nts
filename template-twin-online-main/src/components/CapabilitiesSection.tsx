import { useState, useEffect, useCallback } from "react";
import { ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

import capEnergy from "@/assets/cap-energy.jpg";
import capRenewables from "@/assets/cap-renewables.jpg";
import capPipelines from "@/assets/cap-pipelines.jpg";
import capBuildings from "@/assets/cap-buildings.jpg";
import capTransport from "@/assets/cap-transport.jpg";
import capInnovation from "@/assets/cap-innovation.jpg";

const capabilities = [
  {
    num: "01",
    title: "Energy & Chemicals",
    description:
      "Delivering complex energy and chemical processing facilities with precision engineering, balancing industrial progress with environmental responsibility.",
    img: capEnergy,
  },
  {
    num: "02",
    title: "Renewables & Power",
    description:
      "Pioneering sustainable energy solutions through solar, wind, and hydroelectric projects that power communities and reduce carbon footprints.",
    img: capRenewables,
  },
  {
    num: "03",
    title: "Pipelines & Infrastructure",
    description:
      "Constructing thousands of kilometers of pipelines across challenging terrains, connecting resources to communities with unmatched reliability.",
    img: capPipelines,
  },
  {
    num: "04",
    title: "Buildings & Structures",
    description:
      "Creating iconic buildings and landmark structures that showcase architectural excellence and engineering innovation at every scale.",
    img: capBuildings,
  },
  {
    num: "05",
    title: "Transportation",
    description:
      "Building world-class transportation infrastructure including airports, highways, bridges, ports, and mass transit systems that keep the world moving.",
    img: capTransport,
  },
  {
    num: "06",
    title: "Innovation & Technology",
    description:
      "Leveraging cutting-edge technology and digital tools to drive innovation, enhance safety, and improve efficiency across all our operations.",
    img: capInnovation,
  },
];

const CapabilitiesSection = () => {
  const [active, setActive] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (index === active || transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setActive(index);
        setTimeout(() => setTransitioning(false), 50);
      }, 300);
    },
    [active, transitioning]
  );

  const next = useCallback(() => goTo((active + 1) % capabilities.length), [active, goTo]);
  const prev = useCallback(
    () => goTo((active - 1 + capabilities.length) % capabilities.length),
    [active, goTo]
  );

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="capabilities" className="relative bg-section-dark text-section-dark-foreground overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        {capabilities.map((cap, i) => (
          <img
            key={i}
            src={cap.img}
            alt={cap.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === active && !transitioning ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            width={1200}
            height={700}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="relative min-h-[700px] lg:min-h-[750px] flex">
        {/* Left content area */}
        <div className="flex-1 flex flex-col justify-center py-24 px-6 lg:px-16 xl:px-24">
          <ScrollReveal>
            <span className="section-label mb-4 block">Categories</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-section-dark-foreground mb-10">
              Our Capabilities
            </h2>
          </ScrollReveal>

          {/* Active content with animation */}
          <div className="max-w-lg">
            <div
              className={`transition-all duration-300 ${
                transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl font-bold text-primary/30">{capabilities[active].num}</span>
                <div className="h-px flex-1 bg-section-dark-foreground/20" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-section-dark-foreground mb-4">
                {capabilities[active].title}
              </h3>
              <p className="text-section-dark-foreground/70 text-base lg:text-lg leading-relaxed mb-8">
                {capabilities[active].description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity group text-sm"
              >
                Learn More
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex gap-2 mt-12">
            {capabilities.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative h-1 rounded-full overflow-hidden transition-all"
                style={{ width: i === active ? 48 : 16 }}
              >
                <div className="absolute inset-0 bg-section-dark-foreground/20 rounded-full" />
                {i === active && (
                  <div
                    className="absolute inset-0 bg-primary rounded-full origin-left"
                    style={{
                      animation: "progress-fill 6s linear forwards",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right vertical thumbnail strip */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-2 pr-8 py-24">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-section-dark-foreground/20 flex items-center justify-center text-section-dark-foreground/60 hover:text-primary hover:border-primary transition-colors mb-2"
          >
            <ChevronUp size={18} />
          </button>

          {capabilities.map((cap, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                i === active
                  ? "ring-2 ring-primary scale-110"
                  : "opacity-50 hover:opacity-80 grayscale hover:grayscale-0"
              }`}
            >
              <img
                src={cap.img}
                alt={cap.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {i === active && (
                <div className="absolute inset-0 border-2 border-primary rounded-lg" />
              )}
            </button>
          ))}

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-section-dark-foreground/20 flex items-center justify-center text-section-dark-foreground/60 hover:text-primary hover:border-primary transition-colors mt-2"
          >
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      {/* Mobile horizontal thumbnails */}
      <div className="lg:hidden relative pb-8 px-6">
        <div className="flex gap-2 overflow-x-auto pb-4">
          {capabilities.map((cap, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                i === active
                  ? "ring-2 ring-primary"
                  : "opacity-50 grayscale"
              }`}
            >
              <img src={cap.img} alt={cap.title} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes progress-fill {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default CapabilitiesSection;
