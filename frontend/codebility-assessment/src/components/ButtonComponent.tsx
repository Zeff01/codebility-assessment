/**
 * @file ButtonComponent.tsx
 * A reusable, customizable button component with various style variants.
 * This component provides consistent button styling throughout the application,
 * with support for different visual variants.
 */

import React from 'react';

/**
 * ButtonProps interface
 * 
 * @interface ButtonProps
 * @property {('primary'|'gradient')} [variant='primary'] - Visual style variant of the button
 *    - primary: Standard button with solid background
 *    - gradient: Button with gradient background
 * @property {React.ReactNode} children - Content to be rendered inside the button
 * @property {() => void} [onClick] - Optional click handler function
 * @property {string} [className=''] - Optional additional CSS classes
 */
interface ButtonProps {
  variant?: 'primary' | 'gradient'; // Redefine the variants if needed
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * Button Component
 * 
 * A flexible button component that supports multiple visual variants.
 * This component can be used throughout the
 * application to ensure UI consistency.
 * 
 * @example
 * // Basic usage
 * <ButtonComponent onClick={() => console.log('Clicked')}>
 *   Click Me
 * </ButtonComponent>
 * 
 * @example
 * // With gradient variant and additional classes
 * <ButtonComponent 
 *   variant="gradient" 
 *   className="w-full mt-4" 
 *   onClick={handleSubmit}
 * >
 *   Submit Form
 * </ButtonComponent>
 */
const ButtonComponent: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick, className = '' }) => {
  /**
   * Base styles applied to all button variants
   * These styles ensure consistent button behavior regardless of visual variant
   */
  const baseStyles = 'cursor-pointer whitespace-nowrap';
  
  /**
   * Variant-specific style definitions
   * This object maps each variant name to its corresponding Tailwind CSS classes
   * 
   * @property {string} primary - Standard button with solid purple background
   * @property {string} gradient - Button with purple gradient background
   */
  const buttonStyles = {
    primary: 'bg-purple-dark text-white rounded-full text-sm',
    gradient: 'bg-gradient-to-r from-[#c701fc] to-[#750dea] text-white rounded-full px-6 py-3',
  };

  return (
    <button className={`${baseStyles} ${buttonStyles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonComponent;