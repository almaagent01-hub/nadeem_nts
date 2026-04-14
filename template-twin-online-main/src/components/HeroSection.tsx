import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      {/* ── MOBILE LAYOUT ── */}
      <section className="md:hidden">
        {/* Image / Video block */}
        <div className="relative h-[70vw] min-h-[300px] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            ref={(el) => { if (el) el.playbackRate = 2; }}
          >
            <source src="https://res.cloudinary.com/dnoxzfkyd/video/upload/v1776201124/hero-bg_gzvzb3.mp4" type="video/mp4" />
          </video>

        </div>

        {/* Text content below image */}
        <div className="bg-white px-5 py-8">
          <h1 className="font-heading font-bold text-4xl text-foreground leading-tight mb-4">
            Engineering Excellence,{" "}
            <br />
            Shaping Futures.
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-7">
            Our projects stand as enduring symbols of quality and innovation.
            We connect today's ambitions with tomorrow's possibilities through
            world-class engineering and construction.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition-opacity text-base"
          >
            Learn More
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* ── DESKTOP LAYOUT ── */}
      <section className="hidden md:flex relative min-h-screen items-center overflow-hidden">
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

        <div className="relative container pt-32 pb-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
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
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity group"
            >
              Learn More
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
