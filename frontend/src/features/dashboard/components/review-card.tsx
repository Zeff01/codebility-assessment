import Card from "@/features/dashboard/components/ui/card";
import Image from "next/image";
import Rating from "@/features/dashboard/components/ui/rating";

/**
 * ReviewCard component
 *
 * A responsive reusable review card component that can be used to create a review card.
 *
 * @param review - review of the review card
 * @param rating - rating of the review card
 * @param platform - platform of the review card
 * @returns ReviewCard component
 *
 * @example
 * <ReviewCard review="This is a review" rating={5} platform="https://www.moola.com/assets/media/images/review-card.png" />
 */

export interface ReviewCardProps {
  review: string;
  rating: number;
  platform: string;
}

function ReviewCard({ review, rating, platform }: ReviewCardProps) {
  return (
    <Card className='h-full min-h-72 w-full rounded-3xl p-8 flex flex-col items-center justify-center '>
      <Card.Content className='flex flex-col items-center justify-center gap-4'>
        <p className='font-bold text-sm md:text-base text-center text-[#6d6d6d]'>
          {review}
        </p>
        <Rating stars={rating} />
        <Image
          src={platform}
          alt={platform}
          width={100}
          height={100}
          className=' object-contain'
        />
      </Card.Content>
    </Card>
  );
}

export default ReviewCard;
