import { FeaturesList } from "./features-list";
import { type Feature } from "./types";

const features: Feature[] = [
  {
    id: "feature-1",
    title: "Deals Each Week",
    description:
      "Each week, we feature new deals in the Moola Marketplace where you can save up to 15% on popular brands. Check out this week's feature deal.",
    buttonLabel: "Shop Deals",
  },
  {
    id: "feature-2",
    title: "Everyday Essentials",
    description:
      "Moola has deals on all your everyday essentials such as grocery, fuel, pharmacy, food delivery, and more. It all adds up to great savings!",
    buttonLabel: "Shop Essentials",
  },
  {
    id: "feature-3",
    title: "Download App",
    description: "Download the Moola App and start collecting cash back and bonus gift vouchers.",
    buttonLabel: "Download App",
  },
];

export const Features = () => {
  return (
    <section className="max-w-(--content-width) mx-auto py-12 tablet:py-24">
      <div className="tablet:text-center grid gap-6 mb-12 tablet:mb-16 tablet:justify-items-center">
        <h2 className="h3 max-w-[24ch]">Moola saves money on gifts and everyday essentials</h2>
        <p className="max-w-[60ch]">
          Through Moola, you can easily buy gift cards to your favourite stores at a lower price.
          Why not shop smarter, score deals, and savour the savings!
        </p>
      </div>

      <FeaturesList features={features} />
    </section>
  );
};
