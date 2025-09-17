import ProductListing from '@/feature/product/ProductListing'
import ProductLayout from '@/layout/ProductLayout'

export default function Home() {
  return (
    <ProductLayout>
      <ProductListing />
    </ProductLayout>
  )
}
