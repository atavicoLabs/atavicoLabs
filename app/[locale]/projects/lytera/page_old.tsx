'use client';

import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { ArrowLeft, Check, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function LyteraProject() {
  const t = useTranslations('projects.lytera');
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-[#0D1524] relative overflow-hidden">
      {/* Micro Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14,209,178,0.008) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14,209,178,0.008) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Back Navigation */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#0ED1B2] transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wide">{t('back')}</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.45, 0, 0.55, 1] }}
          >
            {/* Signature Geometry - cold teal line */}
            <div className="h-px w-12 bg-[#0ED1B2]/25 mb-8" />

            <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-6">
              Lytera
            </h1>
            
            <p className="text-xl md:text-2xl text-[#CBD5E1] max-w-3xl">
              {t('subtitle')}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-6 mt-12 text-sm">
              <div>
                <span className="text-[#64748B] block mb-1">{t('meta.client')}</span>
                <span className="text-white font-medium">{t('meta.clientName')}</span>
              </div>
              <div>
                <span className="text-[#64748B] block mb-1">{t('meta.timeline')}</span>
                <span className="text-white font-medium">{t('meta.timelineValue')}</span>
              </div>
              <div>
                <span className="text-[#64748B] block mb-1">{t('meta.platform')}</span>
                <span className="text-white font-medium">{t('meta.platformValue')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.45, 0, 0.55, 1] }}
            className="mb-16"
          >
            <div className="h-px w-12 bg-[#0ED1B2]/25 mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              {t('overview.title')}
            </h2>
            <p className="text-lg text-[#CBD5E1] leading-relaxed max-w-4xl">
              {t('overview.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative z-10 py-24 bg-[#111827]/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.45, 0, 0.55, 1] }}
          >
            <div className="h-px w-12 bg-[#0ED1B2]/25 mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">
              {t('problem.title')}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0ED1B2]/10 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-[#0ED1B2]" />
                  </div>
                  <div>
                    <p className="text-[#CBD5E1]">{t(`problem.items.item${i}`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.45, 0, 0.55, 1] }}
          >
            <div className="h-px w-12 bg-[#0ED1B2]/25 mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">
              {t('solution.title')}
            </h2>

            <div className="space-y-8 max-w-4xl">
              <p className="text-lg text-[#CBD5E1] leading-relaxed">
                {t('solution.description')}
              </p>

              <div className="grid md:grid-cols-3 gap-6 pt-8">
                {['feature1', 'feature2', 'feature3'].map((feature) => (
                  <div key={feature} className="bg-[#1E293B] border border-[#334155] p-6 hover:border-[#0ED1B2]/50 transition-colors duration-300">
                    <h3 className="text-white font-medium mb-2">{t(`solution.features.${feature}.title`)}</h3>
                    <p className="text-sm text-[#94A3B8]">{t(`solution.features.${feature}.description`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative z-10 py-24 bg-[#111827]/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.45, 0, 0.55, 1] }}
          >
            <div className="h-px w-12 bg-[#0ED1B2]/25 mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">
              {t('results.title')}
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {['metric1', 'metric2', 'metric3', 'metric4'].map((metric) => (
                <div key={metric} className="bg-[#1E293B] border border-[#334155] p-8 hover:border-[#0ED1B2]/50 transition-colors duration-300">
                  <div className="text-4xl font-semibold text-[#0ED1B2] mb-2">
                    {t(`results.metrics.${metric}.value`)}
                  </div>
                  <p className="text-sm text-[#94A3B8]">{t(`results.metrics.${metric}.label`)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.45, 0, 0.55, 1] }}
          >
            <div className="h-px w-12 bg-[#0ED1B2]/25 mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">
              {t('tech.title')}
            </h2>

            <div className="flex flex-wrap gap-3">
              {t('tech.stack').split(', ').map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-[#1E293B] border border-[#334155] text-[#CBD5E1] text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="relative z-10 py-24 bg-[#111827]/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.45, 0, 0.55, 1] }}
          >
            <div className="h-px w-12 bg-[#0ED1B2]/25 mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">
              {t('gallery.title')}
            </h2>

            <div className="grid gap-6">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="aspect-video bg-[#1E293B] border border-[#334155] flex items-center justify-center"
                >
                  <span className="text-[#64748B] text-sm">{t('gallery.placeholder')} {i}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: [0.45, 0, 0.55, 1] }}
            className="text-center"
          >
            <div className="h-px w-12 bg-[#0ED1B2]/25 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-[#CBD5E1] mb-12 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            
            <Link 
              href="/#cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E293B] border border-[#334155] text-white hover:border-[#0ED1B2]/50 transition-all duration-300"
            >
              <span>{t('cta.button')}</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Bottom Accent Line */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#0ED1B2]/30 to-transparent" />
        </div>
      </div>
    </main>
  );
}
