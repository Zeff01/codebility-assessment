import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/Button";
import { Menu } from "lucide-react";

const navList = [
  "Shop",
  "Winter Holiday Sale",
  "How It Works",
  "Refer & Earn",
  "Merchant Solutions",
];

const Header = () => {
  return (
    <header>
      <div className="min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] w-full mx-auto h-[75px]">
        <nav className="h-full flex items-center justify-between gap-4 px-4 pt-2 pb-3">
          <Link href="/">
            <Image
              src="https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_purple.svg"
              alt="logo"
              width={0}
              height={0}
              className="w-[120px] h-[28px]"
            />
          </Link>
          <div className="hidden min-[992px]:block">
            <ul className="flex items-center">
              {navList.map((list, index) => (
                <li
                  key={index}
                  className="text-neutral-900/70 hover:text-neutral-900 cursor-pointer font-semibold text-xs min-[1200px]:text-sm min-[1200px]:mr-4 py-4 min-[1400px]:px-4 transition-colors duration-200"
                >
                  <Link href="#" className="p-2">
                    {list}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2 min-[992px]:gap-4">
            <Button className="hidden min-[992px]:block gradient-button">
              DOWNLOAD NOW
            </Button>
            <div className="flex items-center gap-1">
              <Image
                src="https://www.moola.com/assets/media/icons/flags/ca.svg"
                alt="Canada flag"
                height={15}
                width={20}
              />
              <span className="text-black text-xs font-semibold">CAD</span>
            </div>
            <button className="block min-[992px]:hidden">
              <Menu size={36} color="#750dea" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
