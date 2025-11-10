import {getTranslations} from 'next-intl/server';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import Portfolio from '@/app/components/Portfolio';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';
import LanguageSwitcher from '@/app/components/LanguageSwitcher';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'hero'});
  
  return {
    title: locale === 'it' 
      ? "AtavicoLabs — Design e Sviluppo di Prodotti Digitali"
      : "AtavicoLabs — Digital Product Design & Development",
    description: locale === 'it'
      ? "AtavicoLabs progetta e sviluppa prodotti digitali moderni — dalle web app alle esperienze mobile. Un team design-driven che combina UX, sviluppo full-stack e strategia tecnologica per aiutare startup e brand a crescere."
      : "AtavicoLabs designs and develops modern digital products — from web apps to mobile experiences. A design-driven team combining UX, full-stack development, and technology strategy to help startups and brands grow.",
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
      <Portfolio />
      <CTA />
      <Footer />
    </main>
  );
}
