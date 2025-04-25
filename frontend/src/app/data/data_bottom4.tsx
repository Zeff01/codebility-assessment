import { StaticImageData } from "next/image";
import appleStore from "../../../public/images/appleStore.png";
import googlePlay from "../../../public/images/googlePlay.png";
import google from "../../../public/images/google.png";
export type Testimonial = {
  id: number;
  text: string;
  rating: number;
  source: string;
  logoSrc: string | StaticImageData;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "This is a great app that saves money. Saved over 200 dollars so far!",
    rating: 5,
    source: "Apple Store",
    logoSrc: appleStore,
  },
  {
    id: 2,
    text: "Great way to save on the stuff you buy anyway. I always check Moola first when shopping online or in-store. It also helped me organize all my rewards cards in one place which stream-lined my wallet.",
    rating: 4,
    source: "Google",
    logoSrc: google,
  },
  {
    id: 3,
    text: "It's very easy to use, has more than 200 brands, and also lots of discounts and bonuses. Once you've paid you can receive the gift cards within 1 minute.",
    rating: 5,
    source: "Google Play",
    logoSrc: googlePlay,
  },
];

export const renderStars = (rating: number) => {
  return Array(5)
    .fill(0)
    .map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={i < rating ? "#FFD700" : "#D3D3D3"}
        className="w-5 h-5 inline-block"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    ));
};
