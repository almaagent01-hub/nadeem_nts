import { ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import sustainabilityBg from "@/assets/sustainability-bg.jpg";

const SustainabilitySection = () => {
  return (
    <section id="sustainability" className="relative py-16 md:py-24 overflow-hidden">
      <img
        src={sustainabilityBg}
        alt="Renewable energy project"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={540}
      />
      <div className="absolute inset-0 bg-foreground/70" />

      <div className="absolute right-0 top-0 bottom-0 hidden lg:block opacity-30">
        <svg width="300" height="100%" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
          <polygon points="100,0 300,200 100,200" fill="hsl(0 78% 52%)" />
          <polygon points="200,100 300,200 200,300 100,200" fill="hsl(0 78% 52% / 0.8)" />
          <polygon points="150,200 300,300 150,400" fill="hsl(0 78% 52% / 0.6)" />
        </svg>
      </div>

      <div className="relative container">
        <div className="max-w-xl">
          <ScrollReveal>
            <span className="section-label">Sustainability</span>
            <h2 className="section-heading-light mt-4 mb-6">
              Committed to a Sustainable Future
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-section-dark-foreground/80 text-lg leading-relaxed mb-8">
              At NTS Group, sustainability drives every decision we make. We are dedicated 
              to building responsibly — minimizing environmental impact while creating 
              infrastructure that serves communities for generations.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity group"
            >
              Learn More
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
