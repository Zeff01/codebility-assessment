"use client";

import Image from "next/image";
import search_icon from "../../../public/search.png";
import { useEffect, useState, useRef } from "react";
import { giftCards } from "../client";
export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredGifts = giftCards.filter((gift) =>
    gift.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className="md:px-60 bg-primary px-8 border-0">
      <div
        className="flex  bg-white rounded-full h-10 items-center justify-between px-3 shadow-xl relative"
        ref={dropdownRef}
      >
        <input
          name="search-input"
          type="search"
          placeholder="Search all over 250 gift cards"
          className="relative h-8 px-3 text-sm rounded-full w-full focus:outline-none ring-0 "
          onChange={(e) => setSearchItem(e.target.value)}
          onFocus={() => setIsOpen(!isOpen)}
        />
        <Image
          src={search_icon}
          alt="search icon"
          className="h-8 w-8 text-gray-700"
        />

        {isOpen && (
          <div className="dropdown top-10 max-sm:w-[92%] w-[98%]  overflow-y-scroll bg-white h-[15rem] rounded-b-2xl absolute z-40">
            <ul className="px-4 py-2">
              {filteredGifts.map((giftCard) => (
                <li
                  key={giftCard.id}
                  className="flex items-center justify-start gap-5 border-b border-gray-200"
                >
                  <div className="relative w-12 h-12 flex py-2">
                    <Image
                      src={giftCard.imgSrc}
                      alt={`${giftCard.name} logo`}
                      width={32}
                      height={32}
                      className="rounded-full object-cover "
                    />
                  </div>
                  <span className="text-sm font-medium">{giftCard.name}</span>
                  <span className="text-secondary font-bold">
                    {giftCard.reward}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
