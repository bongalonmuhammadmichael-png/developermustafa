import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
      <div className="max-w-4xl">
        {/* Introduction Label */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Designer & Web Developer
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-8xl">
          Designing with purpose.
          <br />

          <span className="text-muted">
            Building with technology.
          </span>
        </h1>

        {/* Introduction */}
        <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          I combine visual design, user experience, and modern web
          development to create thoughtful digital experiences
          that solve real-world problems.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#work"
            className="button-primary inline-flex items-center rounded-full px-7 py-4 text-sm font-medium transition-transform duration-200 hover:-translate-y-1"
          >
            Explore my work <span aria-hidden="true">↗</span>
          </Link>

          <Link
            href="#about"
            className="rounded-full border border-border px-7 py-4 text-sm font-medium transition-colors duration-200 hover:bg-surface"
          >
            More about me
          </Link>
        </div>
      </div>

      {/* Introduction Footer */}
      <div className="mt-24 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs uppercase tracking-[0.15em] text-muted">
          Based in the Philippines · Open to opportunities
        </p>

        <p className="text-xs text-muted">
          Design / Development / Problem-solving
        </p>
      </div>
    </section>
  );
}
