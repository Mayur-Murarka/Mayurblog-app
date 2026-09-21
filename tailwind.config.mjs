/** @type {import("tailwindcss").Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "Georgia", "serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card:       { DEFAULT: "hsl(var(--card))",       foreground: "hsl(var(--card-foreground))"       },
        popover:    { DEFAULT: "hsl(var(--popover))",    foreground: "hsl(var(--popover-foreground))"    },
        primary:    { DEFAULT: "hsl(var(--primary))",    foreground: "hsl(var(--primary-foreground))"    },
        secondary:  { DEFAULT: "hsl(var(--secondary))",  foreground: "hsl(var(--secondary-foreground))"  },
        muted:      { DEFAULT: "hsl(var(--muted))",      foreground: "hsl(var(--muted-foreground))"      },
        accent:     { DEFAULT: "hsl(var(--accent))",     foreground: "hsl(var(--accent-foreground))"     },
        destructive:{ DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))"},
        border: "hsl(var(--border))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(22px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(263 70% 50% / 0.3)" },
          "50%":      { boxShadow: "0 0 40px hsl(263 70% 50% / 0.6)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition:  "1000px 0" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 7s ease infinite",
        "fade-up":        "fade-up 0.6s ease forwards",
        float:            "float 6s ease-in-out infinite",
        "float-slow":     "float 10s ease-in-out infinite",
        "pulse-glow":     "pulse-glow 3s ease-in-out infinite",
        shimmer:          "shimmer 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
