import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SKILLS = [
  { name: "JavaScript / TypeScript",  level: 90, color: "from-yellow-400 to-amber-500"    },
  { name: "React / Next.js",          level: 88, color: "from-cyan-400 to-blue-500"       },
  { name: "Node.js / Express",        level: 82, color: "from-green-400 to-emerald-500"   },
  { name: "Python / Data Science",    level: 75, color: "from-violet-400 to-purple-500"   },
  { name: "MongoDB / PostgreSQL",     level: 78, color: "from-orange-400 to-red-500"      },
];

const TIMELINE = [
  { year: "2020", title: "The Spark",      desc: "Discovered C programming in high school. Those first debugging sessions became an obsession that never stopped." },
  { year: "2021", title: "Going Deep",     desc: "Mastered data structures, algorithms, and web fundamentals. Built first real-world projects." },
  { year: "2022", title: "Full Stack",     desc: "Dove into the MERN stack, freelanced, contributed to open source, and rapidly expanded skill set." },
  { year: "2023", title: "Expert Mode",    desc: "Tackled system design, performance optimization, and started mentoring others through this blog." },
  { year: "Now",  title: "Still Learning", desc: "AI/ML, cloud architecture, and sharing everything learned along the way — because learning never ends." },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 mesh-bg overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 blur-3xl rounded-full" style={{animation:"float 10s ease-in-out infinite"}} />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/7 blur-3xl rounded-full" style={{animation:"float 13s ease-in-out infinite reverse"}} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-2 border-violet-500/30 shadow-2xl shadow-violet-500/15 relative">
                  <Image src="/1.jpg" alt="Mayur" fill className="object-cover" />
                </div>
                <div className="absolute -inset-3 rounded-3xl border border-violet-500/15 -z-10" />
                <div className="absolute -inset-6 rounded-3xl border border-violet-500/8 -z-10" />
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl px-3 py-2 shadow-xl">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500" style={{animation:"pulse 2s infinite"}} />
                    <span className="text-xs font-semibold">Available</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Hey there</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {"I'm "}<span className="gradient-text">Mayur</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                A passionate software developer and tech educator from Maharashtra, India. I created MayurBlog to document my journey and help others navigate the world of programming.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                Whether you are just starting out or sharpening advanced skills — you will find resources that actually move the needle here. Let us explore technology together!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white animated-gradient hover:opacity-90 transition-all hover:scale-105">
                  Read Blog <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-border glass hover:border-violet-500/50 transition-all hover:scale-105">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Expertise</p>
              <h2 className="text-4xl font-bold tracking-tight">Technical <span className="gradient-text">Skills</span></h2>
            </div>
            <div className="space-y-6">
              {SKILLS.map(({ name, level, color }) => (
                <div key={name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-sm">{name}</span>
                    <span className="text-sm text-muted-foreground font-mono">{level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className={`h-full rounded-full bg-gradient-to-r ${color}`} style={{ width: `${level}%`, transition: "width 1.2s ease" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">The Journey</p>
            <h2 className="text-4xl font-bold tracking-tight">{"Mayur's "}<span className="gradient-text">Story</span></h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative pl-24">
              <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-violet-500/40 to-transparent" />
              <div className="space-y-10">
                {TIMELINE.map(({ year, title, desc }) => (
                  <div key={year} className="relative group">
                    <span className="absolute -left-24 top-0.5 text-sm font-bold text-primary w-14 text-right block">{year}</span>
                    <div className="absolute -left-[1.15rem] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-2 border-background shadow-lg shadow-violet-500/30 group-hover:scale-125 transition-transform" />
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
