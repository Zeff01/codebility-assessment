import React from 'react';
import type { LayoutProps } from '../types/layout.types';

/**
 * Section - Standard section wrapper with consistent vertical spacing
 * Provides responsive padding for full-width sections
 */
export const Section = ({ children, className = '' }: LayoutProps) => {
  return <section className={`py-16 md:py-24 lg:py-32 ${className}`}>{children}</section>;
};
