"use client";
import { ChevronDown, LogIn, LogOut, User } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function LoginButton() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  if (status === "loading") {
    return (
      <div className="h-10 w-10 md:w-32 animate-pulse bg-gray-100 rounded-full border border-gray-200" />
    );
  }

  if (session) {
    return (
      <div className="relative">
        {/* Profile Trigger - Clean White Pill */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 p-1 pr-4 rounded-full bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95 group shadow-sm"
        >
          {session.user?.image ? (
            <Image
              src={session.user.image}
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full border border-gray-100"
            />
          ) : (
            <div className="p-2 rounded-full bg-blue-50 text-blue-600">
              <User size={16} />
            </div>
          )}

          <span className="hidden md:block text-sm font-medium text-[#3c4043]">
            {session.user?.name?.split(" ")[0]}
          </span>

          <ChevronDown
            size={16}
            className={`text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-gray-700" : ""}`}
          />
        </button>

        {/* Dropdown Menu - Clean White Card */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-2xl py-2 shadow-xl z-20 animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200">
              <div className="px-5 py-3 border-b border-gray-100 mb-1">
                <p className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">
                  Google Account
                </p>
                <p className="text-sm text-[#202124] truncate font-medium mt-0.5">
                  {session.user?.name}
                </p>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  {session.user?.email}
                </p>
              </div>

              <button
                onClick={() => signOut()}
                className="group flex w-full items-center justify-between px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all"
              >
                <span>Sign out</span>
                <LogOut
                  size={16}
                  className="text-gray-400 group-hover:text-red-500 transition-colors"
                />
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/todo" })}
      className="group flex items-center gap-2.5 bg-blue-600 px-6 py-2.5 rounded-full text-white text-sm font-semibold hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-blue-600/20"
    >
      <span>Sign in</span>
      <LogIn
        size={16}
        className="group-hover:translate-x-1 transition-transform"
      />
    </button>
  );
}
