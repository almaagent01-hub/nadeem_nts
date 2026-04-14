import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronRight, ChevronDown, ArrowUpRight, Search, Globe } from "lucide-react";

const megaMenuData: Record<string, { columns: { heading: string; links: { label: string; desc?: string; href: string }[] }[]; featured?: { title: string; desc: string; href: string } }> = {
  "Who We Are": {
    columns: [
      {
        heading: "Company",
        links: [
          { label: "Story & Legacy", desc: "Our 50+ year journey", href: "#story" },
          { label: "Leadership", desc: "Meet our executive team", href: "#" },
          { label: "Global Presence", desc: "Operations across continents", href: "#" },
        ],
      },
      {
        heading: "Values",
        links: [
          { label: "Mission & Vision", desc: "What drives us forward", href: "#" },
          { label: "Core Values", desc: "Integrity, excellence, safety", href: "#" },
          { label: "Awards & Recognition", desc: "Industry accolades", href: "#" },
        ],
      },
    ],
    featured: { title: "50+ Years of Excellence", desc: "Learn about our legacy of building world-class infrastructure.", href: "#story" },
  },
  Capabilities: {
    columns: [
      {
        heading: "Industries",
        links: [
          { label: "Energy & Chemicals", desc: "Processing facilities", href: "#capabilities" },
          { label: "Renewables & Power", desc: "Sustainable solutions", href: "#capabilities" },
          { label: "Pipelines & Infrastructure", desc: "Cross-terrain networks", href: "#capabilities" },
        ],
      },
      {
        heading: "Sectors",
        links: [
          { label: "Buildings & Structures", desc: "Landmark projects", href: "#capabilities" },
          { label: "Transportation", desc: "Airports, highways, ports", href: "#capabilities" },
          { label: "Innovation & Technology", desc: "Digital engineering", href: "#capabilities" },
        ],
      },
    ],
  },
};

const navItems = [
  { label: "Who We Are", href: "#story", hasMega: true },
  { label: "Capabilities", href: "#capabilities", hasMega: true },
  { label: "Projects", href: "#projects", hasMega: false },
  { label: "Sustainability", href: "#sustainability", hasMega: false },
  { label: "Careers", href: "#careers", hasMega: false },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleMegaEnter = (label: string) => {
    clearTimeout(megaTimeout.current);
    if (megaMenuData[label]) {
      setActiveMega(label);
    }
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setActiveMega(null), 200);
  };

  const handleMegaPanelEnter = () => {
    clearTimeout(megaTimeout.current);
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] border-b border-border/30"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group relative z-10">
            <div className="relative">
              <div className="grid grid-cols-2 gap-0.5 transition-transform duration-300 group-hover:scale-110">
                <div className="w-3.5 h-3.5 bg-primary triangle-pattern" />
                <div className="w-3.5 h-3.5 bg-primary triangle-pattern" />
                <div className="w-3.5 h-3.5 bg-primary triangle-pattern" />
                <div
                  className={`w-3.5 h-3.5 triangle-pattern transition-colors duration-500 ${
                    scrolled ? "bg-foreground" : "bg-primary-foreground"
                  }`}
                />
              </div>
              <div className="absolute -inset-2 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
            <div>
              <span
                className={`text-lg font-bold tracking-tight transition-colors duration-500 ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                NTS Group
              </span>
              <p
                className={`text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors duration-500 ${
                  scrolled ? "text-muted-foreground" : "text-primary-foreground/60"
                }`}
              >
                Building Tomorrow
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => item.hasMega && handleMegaEnter(item.label)}
                onMouseLeave={handleMegaLeave}
                className="relative"
              >
                <a
                  href={item.href}
                  onClick={() => setActiveMega(null)}
                  className={`relative px-4 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg flex items-center gap-1 group ${
                    activeMega === item.label
                      ? "text-primary"
                      : scrolled
                      ? "text-foreground/80 hover:text-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                        activeMega === item.label ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </span>
                  {item.hasMega && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeMega === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                scrolled
                  ? "text-foreground/60 hover:text-foreground hover:bg-secondary"
                  : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              <Search size={18} />
            </button>
            <button
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                scrolled
                  ? "text-foreground/60 hover:text-foreground hover:bg-secondary"
                  : "text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              <Globe size={18} />
            </button>
            <a
              href="#"
              className="ml-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                  scrolled ? "bg-foreground" : "bg-primary-foreground"
                } ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 ${
                  scrolled ? "bg-foreground" : "bg-primary-foreground"
                } ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block h-0.5 rounded-full transition-all duration-300 origin-center ${
                  scrolled ? "bg-foreground" : "bg-primary-foreground"
                } ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Search bar overlay */}
        <div
          className={`absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden transition-all duration-300 ${
            searchOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container py-4">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects, capabilities, news..."
                className="w-full pl-12 pr-4 py-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Mega Menu Panel */}
        {activeMega && megaMenuData[activeMega] && (
          <div
            className="absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border shadow-2xl"
            onMouseEnter={handleMegaPanelEnter}
            onMouseLeave={handleMegaLeave}
            style={{ animation: "mega-enter 0.25s ease-out" }}
          >
            <div className="container py-8">
              <div className="grid grid-cols-12 gap-8">
                {/* Columns */}
                <div className="col-span-8 grid grid-cols-2 gap-8">
                  {megaMenuData[activeMega].columns.map((col, ci) => (
                    <div key={ci}>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                        {col.heading}
                      </h4>
                      <div className="space-y-1">
                        {col.links.map((link, li) => (
                          <a
                            key={li}
                            href={link.href}
                            onClick={() => setActiveMega(null)}
                            className="group flex items-start gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                              <ArrowUpRight size={14} className="text-primary" />
                            </div>
                            <div>
                              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                {link.label}
                              </span>
                              {link.desc && (
                                <p className="text-xs text-muted-foreground mt-0.5">{link.desc}</p>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Featured card */}
                {megaMenuData[activeMega].featured && (
                  <div className="col-span-4">
                    <a
                      href={megaMenuData[activeMega].featured!.href}
                      onClick={() => setActiveMega(null)}
                      className="block h-full p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 hover:border-primary/30 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                        <ArrowUpRight size={18} className="text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {megaMenuData[activeMega].featured!.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {megaMenuData[activeMega].featured!.desc}
                      </p>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-40 bg-foreground/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
          <nav className="flex-1">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center justify-between py-5 border-b border-primary-foreground/10 transition-all"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateX(0)" : "translateX(-20px)",
                  transition: `all 0.4s ease ${i * 0.08}s`,
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-primary">0{i + 1}</span>
                  <span className="text-2xl font-bold text-primary-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                </div>
                <ChevronRight size={20} className="text-primary-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </nav>

          <div
            className="mt-8 space-y-4"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transition: "opacity 0.4s ease 0.5s",
            }}
          >
            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-lg"
            >
              Contact Us
              <ArrowUpRight size={18} />
            </a>
            <div className="flex justify-center gap-6 pt-4 text-primary-foreground/40 text-sm">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes mega-enter {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
