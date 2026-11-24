export type Project = {
  title: string;
  slug: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string | null;
  featured: boolean;
  status: "Completed" | "In Progress";
};

export const projects: Project[] = [
  {
    title: "INSIGHT",
    slug: "insight",
    category: "Frontend Development",
    description:
      "A modern analytics dashboard designed to present business performance through revenue insights, customer analytics, product performance, and transaction management.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
    ],
    githubUrl:
      "https://github.com/bongalonmuhammadmichael-png/insight-analytics-dashboard",
    liveUrl: null,
    featured: true,
    status: "Completed",
  },
];
