'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock, Users, TrendingUp, Activity, Zap, CheckCircle2 } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';

interface Metric {
  label: string;
  value: string;
  icon?: 'clock' | 'users' | 'trending' | 'activity' | 'zap';
  highlight?: boolean;
}

interface Feature {
  title: string;
  description: string;
}

interface Result {
  value: string;
  label: string;
  improvement?: boolean;
}

interface TechItem {
  category: string;
  items: string[];
}

interface TimelineStep {
  phase: string;
  duration: string;
}

interface Learnings {
  title: string;
  items: string[];
}

interface CaseStudyLayoutProps {
  // Hero
  title: string;
  subtitle: string;
  tags: string[];
  
  // Metrics Dashboard
  metrics: Metric[];
  
  // Outcome
  outcomeTitle: string;
  outcomeDescription: string;
  
  // Challenge
  challengeTitle: string;
  challengeContext: string;
  challengePoints: string[];
  
  // Solution
  solutionTitle: string;
  solutionDescription: string;
  features: Feature[];
  
  // Architecture (opzionale)
  architectureTitle?: string;
  architectureDescription?: string;
  techStack?: TechItem[];
  
  // Results
  resultsTitle: string;
  results: Result[];
  resultsSummary: string;
  
  // Timeline (opzionale)
  timeline?: TimelineStep[];
  
  // Team Contribution (opzionale)
  teamTitle?: string;
  teamDescription?: string;
  
  // Learnings
  learnings?: Learnings;
  
  // Next Case Study
  nextProject?: {
    title: string;
    slug: string;
  };
  
  locale: string;
}

