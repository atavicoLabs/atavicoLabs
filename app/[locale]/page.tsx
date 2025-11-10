import {getTranslations} from 'next-intl/server';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import Process from '@/app/components/Process';
import Portfolio from '@/app/components/Portfolio';
import Testimonials from '@/app/components/Testimonials';
import Blog from '@/app/components/Blog';
import Newsletter from '@/app/components/Newsletter';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';
import LanguageSwitcher from '@/app/components/LanguageSwitcher';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata'});
  
  const title = t('title');
  const description = t('description');
  const keywords = t('keywords');
  
  return {
    title,
    description,
    keywords,
    authors: [{name: 'AtavicoLabs'}],
    creator: 'AtavicoLabs',
    publisher: 'AtavicoLabs',
    alternates: {
      canonical: `https://atavicolabs.com/${locale === 'it' ? 'it' : 'en'}`,
      languages: {
        'it': 'https://atavicolabs.com/it',
        'en': 'https://atavicolabs.com/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      url: `https://atavicolabs.com/${locale === 'it' ? 'it' : 'en'}`,
      siteName: 'AtavicoLabs',
      title,
      description,
      images: [
        {
          url: 'https://atavicolabs.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'AtavicoLabs - Digital Product Development',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://atavicolabs.com/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Language Switcher - Fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSwitcher />
      </div>
      
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Blog />
      {/* <Newsletter /> */}
      <CTA />
      <Footer />
    </main>
  );
}
