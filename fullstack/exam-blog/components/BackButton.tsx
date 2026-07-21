import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline mb-6"
    >
      &larr; Back to Home
    </Link>
  );
}