export default function CaseStudyLayout({
  title,
  subtitle,
  tags,
  metrics,
  outcomeTitle,
  outcomeDescription,
  challengeTitle,
  challengeContext,
  challengePoints,
  solutionTitle,
  solutionDescription,
  features,
  architectureTitle,
  architectureDescription,
  techStack,
  resultsTitle,
  results,
  resultsSummary,
  timeline,
  teamTitle,
  teamDescription,
  learnings,
  nextProject,
  locale,
}: CaseStudyLayoutProps) {
  const { ref: heroRef, isRevealed: heroRevealed } = useReveal();
  const { ref: outcomeRef, isRevealed: outcomeRevealed } = useReveal();
  const { ref: challengeRef, isRevealed: challengeRevealed } = useReveal();
  const { ref: solutionRef, isRevealed: solutionRevealed } = useReveal();
  const { ref: resultsRef, isRevealed: resultsRevealed } = useReveal();

  const getMetricIcon = (icon?: string) => {
    const iconProps = { className: "w-4 h-4", strokeWidth: 1.5 };
    switch (icon) {
      case 'clock': return <Clock {...iconProps} />;
      case 'users': return <Users {...iconProps} />;
      case 'trending': return <TrendingUp {...iconProps} />;
      case 'activity': return <Activity {...iconProps} />;
      case 'zap': return <Zap {...iconProps} />;
      default: return <Activity {...iconProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-carbone">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-24 px-6 lg:px-16 border-b border-grigio/10">
        <div className="max-w-5xl mx-auto">
          {/* Back Link */}
          <Link 
            href={`/${locale}#portfolio`}
            className={`inline-flex items-center gap-2 text-[13px] text-grigio/60 hover:text-oliva transition-colors mb-12 fade-up ${heroRevealed ? 'revealed' : ''}`}
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            {locale === 'it' ? 'Portfolio' : 'Back to Portfolio'}
          </Link>

          {/* Tags */}
          <div className={`flex flex-wrap gap-2 mb-8 fade-up ${heroRevealed ? 'revealed' : ''}`} style={{ animationDelay: '100ms' }}>
            {tags.map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-1.5 text-[11px] font-mono text-grigio/70 border border-grigio/20 rounded-sm tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className={`text-[40px] lg:text-[56px] font-medium text-sabbia mb-6 leading-[1.1] tracking-[-0.02em] fade-up ${heroRevealed ? 'revealed' : ''}`} style={{ animationDelay: '200ms' }}>
            {title}
          </h1>

          {/* Subtitle */}
          <p className={`text-[19px] leading-[1.65] text-sabbia/70 font-light max-w-3xl fade-up ${heroRevealed ? 'revealed' : ''}`} style={{ animationDelay: '300ms' }}>
            {subtitle}
          </p>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="py-16 px-6 lg:px-16 border-b border-grigio/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {metrics.map((metric, i) => (
              <div 
                key={i}
                className={`p-6 border transition-all duration-300 ${
                  metric.highlight 
                    ? 'bg-oliva/5 border-oliva/30' 
                    : 'bg-grafite/30 border-grigio/20 hover:border-grigio/40'
                }`}
              >
                <div className="flex items-center gap-2 text-grigio/50 mb-3">
                  {getMetricIcon(metric.icon)}
                  <div className="text-[11px] font-mono uppercase tracking-wider">{metric.label}</div>
                </div>
                <div className={`text-[28px] font-light leading-none ${metric.highlight ? 'text-oliva' : 'text-sabbia'}`}>
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Sintetico */}
      <section ref={outcomeRef} className="py-24 px-6 lg:px-16 border-b border-grigio/10">
        <div className="max-w-3xl mx-auto">
          <div className={`text-[11px] uppercase tracking-[0.15em] text-oliva/60 font-light mb-4 fade-up ${outcomeRevealed ? 'revealed' : ''}`}>
            Outcome
          </div>
          <h2 className={`text-[32px] font-medium text-sabbia mb-6 leading-[1.2] fade-up ${outcomeRevealed ? 'revealed' : ''}`} style={{ animationDelay: '100ms' }}>
            {outcomeTitle}
          </h2>
          <p className={`text-[17px] leading-[1.7] text-sabbia/70 font-light fade-up ${outcomeRevealed ? 'revealed' : ''}`} style={{ animationDelay: '200ms' }}>
            {outcomeDescription}
          </p>
        </div>
      </section>

      {/* Timeline Orizzontale (se presente) */}
      {timeline && (
        <section className="py-16 px-6 lg:px-16 border-b border-grigio/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.15em] text-grigio/50 font-light mb-8">Timeline</div>
            <div className="relative">
              {/* Line */}
              <div className="absolute top-3 left-0 w-full h-px bg-grigio/20"></div>
              <div className="absolute top-3 left-0 h-px bg-oliva/50 transition-all duration-1000" style={{ width: '100%' }}></div>
              
              {/* Steps */}
              <div className="relative flex justify-between">
                {timeline.map((step, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-oliva border-2 border-carbone mb-4"></div>
                    <div className="text-center">
                      <div className="text-[13px] text-sabbia mb-1">{step.phase}</div>
                      <div className="text-[11px] text-grigio/50 font-mono">{step.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* La Sfida */}
      <section ref={challengeRef} className="py-24 px-6 lg:px-16 border-b border-grigio/10">
        <div className="max-w-3xl mx-auto">
          <div className={`text-[11px] uppercase tracking-[0.15em] text-grigio/50 font-light mb-4 fade-up ${challengeRevealed ? 'revealed' : ''}`}>
            La Sfida
          </div>
          <h2 className={`text-[32px] font-medium text-sabbia mb-6 leading-[1.2] fade-up ${challengeRevealed ? 'revealed' : ''}`} style={{ animationDelay: '100ms' }}>
            {challengeTitle}
          </h2>
          <p className={`text-[17px] leading-[1.7] text-sabbia/70 font-light mb-8 fade-up ${challengeRevealed ? 'revealed' : ''}`} style={{ animationDelay: '200ms' }}>
            {challengeContext}
          </p>
          
          {/* Challenge Points */}
          <div className="space-y-4">
            {challengePoints.map((point, i) => (
              <div 
                key={i} 
                className={`flex items-start gap-4 p-4 border border-grigio/20 bg-grafite/20 fade-up ${challengeRevealed ? 'revealed' : ''}`}
                style={{ animationDelay: `${i * 100 + 300}ms` }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-grigio/50 mt-2.5 flex-shrink-0"></div>
                <p className="text-[15px] leading-[1.7] text-sabbia/70 font-light">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La Soluzione */}
      <section ref={solutionRef} className="py-24 px-6 lg:px-16 border-b border-grigio/10">
        <div className="max-w-3xl mx-auto">
          <div className={`text-[11px] uppercase tracking-[0.15em] text-grigio/50 font-light mb-4 fade-up ${solutionRevealed ? 'revealed' : ''}`}>
            La Soluzione
          </div>
          <h2 className={`text-[32px] font-medium text-sabbia mb-6 leading-[1.2] fade-up ${solutionRevealed ? 'revealed' : ''}`} style={{ animationDelay: '100ms' }}>
            {solutionTitle}
          </h2>
          <p className={`text-[17px] leading-[1.7] text-sabbia/70 font-light mb-12 fade-up ${solutionRevealed ? 'revealed' : ''}`} style={{ animationDelay: '200ms' }}>
            {solutionDescription}
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div 
                key={i}
                className={`p-6 border border-grigio/20 bg-grafite/30 hover:border-oliva/30 transition-all duration-300 fade-up ${solutionRevealed ? 'revealed' : ''}`}
                style={{ animationDelay: `${i * 100 + 300}ms` }}
              >
                <h3 className="text-[17px] font-medium text-sabbia mb-3 leading-[1.3]">{feature.title}</h3>
                <p className="text-[14px] leading-[1.7] text-sabbia/60 font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architettura Tecnica (se presente) */}
      {architectureTitle && techStack && (
        <section className="py-24 px-6 lg:px-16 border-b border-grigio/10">
          <div className="max-w-3xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.15em] text-grigio/50 font-light mb-4">
              Architettura
            </div>
            <h2 className="text-[32px] font-medium text-sabbia mb-6 leading-[1.2]">
              {architectureTitle}
            </h2>
            {architectureDescription && (
              <p className="text-[17px] leading-[1.7] text-sabbia/70 font-light mb-12">
                {architectureDescription}
              </p>
            )}

            {/* Tech Stack Grid */}
            <div className="space-y-6">
              {techStack.map((tech, i) => (
                <div key={i} className="border-l-2 border-oliva/30 pl-6">
                  <div className="text-[13px] text-grigio/60 mb-3 font-mono uppercase tracking-wider">{tech.category}</div>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, j) => (
                      <span 
                        key={j}
                        className="px-3 py-1.5 text-[12px] text-sabbia/70 border border-grigio/30 font-mono tracking-wide"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Risultati Misurabili */}
      <section ref={resultsRef} className="py-24 px-6 lg:px-16 border-b border-grigio/10">
        <div className="max-w-3xl mx-auto">
          <div className={`text-[11px] uppercase tracking-[0.15em] text-grigio/50 font-light mb-4 fade-up ${resultsRevealed ? 'revealed' : ''}`}>
            Risultati
          </div>
          <h2 className={`text-[32px] font-medium text-sabbia mb-12 leading-[1.2] fade-up ${resultsRevealed ? 'revealed' : ''}`} style={{ animationDelay: '100ms' }}>
            {resultsTitle}
          </h2>

          {/* Results Grid */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            {results.map((result, i) => (
              <div 
                key={i}
                className={`p-8 border transition-all duration-300 fade-up ${resultsRevealed ? 'revealed' : ''} ${
                  result.improvement 
                    ? 'bg-oliva/5 border-oliva/30' 
                    : 'border-grigio/20 bg-grafite/20'
                }`}
                style={{ animationDelay: `${i * 100 + 200}ms` }}
              >
                <div className={`text-[36px] lg:text-[48px] font-light leading-none mb-3 ${result.improvement ? 'text-oliva' : 'text-sabbia'}`}>
                  {result.value}
                </div>
                <div className="text-[13px] text-sabbia/60 leading-[1.5]">{result.label}</div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <p className={`text-[17px] leading-[1.7] text-sabbia/70 font-light fade-up ${resultsRevealed ? 'revealed' : ''}`} style={{ animationDelay: `${results.length * 100 + 300}ms` }}>
            {resultsSummary}
          </p>
        </div>
      </section>

      {/* Team Contribution (se presente) */}
      {teamTitle && teamDescription && (
        <section className="py-24 px-6 lg:px-16 border-b border-grigio/10">
          <div className="max-w-3xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.15em] text-grigio/50 font-light mb-4">
              Il Nostro Contributo
            </div>
            <h2 className="text-[32px] font-medium text-sabbia mb-6 leading-[1.2]">
              {teamTitle}
            </h2>
            <p className="text-[17px] leading-[1.7] text-sabbia/70 font-light">
              {teamDescription}
            </p>
          </div>
        </section>
      )}

      {/* Cosa Abbiamo Imparato (se presente) */}
      {learnings && (
        <section className="py-24 px-6 lg:px-16 border-b border-grigio/10">
          <div className="max-w-3xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.15em] text-grigio/50 font-light mb-4">
              Learnings
            </div>
            <h2 className="text-[32px] font-medium text-sabbia mb-8 leading-[1.2]">
              {learnings.title}
            </h2>
            <div className="space-y-4">
              {learnings.items.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 border-l-2 border-oliva/30 pl-6">
                  <CheckCircle2 className="w-5 h-5 text-oliva/70 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-[15px] leading-[1.7] text-sabbia/70 font-light">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA - Next Project */}
      {nextProject && (
        <section className="py-32 px-6 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[11px] uppercase tracking-[0.15em] text-grigio/50 font-light mb-8">
              {locale === 'it' ? 'Prossimo Caso Studio' : 'Next Case Study'}
            </div>
            <Link
              href={`/${locale}/projects/${nextProject.slug}`}
              className="group inline-flex items-center gap-3 text-[24px] font-medium text-sabbia hover:text-oliva transition-colors"
            >
              {nextProject.title}
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.5} />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
