import { Button } from "@/app/components/ui";
import Image from "next/image";
import { type Feature } from "./types";

type FeatureItemProps = {
  feature: Feature;
};

export const FeatureItem = ({ feature }: FeatureItemProps) => {
  const { title, description, buttonLabel } = feature;

  return (
    <div className="col-span-3 tablet:col-span-1 px-6 py-10 tablet:px-8 tablet:py-12 rounded-3xl grid gap-6 items-start content-between justify-items-start border border-foreground/10">
      <div className="grid gap-4">
        <div className="flex gap-3 items-center">
          <Image src="/feature-svg.svg" alt="Feature tag" width={24} height={24} />
          <h3 className="h5">{title}</h3>
        </div>
        <p>{description}</p>
      </div>
      <Button>{buttonLabel}</Button>
    </div>
  );
};
