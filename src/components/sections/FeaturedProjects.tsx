import Link from "next/link";
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
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
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
        <div className="grid gap-8 md:grid-cols-2">

          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="group min-w-0"
            >
              {/* Project Preview */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-[#202321] p-5 sm:p-8">

                {/* Preview Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-semibold tracking-wider text-white">
                    {project.title}
                  </span>

                  <span className="text-[10px] uppercase tracking-widest text-white/50">
                    Analytics Platform
                  </span>
                </div>

                {/* Dashboard Preview */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {["Revenue", "Customers", "Orders"].map((label) => (
                    <div
                      key={label}
                      className="rounded-lg border border-white/10 bg-white/[0.06] p-3"
                    >
                      <p className="text-[9px] text-white/50 sm:text-xs">
                        {label}
                      </p>

                      <div className="mt-3 h-2 w-3/4 rounded-full bg-white/70" />
                      <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/20" />
                    </div>
                  ))}
                </div>

                {/* Decorative Chart */}
                <div className="mt-4 flex h-24 items-end gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-4 sm:h-32">
                  {[35, 55, 42, 75, 50, 85, 65, 95, 70, 100, 78, 90].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-[#A8B99A]/80 transition-all duration-300 group-hover:bg-[#C5D4B7]"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>

                {/* Preview Label */}
                <div className="absolute bottom-3 right-4">
                  <span className="text-[9px] uppercase tracking-widest text-white/40">
                    Project Preview
                  </span>
                </div>
              </div>

              {/* Project Information */}
              <div className="mt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted">
                      {String(index + 1).padStart(2, "0")} / {project.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted">
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
                      className="rounded-full bg-background px-3 py-1.5 text-xs text-muted"
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
                    className="text-sm font-medium transition-colors hover:text-muted"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors hover:text-muted"
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
