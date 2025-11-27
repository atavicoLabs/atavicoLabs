'use client';

import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const { ref, isRevealed } = useReveal();
  
  const testimonials = [0, 1, 2];

  return (
    <section 
      id="testimonials" 
      ref={ref}
      className="relative py-32 px-6 lg:px-16 bg-grafite border-t border-grigio/20"
    >
      {/* Section Number */}
      <div className="absolute top-12 right-6 lg:right-16 text-[14px] font-mono text-oliva/40">[05]</div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-[750px] mb-16">
          <div className="text-[9px] uppercase tracking-wider text-grigio/60 font-light mb-3">FEEDBACK CLIENTI</div>
          <h2 
            className={`text-[32px] font-medium text-sabbia mb-4 leading-[1.2] fade-up ${isRevealed ? 'revealed' : ''}`}
          >
            {t('title')}
          </h2>
          <p 
            className={`text-[16px] leading-[1.7] text-sabbia/60 font-light fade-up ${isRevealed ? 'revealed' : ''}`}
            style={{ animationDelay: '100ms' }}
          >
            {t('subtitle')}
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {testimonials.map((index) => (
            <div
              key={index}
              className={`bg-carbone border border-grigio/30 p-8 hover:border-oliva/40 transition-all duration-300 hover:-translate-y-1 ${index === 0 ? 'md:col-span-2 md:row-span-1' : ''} fade-up ${isRevealed ? 'revealed' : ''}`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {/* Star Rating */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-oliva stroke-oliva" viewBox="0 0 24 24" strokeWidth={1}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className={`${index === 0 ? 'text-[18px]' : 'text-[15px]'} text-sabbia leading-[1.6] mb-6 font-light`}>
                “{t(`items.${index}.quote`)}”
              </p>

              {/* Author info */}
              <div className="flex items-start gap-3 pt-4 border-t border-grigio/20">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 border border-grigio/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-grigio font-normal text-[11px] uppercase">
                    {t(`items.${index}.author`).charAt(0)}
                  </span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-sabbia text-[13px]">
                      {t(`items.${index}.author`)}
                    </p>
                    {/* Verified Badge */}
                    <div className="flex items-center gap-1 text-[9px] text-oliva/70">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth={1.5} fill="none" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[11px] text-grigio">
                    {t(`items.${index}.role`)} • {t(`items.${index}.company`)}
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
