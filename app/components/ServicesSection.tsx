'use client';

import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';
import { useState, useEffect, useRef } from 'react';

export default function ServicesSection() {
  const t = useTranslations('services');
  const { ref, isRevealed } = useReveal();
  
  // per-card reveal
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [revealed, setRevealed] = useState<boolean[]>(() => new Array(4).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            if (!Number.isNaN(idx)) {
              setRevealed((prev) => {
                if (prev[idx]) return prev;
                const next = [...prev];
                next[idx] = true;
                return next;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // roughly center of viewport
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    // cleanup
    return () => observer.disconnect();
  }, []);

  const services = [
    { title: t('items.0.title'), description: t('items.0.description') },
    { title: t('items.1.title'), description: t('items.1.description') },
    { title: t('items.2.title'), description: t('items.2.description') },
    { title: t('items.3.title'), description: t('items.3.description') },
  ];

  return (
    <section 
      ref={ref}
      className="relative w-full py-24 px-6 lg:px-16 bg-carbone"
    >
      {/* Section Number - top right */}
      <div className="absolute top-12 right-6 lg:right-16 text-[14px] font-mono text-oliva/40">[02]</div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header - max-width 750px */}
        <div className="max-w-[750px] mb-16">
          <div className="text-[9px] uppercase tracking-wider text-grigio/60 font-light mb-3">SERVIZI</div>
          <h2 className="text-[32px] font-medium text-sabbia mb-4 leading-[1.2]">
            {t('title')}
          </h2>
          <p className="text-[16px] leading-[1.7] text-sabbia/60 font-light">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid - 4 columns, 1px gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              data-index={i}
              className="relative p-8 bg-grafite border border-grigio/30 min-h-[380px] hover:border-oliva/60 transition-all duration-250 hover:-translate-y-0.5"
              style={{
                opacity: revealed[i] ? 1 : 0,
                transform: revealed[i] ? 'translateY(0)' : 'translateY(6px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease, border-color 0.25s ease, transform 0.25s ease',
                transitionDelay: revealed[i] ? `${i * 0.1}s` : '0s'
              }}
            >
              {/* Index Number - top left */}
              <div className="absolute top-4 left-4 text-[10px] font-mono text-grigio/30">0{i + 1}</div>
              
              {/* Icon placeholder - 24x24px outline */}
              <div className="mb-6 mt-4">
                <svg className="w-6 h-6 stroke-sabbia/40" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                  {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />}
                  {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />}
                  {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />}
                  {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />}
                </svg>
              </div>
              
              <h3 className="text-[16px] font-semibold text-sabbia mb-3 leading-[1.3]">
                {service.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-sabbia/70 font-light mb-4">
                {service.description}
              </p>
              
              {/* Timeline */}
              <div className="text-[11px] text-grigio/60 mb-3">
                <span className="uppercase tracking-wider">Tempistiche: </span>
                <span className="text-sabbia/70">
                  {i === 0 && '2–4 settimane'}
                  {i === 1 && '4–8 settimane'}
                  {i === 2 && '6–12 settimane'}
                  {i === 3 && '3–6 settimane'}
                </span>
              </div>
              
              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-grigio/20">
                {i === 0 && <><span className="text-[10px] text-grigio/60 px-2 py-1 border border-grigio/20">Figma</span><span className="text-[10px] text-grigio/60 px-2 py-1 border border-grigio/20">Prototyping</span><span className="text-[10px] text-grigio/60 px-2 py-1 border border-grigio/20">User Testing</span></>}
                {i === 1 && <><span className="text-[10px] text-grigio/60 px-2 py-1 border border-grigio/20">React</span><span className="text-[10px] text-grigio/60 px-2 py-1 border border-grigio/20">Next.js</span><span className="text-[10px] text-grigio/60 px-2 py-1 border border-grigio/20">Flutter</span></>}
                {i === 2 && <><span className="text-[10px] text-grigio/60 px-2 py-1 border border-grigio/20">Node.js</span><span className="text-[10px] text-grigio/60 px-2 py-1 border border-grigio/20">PostgreSQL</span><span className="text-[10px] text-grigio/60 px-2 py-1 border border-grigio/20">API Design</span></>}
                {i === 3 && <><span className="text-[10px] text-grigio/60 px-2 py-1 border border-grigio/20">OpenAI</span><span className="text-[10px] text-grigio/60 px-2 py-1 border border-grigio/20">Automation</span><span className="text-[10px] text-grigio/60 px-2 py-1 border border-grigio/20">Integration</span></>}
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow Diagram */}
        <div className="mt-20 pt-16 border-t border-grigio/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-[9px] uppercase tracking-wider text-grigio/60 font-light mb-6">FLUSSO DI LAVORO</div>
            <div className="flex items-center justify-between">
              {['Design', 'Build', 'Test', 'Deploy'].map((step, i) => (
                <div key={i} className="flex items-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full border border-grigio/30 flex items-center justify-center mb-3 mx-auto">
                      <span className="text-[10px] font-mono text-grigio/60">0{i + 1}</span>
                    </div>
                    <div className="text-[12px] text-sabbia mb-1">{step}</div>
                    <div className="text-[10px] text-grigio/60">
                      {i === 0 && '2–3w'}
                      {i === 1 && '4–8w'}
                      {i === 2 && '1w'}
                      {i === 3 && '1d'}
                    </div>
                  </div>
                  {i < 3 && (
                    <svg className="w-8 h-4 mx-4 stroke-grigio/30" fill="none" viewBox="0 0 32 16" strokeWidth={1}>
                      <path d="M0 8h28M28 8l-4-4M28 8l-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
