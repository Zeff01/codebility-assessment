import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-4">
      <Link
        href={"/"}
        className="text-3xl font-bold text-zinc-800 md:text-zinc-600 hover:text-zinc-800 transition-colors"
      >
        Products
      </Link>
    </header>
  );
};

export default Header;
