"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  MessageSquare,
  Globe,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Loader2,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "Project Collaboration",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const inquiryTypes = [
    "Project Collaboration",
    "Full-Stack Web App",
    "Technical Writing",
    "General Inquiry",
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("mayurmuarka1@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSuccess(true);
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "Project Collaboration",
    });
    setErrorMessage("");
    setIsSuccess(false);
  };

  return (
    <div className="relative overflow-hidden min-h-screen pb-24 pt-8 sm:pt-14">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-purple-600/15 via-pink-500/10 to-indigo-500/10 blur-[130px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-[600px] left-[-100px] w-[500px] h-[500px] bg-blue-500/5 dark:bg-purple-900/15 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-100px] w-[500px] h-[500px] bg-pink-500/5 dark:bg-pink-900/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
            Let&apos;s build something{" "}
            <span className="gradient-text">exceptional together.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Have a project inquiry, technical discussion, collaboration idea, or just want to say hi? Drop a message below and I&apos;ll get back to you promptly.
          </p>
        </div>

        {/* Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Connect & Presence Hub (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Card */}
            <div className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-purple-500/5 hover:border-purple-500/40 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300">
                  Direct Email
                </span>
              </div>

              <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">
                Drop me a direct line
              </h2>
              <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono break-all mb-4">
                mayurmuarka1@gmail.com
              </p>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-purple-500/15 text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 text-xs font-semibold transition-all duration-200"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=mayurmuarka1@gmail.com&su=Project%20Inquiry%20%7C%20MayurBlog";
                    window.open(gmailUrl, "_blank", "noopener,noreferrer");
                    setTimeout(() => {
                      window.location.href = "mailto:mayurmuarka1@gmail.com?subject=Project%20Inquiry";
                    }, 400);
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md hover:shadow-purple-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  title="Open in Gmail or default mail app"
                >
                  <span>Open Mail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-purple-500/5 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Location &amp; Timezone
                  </h2>
                  <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    Shegaon, Maharashtra, India
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-blue-500" />
                    <span>IST (UTC+5:30) • Active for global remote</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours & Turnaround Card */}
            <div className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-purple-500/5 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Working Schedule
                  </h2>
                  <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    Mon - Fri: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Replies typically within 24 hours</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Presence Hub */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/5 via-slate-500/5 to-transparent border border-slate-200/80 dark:border-slate-800 backdrop-blur-xl">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Connect Across The Web
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/Mayur-Murarka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 hover:bg-slate-900 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all duration-300 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 hover:border-purple-500/50"
                >
                  <Github className="w-4 h-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/mayur-murarka-178703283/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0077b5] dark:hover:text-white text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all duration-300 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 hover:border-[#0077b5]"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://mayur-portfolio007.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 dark:bg-slate-800/80 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all duration-300 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 hover:border-purple-500/50"
                >
                  <svg
                    className="w-4 h-4 fill-current text-purple-600 dark:text-purple-400 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 21 17"
                  >
                    <g
                      transform="translate(0.000000,17.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path d="M0 85 l0 -85 108 1 c59 1 99 3 90 6 -13 3 -18 15 -18 41 l0 36 -38 -37 -38 -37 -29 30 c-33 34 -26 54 8 22 l22 -21 53 50 c67 65 67 79 2 79 -32 0 -50 -4 -50 -12 0 -9 -3 -9 -12 0 -7 7 -31 12 -55 12 l-43 0 0 -85z m72 45 l37 -30 32 30 c53 48 69 36 19 -15 -24 -25 -49 -45 -54 -45 -5 0 -23 12 -38 27 l-28 27 0 -57 c0 -44 -3 -57 -15 -57 -12 0 -15 15 -15 75 0 86 6 91 62 45z" />
                    </g>
                  </svg>
                  <span>Portfolio</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Glassmorphic Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-6 sm:p-10 bg-white/80 dark:bg-slate-900/70 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xl shadow-purple-500/5">
              {isSuccess ? (
                /* Success State Celebration */
                <div className="py-12 px-4 text-center space-y-5 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                      Message Sent Successfully!
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <span className="font-semibold text-purple-600 dark:text-purple-400">{formData.name}</span>. Your message has been sent directly to Mayur&apos;s email inbox (<span className="font-mono font-semibold text-slate-800 dark:text-slate-200">mayurmuarka1@gmail.com</span>) and securely recorded. I&apos;ll get back to you promptly.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-purple-500/15 text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 text-xs font-bold transition-all"
                    >
                      <span>Send Another Message</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        const subject = encodeURIComponent(formData.subject || `[MayurBlog Inquiry] from ${formData.name}`);
                        const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
                        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mayurmuarka1@gmail.com&su=${subject}&body=${body}`;
                        window.open(gmailUrl, "_blank", "noopener,noreferrer");
                        setTimeout(() => {
                          window.location.href = `mailto:mayurmuarka1@gmail.com?subject=${subject}&body=${body}`;
                        }, 400);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-md hover:shadow-purple-500/25 transition-all cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Direct via Gmail</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/25 text-red-600 dark:text-red-400 text-xs font-medium animate-in fade-in">
                      {errorMessage}
                    </div>
                  )}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                      Send a Message
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                      Start the Conversation
                    </h2>
                  </div>

                  {/* Inquiry Type Pill Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">
                      What are you interested in?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((type) => {
                        const isSelected = formData.inquiryType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, inquiryType: type })}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                              isSelected
                                ? "bg-purple-600 text-white shadow-md shadow-purple-500/25 scale-105"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition-all"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Message <span className="text-purple-500">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition-all resize-none leading-relaxed"
                      placeholder="Tell me more about your project goals, timelines, or questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}