import { ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import careersBg from "@/assets/careers-bg.jpg";

const CareersSection = () => {
  return (
    <section id="careers" className="py-24 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="section-label">Careers</span>
              <h2 className="section-heading mt-4 mb-6">
                Join Our Team and Build Your Future
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At NTS Group, we invest in our people's growth, innovation, and success. 
                Whether you're launching your career or taking the next step, we offer a 
                dynamic and inclusive environment where your ideas are valued and your 
                potential is limitless.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity group"
              >
                Explore Careers
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={300}>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={careersBg}
                alt="NTS Group team members"
                className="w-full h-[400px] object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
