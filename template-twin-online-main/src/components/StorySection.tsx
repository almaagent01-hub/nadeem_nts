import { ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";

const StorySection = () => {
  return (
    <section id="story" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="section-label">Story & Legacy</span>
              <h2 className="section-heading mt-4 mb-6">
                Our 50+ Year Journey of Excellence
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                With a proven track record spanning five decades, NTS Group has successfully 
                delivered projects valued at over US$ 150 Billion across multiple continents. 
                Our enduring partnerships and commitment to quality have made us a trusted 
                name in global engineering and construction.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                Learn More
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={300}>
            <div className="flex gap-3 h-[280px] md:h-[400px] lg:h-[500px]">
              <div className="flex-1 rounded-2xl overflow-hidden">
                <img
                  src={story1}
                  alt="NTS Group building project"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden mt-8 md:mt-12">
                <img
                  src={story2}
                  alt="NTS Group pipeline project"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
