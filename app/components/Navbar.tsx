'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl bg-warm-black/70 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-8 lg:px-16">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-bold text-warm-text hover:text-warm-accent transition-colors duration-200"
          >
            AtavicoLabs
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-12">
            <a
              href="#services"
              className="text-lg font-semibold text-warm-text hover:text-warm-accent transition-colors duration-200"
            >
              Servizi
            </a>
            <a
              href="#portfolio"
              className="text-lg font-semibold text-warm-text hover:text-warm-accent transition-colors duration-200"
            >
              Portfolio
            </a>
            <a
              href="#process"
              className="text-lg font-semibold text-warm-text hover:text-warm-accent transition-colors duration-200"
            >
              Processo
            </a>
            <a
              href="#about"
              className="text-lg font-semibold text-warm-text hover:text-warm-accent transition-colors duration-200"
            >
              Chi siamo
            </a>
            <a
              href="#cta"
              className="text-lg font-semibold text-warm-text hover:text-warm-accent transition-colors duration-200"
            >
              Contatti
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-warm-text hover:text-warm-accent transition-colors duration-200"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
