'use client'

import React, { ReactNode, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@/components/fallbacks/ErrorFallback'
import { LoadingFallback } from '@/components/fallbacks/LoadingFallback'

interface ProductLayoutProps {
  children: ReactNode
}

const ProductLayout = ({ children }: ProductLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ErrorBoundary
        FallbackComponent={({ error, resetErrorBoundary }) => (
          <ErrorFallback
            error={error}
            resetError={resetErrorBoundary}
            title="Page Error"
            description="We couldn't load your page. This might be a temporary issue."
          />
        )}
      >
        <Suspense
          fallback={
            <LoadingFallback message="Loading please wait..." size="lg" />
          }
        >
          <main className="min-h-screen">{children}</main>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default ProductLayout
