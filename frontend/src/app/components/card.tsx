import Image from "next/image";

type CardProps = {
  imageLink: string;
  title: string;
};

function CardComponent({ imageLink, title }: CardProps) {
  return (
    <div className="bg-[#fa5901] p-6 rounded-2xl shadow-lg w-full mx-auto ">
      <Image src={imageLink} alt="pizza" width={200} height={200} className=" w-40 h-40 object-cover rounded-full -mt-25 m-auto border-6 !shadow-2xl border-amber-50" />
      <h2 className="text-xl font-bold text-center mt-4 text-white mb-3">{title}</h2>
      <button className="rounded-md px-3 py-2 w-full font-bold border-4 transition  border-white text-white hover:bg-white hover:text-[#fa5901] ">View Full Recipe</button>
    </div>
  );
}

export default CardComponent;
