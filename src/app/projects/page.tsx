import { ProjectCard } from "@/components/project-card";

// This would be loaded from projects.json or CMS
const projects = [
  {
    title: "Enterprise Automation Platform",
    description: "Built a comprehensive automation platform that reduced manual processes by 80% and improved operational efficiency for a Fortune 500 client.",
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "AWS"],
    githubUrl: "https://github.com/noah-kellner/automation-platform",
    liveUrl: "https://automation-demo.noah-kellner.com",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Developed an intelligent dashboard that provides real-time insights and predictive analytics for business decision-making.",
    technologies: ["Python", "FastAPI", "React", "TensorFlow", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/noah-kellner/ai-analytics",
  },
  {
    title: "Microservices Migration Tool",
    description: "Created a tool to help organizations migrate from monolithic architectures to microservices with minimal downtime.",
    technologies: ["Go", "Kubernetes", "Docker", "gRPC", "MongoDB"],
    githubUrl: "https://github.com/noah-kellner/microservices-migration",
  },
  {
    title: "Team Collaboration Platform",
    description: "Built a modern collaboration platform that integrates with existing tools to streamline team workflows and communication.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/noah-kellner/team-platform",
    liveUrl: "https://teamwork.noah-kellner.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground">
            A showcase of solutions I've built to solve real-world problems.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}