import NavbarComponent from "./components/navbar";
import FooterComponent from "./components/footer";
import CardComponent from "./components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const recipes = [
    {
      id: 1,
      title: "Pepperoni Pizza",
      image: "/images/pexels-brettjordan-825661.jpg",
    },
    {
      id: 2,
      title: "Pesto Pasta",
      image: "/images/pexels-lgh_9-324057-1256875.jpg",
    },
    {
      id: 3,
      title: "Cheeseburger Slider",
      image: "/images/pexels-valeriya-1639562.jpg",
    },
    {
      id: 4,
      title: "Sushi",
      image: "/images/pexels-pixabay-357756.jpg",
    },
  ];

  return (
    <main className=" bg-[#fffbe8]">
      <NavbarComponent />
      <div className="py-5 px-2 lg:px-10 lg:p-2">
        <div className="flex shadow-lg border rounded-lg border-gray-200 ">
          <input type="text" className="w-full px-3 py-2 rounded-tl-lg rounded-bl-lg bg-white" placeholder="Seach recipes..." />
          <button className="rounded-tr-lg rounded-br-lg px-4 bg-[#fa5901] text-white transition hover:bg-[#fa5801c2]">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>

      <section className="py-5 px-2 lg:px-10 lg:p-2">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center bg-[url('/images/pexels-robinstickel-70497.jpg')] bg-cover bg-center rounded-lg shadow-xl">
          <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
          <div className="relative p-12">
            <h1 className="text-white font-extrabold text-4xl mb-4 ">Discover, Cook & Enjoy Thousands of Recipes with Dishly</h1>
            <h2 className="text-white font-semibold text-lg mb-10">From quick weeknight dinners to gourmet feasts, Dishly lets you explore, save, and cook recipes from around the world — all in one place.</h2>
            <button className="rounded-md px-3 py-2 font-bold border-4 transition border-white text-white hover:bg-white hover:text-[#fa5901]">Browse Recipes</button>
          </div>
        </div>
      </section>

      <section className="py-5 px-2 lg:px-10 lg:p-2">
        <h1 className="w-full text-center font-bold text-3xl mb-20 text-[#fa5901] ">Trending Recipes</h1>
        <div className="grid grid-cols-1 gap-y-25 p-4 lg:grid-cols-4 lg:gap-x-10">
          {recipes.map((recipe) => {
            return <CardComponent key={recipe.id} imageLink={recipe.image} title={recipe.title} />;
          })}
        </div>
      </section>
      <FooterComponent />
    </main>
  );
}
