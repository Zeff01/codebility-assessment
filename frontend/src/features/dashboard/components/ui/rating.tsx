import { Star } from "lucide-react";

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
