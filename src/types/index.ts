export interface InfrastructureFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
}

export interface CampaignMetrics {
  totalClaimed: number;
  todayRevenue: number;
  roas: string;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
