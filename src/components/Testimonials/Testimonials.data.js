import { Clock, TrendingUp, Zap } from 'lucide-react';

export const TESTIMONIAL_METRICS = [
  {
    id: 'calls',
    icon: Zap,
    value: '2.4M+',
    label: 'Calls handled / month',
    color: '#fd7a03',
  },
  {
    id: 'time',
    icon: Clock,
    value: '62%',
    label: 'Average ops time saved',
    color: '#0684bc',
  },
  {
    id: 'leads',
    icon: TrendingUp,
    value: '3.1x',
    label: 'Lift in qualified leads',
    color: '#10b981',
  },
];

export const TESTIMONIAL_REVIEWS = [
  {
    id: 1,
    badge: 'LIVE IN 4 DAYS',
    badgeTheme: 'orange',
    quote:
      'I was quoted 6 months by an enterprise vendor. We had a working voice agent in production by day four — connected directly to our existing SIP trunk.',
    author: 'Daniel Reyes',
    role: 'CTO',
    company: 'Bright Dental Group',
    rating: 5,
    avatarBg: 'linear-gradient(135deg, #fd7a03, #fc9507)',
    initials: 'DR',
  },
  {
    id: 2,
    badge: 'SAVED 60 HRS / WEEK',
    badgeTheme: 'blue',
    quote:
      'Callwen handles every inbound after-hours call now. We replaced an offshore answering service inside two weeks and our lead reply time dropped to 1.2 seconds.',
    author: 'Lina Okafor',
    role: 'VP Operations',
    company: 'Marlowe Logistics',
    rating: 5,
    avatarBg: 'linear-gradient(135deg, #0684bc, #0a9ed8)',
    initials: 'LO',
  },
  {
    id: 3,
    badge: '+38% CONVERSION',
    badgeTheme: 'green',
    quote:
      'The agent handles objections better than our junior SDRs. Real interruptions, real follow-up questions — prospects don’t even realize it’s AI until we tell them.',
    author: 'Marcus Chen',
    role: 'Head of Sales',
    company: 'Northwind Solar',
    rating: 5,
    avatarBg: 'linear-gradient(135deg, #10b981, #34d399)',
    initials: 'MC',
  },
  {
    id: 4,
    badge: 'ZERO PORTING DELAY',
    badgeTheme: 'purple',
    quote:
      'Bringing our own carrier numbers was the deciding factor. No porting, no phone company red tape. Plugged our Twilio account in and started receiving calls instantly.',
    author: 'Sarah Jenkins',
    role: 'Co-Founder & COO',
    company: 'Aero Health System',
    rating: 5,
    avatarBg: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
    initials: 'SJ',
  },
  {
    id: 5,
    badge: '99.9% UPTIME',
    badgeTheme: 'orange',
    quote:
      'During Black Friday traffic, Callwen answered 14,000 inbound calls without dropping a single packet. Ultra-low latency voice agents are game changers.',
    author: 'Ethan Vance',
    role: 'VP Engineering',
    company: 'Kinetix Retail',
    rating: 5,
    avatarBg: 'linear-gradient(135deg, #fd7a03, #e65c00)',
    initials: 'EV',
  },
  {
    id: 6,
    badge: '3.5X SPEED TO LEAD',
    badgeTheme: 'blue',
    quote:
      'Outbound callbacks trigger within 3 seconds of a web form submission. Our meeting booking rate jumped 3.5x in the first 30 days of rollout.',
    author: 'Rachel Adams',
    role: 'Director of Growth',
    company: 'Apex SaaS Labs',
    rating: 5,
    avatarBg: 'linear-gradient(135deg, #0684bc, #025a82)',
    initials: 'RA',
  },
];