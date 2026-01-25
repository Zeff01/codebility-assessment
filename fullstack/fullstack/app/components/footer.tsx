const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900/70 backdrop-blur-md border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center gap-2 text-center">
        <p className="text-white font-semibold tracking-wide">
          DevBlog — Minimal thoughts on maximal tech
        </p>

        <p className="text-zinc-400 text-sm">
          © {new Date().getFullYear()} DevBlog. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
