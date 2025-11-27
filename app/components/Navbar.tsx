'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations('navbar');
  const locale = useLocale();

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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

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
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 -mr-2 hover:opacity-80 transition-opacity duration-300"
            aria-label="Open menu"
          >
            <div className="w-[22px] h-[10px] flex flex-col justify-between">
              <span 
                className="block h-[1.5px] w-full transition-all duration-300"
                style={{ backgroundColor: '#E8E5D8' }}
              />
              <span 
                className="block h-[1.5px] w-full transition-all duration-300"
                style={{ backgroundColor: '#E8E5D8' }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden"
          style={{
            animation: 'fadeIn 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)'
          }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div 
            className="relative h-full flex flex-col bg-[#0A0A0A] px-6 py-6"
            style={{
              animation: 'slideIn 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)'
            }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-16">
              {/* Logo */}
              <div className="flex flex-col gap-0">
                <Link 
                  href={`/${locale}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-[22px] font-normal tracking-[0.08em] uppercase"
                  style={{ color: '#EDEDE0' }}
                >
                  ATAVICOLABS
                </Link>
                <span className="text-[9px] uppercase font-light tracking-[0.2em]" style={{ color: 'rgba(237, 237, 224, 0.5)' }}>
                  DIGITAL PRODUCT STUDIO
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 -mr-2 -mt-2 hover:opacity-70 transition-opacity duration-300"
                aria-label="Close menu"
              >
                <div className="w-[22px] h-[22px] relative flex items-center justify-center">
                  {/* X icon - two lines rotated */}
                  <span 
                    className="absolute block h-[1.5px] w-full transition-all duration-300"
                    style={{ 
                      backgroundColor: '#E8E5D8',
                      transform: 'rotate(45deg)'
                    }}
                  />
                  <span 
                    className="absolute block h-[1.5px] w-full transition-all duration-300"
                    style={{ 
                      backgroundColor: '#E8E5D8',
                      transform: 'rotate(-45deg)'
                    }}
                  />
                </div>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col gap-8">
              <a
                href={`/${locale}#about`}
                onClick={() => setMenuOpen(false)}
                className="text-[32px] font-light tracking-[-0.02em] transition-colors duration-300"
                style={{ color: '#EDEDE0' }}
                onTouchStart={(e) => e.currentTarget.style.color = '#5A6D5A'}
                onTouchEnd={(e) => e.currentTarget.style.color = '#EDEDE0'}
              >
                {t('about')}
              </a>
              
              <a
                href={`/${locale}#portfolio`}
                onClick={() => setMenuOpen(false)}
                className="text-[32px] font-light tracking-[-0.02em] transition-colors duration-300"
                style={{ color: '#EDEDE0' }}
                onTouchStart={(e) => e.currentTarget.style.color = '#5A6D5A'}
                onTouchEnd={(e) => e.currentTarget.style.color = '#EDEDE0'}
              >
                {t('work')}
              </a>
              
              <a
                href={`/${locale}#process`}
                onClick={() => setMenuOpen(false)}
                className="text-[32px] font-light tracking-[-0.02em] transition-colors duration-300"
                style={{ color: '#EDEDE0' }}
                onTouchStart={(e) => e.currentTarget.style.color = '#5A6D5A'}
                onTouchEnd={(e) => e.currentTarget.style.color = '#EDEDE0'}
              >
                {t('process')}
              </a>
              
              <a
                href={`/${locale}#blog`}
                onClick={() => setMenuOpen(false)}
                className="text-[32px] font-light tracking-[-0.02em] transition-colors duration-300"
                style={{ color: '#EDEDE0' }}
                onTouchStart={(e) => e.currentTarget.style.color = '#5A6D5A'}
                onTouchEnd={(e) => e.currentTarget.style.color = '#EDEDE0'}
              >
                {t('insights')}
              </a>

              {/* Divider */}
              <div className="h-px bg-[#1C1C1C] my-4" />

              {/* Contact Button */}
              <a
                href={`/${locale}#contact`}
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border text-[15px] font-normal tracking-[0.02em] transition-all duration-300"
                style={{ 
                  borderColor: 'rgba(237, 237, 224, 0.25)',
                  color: '#EDEDE0'
                }}
                onTouchStart={(e) => {
                  e.currentTarget.style.borderColor = '#5A6D5A';
                  e.currentTarget.style.backgroundColor = 'rgba(90, 109, 90, 0.1)';
                }}
                onTouchEnd={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(237, 237, 224, 0.25)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {t('contact')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </nav>

            {/* Footer Meta */}
            <div className="pt-8 border-t" style={{ borderColor: '#1C1C1C' }}>
              <div className="flex items-center gap-2 text-[11px] font-light" style={{ color: '#9A9A8A' }}>
                <span>•</span>
                <span>Remote-first</span>
                <span>•</span>
                <span>{locale === 'it' ? 'Dal 2017' : 'Since 2017'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
