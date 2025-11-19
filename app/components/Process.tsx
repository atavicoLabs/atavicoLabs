'use client';

import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';

export default function Process() {
  const t = useTranslations('process');
  const { ref, isRevealed } = useReveal();

  const steps = [
    {
      number: '01',
      title: t('steps.0.title'),
      description: t('steps.0.description'),
      duration: t('steps.0.duration'),
    },
    {
      number: '02',
      title: t('steps.1.title'),
      description: t('steps.1.description'),
      duration: t('steps.1.duration'),
    },
    {
      number: '03',
      title: t('steps.2.title'),
      description: t('steps.2.description'),
      duration: t('steps.2.duration'),
    },
    {
      number: '04',
      title: t('steps.3.title'),
      description: t('steps.3.description'),
      duration: t('steps.3.duration'),
    },
  ];

  return (
    <section 
      id="process" 
      ref={ref}
      className="relative py-24 md:py-32 px-6 lg:px-8 bg-warm-darker"
    >
      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
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

        {/* Vertical timeline with draw-line animation */}
        <div className="relative space-y-0">
          {/* Timeline line */}
          <div 
            className={`absolute left-6 md:left-10 top-0 w-px bg-warm-border ${
              isRevealed ? 'animate-draw-line' : 'h-0'
            }`}
            style={{ height: 'calc(100% - 3rem)' }}
          />

          {/* Steps - stagger 120ms */}
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative py-12 fade-up stagger-child ${isRevealed ? 'revealed' : ''}`}
              style={{ '--stagger-delay': '120ms' } as React.CSSProperties}
            >
              <div className="flex items-start gap-6 md:gap-12">
                {/* Number with dot indicator */}
                <div className="relative flex-shrink-0">
                  <div className="absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-warm-accent" />
                  <div className="text-4xl md:text-5xl font-semibold text-warm-muted pl-8 md:pl-12">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 pt-0 md:pt-1 border-b border-warm-border pb-12 last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <h3 className="text-xl md:text-2xl font-semibold text-warm-text leading-tight">
                      {step.title}
                    </h3>
                    <span className="px-3 py-1 text-xs text-warm-muted border border-warm-border whitespace-nowrap self-start">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-warm-muted leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
