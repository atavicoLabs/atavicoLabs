'use client';

import { useLocale } from 'next-intl';
import CaseStudyLayout from '@/app/components/CaseStudy/CaseStudyLayout';

export default function TeamSchedulerPage() {
  const locale = useLocale();

  return (
    <CaseStudyLayout
      locale={locale}
      title="Team Scheduler"
      subtitle="Piattaforma intelligente per la gestione di disponibilità, turni ed eventi aziendali. Riduce del 60% il tempo di pianificazione e aumenta del 40% la partecipazione attraverso automazione AI e notifiche smart."
      tags={['React', 'Next.js', 'Node.js', 'MongoDB', 'OpenAI API', 'WebSocket', 'Redis']}
      
      metrics={[
        { label: 'Timeline', value: '10 sett.', icon: 'clock' },
        { label: 'Team', value: '3+1', icon: 'users' },
        { label: 'Utenti attivi', value: '450+', icon: 'trending' },
        { label: 'Performance', value: '96/100', icon: 'activity' },
        { label: 'Uptime', value: '99.8%', icon: 'zap' },
        { label: 'Status', value: 'Live', highlight: true },
      ]}

      outcomeTitle="Automazione completa del workflow di pianificazione"
      outcomeDescription="Un team distribusu con più location ha ridotto drasticamente il tempo dedicato alla pianificazione manuale. La piattaforma centralizza disponibilità, turni ed eventi in un'unica interfaccia, utilizzando AI per suggerimenti automatici e prevenire conflitti. Il risultato: efficienza operativa misurabile e maggiore engagement."

      timeline={[
        { phase: 'Kickoff', duration: 'Sett. 1' },
        { phase: 'Design', duration: 'Sett. 2-3' },
        { phase: 'Dev', duration: 'Sett. 4-8' },
        { phase: 'Test', duration: 'Sett. 9' },
        { phase: 'Launch', duration: 'Sett. 10' },
      ]}

      challengeTitle="Coordinamento inefficiente e conflitti ricorrenti"
      challengeContext="Il team gestiva la pianificazione attraverso email, fogli condivisi e strumenti frammentati. Questo processo manuale generava ore di lavoro settimanali senza garantire visibilità in tempo reale né prevenire sovrapposizioni."
      challengePoints={[
        'Raccolta disponibilità dispersa su email, WhatsApp e Google Sheets senza sincronizzazione',
        'Conflitti frequenti nei turni assegnati e sovrapposizioni negli eventi ricorrenti',
        'Zero visibilità real-time su chi è disponibile, quando e per quale ruolo',
        'Bassa partecipazione agli eventi per assenza di promemoria efficaci e onboarding',
        'Impossibilità di analizzare pattern storici o ottimizzare allocazione risorse',
      ]}

      solutionTitle="Piattaforma unificata con AI per suggerimenti intelligenti"
      solutionDescription="Abbiamo progettato e sviluppato un sistema centralizzato che aggrega disponibilità, gestisce turni automatici e sincronizza eventi. L'integrazione con OpenAI analizza storico e preferenze per suggerire slot ottimali, riducendo conflitti e bilanciando equamente il carico di lavoro."
      features={[
        {
          title: 'Dashboard unificata',
          description: 'Vista centralizzata con filtri avanzati per team, location e ruolo. Calendar view con drag-and-drop per gestione visuale immediata.',
        },
        {
          title: 'Suggerimenti AI',
          description: 'Algoritmo che analizza storico, preferenze e vincoli per proporre slot ottimali. Riduce conflitti e bilancia equamente turni tra membri del team.',
        },
        {
          title: 'Notifiche smart',
          description: 'Sistema di promemoria automatici via email e push. Sincronizzazione bidirezionale con Google Calendar e Outlook per zero attrito.',
        },
        {
          title: 'Real-time updates',
          description: 'WebSocket con Redis per aggiornamenti live. Ogni modifica è visibile istantaneamente a tutti i membri senza refresh manuale.',
        },
      ]}

      architectureTitle="Stack tecnico scalabile e real-time"
      architectureDescription="Architettura full-stack moderna con frontend React/Next.js, API Node.js RESTful, database MongoDB per flessibilità schema, e Redis per caching + WebSocket. Integrazione OpenAI per suggerimenti intelligenti."
      techStack={[
        {
          category: 'Frontend',
          items: ['React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        },
        {
          category: 'Backend',
          items: ['Node.js', 'Express', 'MongoDB', 'Redis', 'WebSocket (Socket.io)'],
        },
        {
          category: 'AI & Integrations',
          items: ['OpenAI GPT-4', 'Google Calendar API', 'Outlook API', 'SendGrid'],
        },
        {
          category: 'Infra & DevOps',
          items: ['Vercel', 'MongoDB Atlas', 'Redis Cloud', 'GitHub Actions'],
        },
      ]}

      resultsTitle="Impatto misurabile su efficienza e partecipazione"
      results={[
        { value: '–60%', label: 'Tempo di pianificazione settimanale', improvement: true },
        { value: '+40%', label: 'Partecipazione agli eventi ricorrenti', improvement: true },
        { value: '450+', label: 'Utenti attivi mensili' },
        { value: '99.8%', label: 'Uptime mensile medio' },
      ]}
      resultsSummary="Il team ha recuperato ore preziose ogni settimana, eliminando il lavoro manuale ripetitivo. La partecipazione agli eventi è aumentata grazie a notifiche puntuali e una UX semplificata. L'algoritmo AI ha ridotto i conflitti di turni del 75% nei primi 30 giorni."

      teamTitle="Team cross-functional e delivery agile"
      teamDescription="Progetto sviluppato con un team di 3 developer full-stack, 1 product designer e 1 PM. Sprint settimanali con demo client ogni venerdì. Delivery incrementale con feature flags per rilasci graduali e feedback continuo."

      learnings={{
        title: 'Cosa abbiamo imparato',
        items: [
          'L\'integrazione con calendari esterni (Google/Outlook) richiede gestione attenta di rate limits e sincronizzazione bidirezionale per evitare conflitti.',
          'Gli utenti preferiscono suggerimenti AI trasparenti: mostrare "perché" un slot è consigliato aumenta l\'adozione del 35%.',
          'WebSocket real-time è critico per UX collaborativa ma richiede fallback polling per connessioni instabili.',
          'Onboarding progressivo con tutorial interattivi riduce il drop-off iniziale del 50% rispetto a documentazione statica.',
        ],
      }}

      nextProject={{
        title: 'Energy Intelligence Platform',
        slug: 'energy-intelligence',
      }}
    />
  );
}
