import React from 'react';
import type { PageLayoutProps } from '../types/layout.types';

/**
 * PageLayout - Complete page wrapper with full-height layout
 * Provides min-height viewport coverage and flex column layout
 */
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      {children}
    </div>
  );
};
