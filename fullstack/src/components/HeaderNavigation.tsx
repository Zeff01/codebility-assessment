import { useState } from "react"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandIcon from "./BrandIcon";
import navigation from "@/config/navs";
import { useSession, signOut } from "next-auth/react";

export default function HeaderNavigation() {
    const { data: session, status } = useSession();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    return (
        <>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
            </div>

            <div className="hidden lg:flex lg:gap-x-12 mr-5">
                {status == 'unauthenticated' ? navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={isActive ?
                                "text-sm/6 font-semibold text-blue-900" :
                                "text-sm/6 font-semibold text-white hover:text-blue-900"
                            }
                            onClick={(e) => {
                                if (isActive) e.preventDefault();
                            }}
                        >
                            {item.name}
                        </Link>
                    )
                })
                    :
                    <button className="bg-blue-500 p-2 rounded text-lg cursor-pointer hover:bg-blue-600"
                        onClick={() => signOut({ callbackUrl: "/login" })}>
                        Log out
                    </button>
                }
            </div>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                    <div className="flex items-center justify-between">
                        <BrandIcon />

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-200"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/10">
                            <div className="space-y-2 py-6">
                                {status == 'unauthenticated' ? navigation.map((item) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={isActive ?
                                                "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-900" :
                                                "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                                            }
                                            onClick={(e) => {
                                                if (isActive) e.preventDefault();
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                })
                                    :
                                    <button className="bg-blue-500 p-2 rounded text-lg cursor-pointer hover:bg-blue-600"
                                        onClick={() => signOut({ callbackUrl: "/login" })}>
                                        Log out
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </>
    )
}