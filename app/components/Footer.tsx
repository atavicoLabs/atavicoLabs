'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';
// LanguageSwitcher is intentionally not used in the footer per request.
// import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('footer');
  const { ref, isRevealed } = useReveal();

  return (
    <footer 
      ref={ref}
      className="relative bg-warm-black py-12 px-6 lg:px-8 border-t border-warm-border"
    >
      <div className={`relative max-w-5xl mx-auto fade-up ${isRevealed ? 'revealed' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-warm-text mb-3">
              {t('brand')}
            </h3>
            <p className="text-warm-muted text-sm leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-warm-secondary mb-4">
              {t('quickLinks.title')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-warm-muted hover:text-warm-accent transition-colors duration-300">
                  {t('quickLinks.about')}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-warm-muted hover:text-warm-accent transition-colors duration-300">
                  {t('quickLinks.services')}
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-sm text-warm-muted hover:text-warm-accent transition-colors duration-300">
                  {t('quickLinks.portfolio')}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-warm-muted hover:text-warm-accent transition-colors duration-300">
                  {t('quickLinks.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-warm-secondary mb-4">
              {t('contact.title')}
            </h4>
            <ul className="space-y-2 text-warm-muted text-sm">
              <li>
                <a href="mailto:contact@atavicolabs.com" className="hover:text-warm-accent transition-colors duration-300">
                  contact@atavicolabs.com
                </a>
              </li>
              {/* Phone removed per request */}
              <li className="pt-2">
                <span className="text-xs text-warm-muted/70">{t('contact.location')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar - minimal */}
        <div className="pt-8 border-t border-warm-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warm-muted/50 text-xs">
            {t('copyright', {year: currentYear})}
          </p>
          <div className="flex items-center gap-6">
            {/* Language switcher removed from footer */}
            {/* Legal Links */}
            <div className="flex gap-6 text-xs">
              <Link href="/privacy" className="text-warm-muted/70 hover:text-warm-accent transition-colors duration-300">
                {t('legal.privacy')}
              </Link>
              <Link href="/terms" className="text-warm-muted/70 hover:text-warm-accent transition-colors duration-300">
                {t('legal.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
