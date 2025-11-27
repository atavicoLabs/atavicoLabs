'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('navbar');

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

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full max-w-full overflow-hidden ${
        isScrolled ? 'backdrop-blur-2xl bg-bg-primary/90 border-b border-text-ghost/10' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-24">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo + Metadata */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-0">
              <Link 
                href="/" 
                className="text-[22px] font-normal tracking-[0.08em] text-text-primary hover:text-accent-primary transition-colors duration-300 uppercase"
              >
                ATAVICOLABS
              </Link>
              <span className="hidden lg:block text-[9px] uppercase font-light tracking-[0.2em]" style={{ color: 'rgba(255, 255, 255, 0.50)' }}>
                DIGITAL PRODUCT STUDIO
              </span>
            </div>
          </div>

          {/* Center Navigation - Desktop - contrasto aumentato */}
          <div className="hidden lg:flex items-center gap-12">
            <a
              href="#about"
              className="text-[14px] font-light tracking-[-0.01em] hover:text-accent-primary transition-colors duration-300"
              style={{ color: '#D0CEC3' }}
            >
              {t('about')}
            </a>
            <a
              href="#portfolio"
              className="text-[14px] font-light tracking-[-0.01em] hover:text-accent-primary transition-colors duration-300"
              style={{ color: '#D0CEC3' }}
            >
              {t('work')}
            </a>
            <a
              href="#process"
              className="text-[14px] font-light tracking-[-0.01em] hover:text-accent-primary transition-colors duration-300"
              style={{ color: '#D0CEC3' }}
            >
              {t('process')}
            </a>
            <a
              href="#blog"
              className="text-[14px] font-light tracking-[-0.01em] hover:text-accent-primary transition-colors duration-300"
              style={{ color: '#D0CEC3' }}
            >
              {t('insights')}
            </a>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 border text-[13px] font-medium tracking-[0.02em] transition-all duration-300 hover:translate-y-[-1px]"
              style={{ 
                borderColor: 'rgba(157, 154, 142, 0.25)',
                color: '#E8E5DC'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#5A6D5A';
                e.currentTarget.style.backgroundColor = 'rgba(90, 109, 90, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(157, 154, 142, 0.25)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {t('contact')}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-text-primary hover:text-accent-primary transition-colors duration-300"
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
