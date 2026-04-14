import { ChevronRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const newsItems = [
  {
    img: news1,
    category: "Company News",
    title: "NTS Group Secures Major Infrastructure Contract in the Gulf Region",
    date: "12 Mar 2026",
  },
  {
    img: news2,
    category: "Company News",
    title: "NTS Group Expands Energy Division with Strategic Partnership",
    date: "28 Feb 2026",
  },
  {
    img: news3,
    category: "Industry Event",
    title: "NTS Group Hosts Annual Safety & Innovation Summit",
    date: "15 Jan 2026",
  },
];

const NewsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container">
        <ScrollReveal>
          <span className="section-label">News & Insights</span>
          <h2 className="section-heading mt-4 mb-12">Stay Informed with NTS Group</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <a
                href="#"
                className="group block rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={512}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold mt-2 mb-3 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
            >
              All News & Insights
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsSection;
