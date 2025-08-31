export interface CardItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  price?: number;
  originalPrice?: number;
  rating?: number;
  category?: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
  duration?: string;
  benefits?: string[];
  badge?: string;
  instructor?: string;
}

export interface CardProps {
  item: CardItem;
  variant?: "default" | "minimal" | "detailed";
}
