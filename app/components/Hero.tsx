'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState, useEffect, useMemo } from 'react';

// Animation constants extracted for better performance
const TYPING_DURATION = 1400; // ms
const CURSOR_HIDE_DELAY = 1000; // ms
const CURSOR_BLINK_DURATION = 0.666; // seconds (3 fps)

// Blob configurations (memoized data)
const BLOB_CONFIGS = [
  {
    className: "absolute top-0 left-0 w-[650px] h-[650px] rounded-full opacity-20 blur-[85px]",
    gradient: 'radial-gradient(circle at 40% 40%, hsl(226, 45%, 25%), transparent 65%)',
    animate: { x: [0, 30, 0], y: [0, 20, 0] },
    duration: 28,
  },
  {
    className: "absolute top-1/3 right-0 w-[700px] h-[700px] rounded-full opacity-18 blur-[95px]",
    gradient: 'radial-gradient(circle at 50% 50%, hsl(258, 45%, 36%), transparent 65%)',
    animate: { x: [0, -35, 0], y: [0, 25, 0] },
    duration: 33,
  },
  {
    className: "absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full opacity-16 blur-[90px]",
    gradient: 'radial-gradient(circle at 45% 55%, hsl(330, 55%, 48%), transparent 65%)',
    animate: { x: [0, 25, 0], y: [0, -18, 0] },
    duration: 25,
  },
];

// Common transition config
const BLOB_TRANSITION = { repeat: Infinity, ease: "linear" } as const;

export default function Hero() {
  const t = useTranslations('hero');
  const fullText = t('title');
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Memoize typing speed calculation
  const typingSpeed = useMemo(() => TYPING_DURATION / fullText.length, [fullText.length]);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        timeoutId = setTimeout(() => setShowCursor(false), CURSOR_HIDE_DELAY);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [fullText, typingSpeed]);
  
  return (
    <section className="relative min-h-screen gradient-bg overflow-hidden">
      {/* Refined fluid animation - "forms that are born" with HSL color system */}
      <div className="absolute inset-0 overflow-hidden">
        {BLOB_CONFIGS.map((blob, index) => (
          <motion.div
            key={index}
            className={blob.className}
            style={{
              background: blob.gradient,
              willChange: 'transform',
            }}
            animate={blob.animate}
            transition={{
              ...BLOB_TRANSITION,
              duration: blob.duration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 flex justify-center">
            <h1 className="relative inline-block whitespace-nowrap">
              {/* Invisible placeholder reserves full width */}
              <span className="invisible" aria-hidden="true">{fullText}</span>
              
              {/* Visible text overlays at the same position, left-aligned */}
              <span className="absolute left-0 top-0 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {displayedText}
                {showCursor && (
                  <motion.span
                    className="inline-block w-1 h-[0.85em] bg-blue-500 ml-1 align-middle"
                    style={{ opacity: 1 }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ 
                      duration: CURSOR_BLINK_DURATION,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                )}
              </span>
            </h1>
          </div>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="#contact"
              className="inline-block px-8 py-3.5 bg-white/90 hover:bg-white text-slate-900 text-lg font-medium rounded-xl transition-all duration-200 hover:scale-[1.02] backdrop-blur-sm"
            >
              {t('cta')}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-sm">{t('scrollIndicator')}</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-blue-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
