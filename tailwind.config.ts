import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        pallete01: "#F1F1F1",
        pallete02: "#393d3e ",
        pallete03: "#646a6d",
        pallete04: "#d8a13d"
      },
    },
  },
  plugins: [],
};
export default config;
