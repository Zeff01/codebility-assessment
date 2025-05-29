import Link from "next/link";

export interface ShopCardProps {
    image: ImageDataProps;
    name: string;
    promoIncrease: number;
    redirect: string;
}

const ShopCard = ({ image, name, promoIncrease, redirect }: ShopCardProps) => {
    return (
        <Link
            href={redirect}
            className="rounded-xl shadow-md border border-neutral-300 hover:scale-105 duration-200"
        >
            <section className="bg-muted flex justify-center items-center py-6 rounded-t-xl">
                <img
                    src={image.url}
                    alt={image.alt}
                    className="w-23 rounded-2xl"
                />
            </section>
            <section className="flex flex-col py-5 px-3 bg-white rounded-xl">
                <h3 className="font-semibold text-[#494c56] text-sm">{name}</h3>
                <span className="mt-2 text-sm">Buy now and Get</span>
                <div className="bg-[#339933] text-white font-semibold pl-1 font-foreground rounded-tr-full rounded-br-full">
                    {promoIncrease}% more
                </div>
            </section>
        </Link>
    );
};

export default ShopCard;
