import { Mail, MapPin, Clock, Send, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const CONTACT_INFO = [
  { icon: Mail,    label: "Email",        value: "mayurmuarka1@gmail.com",  href: "mailto:mayurmuarka1@gmail.com" },
  { icon: MapPin,  label: "Location",     value: "Shegaon, Maharashtra, India", href: null },
  { icon: Clock,   label: "Availability", value: "Mon–Fri, 9AM–6PM IST",    href: null },
];

const contact = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 mesh-bg overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/10 blur-3xl rounded-full pointer-events-none" style={{animation:"float 10s ease-in-out infinite"}} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Have a question, collaboration idea, or just want to say hi? I would love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">

            {/* Contact Info */}
            <div className="md:col-span-2 space-y-4">
              <div className="p-6 rounded-2xl bg-card border border-border h-full">
                <h2 className="font-bold text-lg mb-6">Contact Info</h2>
                <div className="space-y-6">
                  {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-500/10 dark:bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
                        {href ? (
                          <a href={href} className="font-medium text-sm hover:text-primary transition-colors">{value}</a>
                        ) : (
                          <p className="font-medium text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Follow Me</p>
                  <div className="flex gap-3">
                    <a href="https://github.com/mayur-murarka" target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border hover:border-violet-500/50 hover:bg-violet-500/5 transition-all text-sm font-medium">
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                    <a href="https://linkedin.com/in/mayur-murarka-178703283/" target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border hover:border-violet-500/50 hover:bg-violet-500/5 transition-all text-sm font-medium">
                      <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <div className="p-7 rounded-2xl bg-card border border-border">
                <h2 className="font-bold text-lg mb-6">Send a Message</h2>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-sm font-medium text-muted-foreground">Name</label>
                      <input id="contact-name" type="text" placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/50 transition-all text-sm" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-sm font-medium text-muted-foreground">Email</label>
                      <input id="contact-email" type="email" placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/50 transition-all text-sm" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                    <input id="contact-subject" type="text" placeholder="What is this about?"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/50 transition-all text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-sm font-medium text-muted-foreground">Message</label>
                    <textarea id="contact-message" rows={5} placeholder="Your message..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500/50 transition-all text-sm resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white animated-gradient hover:opacity-90 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/25">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
