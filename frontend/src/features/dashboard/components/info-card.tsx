import Card from "@/features/dashboard/components/ui/card";
import Button from "@/features/dashboard/components/ui/button";
import Image from "next/image";

/**
 * InfoCard component
 *
 * A responsive reusable info card component that can be used to create a info card.
 *
 * @param title - title of the info card
 * @param description - description of the info card
 * @param buttonText - text of the button
 * @returns InfoCard component
 *
 * @example
 * <InfoCard title="Info Card" description="This is a info card" buttonText="Button" />
 */

export interface InfoCardProps {
  title: string;
  description: string;
  buttonText: string;
}

function InfoCard({ title, description, buttonText }: InfoCardProps) {
  return (
    <Card className='h-full min-h-72 w-full border rounded-3xl border-[#ececec] p-8 flex flex-col items-center justify-center bg-[#ececec]'>
      <Card.Content className='flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <Image
            src='https://www.moola.com/assets/media/images/info-card-tag.svg'
            alt='info-card-tag'
            width={100}
            height={100}
            className='w-10 h-10 object-contain'
          />
          <p className='font-bold text-lg md:text-xl  text-[#4c0d94]'>
            {title}
          </p>
        </div>

        <p className='text-xs md:text-sm text-[#212925]'>{description}</p>
        <Button
          radius='full'
          className='bg-[#4c0d94] text-base uppercase text-white hover:bg-[#4c0d94]/90'>
          {buttonText}
        </Button>
      </Card.Content>
    </Card>
  );
}

export default InfoCard;
