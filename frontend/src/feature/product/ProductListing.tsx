'use client'

import { useProducts } from '@/hooks/useProducts'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import ProductDetail from './components/ProductDetail'
import FilterBar from '@/components/filters/FilterBar'
import Header from './components/Header'
import ContentArea from './components/ContentArea'

export default function ProductListing() {
  const { data: products, isLoading, error } = useProducts()

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative">
      {/* Header */}
      <Header productCount={products?.length} />

      {/* Filter Bar */}
      <FilterBar />

      {/* Content Area */}
      <ContentArea />

      {/* Product Detail Modal */}
      <ProductDetail />
    </div>
  )
}
