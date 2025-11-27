'use client';

import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';

export default function Hero() {
  const t = useTranslations('hero');
  const { ref, isRevealed } = useReveal({ threshold: 0.1, once: true });

  return (
    <section 
      ref={ref}
      className="relative bg-carbone overflow-hidden"
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '120px',
        paddingBottom: '120px'
      }}
    >
      {/* Background Pattern - blueprint grid */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%238A8C8E'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Coordinate Label - top left */}
      <div 
        className={`absolute top-24 left-6 lg:left-16 fade-in ${isRevealed ? 'revealed' : ''}`}
        style={{ animationDelay: '0ms' }}
      >
        <div className="text-[9px] uppercase tracking-wider text-grigio/60 font-light space-y-1">
          <div>45.4642° N, 9.1900° E</div>
          <div className="text-[10px] text-grigio/40">MILANO — DIGITAL PRODUCT STUDIO</div>
        </div>
      </div>

      {/* Status Bar - below coordinates */}
      <div 
        className={`absolute top-40 left-6 lg:left-16 fade-in ${isRevealed ? 'revealed' : ''}`}
        style={{ animationDelay: '100ms' }}
      >
        <div className="flex items-center gap-3 text-[10px] text-grigio/50">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-oliva animate-pulse"></div>
            <span>Disponibili per progetti</span>
          </div>
          <span>•</span>
          <span>Dal 2017</span>
          <span>•</span>
          <span>Base: Milano</span>
        </div>
      </div>

      {/* Section Number - top right */}
      <div 
        className={`absolute top-24 right-6 lg:right-16 fade-in ${isRevealed ? 'revealed' : ''}`}
        style={{ animationDelay: '100ms' }}
      >
        <div className="text-[14px] font-mono text-oliva/40">[01]</div>
      </div>
      
      {/* Main Content Container - Left-aligned */}
      <div className="relative w-full px-6 lg:px-16">
        <div className="max-w-[750px]">
          
          {/* Tagline - uppercase, tracked, grigio */}
          <p 
            className={`text-[13px] font-light text-grigio uppercase mb-6 fade-up ${
              isRevealed ? 'revealed' : ''
            }`}
            style={{ letterSpacing: '0.08em' }}
          >
            {t('tagline')}
          </p>

          {/* Title - 40px, weight 500, line-height 1.2 */}
          <h1 
            className={`text-[40px] font-medium leading-[1.2] text-sabbia mb-8 fade-up ${
              isRevealed ? 'revealed' : ''
            }`}
            style={{ animationDelay: '100ms' }}
          >
            {t('title')}
          </h1>

          {/* Description - weight 300, opacity 70%, max-width 520px */}
          <p 
            className={`text-[16px] font-light leading-[1.7] text-sabbia/70 mb-10 fade-up ${
              isRevealed ? 'revealed' : ''
            }`}
            style={{ animationDelay: '200ms', maxWidth: '520px' }}
          >
            {t('description')}
          </p>

          {/* CTA Button - border sabbia/20, hover oliva */}
          <div 
            className={`fade-up ${isRevealed ? 'revealed' : ''}`}
            style={{ animationDelay: '300ms' }}
          >
            <a
              href="#portfolio"
              className="inline-flex items-center gap-3 px-8 py-3 border border-sabbia/20 text-sabbia text-[14px] tracking-wide hover:border-oliva hover:bg-oliva/5 transition-all duration-300"
            >
              {t('cta')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>

        {/* Terminal Mockup - right side */}
        <div 
          className={`hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 w-[420px] fade-up ${isRevealed ? 'revealed' : ''}`}
          style={{ animationDelay: '400ms' }}
        >
          <div className="bg-grafite border border-grigio/20 p-6 font-mono text-[11px]">
            <div className="mb-3">
              <div className="text-[9px] text-grigio/40 mb-2">Last deployment: 27 Nov 2025, 14:32 CET • Status: ✓ Stable</div>
            </div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-grigio/20">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-grigio/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-grigio/30"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-grigio/30"></div>
              </div>
              <span className="text-grigio/40 text-[9px]">~/project</span>
            </div>
            <div className="space-y-2 text-sabbia/70">
              <div className="text-grigio/60">$ npm run build</div>
              <div className="flex items-center gap-2">
                <span className="text-oliva">✓</span>
                <span>Compiled successfully</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-oliva">✓</span>
                <span>Type checking complete</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-oliva">✓</span>
                <span>All tests passed (127/127)</span>
              </div>
              <div className="text-grigio/40 mt-4">→ Ready for production</div>
              <div className="mt-4 pt-4 border-t border-grigio/20 space-y-1">
                <div className="flex justify-between">
                  <span className="text-grigio/60">Performance</span>
                  <span className="text-oliva">98/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-grigio/60">Accessibility</span>
                  <span className="text-oliva">100/100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metadata footer - bottom left */}
      <div 
        className={`absolute bottom-12 left-6 lg:left-16 fade-in ${isRevealed ? 'revealed' : ''}`}
        style={{ animationDelay: '500ms' }}
      >
        <div className="text-[9px] font-mono text-grigio/30 tracking-wider">
          v3.2.1 • Next.js + TypeScript • Performance 98/100
        </div>
      </div>

      {/* Scroll indicator - bottom right */}
      <div 
        className={`absolute bottom-12 right-6 lg:right-16 fade-in ${isRevealed ? 'revealed' : ''}`}
        style={{ animationDelay: '500ms' }}
      >
        <div className="text-[10px] font-mono text-grigio/40 tracking-wider">001/007</div>
      </div>
    </section>
  );
}
