import { featuredCards } from "@/data/data";
import Card from "../ui/Card";

const FeaturedCards = () => {
  return (
    <section className="py-16 bg-moola-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-moola-text">
          Featured Cards
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Discover our most popular gift cards and exclusive deals. Handpicked
          for you!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCards.map((card) => (
            <Card key={card.id} item={card} variant="detailed" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
