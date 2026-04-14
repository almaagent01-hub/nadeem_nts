import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Email Us</p>
                <p className="text-sm text-muted-foreground">info@ntsgroup.com</p>
                <p className="text-sm text-muted-foreground">support@ntsgroup.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Call Us</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-primary/30 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Visit Us</p>
                <p className="text-sm text-muted-foreground">Corporate Headquarters,</p>
                <p className="text-sm text-muted-foreground">Business District</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Send size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">Thank you for reaching out. We'll get back to you shortly.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-secondary/40 rounded-3xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name <span className="text-primary">*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email Address <span className="text-primary">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Subject <span className="text-primary">*</span></label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="project">Project Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message <span className="text-primary">*</span></label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
