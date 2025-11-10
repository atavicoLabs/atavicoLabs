'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Process() {
  const t = useTranslations('process');

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg">
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

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500"></div>

          <div className="space-y-12 md:space-y-24">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className="flex-1 w-full">
                  <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-6xl font-bold text-blue-500/20">
                        {t(`steps.${index}.number`)}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">
                          {t(`steps.${index}.title`)}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-4">
                          {t(`steps.${index}.duration`)}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {t(`steps.${index}.description`)}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center flex-shrink-0 w-16 h-16 rounded-full bg-blue-500 border-4 border-slate-900 shadow-lg shadow-blue-500/50 z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
