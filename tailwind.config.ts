import { notEqual } from "assert";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bl: "var(--bl)",
        lbl: "var(--lbl)",
      },
      screens: {
        sm: '640px',  // Small devices
        md: '768px',  // Medium devices
        lg: '1024px', // Large devices
        xl: '1280px', // Extra large devices
      },
    },
  },
  plugins: [],
} satisfies Config;
