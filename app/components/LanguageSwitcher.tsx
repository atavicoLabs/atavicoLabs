'use client';

import {useLocale} from 'next-intl';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Get path without locale
  const getLocalizedPath = (newLocale: string) => {
    console.log('Current pathname:', pathname);
    console.log('Current locale:', locale);
    console.log('Switching to:', newLocale);
    
    // Remove current locale from pathname
    let pathWithoutLocale = pathname;
    
    if (pathname.startsWith('/it/') || pathname === '/it') {
      pathWithoutLocale = pathname.slice(3);
    } else if (pathname.startsWith('/en/') || pathname === '/en') {
      pathWithoutLocale = pathname.slice(3);
    }
    
    // Ensure path starts with /
    if (!pathWithoutLocale.startsWith('/')) {
      pathWithoutLocale = '/' + pathWithoutLocale;
    }
    
    // Always use locale prefix
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    console.log('New path:', newPath);
    return newPath;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm text-white rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700"
      >
        <span className="text-lg">{locale === 'it' ? '🇮🇹' : '🇬🇧'}</span>
        <span className="font-medium">{locale.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg overflow-hidden shadow-xl z-50">
          <Link
            href={getLocalizedPath('it')}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-slate-700 transition-colors"
          >
            <span className="text-lg">🇮🇹</span>
            <span className="font-medium">Italiano</span>
          </Link>
          <Link
            href={getLocalizedPath('en')}
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-slate-700 transition-colors"
          >
            <span className="text-lg">🇬🇧</span>
            <span className="font-medium">English</span>
          </Link>
        </div>
      )}
    </div>
  );
}
