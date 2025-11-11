'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const images = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
  'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
];

const projectSlugs = ['syncora', 'nuvia', 'loopin'];

export default function Portfolio() {
  const t = useTranslations('portfolio');
  const locale = useLocale();

  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50 overflow-hidden">
      {/* Refined fluid gradient animation - deeper palette with HSL color system */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Shape 1 - Dark blue base: hsl(226, 40%, 20%) */}
        <motion.div
          className="absolute top-0 left-0 w-[650px] h-[650px] rounded-full opacity-12 blur-[95px]"
          style={{
            background: 'radial-gradient(circle at 40% 40%, hsl(226, 40%, 20%), transparent 65%)',
            willChange: 'transform',
          }}
          animate={{
            x: [0, 45, 0],
            y: [0, 35, 0],
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Shape 2 - Deep purple: hsl(258, 40%, 30%) */}
        <motion.div
          className="absolute top-1/3 right-0 w-[700px] h-[700px] rounded-full opacity-14 blur-[100px]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, hsl(258, 40%, 30%), transparent 65%)',
            willChange: 'transform',
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 42,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Shape 3 - Muted pink: hsl(330, 45%, 40%) */}
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-[90px]"
          style={{
            background: 'radial-gradient(circle at 45% 55%, hsl(330, 45%, 40%), transparent 65%)',
            willChange: 'transform',
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut"
              }}
            >
              <Link 
                href={`/${locale}/projects/${projectSlugs[index]}`}
                className="group block relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={images[index]}
                    alt={t(`items.${index}.title`)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* View Case Study overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2">
                      {locale === 'it' ? 'Vedi Case Study' : 'View Case Study'}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{t(`items.${index}.title`)}</h3>
                  <p className="text-gray-400 mb-4">{t(`items.${index}.description`)}</p>

                  <div className="flex flex-wrap gap-2">
                    {t.raw(`items.${index}.tags`).map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
