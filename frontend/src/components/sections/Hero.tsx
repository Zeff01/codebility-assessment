"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const recentSearches = [
    "Web Development",
    "UI/UX Design",
    "SEO",
    "Marketing",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".search-container")) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="home"
      className="px-6 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:px-8 bg-gradient-to-br from-white via-gray-50/30 to-cyan-50/50"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1
          className={`text-balance text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Beautiful solutions for modern problems
        </h1>
        <p
          className={`mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We create elegant, thoughtful experiences that help you achieve your
          goals with clarity and confidence.
        </p>

        <div
          className={`mt-10 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="search-container relative mx-auto max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for apps and features..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setShowDropdown(true)}
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 pr-12 text-gray-900 placeholder-gray-500 shadow-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-md"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-gray-400 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-600">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-lg bg-white border border-gray-200 shadow-lg z-[60] transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Recent searches
                  </p>
                  <div className="space-y-1">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSearchValue(search);
                          setShowDropdown(false);
                        }}
                        className="w-full text-left px-3 py-2 text-sm text-gray-600 rounded-md transition-colors duration-150 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <div className="flex items-center gap-2">
                          <svg
                            className="h-3 w-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {search}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
