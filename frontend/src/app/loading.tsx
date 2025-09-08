import Header from "@/components/header";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { FaSearch } from "react-icons/fa";

const skeleton = "abcdefgh";

const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <Header />
      <main className="flex flex-col">
        <div className="self-end flex items-center gap-2 w-full max-w-sm">
          <label htmlFor="search" className="cursor-pointer">
            <FaSearch className="text-lg text-zinc-800 md:text-zinc-600 hover:text-zinc-800 transition-colors" />
          </label>
          <Input id="search" placeholder="Search..." />
        </div>
        <ul className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skeleton.split("").map((skel) => (
            <Card
              key={skel}
              className="hover:scale-105 transition-all cursor-pointer"
            >
              <CardHeader>
                <div className="aspect-square object-contain bg-zinc-100 p-2 md:p-4 rounded-lg inset-shadow-sm" />
                <CardTitle className="text-center truncate">
                  <Skeleton className="h-4 w-full" />
                </CardTitle>
                <Skeleton className="h-4 w-20 mx-auto" />
                <Skeleton className="h-4 w-10 mx-auto" />
              </CardHeader>
            </Card>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Loading;
