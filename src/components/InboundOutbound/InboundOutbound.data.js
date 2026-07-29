import { Headset, Languages, TrendingUp } from 'lucide-react';

export const INBOUND_OUTBOUND_CARDS = [
  {
    id: 'inbound',
    number: '/ 01',
    theme: 'orange',
    badgeText: 'INBOUND',
    Icon: Headset,
    title: '24/7 virtual front desk',
    description:
      'An always-on AI receptionist that greets every caller instantly, answers FAQs from your knowledge base, and escalates to your team only when needed.',
    floatingBadges: [
      { text: '24/7 Availability', angle: '-5deg', top: '14%', right: '24%' },
      { text: 'Smart Escalation', angle: '4deg', top: '34%', right: '8%' },
    ],
    highlights: [
      'Sub-second AI response pickup',
      'Knowledge base FAQ auto-resolution',
      'Context-aware team escalation',
    ],
    metric: { value: '< 1.2s', label: 'Average Pickup' },
  },
  {
    id: 'outbound',
    number: '/ 02',
    theme: 'blue',
    badgeText: 'OUTBOUND',
    Icon: TrendingUp,
    title: 'Proactive growth engine',
    description:
      'Automate outbound lead engagement, lead revival campaigns, and trigger instant speed-to-lead callbacks — all managed from one unified dashboard.',
    floatingBadges: [
      { text: '+38% Conversion', angle: '-4deg', top: '14%', right: '22%' },
      { text: 'Speed-to-Lead', angle: '5deg', top: '34%', right: '10%' },
    ],
    highlights: [
      'Automated campaign lead waves',
      'Real-time pipeline & CRM sync',
      'Smart call timing optimization',
    ],
    metric: { value: '3.4x', label: 'Pipeline Velocity' },
  },
  {
    id: 'multilingual',
    number: '/ 03',
    theme: 'violet',
    badgeText: 'GLOBAL',
    Icon: Languages,
    title: 'Multilingual fluency',
    description:
      'Auto-detects the caller language and switches mid-conversation for a true local feel across every region — no complex setup required.',
    floatingBadges: [
      { text: 'Hello 👋', angle: '-6deg', top: '14%', right: '28%' },
      { text: 'Hola 🇪🇸', angle: '4deg', top: '34%', right: '12%' },
    ],
    highlights: [
      '18+ global languages supported',
      'Real-time accent & dialect adaptation',
      'Unified brand tone worldwide',
    ],
    metric: { value: '18+', label: 'Languages Supported' },
  },
];