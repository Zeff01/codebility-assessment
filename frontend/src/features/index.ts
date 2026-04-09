/**
 * Features:
 * - common: Reusable UI components (Button, Card, Badge, Layout)
 * - navigation: Navigation/header components
 * - hero: Hero section components
 */

// Common Feature
export { 
  Button,
  Card,
  Badge,
  Container,
  Section,
  PageLayout,
  Grid,
  type ButtonProps,
  type CardProps,
  type BadgeProps,
  type LayoutProps,
  type PageLayoutProps,
  type GridProps,
} from './common';

// Navigation Feature
export {
  Navigation,
  type NavLink,
  type NavigationProps,
} from './navigation';

// Hero Feature
export {
  HeroSection,
  type HeroSectionProps,
} from './hero';

// Benefits Feature
export {
  WhyChooseSection,
  type WhyChooseSectionProps,
} from './benefits';
