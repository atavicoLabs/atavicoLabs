'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ProjectLayoutProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  locale: string;
}

export default function ProjectLayout({
  title,
  subtitle,
  heroImage,
  overview,
  challenge,
  solution,
  results,
  techStack,
  locale,
}: ProjectLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {locale === 'it' ? 'Torna alla Home' : 'Back to Home'}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-300">{subtitle}</p>
          </motion.div>

          {heroImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-16 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl"
            >
              <img
                src={heroImage}
                alt={title}
                className="w-full object-cover aspect-video"
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Body Sections */}
      <main className="max-w-4xl mx-auto px-6 space-y-24 py-24">
        {/* Overview */}
        <Section title={locale === 'it' ? 'Panoramica' : 'Overview'} text={overview} />

        {/* Challenge */}
        <Section
          title={locale === 'it' ? '🎯 Sfida' : '🎯 Challenge'}
          text={challenge}
          accent="from-blue-400 to-purple-400"
        />

        {/* Solution */}
        <Section
          title={locale === 'it' ? '💡 Soluzione' : '💡 Solution'}
          text={solution}
          accent="from-green-400 to-blue-400"
        />

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tight">
            <GradientText accent="from-purple-400 to-pink-400">
              {locale === 'it' ? '📊 Risultati' : '📊 Results'}
            </GradientText>
          </h2>
          <ul className="space-y-4">
            {results.map((r, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                <p className="text-lg text-gray-300">{r}</p>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tight">
            <GradientText accent="from-blue-400 to-cyan-400">
              {locale === 'it' ? '⚙️ Tecnologie' : '⚙️ Tech Stack'}
            </GradientText>
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((t, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm font-medium text-slate-200 hover:border-blue-500 hover:bg-slate-700 transition-all"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.section>
      </main>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600/10 to-purple-600/10 border-t border-slate-800">
        <div className="max-w-3xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            {locale === 'it'
              ? 'Creiamo Qualcosa di Straordinario'
              : "Let's Build Something Great"}
          </motion.h2>
          <p className="text-lg text-gray-300 mb-8">
            {locale === 'it'
              ? "Hai un'idea? Trasformiamola in un prodotto digitale di successo."
              : "Have an idea? Let's turn it into a successful digital product."}
          </p>
          <Link
            href={`/${locale}#cta`}
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {locale === 'it' ? 'Contattaci' : 'Get in Touch'}
          </Link>
        </div>
      </section>
    </div>
  );
}

/* --- Subcomponents --- */
function Section({
  title,
  text,
  accent = 'from-blue-400 to-purple-400',
}: {
  title: string;
  text: string;
  accent?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold tracking-tight">
        <GradientText accent={accent}>{title}</GradientText>
      </h2>
      <p className="text-lg leading-relaxed text-gray-300">{text}</p>
    </motion.section>
  );
}

function GradientText({
  children,
  accent = 'from-blue-500 to-purple-500',
}: {
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <span
      className={`bg-gradient-to-r ${accent} bg-clip-text text-transparent`}
    >
      {children}
    </span>
  );
}
