import React from 'react';

export interface BadgeProps {
  variant?: 'default' | 'primary' | 'success' | 'warning';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
