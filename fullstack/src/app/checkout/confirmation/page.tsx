import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mb-6 h-16 w-16 text-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Order Confirmed!
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-lg bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
