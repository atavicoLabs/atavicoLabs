'use client';

import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const t = useTranslations('about');
  const { ref, isRevealed } = useReveal();

  const principles = [
    { number: '01', title: 'CURA', description: 'Ogni dettaglio conta: architettura, interfacce, micro-interazioni, comunicazione. Nessun compromesso sulla qualità.' },
    { number: '02', title: 'CHIAREZZA', description: 'Processi trasparenti, prototipi testabili, zero jargon inutile. Quello che vedi è quello che ottieni.' },
    { number: '03', title: 'AFFIDABILITÀ', description: 'Sviluppo stabile e scalabile, progettato per durare oltre il primo rilascio. Code review, test, monitoraggio.' }
  ];

  const metrics = [
    { label: 'Progetti rilasciati', value: '12' },
    { label: 'Client retention', value: '98%' },
    { label: 'Rating medio', value: '4.9/5' },
    { label: 'Exp. media team', value: '8 anni' }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="relative py-40 px-6 lg:px-16 bg-carbone w-full overflow-hidden border-t border-grigio/20"
    >
      {/* Section Number */}
      <div className="absolute top-12 right-6 lg:right-16 text-[11px] font-mono text-oliva/30">[02]</div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Left Column */}
          <div>
            <div className="text-[11px] uppercase tracking-[0.15em] text-grigio/60 font-light mb-4">About</div>
            <h2 className={`text-[32px] font-medium text-sabbia mb-6 leading-[1.2] fade-up ${isRevealed ? 'revealed' : ''}`}>
              {t('title')}
            </h2>
            <p className={`text-[17px] leading-[1.65] text-sabbia/70 font-light mb-12 max-w-[520px] fade-up ${isRevealed ? 'revealed' : ''}`} style={{ animationDelay: '100ms' }}>
              {t('subtitle')}
            </p>

            {/* Principles */}
            <div className="space-y-10 mt-8">
              {principles.map((principle, i) => (
                <div 
                  key={i}
                  className={`fade-up ${isRevealed ? 'revealed' : ''}`}
                  style={{ animationDelay: `${(i + 2) * 100}ms` }}
                >
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-[11px] font-mono text-oliva/50">{principle.number}</span>
                    <h3 className="text-[18px] font-medium text-sabbia uppercase tracking-wide">{principle.title}</h3>
                  </div>
                  <p className="text-[15px] leading-[1.7] text-sabbia/60 font-light pl-10">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Team Photo Placeholder */}
            <div className="aspect-[4/3] bg-carbone border-2 border-grigio/30 flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-20 h-20 mx-auto border-2 border-grigio/40 flex items-center justify-center">
                  <svg className="w-10 h-10 stroke-grigio/40" fill="none" viewBox="0 0 24 24" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div className="text-[10px] text-grigio/40 uppercase tracking-wider">Team Photo</div>
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="border border-grigio/20 p-6 bg-grafite/30">
              <div className="text-[11px] uppercase tracking-[0.15em] text-grigio/60 font-light mb-6">Metrics</div>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-[28px] font-medium text-oliva">{metric.value}</div>
                    <div className="text-[11px] text-grigio/70">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div className="border border-grigio/20 p-6">
              <div className="text-[11px] uppercase tracking-[0.15em] text-grigio/60 font-light mb-4">Expertise</div>
              <div className="text-[12px] text-sabbia/70 leading-relaxed">
                Design · Full-Stack Engineering · Product Strategy · AI/ML Integration
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
