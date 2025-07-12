import Card from "@/features/dashboard/components/ui/card";
import Image from "next/image";

/**
 * PartnersCard component
 *
 * A responsive reusable partners card component that can be used to create a partners card.
 *
 * @param image - image of the partners card
 * @param title - title of the partners card
 * @param cashback - cashback of the partners card
 * @param cashbackText - cashback text of the partners card
 * @returns PartnersCard component
 *
 * @example
 * <PartnersCard image="https://www.moola.com/assets/media/images/partners/partners-card.png" title="Partners Card" cashback={true} cashbackText="10% Cashback" />
 */

export interface PartnersCardProps {
  image: string;
  title: string;
  cashback?: boolean;
  cashbackText?: string;
}

function PartnersCard({
  image,
  title,
  cashback = false,
  cashbackText,
}: PartnersCardProps) {
  return (
    <Card className='h-full min-h-72 w-full border border-[#ececec] flex flex-col rounded-xl'>
      <Card.Header className='h-[60%] bg-[#ececec] rounded-t-xl'>
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className='object-cover rounded-2xl h-auto w-auto'
        />
      </Card.Header>
      <Card.Content className='h-[40%] p-4 flex flex-col gap-2 rounded-b-xl'>
        <p className='text-sm md:text-base text-[#494656] font-semibold '>
          {title}
        </p>
        {cashback && (
          <div className='flex flex-col gap-2'>
            <p className='text-xs md:text-sm text-[#494656] font-medium'>
              Buy Now And Get
            </p>
            <div className='rounded-r-xl text-xs text-white p-1 bg-[#339933]'>
              {cashbackText}
            </div>
          </div>
        )}
      </Card.Content>
    </Card>
  );
}

export default PartnersCard;
