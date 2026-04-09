import React from 'react';
import type { ButtonProps } from '../types/button.types';

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
}: ButtonProps) => {
  const baseStyles = 'font-semibold font-poppins rounded-full transition-all duration-200 inline-flex items-center justify-center gap-2';

  const variantStyles = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700',
    outline: 'border-2 border-gray-300 text-gray-900 hover:bg-gray-50 active:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-900',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};
