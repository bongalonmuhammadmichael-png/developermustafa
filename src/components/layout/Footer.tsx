import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] lg:py-20">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              developermustafa<span className="text-muted">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              Designing with purpose. Building with technology.
              Combining creativity, user experience, and web
              development to create meaningful digital experiences.
            </p>

            <p className="mt-6 text-xs uppercase tracking-widest text-muted">
              Based in the Philippines
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em]">
              Explore
            </h3>

            <nav
              aria-label="Footer navigation"
              className="mt-6 flex flex-col items-start gap-4"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em]">
              Connect
            </h3>

            <div className="mt-6 flex flex-col items-start gap-4">
              <a
                href="mailto:mmustafabongalonovic@gmail.com"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Email Me ↗
              </a>

              <a
                href="https://github.com/bongalonmuhammadmichael-png"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t border-border py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} MustafaKB. All rights reserved.
          </p>

          <p className="text-xs text-muted">
            Designed & built with purpose.
          </p>

          <a
            href="#top"
            className="text-xs font-medium transition-colors hover:text-muted"
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
