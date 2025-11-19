'use client';

import { useTranslations } from 'next-intl';
import { useReveal } from '../hooks/useReveal';
import { useState, useEffect } from 'react';

export default function Hero() {
  const t = useTranslations('hero');
  const { ref, isRevealed, isMounted } = useReveal({ threshold: 0.1, once: true });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  const [visibleChars, setVisibleChars] = useState(0);
  const [showTagline, setShowTagline] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = `${t('title1')} ${t('title2')}`;
  
  useEffect(() => {
    if (!isRevealed || !isMounted) return;
    
    let currentIndex = 0;
    const typingSpeed = 50; // ms per lettera
    
    const typeInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setVisibleChars(currentIndex + 1);
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        // Nasconde il cursore dopo 1.5 secondi
        setTimeout(() => setShowCursor(false), 1500);
        // Mostra la tagline dopo aver finito di scrivere
        setTimeout(() => setShowTagline(true), 200);
      }
    }, typingSpeed);
    
    return () => clearInterval(typeInterval);
  }, [isRevealed, isMounted, fullText]);

  // Respect prefer-reduced-motion: if user requests reduced motion, avoid autoplaying video
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handle = () => setPrefersReducedMotion(!!mq.matches);
    handle();
    mq.addEventListener ? mq.addEventListener('change', handle) : mq.addListener(handle);
    return () => mq.removeEventListener ? mq.removeEventListener('change', handle) : mq.removeListener(handle);
  }, []);

  return (
    <section 
      ref={ref}
      className="relative bg-warm-black overflow-hidden"
      style={{ 
        minHeight: '100vh',
        paddingTop: '35vh',
        paddingBottom: '20vh'
      }}
    >
      {/* Optional video background: place your file at `public/hero.mp4` to enable. */}
      {!prefersReducedMotion && (
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Background Pattern - subtle */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(249, 250, 251, 0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Main Content Container */}
      <div className="relative mx-auto max-w-5xl px-6 text-center">

        {/* Title with typewriter effect */}
        {isMounted && isRevealed && (
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.15] text-white mb-8">
            {fullText.split('').map((char, index) => (
              <span key={index}>
                <span
                  style={{
                    opacity: index < visibleChars ? 1 : 0,
                    transition: 'opacity 0.1s ease-in'
                  }}
                >
                  {char}
                </span>
                {index === visibleChars - 1 && visibleChars < fullText.length && showCursor && (
                  <span className="inline-block w-0.5 h-[0.9em] bg-warm-accent ml-1 animate-pulse align-middle" />
                )}
              </span>
            ))}
            {visibleChars >= fullText.length && showCursor && (
              <span className="inline-block w-0.5 h-[0.9em] bg-warm-accent ml-1 animate-pulse align-middle" />
            )}
          </h1>
        )}

        {/* Tagline - appears after typing */}
        {isMounted && showTagline && (
          <p 
            className="text-sm uppercase tracking-wider text-warm-muted max-w-2xl mx-auto animate-fade-up-6"
          >
            {t('tagline')}
          </p>
        )}
      </div>

      {/* Scroll Indicator - centered bottom */}
      {isMounted && showTagline && (
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-4"
          style={{ 
            opacity: 0.3
          }}
          aria-hidden="true"
        >
          <div className="w-px h-[18px] bg-warm-border" />
          <span className="text-[11px] tracking-wider uppercase text-warm-muted">
            {t('scroll')}
          </span>
        </div>
      )}
    </section>
  );
}
