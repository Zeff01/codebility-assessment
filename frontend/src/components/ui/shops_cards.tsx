import Image from "next/image";

{/* Initialization ng Datatypes */}
type CashbackCardProps = {
    logo: string;
    title: string;
    subtitle?: string;
    cashback?: string;
  };
  
  {/* Cashback Card Component UI*/}
  const CashbackCard = ({ logo, title, subtitle, cashback }: CashbackCardProps) => (
    <a
      href="#"
      className="w-full bg-white shadow-lg/10 inset-shadow-xs rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer font-eina"
    >
      <div className="bg-gray-100 flex items-center justify-center h-40">
        <Image src={logo} alt={title} width={500} height={500} className="h-20 w-20 rounded-xl" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-600 text-sm">{title}</h3>
        {subtitle && <p className="text-xs text-gray-500 mb-[-0.5rem]">{subtitle}</p>}
        {cashback && (
          <div className="mt-2 bg-[#339933] text-white text-xs w-full py-1 rounded-r-full inline-block font-bold">
            <div className="ml-1">
             {cashback}
            </div>
          </div>
        )}
      </div>
    </a>
  );
  
  {/* Data for Cards (mas convenient)*/}
  const cardData: CashbackCardProps[] = [
    {
      logo: "/petsmart-logo.png",
      title: "Petsmart",
      subtitle: "Buy Now And Get",
      cashback: "6% More",
    },
    {
      logo: "/Doordash.png",
      title: "DoorDash",
      subtitle: "Buy Now And Get",
      cashback: "1.5% More",
    },
    {
      logo: "/Starbucks.png",
      title: "Starbucks",
    },
    {
      logo: "/walmart-logo-vector.png",
      title: "Walmart Canada",
      subtitle: "Buy Now And Get",
      cashback: "1% More",
    },
    {
      logo: "/Wayfair.png",
      title: "Wayfair",
      subtitle: "Buy Now And Get",
      cashback: "1% More",
    },
    {
      logo: "/essomobil-logo.png",
      title: "Esso™ and Mobil...",
      subtitle: "Buy Now And Get",
      cashback: "1% More",
    },
    {
      logo: "/amazonca-logo.png",
      title: "Amazon.ca",
    },
  ];
  
  {/* Cashback Card Rendering*/}
  const CashbackGrid = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
      {cardData.map((card, i) => (
        <CashbackCard key={i} {...card} />
      ))}
    </div>
  );
  
  const Shops = () => {
    return (
      <div className="p-6">
        <CashbackGrid />
      </div>
    );
  };
  
  export default Shops;
  