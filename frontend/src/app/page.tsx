import PageLayout from "@/components/shared/page-layout"
import { ProductList } from "@/features/product/components/product-list"

export default function HomePage() {
  return (
    <PageLayout title="Product List">
      <ProductList />
    </PageLayout>
  )
}
