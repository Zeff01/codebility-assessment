import { ChevronRight } from "lucide-react";
import product1 from "../../assets/product-1.jpg";
import product2 from "../../assets/product-2.jpg";
import product3 from "../../assets/product-3.jpg";
import { getThemeComponents } from "../../components/ThemeComponents.jsx";

const products = [
  {
    name: "Baked Sushi",
    description: "Creamy, savory baked sushi tray layered with rice, seafood, kani, and toasted toppings.",
    price: "PHP 110",
    image: product1,
  },
  {
    name: "California Maki",
    description: "Classic maki rolls with kani, cucumber, mango, and a clean sesame finish.",
    price: "PHP 180",
    image: product3,
  },
  {
    name: "Mango Jelly",
    description: "Refreshing mango jelly dessert with silky cream and juicy fruit notes.",
    price: "PHP 95",
    image: product2,
  },
];

function FeaturedProductsSection() {
  const ui = getThemeComponents("dailySushi");

  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${ui.sections.cream}`} id="menu">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end" data-reveal>
          <div className="max-w-3xl">
            <p className={`text-xs font-black uppercase tracking-[0.24em] ${ui.text.accent}`}>Featured Menu</p>
            <h2 className={`mt-3 font-serif text-4xl font-black leading-tight tracking-normal sm:text-5xl ${ui.text.primary}`}>Fresh favorites for every craving</h2>
          </div>
        </div>

        <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row sm:items-center" data-reveal>
          <p className={`max-w-xl text-base leading-7 ${ui.text.secondary}`}>
            From warm baked sushi trays to chilled jelly desserts, every Daily Sushi order is designed to look beautiful, travel well, and disappear fast.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {products.map((product) => (
            <article className={`group flex h-full min-w-0 flex-col overflow-hidden rounded-lg border transition duration-300 hover:-translate-y-2 ${ui.cards.menu}`} data-reveal key={product.name}>
              <div className={`aspect-[4/3] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/3] ${ui.cards.menuImage}`}>
                <img alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" src={product.image} />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-start min-[420px]:justify-between">
                  <h3 className={`text-xl font-black leading-tight ${ui.text.primary}`}>{product.name}</h3>
                  <span className={`w-fit shrink-0 rounded-full px-3 py-1 text-sm font-black ${ui.cards.price}`}>{product.price}</span>
                </div>
                <p className={`mt-3 flex-1 leading-7 ${ui.text.secondary}`}>{product.description}</p>
                <a className={`mt-4 inline-flex items-center gap-2 text-sm font-black transition group-hover:gap-3 ${ui.text.accent}`} href="#order">
                  Add to order <ChevronRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProductsSection;
