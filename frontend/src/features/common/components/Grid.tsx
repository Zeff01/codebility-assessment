import React from 'react';
import type { GridProps } from '../types/layout.types';

/**
 * Grid - Responsive grid for card layouts
 * Adapts column count and gap based on screen size
 */
const gapStyles = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
};

const columnStyles = {
  1: 'grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-2 lg:grid-cols-3',
  4: 'md:grid-cols-2 lg:grid-cols-4',
};

export const Grid = ({ children, columns = 3, gap = 'md' }: GridProps) => {
  return <div className={`grid grid-cols-1 ${columnStyles[columns]} ${gapStyles[gap]}`}>{children}</div>;
};
