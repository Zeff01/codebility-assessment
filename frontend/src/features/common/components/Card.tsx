import React from 'react';
import type { CardProps } from '../types/card.types';

export const Card = ({ variant = 'default', className = '', children }: CardProps) => {
  const baseStyles = 'rounded-lg';

  const variantStyles = {
    default: 'bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow',
    featured: 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl',
    stats: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return <div className={combinedClassName}>{children}</div>;
};
