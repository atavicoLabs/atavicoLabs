'use client';

import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';
import { useState, useEffect, useRef } from 'react';

export default function ServicesSection() {
  const t = useTranslations('services');
  const { ref, isRevealed } = useReveal();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [visibleWords, setVisibleWords] = useState(0);

  const titleText = t('subtitle');
  const words = titleText.split(' ');

  useEffect(() => {
    if (!isRevealed) return;

    let currentWord = 0;
    const wordInterval = setInterval(() => {
      if (currentWord < words.length) {
        setVisibleWords(currentWord + 1);
        currentWord++;
      } else {
        clearInterval(wordInterval);
      }
    }, 120); // 120ms per parola

    return () => clearInterval(wordInterval);
  }, [isRevealed, words.length]);

  // per-card reveal: reveal each service when it's roughly centered in the viewport
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [revealed, setRevealed] = useState<boolean[]>(() => new Array(4).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            if (!Number.isNaN(idx)) {
              setRevealed((prev) => {
                if (prev[idx]) return prev;
                const next = [...prev];
                next[idx] = true;
                return next;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // roughly center of viewport
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    // cleanup
    return () => observer.disconnect();
  }, []);

  const services = [
    { title: t('items.0.title'), description: t('items.0.description') },
    { title: t('items.1.title'), description: t('items.1.description') },
    { title: t('items.2.title'), description: t('items.2.description') },
    { title: t('items.3.title'), description: t('items.3.description') },
  ];

  return (
    <section 
      ref={ref}
      className="relative w-full py-32 md:py-40 px-6 lg:px-12 bg-warm-black"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Header - Centered */}
  <div className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight"
          >
            {isRevealed && words.map((word, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  opacity: index < visibleWords ? 1 : 0.1,
                  transform: index < visibleWords ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                {word}{index < words.length - 1 ? '\u00A0' : ''}
              </span>
            ))}
          </h2>
        </div>

        {/* Services Grid - 2x2 Minimal (appear when title passes midpoint) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20 md:gap-y-24">
          {services.map((service, i) => (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
              data-index={i}
              className=""
              aria-hidden={!revealed[i]}
              style={{
                opacity: revealed[i] ? 1 : 0,
                transform: revealed[i] ? 'translateY(0)' : 'translateY(6px)',
                transition: 'opacity 0.95s cubic-bezier(0.16, 0.84, 0.44, 1), transform 0.95s cubic-bezier(0.16, 0.84, 0.44, 1)',
                transitionDelay: `${revealed[i] ? i * 0.18 : 0}s`,
                willChange: 'transform, opacity'
              }}
            >
              <div className="p-6 md:p-8 bg-warm-card/5 rounded-2xl border border-warm-border">
                <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-warm-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
