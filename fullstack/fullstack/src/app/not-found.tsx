// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound(): React.ReactElement {
  return (
    <div className="max-w-3xl mx-auto text-center py-16">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-xl mb-8">The page you're looking for doesn't exist.</p>
      <Link 
        href="/" 
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}