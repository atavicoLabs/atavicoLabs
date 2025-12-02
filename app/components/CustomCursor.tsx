'use client';

import { useEffect, useRef } from 'react';

/**
 * CustomCursor - Micro-dot cursor con blend-mode difference
 * 
 * Features:
 * - 4px dot con movimento fluido e inerzia
 * - mix-blend-mode: difference per light/dark compatibility
 * - Performance-optimized con requestAnimationFrame
 * - Auto-hide su mobile/touch devices
 * - Zero external dependencies
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect touch device - nascondi cursor su mobile
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }

    // Track mouse position - aggiornamento diretto senza inerzia
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursor.style.opacity = '1';
    };

    // Hide cursor quando esce dalla finestra
    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    // Show cursor quando entra nella finestra
    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
    };

    // Init
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
    />
  );
}
