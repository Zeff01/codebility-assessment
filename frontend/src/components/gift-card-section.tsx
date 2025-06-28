import Button from "./button";
import GiftCard from "./gift-card";

export default function GiftCardSection() {
  const giftCards = [
    {
      title: "Amazon.ca",
      image: "/placeholder.webp",
      price: 5000,
      discount: 15,
      description: "Everything you need, delivered fast",
      popular: true
    },
    {
      title: "Walmart Canada",
      image: "/placeholder.webp",
      price: 5000,
      discount: 12,
      description: "Save money, live better",
      popular: true
    },
    {
      title: "DoorDash",
      image: "/placeholder.webp",
      price: 5000,
      discount: 18,
      description: "Food delivery made easy",
    },
    {
      title: "PetSmart",
      image: "/placeholder.webp",
      price: 5000,
      discount: 10,
      description: "Everything for your pets"
    },
    {
      title: "Esso™ and Mobil™",
      image: "/placeholder.webp",
      price: 5000,
      discount: 14,
      description: "Fuel your adventures"
    },
    {
      title: "Starbucks",
      image: "/placeholder.webp",
      price: 5000,
      discount: 8,
      description: "Your daily coffee fix"
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
          Send A Gift Card and Collect Rewards
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Moola provides unbeatable deals on the gift cards you love. Buy for a
          friend or better yet, for yourself and collect rewards. With Moola,
          giving the perfect gift and saving money on the brands you love has
          never been easier or more convenient.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>250+ Brands</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Instant Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Secure Payments</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {giftCards.map((gift, index) => (
          <GiftCard key={index} gift={gift} />
        ))}
      </div>

      <div className="text-center mt-16">
        <Button variant="outline" size="lg" className="mr-4">
          View All Gift Cards
        </Button>
      </div>
    </section>
  );
}
