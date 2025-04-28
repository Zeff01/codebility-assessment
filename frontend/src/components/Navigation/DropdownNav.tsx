import React from "react";

type NavLink = {
  href: string;
  label: string;
};

type DropdownNavProps = {
  navLinks: NavLink[];
  isOpen: boolean;
};



const DropdownNav: React.FC<DropdownNavProps> = ({ navLinks, isOpen }) => {
  return (
    <div
    className={`lg:hidden bg-white shadow-md mt-2 transition-all duration-300 ease-in-out transform ${
      isOpen ? "max-h-lvh opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"
    }`}
    >
      <ul className="flex flex-col space-y-2 text-gray-700 px-4 py-2">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-gray-300">
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <button className="bg-gray-950 text-white py-2 px-4 rounded-full hover:bg-gray-700 w-full">
            DOWNLOAD NOW
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropdownNav;