export interface HeroSlide {
  title: string;
  description: string;
  cta: string;
  src: string;
  accent: string;
}

export const heroSlides: HeroSlide[] = [
  {
    title: 'Premium Gift Cards',
    description: 'Get the perfect gift for any occasion',
    cta: 'Shop Now',
    src: '/hero-section/giftcard-1.jpeg',
    accent: 'purple',
  },
  {
    title: 'Exclusive Collection',
    description: 'Discover our latest selection of gift cards',
    cta: 'Explore',
    src: '/hero-section/giftcard-2.jpeg',
    accent: 'indigo',
  },
  {
    title: 'Special Offers',
    description: 'Limited time deals on popular brands',
    cta: 'View Deals',
    src: '/hero-section/giftcard-3.jpg',
    accent: 'pink',
  },
  {
    title: 'Custom Gift Cards',
    description: 'Create personalized cards for your loved ones',
    cta: 'Customize',
    src: '/hero-section/giftcard-4.jpeg',
    accent: 'blue',
  },
];
