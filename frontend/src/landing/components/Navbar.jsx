import { Menu, X } from "lucide-react";
import Logo from "../../assets/Logo.png";
import { getThemeComponents } from "../../components/ThemeComponents.jsx";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contacts", href: "#contacts" },
];

function Navbar({ menuOpen, onMenuToggle, onMenuClose }) {
  const ui = getThemeComponents("dailySushi");

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b ${ui.nav.bar}`}>
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-10">
        <a className="flex items-center gap-3" href="#home" onClick={onMenuClose}>
            <img alt="Daily Sushi logo" className="h-10 w-10 object-contain" src={Logo} />
          <span className={`mt-2 font-serif text-2xl font-black tracking-normal ${ui.nav.brand}`}>Daily Sushi</span>
        </a>

        <div className="hidden items-center gap-3 lg:flex 2xl:gap-5">
          {navLinks.map((link) => (
            <a className={`whitespace-nowrap text-xs font-bold transition 2xl:text-sm ${ui.nav.link}`} href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className={`hidden whitespace-nowrap rounded-full px-5 py-3 text-sm font-black transition hover:-translate-y-0.5 lg:inline-flex ${ui.buttons.primary}`} href="#order">
          Order Now
        </a>

        <button
          aria-label="Toggle navigation"
          className={`grid h-11 w-11 place-items-center rounded-full border lg:hidden ${ui.nav.mobileButton}`}
          onClick={onMenuToggle}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen ? (
        <div className={`border-t px-5 py-4 lg:hidden ${ui.nav.mobilePanel}`}>
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <a className={`rounded-xl px-3 py-3 text-sm font-bold ${ui.nav.mobileLink}`} href={link.href} key={link.href} onClick={onMenuClose}>
                {link.label}
              </a>
            ))}
            <a className={`mt-2 rounded-full px-5 py-3 text-center text-sm font-black ${ui.buttons.primaryPlain}`} href="#order" onClick={onMenuClose}>
              Order Now
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
