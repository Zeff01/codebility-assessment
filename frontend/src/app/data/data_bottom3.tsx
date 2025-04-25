import { StaticImageData } from "next/image";
import tag from "../../../public/images/tag.svg";
export type FeatureCard = {
  id: number;
  icon: string | StaticImageData;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

export const featureCards: FeatureCard[] = [
  {
    id: 1,
    icon: tag,
    title: "Deals Each Week",
    description:
      "Each week, we feature new deals in the Moola Marketplace where you can save up to 15% on popular brands. Check out this week's feature deal.",
    buttonText: "SHOP DEALS",
    buttonLink: "/deals",
  },
  {
    id: 2,
    icon: tag,
    title: "Everyday Essentials",
    description:
      "Moola has deals on all your everyday essentials such as grocery, fuel, pharmacy, food delivery, and more. It all adds up to great savings!",
    buttonText: "SHOP ESSENTIALS",
    buttonLink: "/essentials",
  },
  {
    id: 3,
    icon: tag,
    title: "Download App",
    description:
      "Download the Moola App and start collecting cash back and bonus gift vouchers.",
    buttonText: "DOWNLOAD APP",
    buttonLink: "/download",
  },
];
