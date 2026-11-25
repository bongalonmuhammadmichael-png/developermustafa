import Link from "next/link";

const email = "mmustafabongalonovic@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        {/* Section Introduction */}
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Contact / Get in Touch
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Let's work together.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-xl leading-9 tracking-tight sm:text-2xl">
              Have an opportunity, a project, or an idea in mind?
              I'd be happy to hear from you.
            </p>

            <p className="mt-6 text-base leading-8 text-muted">
              I'm open to opportunities where I can contribute
              my creative background, design perspective, and
              web development skills while continuing to grow
              professionally.
            </p>

            {/* Email CTA */}
            
            <a
              href={`mailto:${email}`}
              style={{ color: "#ffffff" }}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-medium transition-transform hover:-translate-y-1"
            >
              Send me an email
              <span aria-hidden="true">↗</span>
            </a>


            {/* Contact Details */}
            <div className="mt-16 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">
                  Email
                </p>

                <a
                  href={`mailto:${email}`}
                  className="mt-3 inline-block text-sm font-medium transition-colors hover:text-muted"
                >
                  {email}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-muted">
                  Location
                </p>

                <p className="mt-3 text-sm font-medium">
                  Philippines · Open to international opportunities
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap gap-6 border-t border-border pt-7">
              <a
                href="https://github.com/bongalonmuhammadmichael-png"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-muted"
              >
                GitHub ↗
              </a>

              <Link
                href="/#work"
                className="text-sm font-medium transition-colors hover:text-muted"
              >
                Selected Work ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
