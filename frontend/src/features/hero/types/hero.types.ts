export interface HeroSectionProps {
  badge?: string;
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  stats?: {
    label: string;
    value: string;
  };
}
