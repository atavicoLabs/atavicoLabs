'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = y > 20;
          setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));
          ticking = false;
        });
        ticking = true;
      }
    };

    // use passive listener and batch updates via rAF to avoid expensive sync reflows
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl bg-carbone/90 border-b border-grigio/20' : 'bg-transparent'
      }`}
      aria-hidden={false}
    >
      <div className="w-full px-8 lg:px-16">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - versione tecnica con tracking */}
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-normal tracking-wider-2 text-sabbia hover:text-oliva transition-colors duration-300 uppercase"
          >
            ATAVICOLABS
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm font-normal tracking-wider text-sabbia hover:text-oliva transition-colors duration-300 uppercase"
            >
              Servizi
            </a>
            <a
              href="#portfolio"
              className="text-sm font-normal tracking-wider text-sabbia hover:text-oliva transition-colors duration-300 uppercase"
            >
              Portfolio
            </a>
            <a
              href="#process"
              className="text-sm font-normal tracking-wider text-sabbia hover:text-oliva transition-colors duration-300 uppercase"
            >
              Processo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sabbia hover:text-oliva transition-colors duration-300"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
