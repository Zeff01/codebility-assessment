import { Star } from "lucide-react";

/**
 * Rating component
 *
 * A responsive reusable rating component that can be used to create a rating.
 *
 * @param stars - number of stars
 * @returns Rating component
 *
 * @example
 * <Rating stars={5} />
 */

interface RatingProps {
  stars: number;
}

function Rating({ stars }: RatingProps) {
  return (
    <div className='flex gap-1'>
      {Array.from({ length: stars }, (_, index) => (
        <Star key={index} className='w-5 h-5 fill-[#b19500] text-[#b19500]' />
      ))}
    </div>
  );
}

export default Rating;
