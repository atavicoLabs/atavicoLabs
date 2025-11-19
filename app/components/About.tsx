'use client';

import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const t = useTranslations('about');
  const { ref, isRevealed } = useReveal();

  return (
    // Temporarily hide the About section (keep markup in-place).
    // To restore, remove the `hidden` class below.
    <section 
      id="about" 
      ref={ref}
      className="hidden relative py-24 md:py-32 px-6 lg:px-8 bg-warm-darker"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold text-warm-text tracking-tight leading-tight mb-6 fade-up ${
              isRevealed ? 'revealed' : ''
            }`}
          >
            {t('title')}
          </h2>
          <p 
            className={`text-lg md:text-xl text-warm-secondary max-w-2xl leading-relaxed fade-up ${
              isRevealed ? 'revealed' : ''
            }`}
            style={{ animationDelay: '100ms' }}
          >
            {t('subtitle')}
          </p>
        </div>

        {/* Technology blocks - stagger with scale */}
        <div className={`grid md:grid-cols-3 gap-12 stagger-container ${isRevealed ? 'revealed' : ''}`}>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="stagger-child space-y-4"
              style={{ '--stagger-delay': `${90 * index}ms` } as React.CSSProperties}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-warm-text leading-tight">
                {t(`technologies.${index}.title`)}
              </h3>
              
              <p className="text-warm-muted leading-relaxed">
                {t(`technologies.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
