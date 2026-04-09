import React from 'react';
import { ICON_SIZES } from '../constants/theme.constants';

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  iconBg: string;
  iconSize: (typeof ICON_SIZES)[keyof typeof ICON_SIZES];
  titleSize: number;
  descSize: number;
  flex?: number | string;
  layout?: 'vertical' | 'horizontal';
  column: 'left' | 'right';
  titleColor?: string;
  descriptionColor?: string;
  iconBorder?: string;
}

export interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
  iconSize: (typeof ICON_SIZES)[keyof typeof ICON_SIZES];
  titleSize?: number;
  descSize?: number;
  flex?: number | string;
  layout?: 'vertical' | 'horizontal';
  titleColor?: string;
  descriptionColor?: string;
  iconBorder?: string;
}

export interface WhyChooseSectionProps {
  heading?: string;
  subtitle?: string;
}
