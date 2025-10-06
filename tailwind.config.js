/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Inter", "system-ui", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Consolas", "monospace"]
      },
      colors: {
        skin: {
          bg: "hsl(var(--bg) / <alpha-value>)",
          surface: "hsl(var(--surface) / <alpha-value>)",
          text: "hsl(var(--text) / <alpha-value>)",
          textMuted: "hsl(var(--text-muted) / <alpha-value>)",
          border: "hsl(var(--border) / <alpha-value>)",
          ring: "hsl(var(--ring) / <alpha-value>)",
          primary: "hsl(var(--primary) / <alpha-value>)",
          onPrimary: "hsl(var(--on-primary) / <alpha-value>)",
          secondary: "hsl(var(--secondary) / <alpha-value>)",
          onSecondary: "hsl(var(--on-secondary) / <alpha-value>)",
          accent: "hsl(var(--accent) / <alpha-value>)",
          onAccent: "hsl(var(--on-accent) / <alpha-value>)",
          success: "hsl(var(--success) / <alpha-value>)",
          onSuccess: "hsl(var(--on-success) / <alpha-value>)",
          warning: "hsl(var(--warning) / <alpha-value>)",
          onWarning: "hsl(var(--on-warning) / <alpha-value>)",
          danger: "hsl(var(--danger) / <alpha-value>)",
          onDanger: "hsl(var(--on-danger) / <alpha-value>)"
        },
        cf: {
          "dark-moss-green": "#4E6813",
          "blood-red": "#74070E",
          "folly": "#FF4365",
          "verdigris": "#28AFB0",
          "celadon": "#B3DEC1",
          "off-white-mist": "#F5F7F2",
          "charcoal-slate": "#1E1E1C",
          "stone-gray": "#7C8572",
          "ivory-cloud": "#EAEAE4",
          "midnight-teal": "#1C4141",
          "solar-amber": "#FFB847",
          "skywave-blue": "#009DFF",
          "clover-pop": "#A6E22E",
          "rose-quartz": "#FF7E8E",
          "cobalt-shadow": "#2035A7",
          "fern-dust": "#8AA96C",
          "clay-taupe": "#B6A38C",
          "fog-blue": "#A7BFC2",
          "mulberry-smoke": "#9B6473",
          "pale-aqua-mist": "#D8ECE7"
        }
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
