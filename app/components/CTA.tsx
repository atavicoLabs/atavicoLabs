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
      className="relative py-32 px-6 lg:px-16 bg-carbone border-t border-grigio/20 overflow-hidden"
    >
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23D3D1C8'/%3E%3C/svg%3E")`,
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Section Number */}
      <div className="absolute top-12 right-6 lg:right-16 text-[14px] font-mono text-oliva/40">[07]</div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left Column - Content */}
        <div className="space-y-8">
          {/* Micro Label */}
          <div className="text-[9px] uppercase tracking-wider text-grigio/60 font-light">CONTATTI</div>

          {/* Title */}
          <h2 
            className={`text-[32px] font-medium text-sabbia leading-[1.2] fade-up ${isRevealed ? 'revealed' : ''}`}
          >
            {t('title')}
          </h2>

          {/* Subtitle */}
          <p 
            className={`text-[16px] leading-[1.7] text-sabbia/60 font-light fade-up ${isRevealed ? 'revealed' : ''}`}
            style={{ animationDelay: '100ms' }}
          >
            {t('subtitle')}
          </p>

          {/* CTA Button */}
          <div 
            className={`pt-4 fade-up ${isRevealed ? 'revealed' : ''}`}
            style={{ animationDelay: '200ms' }}
          >
            <a
              href={`mailto:${t('email')}`}
              className="inline-flex items-center gap-3 px-5 py-3 border border-sabbia/60 text-sabbia font-normal text-[13px] uppercase tracking-wider hover:border-oliva hover:text-oliva hover:bg-oliva/5 transition-all duration-300"
            >
              {t('cta')}
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats Row */}
          <div 
            className={`grid grid-cols-4 gap-4 pt-8 border-t border-grigio/20 fade-up ${isRevealed ? 'revealed' : ''}`}
            style={{ animationDelay: '300ms' }}
          >
            {[
              { value: '12', label: 'Progetti' },
              { value: '98%', label: 'Retention' },
              { value: '4.9/5', label: 'Rating' },
              { value: '8 anni', label: 'Esperienza' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-[20px] font-medium text-oliva">{stat.value}</div>
                <div className="text-[11px] text-grigio/70 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Contact Info Box */}
        <div 
          className={`fade-up ${isRevealed ? 'revealed' : ''}`}
          style={{ animationDelay: '400ms' }}
        >
          <div className="border border-grigio/20 bg-grafite/30 p-8 space-y-6">
            {/* Availability Indicator */}
            <div className="flex items-center gap-2 text-[13px] text-sabbia/70 pb-6 border-b border-grigio/20">
              <div className="w-2 h-2 rounded-full bg-oliva animate-pulse"></div>
              <span className="uppercase tracking-wider">Disponibili per nuovi progetti</span>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {/* Email */}
              <div>
                <div className="text-[11px] uppercase tracking-wider text-grigio/60 mb-1">Email</div>
                <a 
                  href={`mailto:${t('email')}`}
                  className="text-[15px] text-sabbia hover:text-oliva transition-colors"
                >
                  {t('email')}
                </a>
              </div>

              {/* Location */}
              <div>
                <div className="text-[11px] uppercase tracking-wider text-grigio/60 mb-1">Sede</div>
                <div className="text-[15px] text-sabbia/70">Milano, Italia</div>
              </div>

              {/* Response Time */}
              <div>
                <div className="text-[11px] uppercase tracking-wider text-grigio/60 mb-1">Tempo di risposta</div>
                <div className="text-[15px] text-sabbia/70">Entro 24 ore</div>
              </div>
            </div>

            {/* Coordinates */}
            <div className="pt-6 border-t border-grigio/20">
              <div className="text-[11px] font-mono text-grigio/50">45.4642° N, 9.1900° E</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
