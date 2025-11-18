import { useContext, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeContext } from "@/contexts/ThemeContext.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme, theme } = useContext(ThemeContext);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="navbar fixed w-full top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="navbar-brand text-2xl font-bold tracking-tighter">
          Elite
          <span className="text-[#8c1007]">Motors</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="navbar-link text-sm font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("featured")}
            className="navbar-link text-sm font-medium"
          >
            Featured
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="navbar-link text-sm font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="navbar-link text-sm font-medium"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="navbar-link text-sm font-medium"
          >
            Contact
          </button>
          <Button variant="dark" className="bg-[#8c1007] hover:bg-[#7a0e06]">
            Book Test Drive
          </Button>
          <button
            onClick={toggleTheme}
            className="navbar-button p-2 rounded-md"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="navbar-button p-2 rounded-md"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="navbar-button p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 md:hidden z-40"
              onClick={() => setIsOpen(false)}
            />
            <div className="mobile-menu absolute top-16 left-0 right-0 shadow-lg md:hidden z-50">
              <div className="flex flex-col py-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="mobile-menu-item px-6 py-3 text-left text-base font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("featured")}
                  className="mobile-menu-item px-6 py-3 text-left text-base font-medium"
                >
                  Featured
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="mobile-menu-item px-6 py-3 text-left text-base font-medium"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="mobile-menu-item px-6 py-3 text-left text-base font-medium"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="mobile-menu-item px-6 py-3 text-left text-base font-medium"
                >
                  Contact
                </button>
                <div className="px-6 py-3">
                  <button
                    onClick={handleLinkClick}
                    className="w-full px-6 py-3 bg-[#8c1007] text-white rounded-lg text-base font-semibold hover:bg-[#7a0e06] transition-colors"
                  >
                    Book Test Drive
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
