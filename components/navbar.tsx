"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/lang/context";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, t, toggleLanguage } = useLanguage();

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#products", label: t.nav.products },
    { href: "#why-us", label: t.nav.whyUs },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3">
            <HoneycombIcon className="w-10 h-10 text-primary" />
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold text-foreground">
                {t.brand.name}
              </span>
              <span
                className={`text-xs text-muted-foreground hidden sm:block ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
              >
                {t.brand.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-foreground/80 hover:text-primary transition-colors font-medium ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="ml-4 px-3 py-1.5 bg-primary/10 hover:bg-primary/20 rounded-lg font-semibold text-sm transition-colors flex items-center gap-1"
            >
              <span className={lang === "en" ? "text-primary" : "text-muted-foreground"}>
                EN
              </span>
              <span className="text-muted-foreground">|</span>
              <span
                className={`font-[var(--font-tamil)] ${lang === "ta" ? "text-primary" : "text-muted-foreground"}`}
              >
                தமிழ்
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Language Toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2 py-1 bg-primary/10 hover:bg-primary/20 rounded-lg font-semibold text-xs transition-colors"
            >
              {lang === "en" ? "தமிழ்" : "EN"}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-foreground/80 hover:text-primary transition-colors font-medium py-2 ${lang === "ta" ? "font-[var(--font-tamil)]" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function HoneycombIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.18l6 3.75v7.14l-6 3.75-6-3.75V7.93l6-3.75z" />
      <path d="M12 6.5L8 9v6l4 2.5 4-2.5V9l-4-2.5z" />
    </svg>
  );
}
