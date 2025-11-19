'use client';

import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';

export default function CTA() {
  const t = useTranslations('cta');
  const { ref, isRevealed } = useReveal();

  return (
    <section 
      id="contact" 
      ref={ref}
      className="relative py-24 md:py-32 px-6 lg:px-8 bg-warm-darker overflow-hidden"
    >
      {/* Background - static opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-accent/5 via-transparent to-transparent opacity-100" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="space-y-8">
          {/* Title */}
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-warm-text tracking-tight leading-tight fade-up ${isRevealed ? 'revealed' : ''}`}
          >
            {t('title')}
          </h2>

          {/* Subtitle */}
          <p 
            className={`text-lg md:text-xl text-warm-secondary max-w-xl mx-auto leading-relaxed fade-up ${isRevealed ? 'revealed' : ''}`}
            style={{ animationDelay: '150ms' }}
          >
            {t('subtitle')}
          </p>

          {/* Contact info */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 text-warm-muted fade-in ${isRevealed ? 'revealed' : ''}`}
            style={{ animationDelay: '250ms' }}
          >
            <a
              href={`mailto:${t('email')}`}
              className="hover:text-warm-accent transition-colors duration-300"
            >
              {t('email')}
            </a>
            <span className="hidden sm:block text-warm-border">•</span>
            <a
              href={`tel:${t('phone').replace(/\s/g, '')}`}
              className="hover:text-warm-accent transition-colors duration-300"
            >
              {t('phone')}
            </a>
          </div>

          {/* CTA button with hover effects */}
          <div 
            className={`pt-4 fade-up ${isRevealed ? 'revealed' : ''}`}
            style={{ animationDelay: '350ms' }}
          >
            <a
              href={`mailto:${t('email')}`}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-warm-accent text-warm-accent font-medium rounded-lg hover:bg-warm-accent/90 hover:backdrop-blur-xl hover:text-warm-black hover:shadow-[0_0_28px_-6px_rgba(245,166,35,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Start a project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
