'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('footer');

  return (
    <footer className="bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('brand')}
            </h3>
            <p className="text-gray-400 max-w-md mb-4">
              {t('description')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">
                  {t('quickLinks.about')}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-blue-500 transition-colors">
                  {t('quickLinks.services')}
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-blue-500 transition-colors">
                  {t('quickLinks.portfolio')}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                  {t('quickLinks.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact.title')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:contact@atavicolabs.com" className="hover:text-blue-500 transition-colors">
                  contact@atavicolabs.com
                </a>
              </li>
              <li>
                <a href="tel:+393664543662" className="hover:text-blue-500 transition-colors">
                  +39 366 454 3662
                </a>
              </li>
              <li className="pt-2">
                <span className="text-sm">{t('contact.location')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            {t('copyright', {year: currentYear})}
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors">
              {t('legal.privacy')}
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-blue-500 transition-colors">
              {t('legal.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
