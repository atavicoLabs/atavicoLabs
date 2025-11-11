import ProjectLayout from '@/app/components/ProjectLayout';

interface NuviaPageProps {
  params: Promise<{ locale: string }>;
}

const content = {
  en: {
    title: "Nuvia — Smart Sustainability Dashboard",
    subtitle: "Turning environmental data into insight and impact",
    overview: "Nuvia is a data visualization platform that helps companies measure, understand, and communicate their sustainability efforts. By combining IoT data and AI-driven analysis, it transforms energy consumption and emission data into meaningful, actionable dashboards.",
    challenge: "Many companies collect environmental data but struggle to interpret or present it clearly. We wanted to bridge the gap between raw data and real decisions through design and intelligent analysis.",
    solution: "We built Nuvia using Next.js, D3.js, and TensorFlow to merge interactive charts with predictive analytics. Users can track live consumption, forecast CO₂ impact, and share visual reports with stakeholders. The result: sustainability data that looks as good as it is useful.",
    results: [
      "Real-time ESG monitoring with live dashboards",
      "Predictive insights powered by AI and machine learning",
      "A design system focused on clarity and trust",
      "Reduced carbon footprint through data-driven decisions"
    ],
    techStack: ["React", "Next.js", "D3.js", "Node.js", "TensorFlow", "PostgreSQL"]
  },
  it: {
    title: "Nuvia — Dashboard Intelligente per la Sostenibilità",
    subtitle: "Dati ambientali trasformati in insight e impatto reale",
    overview: "Nuvia è una piattaforma di visualizzazione dati per aziende che vogliono monitorare e comunicare i propri progressi in ambito sostenibilità. Combina dati IoT e analisi AI per trasformare i consumi energetici e le emissioni in dashboard comprensibili e dinamiche.",
    challenge: "Molte aziende raccolgono dati ambientali ma non riescono a interpretarli o condividerli in modo chiaro. L'obiettivo era trasformare la complessità in decisioni visive e comprensibili.",
    solution: "Abbiamo sviluppato Nuvia con Next.js, D3.js e TensorFlow per unire grafici interattivi e analisi predittive. Gli utenti possono monitorare in tempo reale i consumi, prevedere l'impatto di CO₂ e generare report visivi. Un'interfaccia pulita e un design system pensato per la trasparenza completano l'esperienza.",
    results: [
      "Monitoraggio ESG in tempo reale con dashboard live",
      "Previsioni basate su AI e machine learning",
      "Design chiaro e affidabile che ispira fiducia",
      "Riduzione dell'impronta carbonica attraverso decisioni data-driven"
    ],
    techStack: ["React", "Next.js", "D3.js", "Node.js", "TensorFlow", "PostgreSQL"]
  }
};

export default async function NuviaPage({ params }: NuviaPageProps) {
  const { locale } = await params;
  const lang = locale === 'it' ? 'it' : 'en';
  const data = content[lang];

  return (
    <ProjectLayout
      title={data.title}
      subtitle={data.subtitle}
      heroImage="/projects/nuvia-hero.jpg"
      overview={data.overview}
      challenge={data.challenge}
      solution={data.solution}
      results={data.results}
      techStack={data.techStack}
      locale={locale}
    />
  );
}
