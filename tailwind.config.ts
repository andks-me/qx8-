import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1020",
        electric: "#2D6BFF",
        teal: "#00C2B8",
        grayNeutral: "#E9EDF2",
        onyx: "#0A0A0A",
      },
      boxShadow: {
        card: "0 6px 24px -6px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
