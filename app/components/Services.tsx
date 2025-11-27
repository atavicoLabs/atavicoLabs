'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

// Service icons as SVG components
const ServiceIcons = {
  design: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  fullstack: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  mobile: (
    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
};

export default function Services() {
  const t = useTranslations('services');

  const services = [
    { icon: ServiceIcons.design, key: 'design', gradient: 'from-blue-500 to-cyan-500' },
    { icon: ServiceIcons.fullstack, key: 'fullstack', gradient: 'from-purple-500 to-pink-500' },
    { icon: ServiceIcons.mobile, key: 'mobile', gradient: 'from-green-500 to-emerald-500' },
  ];

  return (
  <section id="services" className="relative py-32 px-6 sm:px-8 lg:px-16 overflow-hidden">
  {/* Sfondo carbone con pattern tecnico */}
  <div className="absolute inset-0 bg-carbone"></div>
  
  {/* Grid pattern tecnico sottile */}
  <div 
    className="absolute inset-0 opacity-[0.02] pointer-events-none"
    style={{
      backgroundImage: 'linear-gradient(rgba(211, 209, 200, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(211, 209, 200, 0.3) 1px, transparent 1px)',
      backgroundSize: '48px 48px'
    }}
  />

  <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-6 text-sabbia tracking-tight">
            {t('title')}
          </h2>
          <p className="text-base text-grigio max-w-2xl leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Grid servizi - minimal tecnico */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
              <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group relative"
            >
              {/* Card tecnica minimal */}
              <div className="relative bg-grafite p-8 border border-grigio/30 hover:border-oliva/60 transition-all duration-300">
                {/* Icon minimal outline */}
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-grigio group-hover:text-oliva transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-normal mb-4 text-sabbia tracking-tight">
                  {t(`items.${index}.title`)}
                </h3>

                {/* Description */}
                <p className="text-grigio text-sm leading-relaxed">
                  {t(`items.${index}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
