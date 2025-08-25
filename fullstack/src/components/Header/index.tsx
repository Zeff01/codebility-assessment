"use client";

import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const path = usePathname();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-600 mt-1">Discover our latest articles</p>
        </div>
        {path.startsWith("/posts") && (
          <Link
            href="/"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <MoveLeft className="w-4 mr-1 -mt-1" />
            Back to Posts
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
