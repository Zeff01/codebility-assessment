export function Footer() {
    return (
    <footer className="border-t border-gray-200 dark:bg-black-200 dark:border-gray-800 backdrop-blur-sm mt-16 sm:mt-24">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center space-y-2">
            <p className="text-foreground/80 text-sm font-medium">Built with Next.js, React & Tailwind CSS</p>
            <p className="text-muted-foreground text-xs">© 2025 Ray Cielo Briones. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    )
}