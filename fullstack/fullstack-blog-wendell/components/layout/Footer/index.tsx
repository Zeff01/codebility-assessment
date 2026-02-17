import Link from "next/link";

export const Footer = () => (
  <footer className="border-t border-foreground/10 bg-foreground/5 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="md:col-span-2">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter mb-4 block"
          >
            Tech Insights<span className="text-primary">.</span>
          </Link>
          <p className="text-foreground/50 text-sm max-w-xs leading-relaxed">
            Exploring the intersection of Full Stack development, hardware
            security, and modern web architecture.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-foreground/30 mb-6">
            Explore
          </h4>
          <ul className="space-y-4 text-sm font-bold text-foreground/60">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Latest Articles
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Security Guides
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Hardware Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Social/Contact */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-foreground/30 mb-6">
            Connect
          </h4>
          <ul className="space-y-4 text-sm font-bold text-foreground/60">
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-foreground/20">
        <p>© 2026 Wacky Aquino. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-foreground/40 cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="hover:text-foreground/40 cursor-pointer transition-colors">
            Terms of Service
          </span>
        </div>
      </div>
    </div>
  </footer>
);
