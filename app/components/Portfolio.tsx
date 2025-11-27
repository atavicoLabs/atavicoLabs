'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Portfolio() {
  const t = useTranslations('portfolio');
  const locale = useLocale();
  const { ref, isRevealed } = useReveal();

  // Project slugs for routing
  const projectSlugs = ['lytera', 'crispin', 'vectis'];

  return (
    <section 
      id="portfolio" 
      ref={ref}
      className="relative py-24 px-6 lg:px-16 bg-carbone"
    >
      {/* Section Number - top right */}
      <div className="absolute top-12 right-6 lg:right-16 text-[14px] font-mono text-oliva/40">[03]</div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header - max-width 750px */}
        <div className="max-w-[750px] mb-16">
          <div className="text-[9px] uppercase tracking-wider text-grigio/60 font-light mb-3">PORTFOLIO</div>
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

        {/* Projects - vertical stack with 1px gaps */}
        <div className="space-y-1">
          {[0, 1, 2].map((index) => {
            const isFeatured = index === 0;
            return (
            <Link 
              key={index}
              href={`/${locale}/projects/${projectSlugs[index]}`}
              className={`group block fade-up ${isRevealed ? 'revealed' : ''}`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className={`flex items-start gap-8 border border-grigio/20 bg-grafite/30 group-hover:border-oliva/40 transition-all duration-300 group-hover:-translate-y-1 ${isFeatured ? 'p-12 md:p-16' : 'p-8'}`}>
                {/* Mockup - Wireframe Style */}
                <div className={`${isFeatured ? 'w-[640px] h-[480px]' : 'w-[320px] h-[240px]'} bg-carbone border border-grigio/20 flex-shrink-0 hidden lg:flex items-center justify-center group-hover:border-oliva/30 transition-colors duration-300 relative overflow-hidden`}>
                  {/* Wireframe Grid */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 240" preserveAspectRatio="none">
                    <defs>
                      <pattern id={`grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(138, 140, 142, 0.15)" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="320" height="240" fill={`url(#grid-${index})`} />
                    {/* Wireframe elements */}
                    <rect x="20" y="20" width="280" height="40" fill="none" stroke="rgba(211, 209, 200, 0.2)" strokeWidth="1" />
                    <rect x="20" y="80" width="180" height="120" fill="none" stroke="rgba(211, 209, 200, 0.2)" strokeWidth="1" />
                    <rect x="220" y="80" width="80" height="120" fill="none" stroke="rgba(211, 209, 200, 0.2)" strokeWidth="1" />
                    <line x1="20" y1="220" x2="300" y2="220" stroke="rgba(78, 88, 78, 0.3)" strokeWidth="2" />
                  </svg>
                  <div className="relative z-10 text-center space-y-2">
                    <div className="text-[10px] text-grigio/40 uppercase tracking-wider">Interface Preview</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Title */}
                  <h3 className="text-[24px] font-medium text-sabbia leading-[1.3]">
                    {t(`items.${index}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] leading-[1.7] text-sabbia/70 font-light">
                    {t(`items.${index}.description`)}
                  </p>

                  {/* Metrics Box */}
                  <div className="border border-grigio/20 p-4 space-y-2">
                    <div className="text-[9px] uppercase tracking-wider text-grigio/60 font-light mb-3">METRICHE PROGETTO</div>
                    <div className={`grid ${isFeatured ? 'grid-cols-3' : 'grid-cols-2'} gap-4 text-[11px]`}>
                      <div>
                        <div className="text-grigio/60">Timeline</div>
                        <div className="text-sabbia font-medium">
                          {index === 0 && '8 settimane'}
                          {index === 1 && '12 settimane'}
                          {index === 2 && '10 settimane'}
                        </div>
                      </div>
                      <div>
                        <div className="text-grigio/60">Status</div>
                        <div className="text-oliva flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-oliva"></span>
                          In produzione
                        </div>
                      </div>
                      <div>
                        <div className="text-grigio/60">Team</div>
                        <div className="text-sabbia">
                          {index === 0 && '3 dev + 1 designer'}
                          {index === 1 && '4 dev + 1 analyst'}
                          {index === 2 && '2 dev + 1 designer'}
                        </div>
                      </div>
                      {isFeatured && (
                        <>
                          <div>
                            <div className="text-grigio/60">Utenti</div>
                            <div className="text-sabbia font-medium">200+ attivi</div>
                          </div>
                          <div>
                            <div className="text-grigio/60">Performance</div>
                            <div className="text-oliva">98/100</div>
                          </div>
                          <div>
                            <div className="text-grigio/60">Uptime</div>
                            <div className="text-oliva">99.9%</div>
                          </div>
                        </>
                      )}
                      {!isFeatured && (
                        <div>
                          <div className="text-grigio/60">Utenti</div>
                          <div className="text-sabbia">
                            {index === 1 && '15 facilities'}
                            {index === 2 && '1,200+ attivi'}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Mini Timeline */}
                    {isFeatured && (
                      <div className="mt-4 pt-4 border-t border-grigio/20">
                        <div className="flex items-center justify-between text-[9px] text-grigio/60 mb-2">
                          <span>TIMELINE</span>
                        </div>
                        <div className="relative h-1 bg-grigio/20">
                          <div className="absolute left-0 top-0 h-full bg-oliva" style={{ width: '100%' }}></div>
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-oliva"></div>
                          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-oliva"></div>
                          <div className="absolute left-2/4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-oliva"></div>
                          <div className="absolute left-3/4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-oliva"></div>
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-oliva"></div>
                        </div>
                        <div className="flex items-center justify-between text-[9px] text-grigio/50 mt-2">
                          <span>Kickoff</span>
                          <span>Design</span>
                          <span>Dev</span>
                          <span>Test</span>
                          <span>Launch</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {t.raw(`items.${index}.tags`).map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[12px] text-grigio border border-grigio/30 tracking-wide hover:border-oliva transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Case Study Link */}
                  <div className="flex items-center gap-2 text-[12px] text-oliva pt-2">
                    <span>Leggi caso studio</span>
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </Link>
          );
          })}
        </div>
      </div>
    </section>
  );
}
