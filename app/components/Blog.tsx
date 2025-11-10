'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Blog() {
  const t = useTranslations('blog');

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-7xl mx-auto">
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
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Category badge */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold">
                    {t(`items.${index}.category`)}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {t(`items.${index}.readTime`)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {t(`items.${index}.title`)}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {t(`items.${index}.description`)}
                </p>

                {/* Read more link */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <span className="text-sm text-gray-500">
                    {new Date(t(`items.${index}.date`)).toLocaleDateString('it-IT', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                  >
                    {t('cta')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
