import { Clock, MapPin, Phone } from "lucide-react";
import Logo from "../../assets/Logo.png";
import { getThemeComponents } from "../../components/ThemeComponents.jsx";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contacts", href: "#contacts" },
];

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.2 8.4V6.9c0-.7.5-.9.9-.9h2.2V2.3L14.4 2c-3.2 0-4.9 1.9-4.9 5.3v1.1H6.4v4.1h3.1V22h4.3v-9.5h3.2l.5-4.1h-3.3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <rect height="16" rx="5" stroke="currentColor" strokeWidth="2" width="16" x="4" y="4" />
      <circle cx="12" cy="12" r="3.3" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" fill="currentColor" r="1.1" />
    </svg>
  );
}

function Footer() {
  const ui = getThemeComponents("dailySushi");

  return (
    <footer className={`py-10 ${ui.footer}`}>
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_0.9fr] lg:px-10">
        <div>
          <a className="flex items-start gap-3" href="#home">
            <img alt="Daily Sushi logo" className="h-10 w-10 object-contain" src={Logo} />
            <div className="flex flex-col items-start gap-1">
              <span className="font-serif text-2xl font-black tracking-normal">Daily Sushi</span>
              <p className={`max-w-sm leading-6 ${ui.text.invertedMuted}`}>Baked sushi, maki rolls, California rolls, and jelly desserts made fresh daily.</p>
            </div>
          </a>
        </div>
        <div>
          <p className="font-black">Explore</p>
          <div className="mt-4 grid gap-2">
            {navLinks.map((link) => (
              <a className={`text-sm font-bold transition ${ui.text.hoverInverted} ${ui.text.invertedMuted}`} href={link.href} key={link.href}>{link.label}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-black">Contact</p>
          <div className={`mt-4 grid gap-3 text-sm font-bold ${ui.text.invertedMuted}`}>
            <a className={`flex items-start gap-2 transition ${ui.text.hoverInverted}`} href="tel:09667889034">
              <Phone className={`mt-0.5 shrink-0 ${ui.accents.goldIcon}`} size={16} />
              <span>09667889034</span>
            </a>
            <span className="flex items-start gap-2">
              <MapPin className={`mt-0.5 shrink-0 ${ui.accents.goldIcon}`} size={16} />
              <span>Baras, Tanay, and Pililia, Rizal</span>
            </span>
            <span className="flex items-start gap-2">
              <Clock className={`mt-0.5 shrink-0 ${ui.accents.goldIcon}`} size={16} />
              <span>Mon to Fri, 3:00 PM - 11:00 PM</span>
            </span>
          </div>
        </div>
        <div>
          <p className="font-black">Social</p>
          <div className="mt-4 flex gap-3">
            <a aria-label="Daily Sushi Facebook" className={`grid h-11 w-11 place-items-center rounded-full border transition ${ui.accents.socialFooter}`} href="https://www.facebook.com/yourdailysushi" rel="noreferrer" target="_blank">
              <FacebookIcon />
            </a>
            <a aria-label="Daily Sushi Instagram" className={`grid h-11 w-11 place-items-center rounded-full border transition ${ui.accents.socialFooter}`} href="https://www.instagram.com/dailysushi.ph" rel="noreferrer" target="_blank">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={`mx-auto mt-10 flex w-full max-w-7xl flex-col gap-4 border-t px-5 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10 ${ui.borders.whiteMuted} ${ui.text.footerMuted}`}>
        <p>Copyright 2026 Daily Sushi. All rights reserved.</p>
        <div className="flex gap-3">
          <a aria-label="Daily Sushi Facebook" className={`transition ${ui.text.hoverInverted}`} href="https://www.facebook.com/yourdailysushi" rel="noreferrer" target="_blank"><FacebookIcon /></a>
          <a aria-label="Daily Sushi Instagram" className={`transition ${ui.text.hoverInverted}`} href="https://www.instagram.com/dailysushi.ph" rel="noreferrer" target="_blank"><InstagramIcon /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
