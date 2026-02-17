import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description:
      'Experience crystal-clear audio with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cushions. Perfect for music lovers and professionals alike.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'Electronics',
    stock: 50,
    rating: 4.8,
    reviews: 1247,
  },
  {
    id: '2',
    name: 'Minimalist Leather Watch',
    description:
      'Elegant timepiece crafted with genuine Italian leather and Swiss movement. The minimalist design complements any outfit, from casual to formal. Water-resistant up to 50 meters.',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'Accessories',
    stock: 30,
    rating: 4.6,
    reviews: 892,
  },
  {
    id: '3',
    name: 'Smart Fitness Tracker',
    description:
      'Track your health and fitness goals with precision. Features include heart rate monitoring, sleep tracking, GPS, and 7-day battery life. Compatible with iOS and Android.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80',
    category: 'Electronics',
    stock: 100,
    rating: 4.5,
    reviews: 2156,
  },
  {
    id: '4',
    name: 'Organic Cotton T-Shirt',
    description:
      'Sustainable fashion meets comfort. Made from 100% organic cotton with eco-friendly dyes. Pre-shrunk and designed for a relaxed fit that lasts wash after wash.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    category: 'Clothing',
    stock: 200,
    rating: 4.7,
    reviews: 543,
  },
  {
    id: '5',
    name: 'Professional Camera Backpack',
    description:
      'Protect your gear with this durable, weather-resistant camera backpack. Features customizable compartments, laptop sleeve, and quick-access side pockets for photographers on the go.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    category: 'Accessories',
    stock: 45,
    rating: 4.9,
    reviews: 387,
  },
  {
    id: '6',
    name: 'Ceramic Pour-Over Coffee Set',
    description:
      'Elevate your morning ritual with this handcrafted ceramic pour-over set. Includes dripper, carafe, and two matching cups. Creates a smooth, rich coffee every time.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    category: 'Home',
    stock: 75,
    rating: 4.4,
    reviews: 218,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category);
}
