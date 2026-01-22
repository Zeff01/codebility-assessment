export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          Built with Next.js, NextAuth, Prisma & Redux Toolkit
        </p>
        <p className="mt-1">
          © {new Date().getFullYear()} Todo App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
