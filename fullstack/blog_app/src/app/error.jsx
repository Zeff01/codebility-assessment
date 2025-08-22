"use client"; // error boundary must be a client component

export default function Error({ error, reset }) {
  return (
    <main className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-xl font-bold text-red-500">Something went wrong!</h1>
      <p className="text-gray-600">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Try Again
      </button>
    </main>
  );
}
