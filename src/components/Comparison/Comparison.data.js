import { Clock, TrendingUp, Zap } from 'lucide-react';

export const COMPARISON_MATRIX = [
  {
    feature: 'Included Minutes',
    starter: '250 min',
    growth: '800 min',
    scale: '3,000 min',
  },
  {
    feature: 'Effective Rate',
    starter: '$0.13/min',
    growth: '$0.12/min',
    scale: '$0.11/min',
  },
  {
    feature: 'AI Voice Agents',
    starter: '2 Agents',
    growth: '10 Agents',
    scale: 'Unlimited',
  },
  {
    feature: 'Voice Stack',
    starter: 'Standard Stack',
    growth: 'Standard + Premium',
    scale: 'Realtime + Ultra-Low Latency',
  },
  {
    feature: 'Support Level',
    starter: 'Email Support',
    growth: 'Priority Support',
    scale: 'Dedicated Success Mgr + SLA',
  },
  {
    feature: 'Call Recording & Logs',
    starter: true,
    growth: true,
    scale: true,
  },
  {
    feature: 'Custom Carrier SIP Trunk',
    starter: true,
    growth: true,
    scale: true,
  },
  {
    feature: 'Enterprise SLA Guarantee',
    starter: false,
    growth: false,
    scale: true,
  },
];

export const FLIP_CARDS_DATA = [
  {
    id: 'card-1',
    theme: 'orange',
    badge: '+38% CONVERSION',
    icon: TrendingUp,
    frontTitle: 'Sales & Lead Revival',
    frontSubtitle: 'Outbound callbacks in under 3 seconds.',
    frontMetric: '+38%',
    frontMetricLabel: 'Lead-to-Meeting Lift',
    backTitle: 'Technical Specifications',
    backSpecs: [
      'Sub-second AI response latency',
      'Automated CRM deal stage sync',
      'Objection handling knowledge base',
      'Real-time lead scoring triggers',
    ],
  },
  {
    id: 'card-2',
    theme: 'blue',
    badge: 'SAVED 60 HRS/WK',
    icon: Clock,
    frontTitle: '24/7 Front Desk Ops',
    frontSubtitle: 'Replaced after-hours answering service.',
    frontMetric: '60 Hrs',
    frontMetricLabel: 'Saved Per Week',
    backTitle: 'Technical Specifications',
    backSpecs: [
      'Multi-turn FAQ resolution',
      'Context packet attached on transfer',
      'Sub-second queue skipping',
      'Zero porting downtime',
    ],
  },
  {
    id: 'card-3',
    theme: 'green',
    badge: 'LIVE IN 4 DAYS',
    icon: Zap,
    frontTitle: 'BYON Carrier Integration',
    frontSubtitle: 'Direct SIP trunk connection.',
    frontMetric: '4 Days',
    frontMetricLabel: 'Time to Production',
    backTitle: 'Technical Specifications',
    backSpecs: [
      'Twilio, Bandwidth & Plivo ready',
      'Zero carrier relationship change',
      '100% phone number porting rights kept',
      'Carrier-grade voice passthrough',
    ],
  },
];