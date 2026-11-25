const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Building responsive and interactive web interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
    focus: true,
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Developing application logic and server-side functionality.",
    skills: ["PHP", "Laravel 13", "Node.js", "Express.js", "REST APIs"],
    focus: true,
  },
  {
    number: "03",
    title: "Databases",
    description: "Working with relational and document-based databases.",
    skills: ["MySQL", "SQL", "MongoDB", "Mongoose"],
    focus: true,
  },
  {
    number: "04",
    title: "UI/UX & Visual Design",
    description: "Creating thoughtful, consistent, and user-friendly experiences.",
    skills: [
      "UI/UX Design",
      "Figma",
      "Graphic Design",
      "Visual Design",
      "Branding",
      "Wireframing",
    ],
    focus: true,
  },
  {
    number: "05",
    title: "Tools & Workflow",
    description: "Tools used for development, collaboration, and creative work.",
    skills: ["Git", "GitHub", "VS Code", "npm", "Microsoft Office"],
    focus: false,
  },
  {
    number: "06",
    title: "Professional Skills",
    description: "Skills developed through creative and professional experience.",
    skills: [
      "Communication",
      "Problem-solving",
      "Collaboration",
      "Copywriting",
      "Storyboarding",
      "Customer Support",
    ],
    focus: false,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-border bg-surface"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        {/* Section Heading */}
        <div className="mb-16 grid gap-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Capabilities / Technologies
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Skills & expertise.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            A combination of creative thinking, design principles,
            and technical skills developed through professional
            experience, continuous learning, and hands-on projects.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-x-12 border-t border-border md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="border-b border-border py-9"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    {group.number} / Skills
                  </p>

                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    {group.title}
                  </h3>
                </div>

                {group.focus && (
                  <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted">
                    Core Focus
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm leading-7 text-muted">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-background px-3 py-2 text-xs font-medium text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-14 border-t border-border pt-8">
          <p className="max-w-2xl text-sm leading-7 text-muted">
            My approach combines design awareness with practical
            development skills, allowing me to consider both the
            visual experience and technical implementation of
            digital products.
          </p>
        </div>

      </div>
    </section>
  );
}
