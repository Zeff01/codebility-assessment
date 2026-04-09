import React from 'react';
import type { LayoutProps } from '../types/layout.types';

/**
 * Container - Standard content wrapper with responsive padding
 * Provides max-width constraint and horizontal padding
 */
export const Container = ({ children, className = '' }: LayoutProps) => {
  return <div className={`max-w-7xl mx-auto px-6 md:px-8 lg:px-12 ${className}`}>{children}</div>;
};
