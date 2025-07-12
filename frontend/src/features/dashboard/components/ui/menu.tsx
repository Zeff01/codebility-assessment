"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { HTMLAttributes, ReactNode, useState, useRef, useEffect } from "react";

/**
 * Menu component
 *
 * A responsive reusable menu component that can be used to create a menu.
 *
 * @param children - children for the menu
 * @param className - className for the menu
 * @param props - props for the menu
 * @returns Menu component
 *
 * @example
 * <Menu>
 *   <Menu.Item>Home</Menu.Item>
 *   <Menu.Item>About</Menu.Item>
 *   <Menu.Item>Contact</Menu.Item>
 * </Menu>
 */

// Main Menu component with trigger
function Menu({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={menuRef} {...props}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <XIcon /> : <MenuIcon />}
      </div>

      {isOpen && children}
    </div>
  );
}

// Dropdown component
function Dropdown({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className='absolute top-full right-0 mt-2 z-50 min-w-max' {...props}>
      <nav className={`bg-white shadow-lg rounded-lg ${className}`}>
        {children}
      </nav>
    </div>
  );
}

// Menu List component
function MenuList({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={`text-xs font-medium ${className}`} {...props}>
      {children}
    </ul>
  );
}

// Menu Item component
function MenuItem({
  className,
  children,
  href,
  onClick,
  ...props
}: HTMLAttributes<HTMLLIElement> & { href?: string; onClick?: () => void }) {
  const content = (
    <div
      className={`px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${className}`}>
      {children}
    </div>
  );

  if (href) {
    return (
      <li {...props}>
        <a href={href} className='block'>
          {content}
        </a>
      </li>
    );
  }

  return (
    <li onClick={onClick} {...props}>
      {content}
    </li>
  );
}

// Menu Divider component
function MenuDivider({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`border-t border-gray-200 my-1 ${className}`} {...props} />
  );
}

// Menu Header component
function MenuHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide ${className}`}
      {...props}>
      {children}
    </div>
  );
}

// Attach sub-components to the main Menu component
Menu.Dropdown = Dropdown;
Menu.List = MenuList;
Menu.Item = MenuItem;
Menu.Divider = MenuDivider;
Menu.Header = MenuHeader;

export default Menu;
