import Card from "@/features/dashboard/components/ui/card";
import Image from "next/image";

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
