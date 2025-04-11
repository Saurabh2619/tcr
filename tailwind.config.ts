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
        primary: '#03638d',
        secondary: '#f6c52a',
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
         raleway: "var(--font-raleway)",
         merriweather: "var(--font-merriweather)",
      },
    },
  },
  plugins: [],
} satisfies Config;
