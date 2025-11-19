import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0ED1B2',
          light: '#1FE5C4',
          dark: '#0BB89C',
        },
        warm: {
          black: '#0B0B0D',
          darker: '#0F1012',
          dark: '#111827',
          card: '#101014',
          border: '#272A33',
          text: '#F9FAFB',
          secondary: '#D1D5DB',
          muted: '#9CA3AF',
          light: '#F3F4F6',
          accent: '#F5A623',
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
