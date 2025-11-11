import ProjectLayout from '@/app/components/ProjectLayout';

interface LoopinPageProps {
  params: Promise<{ locale: string }>;
}

const content = {
  en: {
    title: "Loopin — The Creative Feedback App",
    subtitle: "Visual feedback, faster iterations, happier teams",
    overview: "Loopin is a mobile and web app designed for creative teams to exchange feedback on designs, videos, and content. It allows users to comment directly on elements, track versions, and collaborate visually in real time.",
    challenge: "Creative teams waste hours collecting and aligning feedback across emails and screenshots. We wanted to create a seamless tool that made review cycles shorter — and collaboration smoother.",
    solution: "Built with Flutter and React, Loopin provides a shared space where feedback becomes actionable. A visual marker system and real-time updates via WebSockets make collaboration instant. Notifications and analytics help teams track engagement and progress across revisions.",
    results: [
      "40% faster feedback cycles and review iterations",
      "Clearer communication between designers and stakeholders",
      "Improved creative flow across all devices",
      "Reduced back-and-forth and miscommunication"
    ],
    techStack: ["Flutter", "React", "Firebase", "Node.js", "WebSockets"]
  },
  it: {
    title: "Loopin — L'App per il Feedback Creativo",
    subtitle: "Feedback visivo, iterazioni più rapide, team più felici",
    overview: "Loopin è un'app web e mobile pensata per i team creativi che devono condividere feedback su design, video e contenuti. Permette di commentare direttamente sugli elementi visivi, gestire versioni e collaborare in tempo reale.",
    challenge: "I team creativi perdono ore a raccogliere feedback tra email, messaggi e screenshot. Volevamo costruire uno strumento che rendesse le revisioni più rapide e la comunicazione più chiara.",
    solution: "Sviluppata in Flutter e React, Loopin offre uno spazio condiviso dove i feedback diventano azioni concrete. Un sistema di marker visivi e aggiornamenti in tempo reale facilita la collaborazione immediata. Le notifiche e le analisi interne aiutano a misurare coinvolgimento e progressi.",
    results: [
      "Cicli di revisione più rapidi del 40%",
      "Comunicazione più chiara tra designer e stakeholder",
      "Collaborazione fluida da ogni dispositivo",
      "Riduzione di incomprensioni e scambi inutili"
    ],
    techStack: ["Flutter", "React", "Firebase", "Node.js", "WebSockets"]
  }
};

export default async function LoopinPage({ params }: LoopinPageProps) {
  const { locale } = await params;
  const lang = locale === 'it' ? 'it' : 'en';
  const data = content[lang];

  return (
    <ProjectLayout
      title={data.title}
      subtitle={data.subtitle}
      heroImage="/projects/loopin-hero.jpg"
      overview={data.overview}
      challenge={data.challenge}
      solution={data.solution}
      results={data.results}
      techStack={data.techStack}
      locale={locale}
    />
  );
}
