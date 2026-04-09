import React from 'react';

export interface CardProps {
  variant?: 'default' | 'featured' | 'stats';
  className?: string;
  children: React.ReactNode;
}
