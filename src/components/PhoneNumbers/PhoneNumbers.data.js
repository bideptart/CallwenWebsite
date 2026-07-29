import { Phone, Repeat, Wifi, ShieldCheck, Zap, Globe2 } from 'lucide-react';

export const PHONE_NUMBERS_FEATURES = [
  {
    id: 'byon',
    number: '/ 01',
    icon: Phone,
    title: 'Bring your own number',
    description:
      'Already have a carrier account? Connect it and your existing numbers route through Callwen instantly — no porting, no downtime.',
    theme: 'orange',
    iconBg: 'linear-gradient(135deg, #fd7a03, #fc9507)',
    accentColor: '#fd7a03',
    badge: 'Instant SIP Trunk Connection',
    metrics: [
      { label: 'Porting Time', value: '0 Seconds' },
      { label: 'Downtime', value: 'Zero Risk' },
    ],
  },
  {
    id: 'bidirectional',
    number: '/ 02',
    icon: Repeat,
    iconBg: 'linear-gradient(135deg, #0684bc, #0a9ed8)',
    theme: 'blue',
    accentColor: '#0684bc',
    title: 'Inbound and outbound',
    description:
      'One number, both directions. Trigger outbound campaigns or answer every incoming call automatically — same dashboard, same agent.',
    badge: 'Bidirectional Voice Engine',
    metrics: [
      { label: 'Active Direction', value: 'Inbound & Outbound' },
      { label: 'Agent Hub', value: 'Unified' },
    ],
  },
  {
    id: 'carrier-grade',
    number: '/ 03',
    icon: Wifi,
    iconBg: 'linear-gradient(135deg, #10b981, #34d399)',
    theme: 'green',
    accentColor: '#10b981',
    title: 'Carrier-grade voice',
    description:
      "Your provider's global network carries the call. We handle the brain. You keep the relationship, the billing, and the porting rights.",
    badge: 'Direct Carrier Passthrough',
    metrics: [
      { label: 'Network Latency', value: '12ms Avg' },
      { label: 'Porting Rights', value: '100% Yours' },
    ],
  },
];

export const CARRIER_PROVIDERS = ['Twilio', 'Bandwidth', 'Plivo', 'SIP Trunk'];