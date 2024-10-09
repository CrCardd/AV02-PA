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
        pallete02: "#1c202b ",
        pallete03: "#535761",
        pallete04: "#efb20f"
      },
    },
  },
  plugins: [],
};
export default config;
