"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold text-gray-900">Todo App</h1>
                </div>
                <div className="flex items-center gap-4">
                    {session?.user && (
                        <>
                            <span className="text-sm text-gray-600">
                                {session.user.name || session.user.email}
                            </span>
                            <Button variant="ghost" onClick={() => signOut()}>
                                Sign Out
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
