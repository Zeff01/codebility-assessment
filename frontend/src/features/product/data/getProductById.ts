import { Product } from "@/types/product"

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}
