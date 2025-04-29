import Image from "next/image";

const navLinks = [
  { id: "privacy-policy", label: "Privacy Policy", href: "#" },
  { id: "terms-and-conditions", label: "Terms & Conditions", href: "#" },
  { id: "help-center", label: "Help Center", href: "#" },
  { id: "contact-us", label: "Contact Us", href: "#" },
];

export const Footer = () => {
  const navMenuLinksElement = (
    <nav>
      <ul className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] laptop:flex laptop:gap-12">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="col-span-1 block text-[15px] text-white font-medium transition-all hover:text-white/80"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <footer className="px-5 tablet:px-8 bg-foreground-dark py-12 laptop:py-20">
      <div className="max-w-(--content-width) mx-auto">
        <div className="flex flex-col laptop:flex-row laptop:items-center laptop:justify-between gap-12 laptop:gap-6 pb-12 laptop:pb-8 border-b border-b-background/5">
          <a href="#" className="flex-shrink-0">
            <Image src="/footer-logo.svg" alt="Moola footer logo" width={120} height={28} />
          </a>
          {navMenuLinksElement}
        </div>

        <div className="flex items-center justify-between pt-12 laptop:pt-8">
          <p className="text-sm text-white/20 w-full laptop:text-right">
            Copyright © 2025 Moola Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
