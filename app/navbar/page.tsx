"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";

const navOptions = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-bold tracking-tight text-slate-800 hover:text-blue-600 transition-colors"
            >
              <Code2 className="h-8 w-8 text-blue-600" />
              <span>Kirtan.dev</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navOptions.map((option) => (
              <Link
                key={option.name}
                href={option.href}
                className={`relative text-sm font-medium transition-all duration-200 ${
                  pathname === option.href
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                {option.name}
                {pathname === option.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-700 hover:text-blue-600 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white/95 backdrop-blur-md border-t border-slate-200`}
      >
        <div className="px-4 py-4 space-y-2">
          {navOptions.map((option) => (
            <Link
              key={option.name}
              href={option.href}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                pathname === option.href
                  ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600"
                  : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              }`}
            >
              {option.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
