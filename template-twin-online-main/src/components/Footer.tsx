import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-section-dark text-section-dark-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img src={logo} alt="NTS Group of Companies" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-section-dark-foreground/60 text-sm leading-relaxed">
              Engineering excellence and innovation across the globe for over five decades.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-section-dark-foreground/60">
              <li><a href="#story" className="hover:text-primary transition-colors">Who We Are</a></li>
              <li><a href="#capabilities" className="hover:text-primary transition-colors">Capabilities</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#sustainability" className="hover:text-primary transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Capabilities</h4>
            <ul className="space-y-2 text-sm text-section-dark-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors">Energy & Chemicals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Renewables & Power</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pipelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Buildings</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Transportation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-section-dark-foreground/60">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                info@ntsgroup.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                Corporate Headquarters, Business District
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-section-dark-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-sm text-section-dark-foreground/40">
            © 2026 NTS Group of Companies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-section-dark-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
