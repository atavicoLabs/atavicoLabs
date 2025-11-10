'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
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

        <div className="max-w-4xl mx-auto">
          {/* Testimonial cards */}
          <div className="relative min-h-[400px] md:min-h-[300px]">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.9,
                  display: activeIndex === index ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-slate-700">
                  {/* Quote icon */}
                  <svg
                    className="w-12 h-12 text-blue-500/30 mb-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Quote text */}
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8 italic">
                    &ldquo;{t(`items.${index}.quote`)}&rdquo;
                  </p>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                      {t(`items.${index}.author`).charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-lg">{t(`items.${index}.author`)}</p>
                      <p className="text-gray-400">
                        {t(`items.${index}.role`)} • {t(`items.${index}.company`)}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-blue-500 w-8'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? 2 : prev - 1))}
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full border border-slate-700 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1))}
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full border border-slate-700 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
