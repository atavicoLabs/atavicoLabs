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
      {/* Floating language selector - stile tecnico */}
      <div className="flex items-center gap-2 bg-carbone/90 border border-grigio/30 px-2 py-2 backdrop-blur-sm">
        <Link
          href={getLocalizedPath('it')}
          className={`text-xs font-normal uppercase tracking-wider-2 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-oliva transition-colors ${
            locale === 'it' ? 'text-oliva border-b border-oliva' : 'text-grigio hover:text-oliva'
          }`}
          aria-current={locale === 'it' ? 'page' : undefined}
        >
          IT
        </Link>

        <div className="w-px h-4 bg-grigio/30" />

        <Link
          href={getLocalizedPath('en')}
          className={`text-xs font-normal uppercase tracking-wider-2 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-oliva transition-colors ${
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
