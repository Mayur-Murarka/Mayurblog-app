import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Code2,
  Terminal,
  Rocket,
  HeartHandshake,
  ArrowRight,
  Mail,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Flame,
  BookOpen,
  Compass,
  Laptop,
  GraduationCap,
  GitBranch,
  GitPullRequest,
  Check,
  Play,
  FileCode2,
  Share2,
  Users,
  Eye,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "About Mayur | Software Developer & Tech Creator",
  description:
    "Learn more about Mayur's journey as a software developer, technical background, coding milestones, and passion for technology.",
};

export default function About() {
  const milestones = [
    {
      step: "01",
      title: "The Spark of Curiosity",
      subtitle: "High School & C Language Fundamentals",
      period: "The Inception",
      badge: "Inception",
      accentGlow: "from-cyan-500/20 via-blue-500/10 to-transparent",
      borderColor: "border-cyan-500/30 group-hover:border-cyan-400/60",
      tagColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
      icon: Terminal,
      description:
        "Mayur’s coding journey began in high school when he stumbled upon his first programming language— C. What started as a simple curiosity quickly turned into a passion, as Mayur spent countless hours experimenting with code, building small projects, and learning the fundamentals of software development.",
      highlights: [
        "Mastered low-level pointers, memory allocation & control flow in C",
        "Engineered command-line utilities and algorithmic calculators",
        "Ignited an insatiable curiosity for how software operates under the hood",
      ],
      visualType: "terminal",
    },
    {
      step: "02",
      title: "Diving Deeper",
      subtitle: "Data Structures, Algorithms & Modern Web",
      period: "Skill Acceleration",
      badge: "Growth",
      accentGlow: "from-purple-500/20 via-indigo-500/10 to-transparent",
      borderColor: "border-purple-500/30 group-hover:border-purple-400/60",
      tagColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      icon: Layers,
      description:
        "After mastering the basics, Mayur’s thirst for knowledge grew. He began exploring more complex topics such as data structures, algorithms, and web development. Enrolling in online courses and attending coding bootcamps, Mayur quickly expanded his skill set, taking on freelance projects to apply his knowledge in real-world scenarios.",
      highlights: [
        "In-depth mastery of Graphs, Trees, Dynamic Programming & Sorting",
        "Pivoted into modern web architectures: React, Next.js, and Node.js",
        "Shipped real-world freelance projects with high-converting responsive UIs",
      ],
      visualType: "architecture",
    },
    {
      step: "03",
      title: "Taking on Challenges",
      subtitle: "Scalable Applications & Open Source",
      period: "Engineering Craft",
      badge: "Mastery",
      accentGlow: "from-pink-500/20 via-rose-500/10 to-transparent",
      borderColor: "border-pink-500/30 group-hover:border-pink-400/60",
      tagColor: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
      icon: Rocket,
      description:
        "With several years of experience under his belt, Mayur began tackling more significant challenges. From contributing to open-source projects to developing his own applications, Mayur continued to push his limits, always looking for opportunities to learn and grow. His journey wasn’t without its setbacks, but each obstacle was a stepping stone to becoming the skilled developer he is today.",
      highlights: [
        "Engineered performant full-stack apps with server-side rendering & SSR",
        "Actively contributed to open-source codebases and modern developer tools",
        "Turned production edge cases and debugging hurdles into core engineering strengths",
      ],
      visualType: "git_pipeline",
    },
    {
      step: "04",
      title: "Giving Back",
      subtitle: "Mentorship & Technical Content Creation",
      period: "Continuous Impact",
      badge: "Community",
      accentGlow: "from-amber-500/20 via-orange-500/10 to-transparent",
      borderColor: "border-amber-500/30 group-hover:border-amber-400/60",
      tagColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      icon: HeartHandshake,
      description:
        "Today, Mayur is not only a proficient coder but also a mentor to others. He regularly contributes to the programming community by writing tutorials, giving talks, and helping new coders find their footing in the world of software development. For Mayur, coding is more than just a profession—it’s a lifelong journey of learning and sharing knowledge.",
      highlights: [
        "Authoring comprehensive deep dives on AI, C programming, and CSS",
        "Mentoring aspiring software engineers and reviewing community code",
        "Building public resources to empower developers at all skill levels",
      ],
      visualType: "mentorship_hub",
    },
  ];

  const skills = [
    {
      category: "Core Languages",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    },
    {
      category: "Frontend Development",
      icon: Laptop,
      color: "from-purple-500 to-pink-500",
      items: ["React.js", "Next.js (App Router)", "Tailwind CSS", "HTML5 / CSS3", "Responsive UI/UX"],
    },
    {
      category: "Backend & Systems",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      items: ["Node.js", "Express", "RESTful APIs", "MongoDB", "Data Analysis"],
    },
    {
      category: "Tools & Workflow",
      icon: Cpu,
      color: "from-amber-500 to-orange-500",
      items: ["Git & GitHub", "VS Code", "Vercel", "Performance Tuning", "Technical Writing"],
    },
  ];

  const stats = [
    { label: "Coding & Building", value: "2+ Years", icon: Flame },
    { label: "Hands-on Projects", value: "15+", icon: Rocket },
    { label: "Core Focus", value: "Full Stack", icon: Layers },
    { label: "Commitment", value: "100%", icon: GraduationCap },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen pb-24">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-purple-600/15 via-pink-500/10 to-indigo-500/10 blur-[130px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-[800px] right-[-100px] w-[500px] h-[500px] bg-blue-500/5 dark:bg-purple-900/15 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-[-100px] w-[500px] h-[500px] bg-pink-500/5 dark:bg-pink-900/10 blur-[150px] pointer-events-none -z-10" />

      {/* Hero Profile Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Narrative Intro */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
              Crafting code, building products, &amp;{" "}
              <span className="gradient-text">sharing the journey.</span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Hello! I&apos;m <strong className="text-slate-900 dark:text-white font-semibold">Mayur</strong>, a passionate software developer and tech enthusiast. I created this blog to share my experiences, tips, and tutorials on various programming languages and technologies.
              </p>
              <p>
                I believe that learning should be a continuous journey, and I&apos;m here to help others on their path to mastering the art of coding. Whether you&apos;re just starting out or looking to sharpen your skills, you&apos;ll find a variety of resources and insights here.
              </p>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>Read My Articles</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-purple-500/40 hover:text-purple-600 dark:hover:text-purple-400 text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-purple-500" />
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D-effect Avatar Card */}
          <div className="w-full sm:w-auto shrink-0 flex justify-center">
            <div className="relative group">
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />

              {/* Main Profile Card Container */}
              <div className="relative w-72 sm:w-80 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-white/20 dark:border-slate-800 p-6 shadow-2xl flex flex-col items-center text-center">
                {/* Image Frame */}
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-purple-500 to-pink-500 shadow-inner mb-5">
                  <img
                    src="/MAYURIMG.jpg"
                    alt="Mayur"
                    className="w-full h-full object-cover rounded-xl bg-slate-950"
                  />
                  {/* Verified Icon */}
                  <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-slate-900/90 border border-purple-500/50 shadow-md">
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Mayur
                </h2>
                <p className="text-xs font-medium text-purple-600 dark:text-purple-400 mt-0.5 mb-3">
                  Software Developer
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-5 px-2">
                  Exploring the nuances of scalable web apps, clean code, and algorithmic problem-solving.
                </p>

                {/* Micro tech pills */}
                <div className="flex flex-wrap justify-center gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80 w-full">
                  {["React", "Next.js", "Python", "C++", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Stats Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white/60 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ULTRA-PREMIUM CODING JOURNEY ROADMAP */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>Developer Chronicle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mayur&apos;s Journey as a Coder
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            From curious high school beginnings to architecting scalable systems and empowering developers.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative">
          {/* Animated Ambient Center Track (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 via-pink-500 to-amber-500 opacity-25 rounded-full pointer-events-none" />

          <div className="space-y-16 lg:space-y-28">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className={`relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16 group ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Left/Right Visual Interactive Card Mockup */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-3xl p-1 bg-gradient-to-br from-slate-200/80 via-white/50 to-slate-200/80 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 shadow-2xl shadow-purple-500/5 group-hover:shadow-purple-500/15 transition-all duration-500">
                      
                      {/* Terminal Visual for Milestone 1 */}
                      {item.visualType === "terminal" && (
                        <div className="rounded-[22px] overflow-hidden bg-[#0d1117] border border-cyan-500/20 text-slate-300 font-mono text-xs shadow-inner">
                          {/* Traffic Light Header */}
                          <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800">
                            <div className="flex items-center gap-2">
                              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                              <span className="ml-2 text-[11px] text-slate-400">c-fundamentals.c</span>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-semibold">
                              GCC v11.4
                            </span>
                          </div>

                          {/* Code Display */}
                          <div className="p-5 space-y-1 text-slate-300 leading-relaxed select-none">
                            <p><span className="text-purple-400">#include</span> <span className="text-emerald-400">&lt;stdio.h&gt;</span></p>
                            <p><span className="text-purple-400">#include</span> <span className="text-emerald-400">&lt;stdlib.h&gt;</span></p>
                            <p className="py-1 text-slate-500">// Where the journey started: High school experiments</p>
                            <p><span className="text-blue-400">int</span> <span className="text-yellow-400">main</span>(<span className="text-blue-400">void</span>) &#123;</p>
                            <p className="pl-4"><span className="text-blue-400">char</span> passion[] = <span className="text-emerald-300">&quot;Software Engineering&quot;</span>;</p>
                            <p className="pl-4"><span className="text-blue-400">int</span> curiosity = <span className="text-cyan-400">100</span>; <span className="text-slate-500">// Endless drive</span></p>
                            <p className="pl-4 text-emerald-400"><span className="text-yellow-300">printf</span>(&quot;Hello World! The spark has ignited.\n&quot;);</p>
                            <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-cyan-400">0</span>;</p>
                            <p>&#125;</p>
                          </div>

                          {/* Terminal Interactive Execution Output */}
                          <div className="p-4 bg-[#0a0d12] border-t border-slate-800/80 font-mono text-[11px] space-y-1">
                            <div className="flex items-center gap-2 text-cyan-400">
                              <span className="text-slate-500">$</span> gcc spark.c -o spark &amp;&amp; ./spark
                            </div>
                            <p className="text-emerald-400">✔ Hello World! The spark has ignited.</p>
                            <p className="text-slate-400 text-[10px]">[Process completed: Built 1st CLI utility successfully]</p>
                          </div>
                        </div>
                      )}

                      {/* Architecture Visual for Milestone 2 */}
                      {item.visualType === "architecture" && (
                        <div className="rounded-[22px] overflow-hidden bg-slate-950 border border-purple-500/20 p-5 sm:p-6 text-slate-200">
                          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                              <Layers className="w-4 h-4 text-purple-400" />
                              <span className="text-xs font-bold tracking-wider text-slate-200">SYSTEM ARCHITECTURE &amp; DSA</span>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-400 font-semibold">
                              Modern Web
                            </span>
                          </div>

                          {/* Interactive Flow Nodes */}
                          <div className="space-y-3">
                            <div className="p-3 rounded-xl bg-slate-900/90 border border-purple-500/20 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                                <span className="text-xs font-semibold text-white">Algorithms &amp; Data Structures</span>
                              </div>
                              <span className="text-[11px] text-purple-300 font-mono">Trees, Graphs, DP</span>
                            </div>

                            <div className="flex justify-center">
                              <span className="text-xs text-purple-400 font-mono">↓ Component Pipeline</span>
                            </div>

                            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <Laptop className="w-4 h-4 text-purple-400" />
                                <span className="text-xs font-semibold text-purple-200">Full-Stack Web (React + Next.js)</span>
                              </div>
                              <span className="text-[11px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">SSR &amp; API</span>
                            </div>

                            <div className="flex justify-center">
                              <span className="text-xs text-purple-400 font-mono">↓ Applied Engineering</span>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/20 flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                <span className="text-xs font-semibold text-emerald-300">Freelance Production Deployments</span>
                              </div>
                              <span className="text-[11px] text-emerald-400 font-mono">100% Client Satisfaction</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Git Pipeline Visual for Milestone 3 */}
                      {item.visualType === "git_pipeline" && (
                        <div className="rounded-[22px] overflow-hidden bg-slate-950 border border-pink-500/20 p-5 sm:p-6 text-slate-200">
                          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                              <GitBranch className="w-4 h-4 text-pink-400" />
                              <span className="text-xs font-bold tracking-wider text-slate-200">GIT PIPELINE &amp; SCALE</span>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-pink-500/15 text-pink-400 font-semibold">
                              main branch
                            </span>
                          </div>

                          <div className="space-y-3 font-mono text-xs">
                            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-pink-400 font-bold">commit f89a1c</span>
                                <span className="text-slate-300 font-sans text-xs">feat: scalable microservices &amp; SSR</span>
                              </div>
                              <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-sans font-semibold">
                                <Check className="w-3 h-3" /> passed
                              </span>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <GitPullRequest className="w-3.5 h-3.5 text-purple-400" />
                                <span className="text-slate-300 font-sans text-xs">PR #24: Open-Source Contribution</span>
                              </div>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-sans font-semibold">
                                Merged
                              </span>
                            </div>

                            <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Rocket className="w-3.5 h-3.5 text-pink-400" />
                                <span className="text-pink-200 font-sans font-semibold text-xs">Deployment: Zero Downtime</span>
                              </div>
                              <span className="text-[10px] text-pink-300 font-mono">v2.4.0 Prod</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Mentorship Hub Visual for Milestone 4 */}
                      {item.visualType === "mentorship_hub" && (
                        <div className="rounded-[22px] overflow-hidden bg-slate-950 border border-amber-500/20 p-5 sm:p-6 text-slate-200">
                          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-amber-400" />
                              <span className="text-xs font-bold tracking-wider text-slate-200">MAYURBLOG EDITORIAL &amp; MENTORSHIP</span>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 font-semibold">
                              Live
                            </span>
                          </div>

                          <div className="space-y-2.5">
                            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/30 transition-colors flex items-center justify-between">
                              <div className="text-left">
                                <p className="text-xs font-bold text-white">ChatGPT vs. Gemini: Comparative Analysis</p>
                                <p className="text-[11px] text-slate-400">Deep dive on conversational AI &amp; LLM capabilities</p>
                              </div>
                              <span className="text-[11px] text-amber-400 font-semibold shrink-0 ml-2">4 min</span>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/30 transition-colors flex items-center justify-between">
                              <div className="text-left">
                                <p className="text-xs font-bold text-white">CSS Masterclass: Layouts &amp; Micro-Animations</p>
                                <p className="text-[11px] text-slate-400">Flexbox, Grid &amp; high-performance CSS transitions</p>
                              </div>
                              <span className="text-[11px] text-amber-400 font-semibold shrink-0 ml-2">5 min</span>
                            </div>

                            <div className="pt-2 flex items-center justify-around text-center border-t border-slate-800/80">
                              <div>
                                <div className="text-lg font-extrabold text-white">1,500+</div>
                                <div className="text-[10px] text-slate-400">Readers Empowered</div>
                              </div>
                              <div className="h-6 w-px bg-slate-800" />
                              <div>
                                <div className="text-lg font-extrabold text-amber-400">100%</div>
                                <div className="text-[10px] text-slate-400">Free Knowledge</div>
                              </div>
                              <div className="h-6 w-px bg-slate-800" />
                              <div>
                                <div className="text-lg font-extrabold text-white">Active</div>
                                <div className="text-[10px] text-slate-400">Mentorship</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Central Node Indicator (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-purple-500/80 items-center justify-center shadow-xl shadow-purple-500/30 z-20 group-hover:scale-110 group-hover:border-purple-400 transition-all duration-300">
                    <Icon className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                  </div>

                  {/* Narrative Card */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative p-6 sm:p-9 rounded-3xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/5 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                      {/* Watermark Number */}
                      <span className="absolute top-4 right-6 text-5xl sm:text-6xl font-black text-slate-200/50 dark:text-slate-800/40 pointer-events-none select-none font-mono">
                        {item.step}
                      </span>

                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider rounded-full border ${item.tagColor}`}>
                          {item.badge}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-4">
                        {item.subtitle}
                      </p>

                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                        {item.highlights.map((point, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills & Tech Stack Matrix */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A comprehensive overview of languages, frameworks, and engineering tools in Mayur&apos;s arsenal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, idx) => {
            const Icon = skillGroup.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:border-purple-500/40 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engineering Philosophy Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-500/10 via-slate-500/5 to-transparent border border-purple-500/20 backdrop-blur-md relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Philosophy &amp; Values
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
              &ldquo;Coding is more than just a profession—it&apos;s a lifelong journey of learning and sharing knowledge.&rdquo;
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              I believe in writing clear, maintainable code, breaking down intimidating technical hurdles into intuitive explanations, and constantly testing my knowledge through practical building.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-md hover:shadow-purple-500/20 transition-all group"
              >
                <span>Let&apos;s Collaborate</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:border-purple-500/40 transition-all"
              >
                <span>Browse All Guides</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}