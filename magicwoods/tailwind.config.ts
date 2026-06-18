import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a3a2e",
          light: "#2d5a4a",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#c9a961",
          foreground: "#ffffff",
        },
        bg: {
          light: "#f8f6f1",
        },
        border: "#e0dcd3",
      },
      fontFamily: {
        serif: ["Georgia", "'Times New Roman'", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
