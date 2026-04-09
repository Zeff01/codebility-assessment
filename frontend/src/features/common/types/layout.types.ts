import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export interface PageLayoutProps {
  children: React.ReactNode;
}

export interface GridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
}
