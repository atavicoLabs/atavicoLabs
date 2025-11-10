'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'MVP Web App',
    description: 'Launch your startup idea with a scalable web application built with Next.js, React, and modern backend technologies.',
    features: ['Full-stack development', 'Responsive design', 'Database integration', 'Authentication & security'],
    price: 'Starting from €5,000',
  },
  {
    title: 'Mobile App (Flutter)',
    description: 'Cross-platform mobile applications for iOS and Android with a single codebase, delivering native performance.',
    features: ['iOS & Android', 'Native performance', 'Push notifications', 'Offline support'],
    price: 'Starting from €6,000',
    featured: true,
  },
  {
    title: 'Full Product',
    description: 'Complete digital product with web app, mobile app, and robust backend infrastructure for maximum reach.',
    features: ['Web + Mobile apps', 'Unified backend', 'Admin dashboard', 'API development'],
    price: 'Starting from €10,000',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Flexible solutions tailored to your needs, from MVP to full-scale products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border ${
                service.featured
                  ? 'border-blue-500 shadow-lg shadow-blue-500/20 md:scale-105'
                  : 'border-slate-700'
              } hover:border-blue-500 transition-all duration-300`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-slate-700">
                <p className="text-2xl font-bold text-blue-400">{service.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
