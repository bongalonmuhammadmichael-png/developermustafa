
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Resume / Curriculum Vitae
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              My professional CV.
            </h1>
            <p className="mt-3 text-sm text-muted">
              View my experience, education, skills, and certifications.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              Back to portfolio
            </Link>

            <a
              href="/resume/mustafa-cv.pdf"
              download="Mustafa-Bongalon-CV.pdf"
              className="button-primary rounded-full px-6 py-3 text-sm font-medium"
            >
              Download CV ↗
            </a>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-surface">
          <iframe
            src="/resume/mustafa-cv.pdf"
            title="Mustafa Bongalon - Professional CV"
            className="h-[75vh] min-h-[600px] w-full"
          />
        </div>

        <p className="mt-4 text-center text-xs text-muted">
          If the preview does not appear on your device, use the Download CV button.
        </p>
      </div>
    </main>
  );
}
