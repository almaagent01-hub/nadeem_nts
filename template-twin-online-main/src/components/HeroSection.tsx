import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        ref={(el) => { if (el) el.playbackRate = 2; }}
      >
        <source src="https://res.cloudinary.com/dnoxzfkyd/video/upload/v1776201124/hero-bg_gzvzb3.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-foreground/75" />

      {/* Red triangle decorations */}
      <div className="absolute top-20 right-0 hidden lg:block">
        <svg width="400" height="600" viewBox="0 0 400 600" fill="none">
          <polygon points="200,0 400,200 200,200" fill="hsl(0 78% 52%)" />
          <polygon points="300,100 400,200 300,300 200,200" fill="hsl(0 78% 52% / 0.9)" />
          <polygon points="150,200 300,300 150,400 0,300" fill="hsl(0 78% 52%)" />
          <polygon points="300,300 400,400 300,500 200,400" fill="hsl(0 78% 52% / 0.85)" />
          <polygon points="200,200 300,300 200,400 100,300" fill="white" fillOpacity="0.15" />
          <polygon points="350,350 400,400 350,450 300,400" fill="hsl(0 78% 52%)" />
          <polygon points="250,400 350,500 250,500" fill="hsl(0 78% 52% / 0.7)" />
        </svg>
      </div>

      <div className="relative container pt-32 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Engineering Excellence,{" "}
            <br />
            Shaping Futures.
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
            Our projects stand as enduring symbols of quality and innovation. 
            We connect today's ambitions with tomorrow's possibilities through 
            world-class engineering and construction.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity group"
          >
            Learn More
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
