import Container from "./ui/Container";
import Button from "./ui/Button";
import { ArrowRight } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description:
      "Juicy beef patty with melted cheese, lettuce, tomato, and our special sauce.",
    price: "$8.99",
    image: "/img/classic-cheeseburger.jpeg",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Crispy Chicken Sandwich",
    description:
      "Crispy fried chicken breast with pickles and mayo on a toasted bun.",
    price: "$9.49",
    image: "/img/crispy-chicken-sandwich.jpeg",
  },
  {
    id: 3,
    name: "Loaded Fries Supreme",
    description:
      "Crispy fries topped with cheese sauce, bacon bits, and green onions.",
    price: "$6.99",
    image: "/img/loaded-fries-supreme.jpeg",
    tag: "New",
  },
  {
    id: 4,
    name: "Double Chocolate Shake",
    description:
      "Rich and creamy chocolate shake with whipped cream and chocolate drizzle.",
    price: "$5.49",
    image: "/img/double-chocolate-shake.jpeg",
  },
];

const FeaturedMenu = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fan Favorites
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our most loved menu items that keep our customers coming back for
            more. Fresh, delicious, and made with love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {item.tag && (
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.tag}
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 text-pretty">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-orange-500">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="text-orange-500 font-medium text-sm inline-flex items-center hover:text-orange-600 transition-colors cursor-pointer">
                  Add to Order
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="secondary">View Full Menu</Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedMenu;
