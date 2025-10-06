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
        }
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
