import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/src/i18n/config';
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({locale});
  
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AtavicoLabs',
    url: 'https://atavicolabs.com',
    logo: 'https://atavicolabs.com/logo.png',
    description: locale === 'it' 
      ? 'Sviluppo di web app, mobile app e piattaforme SaaS per PMI'
      : 'Web app, mobile app and SaaS platform development for SMEs',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IT',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@atavicolabs.com',
      contactType: 'customer service',
      availableLanguage: ['Italian', 'English'],
    },
    sameAs: [
      'https://github.com/atavicoLabs',
    ],
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
