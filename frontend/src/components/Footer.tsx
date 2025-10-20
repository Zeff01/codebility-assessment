export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl w-full px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="text-base font-semibold">Codedability Store</div>
        <div className="text-foreground/70">© {new Date().getFullYear()} Codedability. All rights reserved.</div>
      </div>
    </footer>
  );
}


