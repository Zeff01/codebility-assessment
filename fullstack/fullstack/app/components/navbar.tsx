import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-900/70 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-white text-lg font-semibold tracking-wide"
        >
          DevBlog
        </Link>

        <Link
          href="/"
          className="text-zinc-300 hover:text-white transition text-sm"
        >
          Blogs
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
