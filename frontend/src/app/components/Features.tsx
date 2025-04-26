import Container from "./ui/Container";
import { Clock, Truck, Award, Leaf } from "lucide-react";

const features = [
  {
    id: 1,
    icon: Clock,
    title: "Fast Delivery",
    description:
      "Get your food delivered in under 30 minutes or your next order is free.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 2,
    icon: Award,
    title: "Best Quality",
    description:
      "We use only the finest ingredients to ensure every bite is delicious.",
    color: "bg-teal-100 text-teal-600",
  },
  {
    id: 3,
    icon: Truck,
    title: "Free Delivery",
    description:
      "Enjoy free delivery on all orders over $25 within our delivery zones.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "Our ingredients are sourced daily from local suppliers for maximum freshness.",
    color: "bg-green-100 text-green-600",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50">
      <Container>
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-600 font-medium text-sm mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Perfect Blend of
            <span className="block text-orange-500">Quality & Convenience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best food delivery experience with
            quality, speed, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color} mb-6 transition-transform group-hover:scale-110`}
                >
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Features;
