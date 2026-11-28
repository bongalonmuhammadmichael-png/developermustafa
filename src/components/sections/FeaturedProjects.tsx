import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="work"
      className="border-t border-border bg-surface"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        {/* Section Heading */}
        <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Selected Work / 2026
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Things I've built.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted">
              A collection of digital experiences, applications,
              and solutions created through design and development.
            </p>
          </div>

          <p className="text-sm text-muted">
            {featuredProjects.length.toString().padStart(2, "0")} Featured Projects
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <article key={project.slug} className="group min-w-0">

              {/* Project Screenshot */}
              <Link
                href={`/projects/${project.slug}`}
                className="relative block aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-background transition-colors duration-300 hover:border-accent"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} analytics dashboard`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>

              {/* Project Information */}
              <div className="mt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-accent">
                      {String(index + 1).padStart(2, "0")} / {project.category}
                    </p>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-2 inline-block text-2xl font-semibold tracking-tight transition-colors duration-200 hover:text-accent"
                    >
                      {project.title}
                      <span aria-hidden="true"> ↗</span>
                    </Link>
                  </div>

                  <span className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted">
                    {project.status}
                  </span>
                </div>

                <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted transition-colors duration-200 hover:border-accent hover:text-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-border pt-5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors duration-200 hover:text-accent"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors duration-200 hover:text-accent"
                    >
                      Live Preview <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Future Projects */}
        <div className="mt-20 border-t border-border pt-8">
          <p className="text-sm text-muted">
            More projects are in the works. Stay tuned.
          </p>
        </div>

      </div>
    </section>
  );
}
