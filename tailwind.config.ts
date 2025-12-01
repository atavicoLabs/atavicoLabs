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
        // ========================================
        // Warm Stone Premium
        // ========================================
        
        // Background Layers (3 livelli di profondità)
        'bg-primary': '#0B0C0D',      // base assoluta
        'bg-secondary': '#141517',    // superfici elevate (card, navbar blur)
        'bg-tertiary': '#1C1D20',     // elementi interattivi hover
        
        // Text Colors (5 livelli di contrasto)
        'text-primary': '#E8E6DC',    // titoli principali - sabbia chiara
        'text-secondary': '#C8C5B8',  // sottotitoli e body - sabbia media
        'text-tertiary': '#9D9A8E',   // captions e metadata - grigio caldo
        'text-muted': '#6B6960',      // labels secondarie - grigio scuro caldo
        'text-ghost': '#403E38',      // separatori e ghost text
        
        // Accent Colors (tecnico/naturale)
        'accent-primary': '#5A6D5A',  // oliva saturo per CTA primarie
        'accent-hover': '#6D8369',    // oliva chiaro hover
        'accent-subtle': '#3A4838',   // oliva scuro background
        
        'warm-accent': '#B8A88A',     // terra/beige per decorazioni
        'warm-subtle': '#4A4539',     // terra scuro per bordi
        
        // ========================================
        // LEGACY PALETTE (mantenuta per compatibilità)
        // ========================================
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
        // Body/UI
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "Segoe UI",
          "sans-serif",
        ],
        // Headings / display
        display: [
          "Manrope",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Text",
          "Segoe UI",
          "sans-serif",
        ],
      },
      fontSize: {
        // ========================================
        // TYPOGRAPHY SCALE
        // ========================================
        'display-lg': ['64px', { lineHeight: '1.08', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-md': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '500' }],
        'display-sm': ['40px', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h1': ['40px', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '500' }],
        'h2': ['32px', { lineHeight: '1.2', fontWeight: '500' }],
        'h3': ['20px', { lineHeight: '1.3', fontWeight: '500' }],
        'body-lg': ['19px', { lineHeight: '1.7', fontWeight: '300' }],
        'body': ['15px', { lineHeight: '1.75', fontWeight: '300' }],
        'body-sm': ['13px', { lineHeight: '1.65', fontWeight: '400' }],
        'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.15em', fontWeight: '500' }],
        'button': ['14px', { lineHeight: '1.4', letterSpacing: '0.03em', fontWeight: '500' }],
        'mono': ['11px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      maxWidth: {
        'content': '1320px',
        'text': '780px',
        'paragraph': '580px',
        'narrow': '420px',
      },
      backdropBlur: {
        '2xl': '40px',
      },
      boxShadow: {
        'premium': '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)',
        'premium-lg': '0 12px 48px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.3)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      letterSpacing: {
        'wider-2': '0.02em',
      },
    },
  },
  plugins: [],
};
export default config;
