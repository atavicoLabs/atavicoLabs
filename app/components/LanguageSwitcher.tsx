"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface LanguageSwitcherProps {
  inline?: boolean; // for mobile menu
}

export default function LanguageSwitcher({ inline = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const visibleRef = useRef<boolean>(true);

  // Build localized path preserving the rest of the pathname
  const getLocalizedPath = (newLocale: string) => {
    let pathWithoutLocale = pathname || "/";

    if (pathWithoutLocale.startsWith("/it/") || pathWithoutLocale === "/it") {
      pathWithoutLocale = pathWithoutLocale.slice(3);
    } else if (pathWithoutLocale.startsWith("/en/") || pathWithoutLocale === "/en") {
      pathWithoutLocale = pathWithoutLocale.slice(3);
    }

    if (!pathWithoutLocale.startsWith("/")) {
      pathWithoutLocale = "/" + pathWithoutLocale;
    }

    return `/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
  };

  useEffect(() => {
    if (inline) return; // Don't attach scroll listener for inline version
    
    lastY.current = typeof window !== "undefined" ? window.scrollY : 0;

    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (y > lastY.current + 5) {
            if (visibleRef.current) {
              visibleRef.current = false;
              setVisible(false);
            }
          } else if (y < lastY.current - 5) {
            if (!visibleRef.current) {
              visibleRef.current = true;
              setVisible(true);
            }
          }
          lastY.current = y;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [inline]);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  // Inline version for mobile menu
  if (inline) {
    return (
      <div
        role="navigation"
        aria-label="Language selector"
        className="flex items-center gap-2"
      >
        <span className="text-[11px] uppercase tracking-wider text-text-muted font-medium">Language:</span>
        <Link
          href={getLocalizedPath('it')}
          className={`text-[13px] font-normal uppercase tracking-wider px-3 py-1.5 rounded-sm transition-all duration-200 ${
            locale === 'it' 
              ? 'text-text-primary bg-accent-subtle/30 border border-accent-primary/40' 
              : 'text-text-tertiary hover:text-text-primary border border-text-ghost/20 hover:border-accent-primary/40'
          }`}
          aria-current={locale === 'it' ? 'page' : undefined}
        >
          IT
        </Link>

        <Link
          href={getLocalizedPath('en')}
          className={`text-[13px] font-normal uppercase tracking-wider px-3 py-1.5 rounded-sm transition-all duration-200 ${
            locale === 'en' 
              ? 'text-text-primary bg-accent-subtle/30 border border-accent-primary/40' 
              : 'text-text-tertiary hover:text-text-primary border border-text-ghost/20 hover:border-accent-primary/40'
          }`}
          aria-current={locale === 'en' ? 'page' : undefined}
        >
          EN
        </Link>
      </div>
    );
  }

  // Floating version for desktop
  return (
    <div
      role="navigation"
      aria-label="Language selector"
      className={`fixed right-5 bottom-5 z-40 transition-transform transition-opacity duration-300 ease-out transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="flex items-center gap-2 bg-carbone/90 border border-grigio/30 px-2 py-2 backdrop-blur-sm rounded-sm">
        <Link
          href={getLocalizedPath('it')}
          className={`text-xs font-normal uppercase tracking-wider-2 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-oliva transition-colors rounded-sm ${
            locale === 'it' ? 'text-oliva border-b border-oliva' : 'text-grigio hover:text-oliva'
          }`}
          aria-current={locale === 'it' ? 'page' : undefined}
        >
          IT
        </Link>

        <div className="w-px h-4 bg-grigio/30" />

        <Link
          href={getLocalizedPath('en')}
          className={`text-xs font-normal uppercase tracking-wider-2 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-oliva transition-colors rounded-sm ${
            locale === 'en' ? 'text-oliva border-b border-oliva' : 'text-grigio hover:text-oliva'
          }`}
          aria-current={locale === 'en' ? 'page' : undefined}
        >
          EN
        </Link>
      </div>
    </div>
  );
}

