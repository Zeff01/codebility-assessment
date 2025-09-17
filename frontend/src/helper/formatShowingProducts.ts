interface FormatShowingProductsProps {
  currentPage: number
  productsPerPage: number
  totalProducts: number
}

export const formatShowingProducts = ({
  currentPage,
  productsPerPage,
  totalProducts,
}: FormatShowingProductsProps): string => {
  if (totalProducts === 0) return 'No products found'
  const start = (currentPage - 1) * productsPerPage + 1
  const end = Math.min(currentPage * productsPerPage, totalProducts)
  return `Showing ${start} to ${end} of ${totalProducts} products`
}