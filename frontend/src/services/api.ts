export const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) return new Error("Failed to retrieve products.");

  const data = await response.json();

  return data;
};
