import React from 'react';
import Image from 'next/image';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: string[];
}

export default function MobileMenu({ isOpen, navItems }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-purple-200 z-40">
      <div className="flex flex-col space-y-4 px-4 py-6">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="text-purple-800 font-medium hover:text-purple-600 transition-colors"
          >
            {item}
          </a>
        ))}
        <div className="pt-4 border-t border-purple-200">
          <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200 mb-3">
            DOWNLOAD NOW
          </button>
          <div className="flex items-center justify-center text-purple-800">
            <Image
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 480'%3E%3Cpath fill='%23ff0000' d='M0 0h640v240H0z'/%3E%3Cpath fill='%23fff' d='M0 240h640v240H0z'/%3E%3Cpath fill='%23ff0000' d='M200 200l40 40 40-40v80l-40 40-40-40z'/%3E%3C/svg%3E"
              alt="Canada Flag"
              width={20}
              height={16}
              className="mr-2"
            />
            CAD
          </div>
        </div>
      </div>
    </div>
  );
}