'use client';

import { useEffect, useRef, useState } from 'react';

interface UseRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Animation System V2 - Premium reveal hook
 * 
 * Features:
 * - IntersectionObserver-based (performant)
 * - One-time animations (observer.unobserve after reveal)
 * - SSR-safe with mounted check
 * - Adds .revealed class automatically
 * - Zero re-renders after reveal
 */
export function useReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
}: UseRevealOptions = {}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // SSR safety
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const element = ref.current;
    if (!element) return;

    // Create observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add .revealed class
          element.classList.add('revealed');
          setIsRevealed(true);
          
          // ONE-TIME ONLY: unobserve after reveal
          if (once && observerRef.current) {
            observerRef.current.unobserve(element);
            observerRef.current.disconnect();
            observerRef.current = null;
          }
        }
      },
      { 
        threshold, 
        rootMargin,
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [isMounted, threshold, rootMargin, once]);

  return { 
    ref, 
    isRevealed,
    isMounted,
  };
}
