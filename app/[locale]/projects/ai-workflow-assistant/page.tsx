'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function AIWorkflowAssistantPage() {
  const t = useTranslations('projects.aiWorkflowAssistant');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link 
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-sm text-grigio/60 hover:text-accent-primary transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('back')}
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {['LLM API', 'Vector DB', 'Node.js', 'React', 'Slack API', 'Trello API'].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs font-mono text-grigio/70 border border-grigio/20 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-display-md font-light text-primary mb-6 leading-[1.1]">
            {t('title')}
          </h1>

          <p className="text-xl text-secondary leading-relaxed max-w-3xl">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-6 bg-white/[0.03] border border-grigio/10 rounded-lg">
              <div className="text-sm text-grigio/50 mb-2 font-mono">{t('metrics.timeline.label')}</div>
              <div className="text-2xl text-primary font-light">{t('metrics.timeline.value')}</div>
            </div>
            <div className="p-6 bg-white/[0.03] border border-grigio/10 rounded-lg">
              <div className="text-sm text-grigio/50 mb-2 font-mono">{t('metrics.team.label')}</div>
              <div className="text-2xl text-primary font-light">{t('metrics.team.value')}</div>
            </div>
            <div className="p-6 bg-white/[0.03] border border-grigio/10 rounded-lg">
              <div className="text-sm text-grigio/50 mb-2 font-mono">{t('metrics.users.label')}</div>
              <div className="text-2xl text-primary font-light">{t('metrics.users.value')}</div>
            </div>
            <div className="p-6 bg-white/[0.03] border border-grigio/10 rounded-lg">
              <div className="text-sm text-grigio/50 mb-2 font-mono">{t('metrics.performance.label')}</div>
              <div className="text-2xl text-primary font-light">{t('metrics.performance.value')}</div>
            </div>
            <div className="p-6 bg-white/[0.03] border border-grigio/10 rounded-lg">
              <div className="text-sm text-grigio/50 mb-2 font-mono">{t('metrics.uptime.label')}</div>
              <div className="text-2xl text-primary font-light">{t('metrics.uptime.value')}</div>
            </div>
            <div className="p-6 bg-accent-primary/5 border border-accent-primary/20 rounded-lg">
              <div className="text-sm text-accent-primary/70 mb-2 font-mono">{t('metrics.status.label')}</div>
              <div className="text-2xl text-accent-primary font-light">{t('metrics.status.value')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-heading-lg font-light text-primary mb-8">{t('challenge.title')}</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-secondary leading-relaxed mb-4">
              {t('challenge.description')}
            </p>
            <ul className="space-y-3">
              {t.raw('challenge.points').map((point: string, index: number) => (
                <li key={index} className="text-secondary flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-heading-lg font-light text-primary mb-8">{t('solution.title')}</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-secondary leading-relaxed mb-8">
              {t('solution.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {t.raw('solution.features').map((feature: { title: string; description: string }, index: number) => (
                <div key={index} className="p-6 bg-white/[0.03] border border-grigio/10 rounded-lg">
                  <h3 className="text-lg font-light text-primary mb-3">{feature.title}</h3>
                  <p className="text-secondary leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-heading-lg font-light text-primary mb-8">{t('results.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {t.raw('results.metrics').map((metric: { label: string; value: string }, index: number) => (
              <div key={index} className="p-8 bg-accent-primary/5 border border-accent-primary/20 rounded-lg">
                <div className="text-4xl font-light text-accent-primary mb-2">{metric.value}</div>
                <div className="text-secondary">{metric.label}</div>
              </div>
            ))}
          </div>
          <p className="text-lg text-secondary leading-relaxed">
            {t('results.summary')}
          </p>
        </div>
      </section>
    </div>
  );
}
