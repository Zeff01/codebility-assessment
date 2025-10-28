"use client";

import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center pt-[20vh] bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 animate-bounce mb-6">
          404
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition"
        >
          <HiOutlineHome size={20} /> Return Home
        </Link>
      </div>
    </div>
  );
}
