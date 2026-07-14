import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { cn } from "../../lib/utils";
const navItems = [
  { label: "About", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-section flex h-16 items-center justify-between md:h-20">
        <a href="#hero" className="text-card-title font-bold tracking-tight text-text">
          YJC<span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-small font-medium text-text-secondary transition-colors duration-200 hover:text-text"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/file/d/11fL843VVq1LEutxB4I8kNQ8Uzs9tHeLk/view?usp=sharing"
          target="_blank"
          className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-small font-medium text-text transition-colors duration-200 hover:bg-primary-hover md:flex"
        >
          Resume
        </a>

        <button
          aria-label="Toggle menu"
          className="text-text md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="container-section flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-2 py-3 text-body text-text-secondary transition-colors duration-200 hover:bg-surface hover:text-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-small font-medium text-text"
              >
                <Download size={16} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
