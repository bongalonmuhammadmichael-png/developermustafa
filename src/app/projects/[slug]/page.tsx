import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

const insightDetails = {
  challenge:
    "Business information can become difficult to understand when performance data is scattered across different views. INSIGHT was designed to bring important business metrics into one organized dashboard.",
  solution:
    "I developed a responsive analytics dashboard that presents business performance through clear visualizations, organized data tables, and dedicated management pages.",
  features: [
    {
      title: "Analytics Overview",
      description:
        "A central dashboard featuring key performance indicators, revenue trends, and business insights.",
    },
    {
      title: "Customer Management",
      description:
        "A dedicated interface for viewing, searching, and filtering customer records.",
    },
    {
      title: "Product Management",
      description:
        "Organized product information with category and stock filters.",
    },
    {
      title: "Transaction Management",
      description:
        "A structured transaction table with search, status filters, and detail views.",
    },
    {
      title: "Reports & Analytics",
      description:
        "Visual reports and summaries to make business performance easier to understand.",
    },
    {
      title: "User Settings",
      description:
        "Personalization options for appearance, notifications, and regional preferences.",
    },
  ],
  learning:
    "This project helped me strengthen my skills in building reusable React components, organizing application structure, presenting data with charts, and creating responsive user interfaces.",
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetails({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-7 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight sm:text-xl"
        >
          developermustafa<span className="text-muted">.</span>
        </Link>

        <Link
          href="/#work"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          ← Back to work
        </Link>
      </header>

      {/* Project Introduction */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-16 sm:px-10 lg:px-16 lg:pt-24">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Case Study / {project.category}
        </p>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
              {project.title}
              <span className="text-muted">.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#ffffff" }}
                className="rounded-full bg-foreground px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-1"
            >
            View GitHub ↗
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
              >
                Live Preview ↗
              </a>
            )}
          </div>
        </div>

        {/* Project Information */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-y border-border py-8 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">
              Category
            </p>
            <p className="mt-2 text-sm font-medium">{project.category}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted">
              Status
            </p>
            <p className="mt-2 text-sm font-medium">{project.status}</p>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-xs uppercase tracking-widest text-muted">
              Project Type
            </p>
            <p className="mt-2 text-sm font-medium">Frontend Application</p>
          </div>
        </div>
      </section>

      {/* Main Project Screenshot */}
      <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-[#202321]">
          <Image
            src={project.image}
            alt={`${project.title} dashboard preview`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-cover object-top"
          />
        </div>
      </section>

      {/* Project Story */}
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[1fr_2fr] lg:px-16 lg:py-32">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            01 / The Challenge
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            The problem.
          </h2>
        </div>

        <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
          {insightDetails.challenge}
        </p>

        <div className="border-t border-border pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            02 / The Approach
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            The solution.
          </h2>
        </div>

        <p className="max-w-3xl border-t border-border pt-12 text-base leading-8 text-muted sm:text-lg">
          {insightDetails.solution}
        </p>
      </section>

      {/* Key Features */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            03 / What I Built
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Key features.
          </h2>

          <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {insightDetails.features.map((feature, index) => (
              <article key={feature.title}>
                <p className="text-sm text-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              04 / Technology
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Built with.
            </h2>
          </div>

          <div className="flex flex-wrap content-start gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border px-5 py-3 text-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Learning */}
      <section className="border-t border-border">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-24 sm:px-10 lg:grid-cols-[1fr_2fr] lg:px-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              05 / Reflection
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              What I learned.
            </h2>
          </div>

          <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {insightDetails.learning}
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-20 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Have a project in mind?
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let's build something meaningful.
            </h2>
          </div>

          <Link
            href="/#contact"
            style={{ color: "#ffffff" }}
            className="w-fit rounded-full bg-foreground px-7 py-4 text-sm font-medium transition-transform hover:-translate-y-1"
            >
            Get in touch ↗
        </Link>
        </div>
      </section>
    </main>
  );
}
