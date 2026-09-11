/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0a0316",
        deep: "#150a2e",
        panel: "#1b0f38",
        neonpink: "#ff2bd6",
        neoncyan: "#05d9e8",
        neonpurple: "#a239ea",
        neonyellow: "#f9f002",
        neongreen: "#39ff88",
      },
      fontFamily: {
        display: ["'Orbitron'", "sans-serif"],
        mono: ["'Share Tech Mono'", "monospace"],
      },
      boxShadow: {
        neon: "0 0 5px rgba(5,217,232,0.6), 0 0 20px rgba(255,43,214,0.35)",
        neoncyan: "0 0 8px rgba(5,217,232,0.8), 0 0 24px rgba(5,217,232,0.4)",
        neonpink: "0 0 8px rgba(255,43,214,0.8), 0 0 24px rgba(255,43,214,0.4)",
      },
      keyframes: {
        grid: { "0%": { backgroundPosition: "0 0" }, "100%": { backgroundPosition: "0 60px" } },
        flicker: { "0%,19%,21%,23%,25%,54%,56%,100%": { opacity: 1 }, "20%,24%,55%": { opacity: 0.6 } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        scan: { "0%": { backgroundPosition: "0 0" }, "100%": { backgroundPosition: "0 100%" } },
      },
      animation: {
        grid: "grid 4s linear infinite",
        flicker: "flicker 4s linear infinite",
        marquee: "marquee 22s linear infinite",
        scan: "scan 8s linear infinite",
      },
    },
  },
  plugins: [],
}
