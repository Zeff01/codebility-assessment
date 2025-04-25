// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          NextJS Blog
        </Link>
        <div>
          <Link href="/" className="mr-4 hover:text-gray-300">
            Home
          </Link>
          <Link href="/api/posts" className="hover:text-gray-300">
            API
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;