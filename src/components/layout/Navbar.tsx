import Link from "next/link";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-10 lg:px-16">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight sm:text-xl"
          aria-label="Developermustafa homepage"
        >
          developermustafa<span className="text-muted">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 sm:flex"
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

        {/* Contact Button */}
        <Link
          href="#contact"
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-foreground hover:text-background"
        >
          Let's talk <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  );
}
