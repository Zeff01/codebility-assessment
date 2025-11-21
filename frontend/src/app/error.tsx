'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-red-50">
      <div className="text-center p-8 border border-red-300 rounded-lg shadow-xl bg-white">
        <h2 className="text-2xl font-bold text-red-600 mb-3">Something Went Wrong!</h2>
        <p className="text-gray-700 mb-6">
          Failed to load data. Please check your network or try again.
        </p>
        <p className="text-sm text-gray-500 italic mb-6">
          Error Detail: {error.message}
        </p>
        <button
          className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}