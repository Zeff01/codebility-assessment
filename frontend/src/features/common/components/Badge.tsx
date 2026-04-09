import React from 'react';
import type { BadgeProps } from '../types/badge.types';

export const Badge = ({ variant = 'default', icon, children, className = '' }: BadgeProps) => {
  const baseStyles = 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium font-poppins';

  const variantStyles = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
    primary: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <div className={combinedClassName}>
      {icon && <span>{icon}</span>}
      {children}
    </div>
  );
};
