'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';

export default function Newsletter() {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const { ref, isRevealed } = useReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-6 lg:px-8 bg-warm-black">
      <div className="relative max-w-3xl mx-auto">
        <div className={`p-10 md:p-12 bg-warm-card border border-warm-border fade-up ${isRevealed ? 'revealed' : ''}`}>
          <div className="text-center mb-10">
            <h2 
              className="text-2xl md:text-3xl font-semibold text-warm-text tracking-tight leading-tight mb-4"
            >
              {t('title')}
            </h2>
            <p className="text-warm-muted max-w-xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          {status === 'success' ? (
            <div className={`text-center py-8 scale-in ${isRevealed ? 'revealed' : ''}`}>
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 border-2 border-warm-accent">
                <svg className="w-6 h-6 text-warm-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-warm-text mb-2">
                {t('success.title')}
              </h3>
              <p className="text-warm-muted">
                {t('success.message')}
              </p>
            </div>
          ) : (
            <>
              <form 
                onSubmit={handleSubmit} 
                className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('placeholder')}
                  required
                  className="flex-1 px-6 py-4 bg-warm-darker border border-warm-border focus:outline-none focus:border-warm-accent/40 transition-colors duration-300 text-warm-text placeholder-warm-muted/50"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 border-2 border-warm-accent text-warm-accent font-medium rounded-lg hover:bg-warm-accent/90 hover:backdrop-blur-xl hover:text-warm-black hover:shadow-[0_0_28px_-6px_rgba(245,166,35,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Loading...
                    </span>
                  ) : (
                    t('cta')
                  )}
                </button>
              </form>

              {/* Incentive badge */}
              <div className="text-center mb-4">
                <p className="text-sm text-warm-accent">
                  {t('incentive')}
                </p>
              </div>

              {/* Privacy note */}
              <p className="text-center text-xs text-warm-muted/50">
                {t('privacy')}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
