import { CardItem } from "@/types";

export const featuredCards: CardItem[] = [
  {
    id: "1",
    title: "Walmart Gift Card",
    description: "A gift card for Walmart.",
    image: "/images/1walmart.jpg",
    price: 49.99,
    originalPrice: 89.99,
    rating: 4.8,
    category: "Gift Cards",
    benefits: ["Free shipping", "Exclusive deals"],
    badge: "Bestseller",
  },
  {
    id: "2",
    title: "Mobil Store Gift Card",
    description: "A gift card for Mobil Store.",
    image: "/images/2mobil.jpg",
    price: 79.99,
    originalPrice: 119.99,
    rating: 4.9,
    category: "Gift Cards",
    benefits: ["Free shipping", "Exclusive deals"],
    badge: "New",
  },
  {
    id: "3",
    title: "Kaffee Gift Card",
    description: "A gift card for Kaffee.",
    image: "/images/3kaffee.jpg",
    price: 59.99,
    originalPrice: 99.99,
    rating: 4.7,
    category: "Gift Cards",
    benefits: ["Free shipping", "Exclusive deals"],
    badge: "Bestseller",
  },
];

export const popularCategories: CardItem[] = [
  {
    id: "cat-1",
    title: "Web Development",
    image: "/images/course-1.jpg",
    category: "Development",
  },
  {
    id: "cat-2",
    title: "Data Science",
    image: "/images/course-2.jpg",
    category: "Data",
  },
  {
    id: "cat-3",
    title: "Graphic Design",
    image: "/images/course-3.jpg",
    category: "Design",
  },
];

export const specialOffers: CardItem[] = [
  {
    id: "offer-1",
    title: "Opening soon...",
    description: "Get ready for the ultimate gift card experience.",
    image: "/images/slide1.png",
  },
  {
    id: "offer-2",
    title: "Du schütze dich selbst",
    description: "Schütze deine Geschenkkarten und persönlichen Daten.",
    image: "/images/slide2.png",
  },
  {
    id: "offer-3",
    title: "Licercia & Co.",
    description: "Combine Tailwind with animations for modern design.",
    image: "/images/slide3.png",
  },
];
