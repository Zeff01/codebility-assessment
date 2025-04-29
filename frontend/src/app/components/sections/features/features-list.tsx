import { FeatureItem } from "./feature-item";
import { type Feature } from "./types";

type FeaturesListProps = {
  features: Feature[];
};

export const FeaturesList = ({ features }: FeaturesListProps) => {
  const featuresListElement = (
    <div className="grid gap-3 grid-cols-3 tablet:grid-cols-[repeat(auto-fit,minmax(23.75rem,1fr))]">
      {features.map((feature) => (
        <FeatureItem key={feature.id} feature={feature} />
      ))}
    </div>
  );

  return featuresListElement;
};
