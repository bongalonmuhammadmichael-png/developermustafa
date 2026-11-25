const experiences = [
  {
    role: "Senior Graphic Designer",
    company: "Foreign Cultural Organization Manila",
    period: "December 2023 — Present",
    location: "Onsite · Manila, Philippines",
    description:
      "Create visual content and branding materials that support organizational communication, marketing, and promotional activities.",
    responsibilities: [
      "Create promotional materials, digital content, and branding assets.",
      "Collaborate with teams to deliver creative campaigns.",
      "Organize marketing, social media, and advertising activities.",
      "Interpret during international cultural meetings.",
    ],
  },
  {
    role: "Customer Service Representative — Voice",
    company: "iQor Fairview · Walmart Retail Account",
    period: "December 2022 — October 2023",
    location: "Onsite · Fairview, Philippines",
    description:
      "Supported customers with online retail inquiries and provided assistance with orders, deliveries, refunds, and account concerns.",
    responsibilities: [
      "Handled inbound customer calls regarding online orders and shipping statuses.",
      "Assisted with refunds, product availability, and account troubleshooting.",
      "Resolved customer inquiries professionally and efficiently.",
      "Worked with shifting schedules, including weekends and holidays.",
    ],
  },
  {
    role: "Freelance Multimedia Designer",
    company: "Independent · Freelance",
    period: "December 2022 — May 2023",
    location: "Remote",
    description:
      "Provided creative and multimedia design services for clients across different projects.",
    responsibilities: [
      "Designed websites, graphics, and branding materials.",
      "Created educational articles and academic presentations for clients.",
    ],
  },
  {
    role: "Data Annotator / Transcriptionist",
    company: "Baidu China",
    period: "July 2021 — September 2021",
    location: "Remote",
    description:
      "Worked on transcription, linguistic labeling, and data annotation tasks while following project-specific quality guidelines.",
    responsibilities: [
      "Transcribed audio and reviewed automated speech transcripts.",
      "Applied linguistic labels for non-speech sounds, sentiment, intent, and named entities.",
      "Performed multimodal data labeling and quality checks.",
      "Identified unclear audio, anomalies, and edge cases.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border bg-surface"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        {/* Section Heading */}
        <div className="mb-16 grid gap-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Career Journey / Experience
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Where I've worked.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            My professional journey has taken me through creative
            design, customer service, freelance work, and data
            annotation. Each experience has helped me develop
            different skills and perspectives.
          </p>
        </div>

        {/* Experience List */}
        <div className="border-t border-border">
          {experiences.map((experience, index) => (
            <article
              key={experience.role}
              className="grid gap-6 border-b border-border py-10 lg:grid-cols-[1fr_2fr]"
            >
              {/* Role and Date */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted">
                  {String(index + 1).padStart(2, "0")} / {experience.period}
                </p>

                <p className="mt-3 text-sm text-muted">
                  {experience.location}
                </p>
              </div>

              {/* Experience Details */}
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {experience.role}
                </h3>

                <p className="mt-2 text-sm font-medium">
                  {experience.company}
                </p>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
                  {experience.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-3 text-sm leading-6 text-muted"
                    >
                      <span className="text-accent">↗</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
