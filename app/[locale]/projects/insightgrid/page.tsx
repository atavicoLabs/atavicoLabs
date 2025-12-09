'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function InsightGridProject() {
  const t = useTranslations('projects.insightgrid');
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-warm-black">
      {/* Back Navigation */}
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-warm-muted hover:text-warm-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t('back')}</span>
          </Link>
        </div>
      </div>

      {/* Hero Section - Bending Spoons style: large confident typography */}
      <section ref={heroRef} className="relative z-10 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.45, 0, 0.55, 1] }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-warm-text tracking-tight leading-[1.1] mb-6">
              InsightGrid
            </h1>
            
            <p className="text-lg md:text-xl text-warm-secondary max-w-2xl leading-relaxed">
              {t('subtitle')}
            </p>

            {/* Project Meta - cleaner */}
            <div className="flex flex-wrap gap-8 mt-12 text-sm">
              <div>
                <span className="text-warm-muted/50 block mb-1">{t('meta.client')}</span>
                <span className="text-warm-text font-medium">{t('meta.clientName')}</span>
              </div>
              <div>
                <span className="text-warm-muted/50 block mb-1">{t('meta.timeline')}</span>
                <span className="text-warm-text font-medium">{t('meta.timelineValue')}</span>
              </div>
              <div>
                <span className="text-warm-muted/50 block mb-1">{t('meta.platform')}</span>
                <span className="text-warm-text font-medium">{t('meta.platformValue')}</span>
              </div>
              <div>
                <span className="text-warm-muted/50 block mb-1">{t('meta.team')}</span>
                <span className="text-warm-text font-medium">{t('meta.teamValue')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <ProjectSection title={t('overview.title')}>
        <p className="text-warm-muted leading-relaxed text-lg">
          {t('overview.description')}
        </p>
      </ProjectSection>

      {/* Problem Section */}
      <ProjectSection title={t('problem.title')} bgColor="bg-warm-darker">
        <div className="grid md:grid-cols-2 gap-8">
          {['item1', 'item2', 'item3', 'item4'].map((item, index) => (
            <div key={index} className="p-8 bg-warm-card border border-warm-border">
              <h3 className="text-lg font-semibold text-warm-text mb-3">
                {t(`problem.items.${item}.title`)}
              </h3>
              <p className="text-warm-muted leading-relaxed">
                {t(`problem.items.${item}.description`)}
              </p>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Solution Section */}
      <ProjectSection title={t('solution.title')}>
        <p className="text-warm-muted leading-relaxed text-lg mb-12">
          {t('solution.description')}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {['feature1', 'feature2', 'feature3'].map((feature, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-warm-text">
                {t(`solution.features.${feature}.title`)}
              </h3>
              <p className="text-warm-muted leading-relaxed">
                {t(`solution.features.${feature}.description`)}
              </p>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Results Section */}
      <ProjectSection title={t('results.title')} bgColor="bg-warm-darker">
        <div className="grid md:grid-cols-4 gap-8">
          {['metric1', 'metric2', 'metric3', 'metric4'].map((metric, index) => (
            <div key={index} className="p-8 border border-warm-border">
              <div className="text-4xl font-semibold text-warm-accent mb-2">
                {t(`results.metrics.${metric}.value`)}
              </div>
              <div className="text-warm-muted">
                {t(`results.metrics.${metric}.label`)}
              </div>
            </div>
          ))}
        </div>
      </ProjectSection>

      {/* Tech Stack Section */}
      <ProjectSection title={t('tech.title')}>
        <div className="p-10 bg-warm-card border border-warm-border">
          <p className="text-warm-muted text-lg leading-relaxed">
            {t('tech.stack')}
          </p>
        </div>
      </ProjectSection>

      {/* Gallery Section - dashboard mockups */}
      <ProjectSection title={t('gallery.title')} bgColor="bg-warm-darker">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-video bg-warm-card border border-warm-border flex items-center justify-center">
            <p className="text-warm-muted/50 text-sm">{t('gallery.placeholder')}</p>
          </div>
          <div className="aspect-video bg-warm-card border border-warm-border flex items-center justify-center">
            <p className="text-warm-muted/50 text-sm">{t('gallery.placeholder')}</p>
          </div>
          <div className="aspect-video bg-warm-card border border-warm-border flex items-center justify-center">
            <p className="text-warm-muted/50 text-sm">{t('gallery.placeholder')}</p>
          </div>
          <div className="aspect-video bg-warm-card border border-warm-border flex items-center justify-center">
            <p className="text-warm-muted/50 text-sm">{t('gallery.placeholder')}</p>
          </div>
        </div>
      </ProjectSection>

      {/* CTA Section - minimal editorial */}
      <ProjectSection title={t('cta.title')}>
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-warm-muted text-lg mb-8 leading-relaxed">
            {t('cta.description')}
          </p>
          
          <a
            href="mailto:contact@atavicolabs.com"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-warm-accent text-warm-accent font-medium rounded-lg hover:bg-warm-accent/90 hover:backdrop-blur-xl hover:text-warm-black hover:shadow-[0_0_28px_-6px_rgba(245,166,35,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            {t('cta.button')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </ProjectSection>
    </main>
  );
}

// Reusable Project Section Component - Bending Spoons style
function ProjectSection({ 
  title, 
  children, 
  bgColor = "bg-warm-black" 
}: { 
  title: string; 
  children: React.ReactNode; 
  bgColor?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={`relative py-24 md:py-32 px-6 ${bgColor}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.45, 0, 0.55, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-warm-text tracking-tight leading-tight mb-12">
            {title}
          </h2>

          {children}
        </motion.div>
      </div>
    </section>
  );
}
