import Image from "next/image";
import Link from "next/link";
import LoginButton from "./LoginButton";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 px-6 md:px-12 py-3 flex justify-between items-center shadow-sm">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 flex items-center justify-center bg-blue-50 rounded-xl transition-colors group-hover:bg-blue-100">
          <Image
            src="/favicon.ico"
            alt="Favicon | Logo"
            width={28}
            height={28}
            priority
            className="object-contain rounded-lg"
          />
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <LoginButton />
      </div>
    </nav>
  );
}
