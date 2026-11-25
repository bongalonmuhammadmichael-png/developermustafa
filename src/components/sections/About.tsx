export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[1fr_2fr] lg:px-16 lg:py-32">

        {/* Section Introduction */}
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            About Me / 2026
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            A little about me.
          </h2>
        </div>

        {/* Personal Story */}
        <div className="max-w-3xl">
          <p className="text-xl leading-9 tracking-tight sm:text-2xl">
            I'm Mustafa — a creative professional with a background
            in multimedia design and a growing focus on web development.
            I enjoy combining creativity, technology, and problem-solving
            to build meaningful digital experiences.
          </p>

          <div className="mt-8 space-y-6 text-base leading-8 text-muted">
            <p>
              My journey began with a Bachelor of Multimedia Arts
              at CIIT College of Arts and Technology, where I developed
              an interest in visual communication, design, and digital
              creativity.
            </p>

            <p>
              Through professional experience in graphic design,
              customer service, freelance multimedia work, and data
              annotation, I've developed a broader understanding of
              communication, collaboration, and working with different
              kinds of challenges.
            </p>

            <p>
              I'm now focusing on web development, building projects
              with technologies such as React, Next.js, PHP, Laravel,
              and MySQL. My goal is to bring my design perspective
              and technical skills together to create useful,
              well-crafted applications.
            </p>
          </div>

          {/* Professional Identity */}
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Background
              </p>
              <p className="mt-2 text-sm font-medium">
                Multimedia Arts & Design
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                Current Focus
              </p>
              <p className="mt-2 text-sm font-medium">
                Web Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
