export interface Post {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  author?: string; // Optional for that extra "Senior" touch
}
