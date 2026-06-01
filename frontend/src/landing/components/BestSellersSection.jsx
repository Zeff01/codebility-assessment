import { Star } from "lucide-react";
import bakedSushiImg from "../../assets/product-1.jpg";
import jellyImg from "../../assets/product-2.jpg";
import makiImg from "../../assets/product-3.jpg";
import { getThemeComponents } from "../../components/ThemeComponents.jsx";

const bestSellers = [
  {
    name: "Signature Baked Sushi Tray",
    description: "The rich, creamy crowd favorite for parties, merienda, and weekend cravings.",
    rating: "4.9",
    orders: "1.8k orders",
    image: bakedSushiImg,
  },
  {
    name: "California Maki Party Box",
    description: "Fresh rolls with mango and kani, made for sharing and easy gifting.",
    rating: "4.8",
    orders: "1.2k orders",
    image: makiImg,
  },
  {
    name: "Mango Jelly Cups",
    description: "A cool, creamy dessert that turns every sushi order into a full treat.",
    rating: "4.9",
    orders: "980 orders",
    image: jellyImg,
  },
];

function BestSellersSection() {
  const ui = getThemeComponents("dailySushi");

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${ui.sections.charcoal}`} id="best-sellers">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end" data-reveal>
          <div className="max-w-3xl">
            <p className={`text-xs font-black uppercase tracking-[0.24em] ${ui.text.gold}`}>Best Sellers</p>
            <h2 className="mt-3 font-serif text-4xl font-black leading-tight tracking-normal sm:text-5xl">The orders customers come back for</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((item) => (
            <article className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-lg border transition duration-300 hover:-translate-y-2 ${ui.cards.dark}`} data-reveal key={item.name}>
              <div className="aspect-[4/3] overflow-hidden sm:aspect-[16/11]">
                <img alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src={item.image} />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className={`flex flex-wrap items-center gap-1 ${ui.text.gold}`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star fill="currentColor" key={index} size={17} />
                  ))}
                  <span className={`ml-2 text-sm font-black ${ui.text.inverted}`}>{item.rating}</span>
                </div>
                <h3 className="mt-5 text-2xl font-black leading-tight">{item.name}</h3>
                <p className={`mt-3 flex-1 leading-7 ${ui.text.invertedSecondary}`}>{item.description}</p>
                <p className={`mt-5 text-sm font-black uppercase tracking-[0.2em] ${ui.text.cream}`}>{item.orders}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BestSellersSection;
