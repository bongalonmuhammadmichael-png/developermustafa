
type Certification = {
  title: string;
  organization: string;
  date: string;
  certificateUrl: string | null;
};

const education = [
  {
    qualification: "Bachelor of Multimedia Arts",
    institution: "CIIT College of Arts and Technology",
    period: "2016 - 2020",
    type: "Degree",
  },
  {
    qualification: "Communication Excellence Academic",
    institution: "American Institute for English Proficiency (AIEP)",
    period: "November 2025 - February 2026",
    type: "Academic Program",
  },
];

const certifications: Certification[] = [
  {
    title: "Google UX Design",
    organization: "Google / Coursera - 7-course Professional Certificate",
    date: "October 27, 2025",
    certificateUrl:
      "/certificates/08-google-ux-design-professional-certificate.pdf",
  },
  {
    title: "Design a User Experience for Social Good & Prepare for Jobs",
    organization: "Google / Coursera",
    date: "October 27, 2025",
    certificateUrl:
      "/certificates/09-google-ux-design-social-good-course.pdf",
  },
  {
    title: "The Complete 2023 Web Development Bootcamp",
    organization: "Instructor: Dr. Angela Yu - 66 hours - Udemy",
    date: "June 18, 2023",
    certificateUrl:
      "/certificates/04-complete-web-development-bootcamp.pdf",
  },
  {
    title: "One Week Python",
    organization: "Instructor: Colt Steele - 14.5 hours - Udemy",
    date: "April 25, 2023",
    certificateUrl: "/certificates/03-one-week-python.pdf",
  },
  {
    title: "Introduction to SQL",
    organization: "SoloLearn",
    date: "September 9, 2023",
    certificateUrl: "/certificates/10-introduction-to-sql.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    date: "November 1, 2026",
    certificateUrl:
      "/certificates/11-cisco-introduction-to-cybersecurity.pdf",
  },
  {
    title: "Cybersecurity",
    organization: "Asian Development Bank Institute (ADBI)",
    date: "October 28, 2026",
    certificateUrl: "/certificates/02-adbi-cybersecurity.pdf",
  },
  {
    title: "One Million Prompters Initiative",
    organization:
      "Dubai Future Foundation - Prompt engineering for AI systems",
    date: "June 8, 2026",
    certificateUrl: "/certificates/01-one-million-prompters.pdf",
  },
  {
    title:
      "English for Science, Technology, Engineering and Mathematics (eSTEM)",
    organization: "TESDA",
    date: "September 16, 2023",
    certificateUrl: "/certificates/05-tesda-estem.pdf",
  },
  {
    title: "English for Business and Entrepreneurship",
    organization: "TESDA",
    date: "October 4, 2023",
    certificateUrl:
      "/certificates/06-tesda-english-business-entrepreneurship.pdf",
  },
  {
    title: "SMART Technopreneurship 101",
    organization: "TESDA",
    date: "September 19, 2023",
    certificateUrl:
      "/certificates/07-tesda-smart-technopreneurship-101.pdf",
  },
  {
    title: "Fundamentals of Digital Marketing",
    organization: "Google Digital Garage - 40 hours",
    date: "May 14, 2023",
    certificateUrl: null,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">

        {/* Section Heading */}
        <div className="mb-16 grid gap-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Education / Development
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Always learning.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            My academic background and continuous learning have
            helped me develop a foundation in creative design,
            communication, user experience, and technology.
          </p>
        </div>

        {/* Education */}
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              01 / Academic Background
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight">
              Education.
            </h3>
          </div>

          <div className="border-t border-border">
            {education.map((item) => (
              <article
                key={item.qualification}
                className="border-b border-border py-7"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-muted">
                      {item.type}
                    </span>

                    <h4 className="mt-3 text-xl font-semibold tracking-tight">
                      {item.qualification}
                    </h4>

                    <p className="mt-2 text-sm text-muted">
                      {item.institution}
                    </p>
                  </div>

                  <p className="text-sm text-muted sm:text-right">
                    {item.period}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-24 grid gap-10 border-t border-border pt-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              02 / Professional Development
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight">
              Certifications & Training.
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
              Courses and certifications that reflect my
              commitment to continuous learning and professional
              development.
            </p>
          </div>

          <div className="border-t border-border">
            {certifications.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-3 border-b border-border py-7 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <p className="text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h4 className="mt-2 text-lg font-semibold tracking-tight">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm text-muted">
                    {item.organization}
                  </p>

                  {item.certificateUrl ? (
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-70"
                    >
                      View Certificate
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <p className="mt-4 text-xs text-muted">
                      Certificate not attached
                    </p>
                  )}
                </div>

                <p className="text-sm text-muted sm:text-right">
                  {item.date}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
