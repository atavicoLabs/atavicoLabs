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
        // Palette tecnica AtavicoLabs
        carbone: '#0D0E0F',      // sfondo dominante
        grafite: '#1B1C1D',      // superfici scure, card
        sabbia: '#D3D1C8',       // testi principali
        grigio: '#8A8C8E',       // captions, bordi
        oliva: '#4E584E',        // accento tecnico (hover, highlights)
        
        // Legacy colors (manteniamo per compatibilità)
        teal: {
          DEFAULT: '#0ED1B2',
          light: '#1FE5C4',
          dark: '#0BB89C',
        },
        warm: {
          black: '#0D0E0F',      // → carbone
          darker: '#0F1012',
          dark: '#111827',
          card: '#1B1C1D',       // → grafite
          border: '#8A8C8E',     // → grigio
          text: '#D3D1C8',       // → sabbia
          secondary: '#D1D5DB',
          muted: '#8A8C8E',      // → grigio
          light: '#F3F4F6',
          accent: '#4E584E',     // → oliva
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        'wider-2': '0.02em',
        'wider-4': '0.04em',
      },
    },
  },
  plugins: [],
};
export default config;
