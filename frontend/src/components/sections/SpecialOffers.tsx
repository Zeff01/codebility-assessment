import { specialOffers } from "@/data/data";
import Card from "../ui/Card";
import { Carousel } from "../ui/Carousel";

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-moola-text">
          Special Offers
        </h2>
        <Carousel>
          {specialOffers.map((offer) => (
            <div key={offer.id} className="px-4">
              <Card item={offer} variant="default" />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default SpecialOffers;
