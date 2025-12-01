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
  
  // Position tracking con inerzia
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Detect touch device - nascondi cursor su mobile
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      console.log('[CustomCursor] Touch device detected - cursor disabled');
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) {
      console.log('[CustomCursor] Cursor ref not found');
      return;
    }

    console.log('[CustomCursor] Initialized successfully');

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
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

    // Smooth animation loop con inerzia
    const animate = () => {
      const dx = mousePos.current.x - cursorPos.current.x;
      const dy = mousePos.current.y - cursorPos.current.y;
      
      // Lerp (ease-out) per movimento fluido
      cursorPos.current.x += dx * 0.15;
      cursorPos.current.y += dy * 0.15;

      // Aggiorna posizione DOM
      cursor.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
      
      rafId.current = requestAnimationFrame(animate);
    };

    // Init
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
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
