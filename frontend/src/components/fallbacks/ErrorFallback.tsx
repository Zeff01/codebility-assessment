'use client'

interface ErrorFallbackProps {
  error: Error
  resetError: () => void
  title?: string
  description?: string
}

export function ErrorFallback({
  error,
  resetError,
  title = 'Something went wrong',
  description = 'An unexpected error occurred. Please try again.',
}: ErrorFallbackProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-4xl">⚠️</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>

          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-red-800 font-medium">
              {error.message || description}
            </p>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

          <div className="space-y-4">
            <button
              onClick={resetError}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center space-x-2"
            >
              <span className="text-lg">🔄</span>
              <span>Try Again</span>
            </button>

            <button
              onClick={() => window.history.back()}
              className="w-full bg-gray-100 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-200 transition-all duration-200 font-medium border border-gray-300 flex items-center justify-center space-x-2"
            >
              <span>←</span>
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
