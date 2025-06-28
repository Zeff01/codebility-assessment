import React from 'react';

type HamburgerProps = {
    isOpen: boolean;
    onToggle: () => void;
};

export default function Hamburger({ isOpen, onToggle }: HamburgerProps) {
    return (
        <button
            onClick={onToggle}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle mobile menu"
        >
            <span
                className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
            ></span>
            <span
                className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
            ></span>
            <span
                className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
            ></span>
        </button>
    );
}
