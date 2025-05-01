export interface Feature {
  iconName: string;
  title: string;
  description: string;
  color: string;
  image: string;
  stats: string;
}

export const features: Feature[] = [
  {
    iconName: 'credit-card',
    title: 'Smart Card Management',
    description:
      'Securely store and manage all your gift cards in one place with real-time balance updates.',
    color: 'from-purple-500 to-indigo-600',
    image: '/features/card-management.webp',
    stats: '15M+ Cards Managed',
  },
  {
    iconName: 'gift',
    title: 'AI-Powered Gifting',
    description:
      'Our AI suggests perfect gifts based on recipient preferences and your budget.',
    color: 'from-pink-500 to-rose-600',
    image: '/features/ai-gifting.webp',
    stats: '98% Satisfaction Rate',
  },
  {
    iconName: 'discount',
    title: 'Dynamic Rewards',
    description:
      'Earn personalized cashback rewards that adapt to your spending patterns.',
    color: 'from-amber-500 to-orange-600',
    image: '/features/rewards.webp',
    stats: '$2.3M+ Saved Monthly',
  },
  {
    iconName: 'devices',
    title: 'Multi-Platform Access',
    description:
      'Seamlessly access your cards across all your devices with perfect synchronization.',
    color: 'from-emerald-500 to-teal-600',
    image: '/features/multi-platform.webp',
    stats: 'Available on 5+ Platforms',
  },
  {
    iconName: 'lock',
    title: 'Quantum-Secure Storage',
    description:
      'Future-proof security with quantum encryption protecting your financial data.',
    color: 'from-blue-500 to-cyan-600',
    image: '/features/security.webp',
    stats: '0 Data Breaches',
  },
];
