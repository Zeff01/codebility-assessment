import { Notebook } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export function Header() {
    return (
        <header className="sticky top-0 z-40 w-full h-16 flex items-center justify-between border-b border-gray-200 dark:bg-black-200 dark:border-gray-800 backdrop-blur-sm">
            <div className="w-full flex items-center justify-between px-4 py-2 md:px-8 lg:px-16">
                <div className="flex items-center gap-2">
                    <Notebook color="#ca471c" className="h-10 w-10 " />
                    <h1 className="text-2xl font-bold text-foreground">Blogg</h1>
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}