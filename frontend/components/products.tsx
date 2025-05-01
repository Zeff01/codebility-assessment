export default function Products() {
  const products = [
    {
      productImage: "jack-daniel-s-apple.webp",
      productName: "Jack Daniel Apple",
      price: "1000",
    },
    {
      productImage: "camino-real-tequila.avif",
      productName: "Camino Real Tequila",
      price: "1000",
    },
    {
      productImage: "bushmills.webp",
      productName: "Bushmills",
      price: "1000",
    },
    {
      productImage: "jose-cuervo-especial-gold-tequila.webp",
      productName: "jose cuervo gold",
      price: "1000",
    },
    {
      productImage: "campari-bitter.webp",
      productName: "campari bitter",
      price: "1000",
    },
    {
      productImage: "cointreau-premium-liqueur.webp",
      productName: "cointreau premium",
      price: "1000",
    },
    {
      productImage: "johnniewalkerdoubleblacklabel.webp",
      productName: "johnnie walker double black label",
      price: "1000",
    },
    {
      productImage: "jack-daniel-s-tennessee-whiskey.webp",
      productName: "Jack daniel tennessee",
      price: "1000",
    },
  ];
  return (
    <main className=" w-full grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 p-2 md:p-6">
      {products.map((product, index) => (
        <div
          key={index}
          className=" bg-white shadow-2xl rounded-2xl flex flex-col gap-y-2 items-center justify-center p-4 cursor-pointer duration-300 hover:scale-105"
        >
          <img
            src={`/products/${product.productImage}`}
            alt={product.productName}
            className=" w-full h-26 md:h-48 md:object-cover"
          />
          <h2 className=" font-bold capitalize text-center text-lg md:text-xl truncate overflow-hidden text-ellipsis w-full">
            {product.productName}
          </h2>
          <p className=" text-sm md:text-lg font-semibold">₱{product.price}</p>
          <button className=" bg-gradient-to-r from-red-500 to-red-900 py-3 px-6 font-bold text-xs rounded-full text-white w-full cursor-pointer">
            BUY NOW
          </button>
        </div>
      ))}
    </main>
  );
}
