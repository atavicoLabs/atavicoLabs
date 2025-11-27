'use client';

import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const t = useTranslations('hero');
  const { ref, isRevealed } = useReveal({ threshold: 0.1, once: true });

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden w-full min-h-screen flex items-center bg-neutral-950"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%239D9A8E'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Section Number */}
      <div 
        className={`absolute top-24 right-6 lg:right-24 text-xs text-white/10 fade-in ${isRevealed ? 'revealed' : ''}`}
        style={{ animationDelay: '0ms' }}
      >
        [001]
      </div>
      
      {/* Main Container */}
      <div className="relative w-full px-6 lg:px-24 py-24 lg:py-40">
        <div className="max-w-7xl mx-auto relative">
          
          {/* Left Content Column */}
          <div className="max-w-2xl">
            
            {/* Eyebrow */}
            <div 
              className={`text-[10px] uppercase mb-12 tracking-[0.15em] text-white/40 font-normal fade-up ${
                isRevealed ? 'revealed' : ''
              }`}
            >
              {t('label')}
            </div>

            {/* H1 Title */}
            <h1 
              className={`text-4xl lg:text-7xl font-medium mb-10 leading-[1.1] tracking-tight fade-up ${
                isRevealed ? 'revealed' : ''
              }`}
              style={{ color: '#EAEAE6', animationDelay: '100ms' }}
            >
              {t('title')}
            </h1>

            {/* Paragraph */}
            <p 
              className={`text-lg lg:text-xl font-light mb-12 leading-relaxed max-w-xl fade-up ${
                isRevealed ? 'revealed' : ''
              }`}
              style={{ color: '#D0CECA', animationDelay: '200ms' }}
            >
              {t('description')}
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap gap-4 mb-14 fade-up ${isRevealed ? 'revealed' : ''}`}
              style={{ animationDelay: '300ms' }}
            >
              {/* Primary CTA */}
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent-primary text-white text-sm font-medium hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('ctaPrimary')} →
              </a>

              {/* Secondary CTA */}
              <a
                href="#process"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/10 text-sm font-medium hover:border-accent-primary hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300"
                style={{ color: '#D0CEC3' }}
              >
                {t('ctaSecondary')}
              </a>
            </div>

            {/* Info Row */}
            <div 
              className={`space-y-3 fade-in ${isRevealed ? 'revealed' : ''}`}
              style={{ animationDelay: '400ms' }}
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-white/60 font-light">
                <div className="flex items-center gap-2">
                  <span className="text-accent-primary">●</span>
                  <span>{t('available')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-primary">●</span>
                  <span>{t('since')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-primary">●</span>
                  <span>{t('remote')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-primary">●</span>
                  <span>{t('onsite')}</span>
                </div>
              </div>
              
              <p className="text-[11px] text-white/40 font-light max-w-md">
                {t('deliveryNote')}
              </p>
            </div>

          </div>
          
          {/* Technical Build Card - Bottom Right Desktop */}
          <div 
            className={`
              hidden lg:block
              absolute bottom-0 right-0 
              w-[360px] 
              backdrop-blur-sm
              p-4
              font-mono text-[9px] leading-relaxed
              fade-in
              ${isRevealed ? 'revealed' : ''}
            `}
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.25)',
              animationDelay: '500ms' 
            }}
          >
            <div className="flex items-start justify-between mb-3 pb-2 border-b border-white/5">
              <div className="uppercase tracking-widest text-[8px]" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                BUILD STATUS
              </div>
              <div className="text-white/40 text-[8px]">
                Last Deployment
              </div>
            </div>

            <div className="space-y-1 mb-3 text-white/70">
              <div className="flex items-center gap-2">
                <span className="text-accent-primary">✓</span>
                <span>Compilazione completata</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-primary">✓</span>
                <span>Test superati (127/127)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-primary">✓</span>
                <span>Type checking OK</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-white/90">
                <span>→</span>
                <span className="font-medium">Ready for production</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 space-y-1 text-[9px]">
              <div className="flex items-center justify-between">
                <span className="text-white/50">Performance:</span>
                <span className="text-white/90 font-medium">98/100</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">Accessibility:</span>
                <span className="text-white/90 font-medium">100/100</span>
              </div>
            </div>
          </div>

          {/* Technical Card Mobile/Tablet */}
          <div 
            className={`
              lg:hidden
              mt-12 mb-8
              w-full max-w-md mx-auto
              bg-white/5 backdrop-blur-sm
              border border-white/10
              p-4
              font-mono text-[9px] leading-relaxed
              fade-in
              ${isRevealed ? 'revealed' : ''}
            `}
            style={{ animationDelay: '500ms' }}
          >
            <div className="flex items-start justify-between mb-3 pb-2 border-b border-white/5">
              <div className="text-white/60 uppercase tracking-widest text-[8px]">
                BUILD STATUS
              </div>
              <div className="text-white/40 text-[8px]">
                Last Deployment
              </div>
            </div>

            <div className="space-y-1 mb-3 text-white/70">
              <div className="flex items-center gap-2">
                <span className="text-accent-primary">✓</span>
                <span>Compilazione completata</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-primary">✓</span>
                <span>Test superati (127/127)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent-primary">✓</span>
                <span>Type checking OK</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-white/90">
                <span>→</span>
                <span className="font-medium">Ready for production</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-white/50">Performance:</span>
                <span className="text-white/90 font-medium">98/100</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/50">Accessibility:</span>
                <span className="text-white/90 font-medium">100/100</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
