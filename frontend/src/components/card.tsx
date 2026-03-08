
export default function Card({productName, price, imageURL, onClick}) {
  return (
    <div className="group" onClick={onClick}>
      <img 
        src={imageURL} 
        className="aspect-square w-full rounded-lg bg-gray-200 object-contain group-hover:opacity-75 xl:aspect-7/8" 
      />
      <h3 className="mt-4 text-sm text-gray-700">{productName}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
    </div>
  );
}
