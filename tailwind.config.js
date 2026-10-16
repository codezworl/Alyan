/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-ink": "var(--accent-ink)",
        danger: "var(--danger)",
        warning: "var(--warning)",
      },
      backgroundImage: {
        "accent-gradient": "var(--accent-gradient)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["'Clash Display'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
      },
      animation: {
        'marquee-left': 'marquee-left 35s linear infinite',
        'marquee-right': 'marquee-right 35s linear infinite',
        blink: 'blink 1.2s step-end infinite',
      },
    },
  },
  plugins: [],
}
