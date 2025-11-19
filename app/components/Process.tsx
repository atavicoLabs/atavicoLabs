'use client';

import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';
import { useEffect, useRef, useState } from 'react';

export default function Process() {
  const t = useTranslations('process');
  const { ref, isRevealed } = useReveal();

  // per-step reveal state and refs (one observer per step)
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [revealed, setRevealed] = useState<boolean[]>(new Array(4).fill(false));

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx === -1) return;
          if (entry.isIntersecting) {
            setRevealed((prev) => {
              if (prev[idx]) return prev;
              const next = [...prev];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.45, rootMargin: '0px 0px -30% 0px' }
    );

    // observe any refs already set
    stepRefs.current.forEach((el) => {
      if (el && observerRef.current) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

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
  <div className="relative max-w-4xl mx-auto">

        {/* Header */}
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

        {/* Timeline */}
        <div className="relative">

          <div className="space-y-0">

            {/* Linea unica disegnata nella COLONNA della LINEA */}
              <div 
                className={`
                  absolute 
                  top-0 
                  left-[calc(10rem+1px)]    /* center the 1px vertical line to the middle of the 2px grid column */
                  w-px 
                  bg-warm-border
                  ${isRevealed ? 'animate-draw-line' : 'h-0'}
                `}
                style={{ height: '100%' }}
              />

            {/* Steps */}
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => { stepRefs.current[index] = el; if (el && observerRef.current) observerRef.current.observe(el); }}
                className={`relative py-12 fade-up ${revealed[index] ? 'revealed' : 'opacity-0 translate-y-6'}`}
              >

                {/* 3 colonne: number | LINE COLUMN (2px) | content */}
                <div className="grid grid-cols-[8rem_2px_1fr] gap-8 items-start">

                  {/* NUMERO */}
                  <div className="relative flex items-start justify-center">
                    <div className="text-4xl md:text-5xl font-semibold text-warm-muted">
                      {step.number}
                    </div>
                  </div>

                  {/* COLONNA LINEA (qui mettiamo il punto) */}
                  <div className="relative">

                    {/* Pallino centrato sulla linea */}
                      <div 
                        className={`absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-warm-accent transition-all duration-500 ${revealed[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                      />

                  </div>

                  {/* CONTENUTO */}
                  <div className="flex-1 border-b border-warm-border pb-12 last:border-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 mb-4">
                      <h3 className="text-xl md:text-2xl font-semibold text-warm-text leading-tight">
                        {step.title}
                      </h3>
                      <span className="px-3 py-1 text-xs text-warm-muted border border-warm-border whitespace-nowrap">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-warm-muted leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
