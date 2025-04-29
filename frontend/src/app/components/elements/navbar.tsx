import { Button } from "@/app/components/ui";
import Image from "next/image";

const navLinks = [
  { id: "shop", label: "Shop", href: "#" },
  { id: "winter-holiday-sale", label: "Winter Holiday Sale", href: "#" },
  { id: "how-it-works", label: "How It Works", href: "#" },
  { id: "refer-and-earn", label: "Refer & Earn", href: "#" },
  { id: "merchant-solutions", label: "Merchant Solutions", href: "#" },
];

export const Navbar = () => {
  const navMenuLinksElement = (
    <nav>
      <ul className="hidden desktop:flex gap-6">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="block p-2.5 text-[15px] font-medium transition-all hover:text-foreground-dark"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <header className="px-5 tablet:px-8 border-b border-b-foreground/10 py-4">
      <div className="flex items-center justify-between gap-6 max-w-(--header-width) mx-auto">
        <a href="#" className="flex-shrink-0">
          <Image src="/logo.svg" alt="Moola logo" width={120} height={28} />
        </a>
        {navMenuLinksElement}
        <Button size="small">Download now</Button>
      </div>
    </header>
  );
};
