import ProjectLayout from '@/app/components/ProjectLayout';

interface SyncoraPageProps {
  params: Promise<{ locale: string }>;
}

const content = {
  en: {
    title: "Syncora — AI-Powered Team Scheduler",
    subtitle: "Smarter team planning with artificial intelligence",
    overview: "Syncora is a SaaS platform designed to simplify the chaos of team scheduling. It uses AI to analyze availability, roles, and preferences — automatically creating optimized work shifts for distributed teams. Built with modern technologies and a design-driven approach, Syncora saves hours of manual planning every week.",
    challenge: "In growing companies, team scheduling quickly becomes a nightmare. Different roles, working hours, and locations create friction, missed deadlines, and burnout. We wanted to design a system that could learn from teams — not just store their data.",
    solution: "We combined a clean, intuitive UI with a powerful backend built on Node.js and MongoDB. Through OpenAI integration, Syncora understands patterns in team behavior and generates shift proposals with one click. The dashboard visualizes workload balance and suggests adjustments in real-time.",
    results: [
      "Up to 60% reduction in manual planning time",
      "Smarter distribution of tasks across teams",
      "Seamless UX accessible on any device",
      "Improved team satisfaction and work-life balance"
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "OpenAI API", "Tailwind CSS", "Docker"]
  },
  it: {
    title: "Syncora — Pianificazione dei Team con AI",
    subtitle: "L'intelligenza artificiale che semplifica l'organizzazione del lavoro",
    overview: "Syncora è una piattaforma SaaS che semplifica la pianificazione dei team aziendali. Grazie all'intelligenza artificiale, analizza disponibilità, ruoli e preferenze per creare turni ottimizzati automaticamente. Unendo design e tecnologia, Syncora riduce le ore di lavoro manuale e migliora la produttività.",
    challenge: "Nelle aziende in crescita, la pianificazione dei turni diventa rapidamente caotica. Ruoli diversi, orari flessibili e sedi multiple generano confusione e inefficienza. Volevamo creare un sistema in grado di imparare dal team, non solo di registrare dati.",
    solution: "Abbiamo sviluppato un'interfaccia pulita e intuitiva con backend Node.js e database MongoDB. Grazie all'integrazione con OpenAI, Syncora riconosce schemi di comportamento e genera proposte di pianificazione in un click. La dashboard mostra il bilanciamento dei carichi di lavoro e suggerisce modifiche in tempo reale.",
    results: [
      "Riduzione fino al 60% del tempo di pianificazione manuale",
      "Distribuzione più equa dei compiti tra i team",
      "Esperienza fluida accessibile da qualsiasi dispositivo",
      "Maggiore soddisfazione del team e work-life balance"
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "OpenAI API", "Tailwind CSS", "Docker"]
  }
};

export default async function SyncoraPage({ params }: SyncoraPageProps) {
  const { locale } = await params;
  const lang = locale === 'it' ? 'it' : 'en';
  const data = content[lang];

  return (
    <ProjectLayout
      title={data.title}
      subtitle={data.subtitle}
      heroImage="/projects/syncora-hero.jpg"
      overview={data.overview}
      challenge={data.challenge}
      solution={data.solution}
      results={data.results}
      techStack={data.techStack}
      locale={locale}
    />
  );
}
