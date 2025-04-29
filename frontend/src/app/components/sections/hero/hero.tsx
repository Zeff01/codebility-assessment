import { Button } from "@/app/components/ui";
import { HeroCard } from "./hero-card";

export const Hero = () => {
  return (
    <section className="max-w-(--content-width) mx-auto py-6">
      <div className="grid gap-3 grid-cols-2">
        <HeroCard
          title="Buy a gift card, get cash back rewards."
          subtitle="Gifting made easier"
          button={<Button variant="light">Shop weekly deals</Button>}
          className="col-span-2 bg-foreground-dark laptop:p-20"
          isPrimaryCard
        />

        <HeroCard
          title="Send gift cards instantly through text."
          button={<Button variant="light">Learn more</Button>}
          className="col-span-2 tablet:col-span-1 bg-background-secondary"
        />

        <HeroCard
          title="Get 1% Moola cash back on all purchases."
          button={<Button variant="light">Get started</Button>}
          className="col-span-2 tablet:col-span-1 bg-background-tertiary"
        />
      </div>
    </section>
  );
};
