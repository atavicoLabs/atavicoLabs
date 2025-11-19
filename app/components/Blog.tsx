'use client';

import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';

export default function Blog() {
  const t = useTranslations('blog');
  const { ref, isRevealed } = useReveal();

  return (
    <section 
      id="blog" 
      ref={ref}
      className="relative py-24 md:py-32 px-6 lg:px-8 bg-warm-darker"
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-warm-text tracking-tight leading-tight mb-6 fade-up ${isRevealed ? 'revealed' : ''}`}
          >
            {t('title')}
          </h2>
          <p 
            className={`text-lg md:text-xl text-warm-secondary max-w-2xl leading-relaxed fade-up ${isRevealed ? 'revealed' : ''}`}
            style={{ animationDelay: '100ms' }}
          >
            {t('subtitle')}
          </p>
        </div>

        {/* Articles - fade-up with stagger 100ms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[0, 1, 2].map((index) => (
            <article
              key={index}
              className={`group fade-up stagger-child ${isRevealed ? 'revealed' : ''}`}
              style={{ '--stagger-delay': '100ms' } as React.CSSProperties}
            >
              <a href="#" className="block">
                <div className="space-y-4">
                  {/* Category badge - slight delay */}
                  <span 
                    className={`inline-block px-3 py-1 text-xs text-warm-muted border border-warm-border ${
                      isRevealed ? 'fade-in' : 'fade-up'
                    }`}
                    style={{ animationDelay: `${100 * index + 100}ms` }}
                  >
                    {t(`items.${index}.category`)}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-warm-text leading-tight group-hover:text-warm-accent transition-colors duration-300">
                    {t(`items.${index}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-warm-muted leading-relaxed">
                    {t(`items.${index}.description`)}
                  </p>

                  {/* Read article CTA */}
                  <div className="flex items-center gap-2 text-sm text-warm-accent font-medium group-hover:gap-3 transition-all duration-300">
                    <span>{t('cta')}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
