"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function LanguageSwitcher() {
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
    lastY.current = typeof window !== "undefined" ? window.scrollY : 0;

    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // hide when scrolling down, show when scrolling up
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

    // passive listener to avoid blocking the main thread
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // keep ref in sync if visible is changed elsewhere
  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  return (
    <div
      role="navigation"
      aria-label="Language selector"
      className={`fixed right-5 bottom-5 z-50 transition-transform transition-opacity duration-300 ease-out transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Larger, more visible floating pill */}
      <div className="flex items-center gap-3 bg-warm-black/70 border border-warm-border rounded-lg px-2 py-2 shadow-lg">
        <Link
          href={getLocalizedPath('it')}
          className={`text-base md:text-lg font-semibold uppercase tracking-wider px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-accent transition-colors ${
            locale === 'it' ? 'text-warm-accent bg-warm-accent/10' : 'text-warm-muted/80 hover:text-warm-accent'
          }`}
          aria-current={locale === 'it' ? 'page' : undefined}
        >
          IT
        </Link>

        <Link
          href={getLocalizedPath('en')}
          className={`text-base md:text-lg font-semibold uppercase tracking-wider px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-accent transition-colors ${
            locale === 'en' ? 'text-warm-accent bg-warm-accent/10' : 'text-warm-muted/80 hover:text-warm-accent'
          }`}
          aria-current={locale === 'en' ? 'page' : undefined}
        >
          EN
        </Link>
      </div>
    </div>
  );
}
