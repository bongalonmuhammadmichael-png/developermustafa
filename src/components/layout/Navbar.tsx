"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/layout/ThemeToggle";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-50 w-full bg-background">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-10 lg:px-16">

        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight sm:text-xl"
          aria-label="Developermustafa homepage"
        >
          developermustafa<span className="text-muted">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 md:flex lg:gap-8"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Theme Toggle */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        {/* Desktop Contact Button */}
        <Link
          href="#contact"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={closeMenu}
          className="button-primary mt-5 inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-medium"
        >
          Let's talk <span className="ml-2" aria-hidden="true">↗</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-border transition-colors hover:bg-surface md:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform duration-200 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 bg-foreground transition-opacity duration-200 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 bg-foreground transition-transform duration-200 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={`absolute left-0 top-full w-full border-t border-border bg-background px-6 transition-all duration-200 md:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col py-5">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={closeMenu}
              className="border-b border-border py-4 text-sm font-medium transition-colors hover:text-muted"
            >
              {item.label}
            </Link>
          ))}

          {/* Mobile Theme Toggle */}
          <div className="mt-5 flex justify-start">
            <ThemeToggle />
          </div>

          <Link
            href="#contact"
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background"
          >
            Let's talk <span className="ml-2" aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
