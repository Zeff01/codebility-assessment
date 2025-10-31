export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-20 bg-[var(--bg-dark)] border-t border-white/5 text-center text-gray-400">
      <p>© {new Date().getFullYear()} Finfly. All rights reserved.</p>
      <div className="mt-6 flex justify-center gap-6 text-sm">
        <a href="#" className="hover:text-[var(--accent-green)] transition">Privacy</a>
        <a href="#" className="hover:text-[var(--accent-green)] transition">Terms</a>
        <a href="#" className="hover:text-[var(--accent-green)] transition">Contact</a>
      </div>
    </footer>
  );
}
