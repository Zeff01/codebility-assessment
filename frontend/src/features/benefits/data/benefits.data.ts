import { Benefit } from '../types/benefits.types';
import { COLORS, ICON_SIZES } from '../constants/theme.constants';
import { CashbackIcon, BrandsIcon, InstantIcon, SecurityIcon } from './benefit-icons';

export const Benefits: Benefit[] = [
  {
    id: 'cashback',
    title: 'Cash Back Rewards',
    description:
      'Every time you shop, you earn. Get up to 15% cash back on your favorite brands, deposited directly to your wallet.',
    icon: CashbackIcon,
    gradient: 'linear-gradient(140deg, #cdb6f2 0%, #eebfdf 100%)',
    iconBg: COLORS.primary,
    iconSize: ICON_SIZES.large,
    titleSize: 16,
    descSize: 13,
    flex: '1.1',
    layout: 'vertical',
    column: 'left',
  },
  {
    id: 'brands',
    title: '250+ Top Brands',
    description:
      "From fashion to food, tech to travel. We have the world's most loved brands. Order one now!",
    icon: BrandsIcon,
    gradient: 'linear-gradient(140deg, #dccff6 0%, #f0d8f3 100%)',
    iconBg: COLORS.primary,
    iconSize: ICON_SIZES.medium,
    titleSize: 14,
    descSize: 12,
    flex: '0.9',
    layout: 'vertical',
    column: 'left',
  },
  {
    id: 'instant',
    title: 'Instant Delivery',
    description:
      'No waiting around. Your digital gift cards are delivered to your inbox and wallet in milliseconds.',
    icon: InstantIcon,
    gradient: 'linear-gradient(140deg, #f0e5fb 0%, #e6d4f8 100%)',
    iconBg: COLORS.accent,
    iconSize: ICON_SIZES.mediumRound,
    titleSize: 14,
    descSize: 12,
    layout: 'horizontal',
    column: 'right',
  },
  {
    id: 'security',
    title: 'Bank-Grade Security',
    description:
      'Your data and rewards are protected with high-level encryption and biometric authentication.',
    icon: SecurityIcon,
    gradient: `linear-gradient(155deg, ${COLORS.darkGradient1} 0%, ${COLORS.darkGradient2} 100%)`,
    iconBg: 'rgba(255,255,255,0.17)',
    iconSize: ICON_SIZES.xl,
    titleSize: 20,
    descSize: 13.5,
    layout: 'vertical',
    column: 'right',
    titleColor: '#fff',
    descriptionColor: 'rgba(255,255,255,0.85)',
    iconBorder: '1px solid rgba(255,255,255,0.28)',
  },
];
