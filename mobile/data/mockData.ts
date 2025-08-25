export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  image?: string
  isPopular?: boolean
}

export interface Restaurant {
  id: string
  name: string
  description: string
  image: string
  rating: number
  deliveryTime: string
  deliveryFee: number
  cuisine: string
  address: string
  phone: string
}

export const restaurantData: Restaurant = {
  id: "1",
  name: "Purple Bistro",
  description: "Fine dining experience with contemporary cuisine and exceptional service",
  image: "/elegant-restaurant-interior.png",
  rating: 4.8,
  deliveryTime: "25-35 min",
  deliveryFee: 2.99,
  cuisine: "Contemporary",
  address: "123 Main Street, Downtown",
  phone: "(555) 123-4567",
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Truffle Risotto",
    description: "Creamy arborio rice with black truffle, parmesan, and fresh herbs",
    price: 28.99,
    category: "Main Course",
    isPopular: true,
  },
  {
    id: "2",
    name: "Grilled Salmon",
    description: "Atlantic salmon with lemon butter sauce and seasonal vegetables",
    price: 24.99,
    category: "Main Course",
  },
  {
    id: "3",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with house-made dressing and croutons",
    price: 14.99,
    category: "Appetizer",
  },
  {
    id: "4",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    price: 9.99,
    category: "Dessert",
    isPopular: true,
  },
  {
    id: "5",
    name: "Beef Tenderloin",
    description: "Premium cut with red wine reduction and roasted potatoes",
    price: 34.99,
    category: "Main Course",
  },
  {
    id: "6",
    name: "Burrata Caprese",
    description: "Fresh burrata with heirloom tomatoes and basil oil",
    price: 16.99,
    category: "Appetizer",
  },
  {
    id: "7",
    name: "Tiramisu",
    description: "Classic Italian dessert with espresso and mascarpone",
    price: 8.99,
    category: "Dessert",
  },
  {
    id: "8",
    name: "Lobster Bisque",
    description: "Rich and creamy soup with fresh lobster meat",
    price: 12.99,
    category: "Appetizer",
    isPopular: true,
  },
]

export const categories = ["All", "Appetizer", "Main Course", "Dessert"]
