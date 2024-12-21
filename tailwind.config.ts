import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#141b2a',    // Darkest color for background
        blue: '#3C5B6F',           // Medium color for boxes
        brown: '#948979', // Secondary medium color for alternative boxes
        text: '#DFD0B8',           // Lightest color for text
      },
    },
  },
  plugins: [],
} satisfies Config;
