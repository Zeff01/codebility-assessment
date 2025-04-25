// Remove this import - we don't need to import the actual image file
import { StaticImageData } from "next/image";
import petsmart from "../../../public/images/petsmart.jpg";
import doordash from "../../../public/images/doordash.jpg";
import essoMobile from "../../../public/images/essoMobile.jpg";
import starbucks from "../../../public/images/starbucks.png";
import amazon from "../../../public/images/amazon.jpg";
import wayfair from "../../../public/images/wayfair.png";
import walmart from "../../../public/images/walmart.png";

export type GiftCard = {
  id: number;
  name: string;
  logo: string | StaticImageData;
  discount: string;
  buyText: string;
};

export const giftCards: GiftCard[] = [
  {
    id: 1,
    name: "Petsmart",
    logo: petsmart,
    discount: "6% More",
    buyText: "Buy Now And Get",
  },
  {
    id: 2,
    name: "DoorDash",
    logo: doordash,
    discount: "1.5% More",
    buyText: "Buy Now And Get",
  },
  {
    id: 3,
    name: "Esso™ and Mobil™",
    logo: essoMobile,
    discount: "1% More",
    buyText: "Buy Now And Get",
  },
  {
    id: 4,
    name: "Starbucks",
    logo: starbucks,
    discount: "",
    buyText: "",
  },
  {
    id: 5,
    name: "Amazon.ca",
    logo: amazon,
    discount: "",
    buyText: "",
  },
  {
    id: 6,
    name: "Wayfair",
    logo: wayfair,
    discount: "1% More",
    buyText: "Buy Now And Get",
  },
  {
    id: 7,
    name: "Walmart Canada",
    logo: walmart,
    discount: "1% More",
    buyText: "Buy Now And Get",
  },
];
