"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "How it Works",  href: "#how-it-works",  section: "how-it-works"  },
  { label: "Brands",        href: "#brands",         section: "brands"        },
  { label: "Reviews",       href: "#testimonials",   section: "testimonials"  },
  { label: "Rewards",       href: "#rewards",        section: "rewards"       },
];

/** Smoothly scrolls #scroll-area to a target section or to the top */
function scrollToSection(href: string) {
  const area = document.getElementById("scroll-area");
  if (!area) return;

  if (href === "#") {
    area.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const target = document.getElementById(href.replace("#", ""));
  if (!target) return;

  const areaRect   = area.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  area.scrollBy({ top: targetRect.top - areaRect.top, behavior: "smooth" });
}

export default function Navbar() {
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* Active section via IntersectionObserver — root = #scroll-area */
  useEffect(() => {
    const area = document.getElementById("scroll-area");
    const observers: IntersectionObserver[] = [];

    // hero → clears active; nav sections → set their own active
    const sections = [
      { id: "hero",        active: "" },
      ...NAV_LINKS.map((l) => ({ id: l.section, active: l.section })),
    ];

    sections.forEach(({ id, active }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(active); },
        { root: area, threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Close mobile menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setMenuOpen(false);
    if (href === "#") setActiveSection("");
  };

  return (
    <>
      <nav className="nav">
        {/* Logo → scrolls to top */}
        <a
          href="#"
          className="nav-logo"
          onClick={(e) => handleLink(e, "#")}
        >
          moola
        </a>

        <ul className="nav-links">
          {NAV_LINKS.map(({ label, href, section }) => (
            <li key={label}>
              <a
                href={href}
                className={activeSection === section ? "active" : ""}
                onClick={(e) => handleLink(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#" className="nav-cta" onClick={(e) => e.preventDefault()}>
          Get Started Free
        </a>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span style={menuOpen ? { transform: "rotate(45deg) translate(5px,5px)" } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: "rotate(-45deg) translate(5px,-5px)" } : {}} />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-drawer">
          <div className="drawer-header">
            <a href="#" className="nav-logo" onClick={(e) => handleLink(e, "#")}>moola</a>
            <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <nav className="drawer-nav">
            {NAV_LINKS.map(({ label, href, section }, i) => (
              <a
                key={label}
                href={href}
                className={`drawer-link ${activeSection === section ? "active" : ""}`}
                style={{ animationDelay: `${i * 0.06}s` }}
                onClick={(e) => handleLink(e, href)}
              >
                {label}
              </a>
            ))}
            <a href="#" className="drawer-btn" onClick={(e) => e.preventDefault()}>
              Get Started Free
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
