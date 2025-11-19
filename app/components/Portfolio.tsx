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
      className="relative py-24 md:py-32 px-6 lg:px-8 bg-warm-black"
    >
      <div className="relative max-w-6xl mx-auto">
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

        {/* Projects - Large fade-up with hover tilt & lift */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[0, 1, 2].map((index) => (
            <Link 
              key={index}
              href={`/${locale}/projects/${projectSlugs[index]}`}
              className={`group block hover-tilt hover-lift fade-up stagger-child ${isRevealed ? 'revealed' : ''}`}
              style={{ '--stagger-delay': '100ms' } as React.CSSProperties}
            >
              <div className="space-y-4">
                {/* Title - larger, product-focused */}
                <h3 className="text-2xl md:text-3xl font-semibold text-warm-text leading-tight group-hover:text-warm-accent transition-colors duration-300">
                  {t(`items.${index}.title`)}
                </h3>

                {/* Description - shorter in preview */}
                <p className="text-warm-muted leading-relaxed">
                  {t(`items.${index}.description`)}
                </p>

                {/* Read case study link - teal accent */}
                <div className="flex items-center gap-2 text-warm-accent text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  <span>Read case study</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </div>

                {/* Tech Tags - minimal */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {t.raw(`items.${index}.tags`).map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs text-warm-muted border border-warm-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
