import PageSection from "@/components/PageSection";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "AI-Powered Chatbot",
    description:
      "Developed a context-aware chatbot using advanced NLP techniques and transformer models.",
    technologies: ["Python", "PyTorch", "FastAPI", "Docker"],
    githubUrl: "https://github.com/yourusername/chatbot",
    liveUrl: "https://chatbot-demo.example.com",
  },
  {
    title: "Scalable Microservices Architecture",
    description:
      "Designed and implemented a microservices-based system handling millions of requests.",
    technologies: ["Node.js", "Kubernetes", "MongoDB", "RabbitMQ"],
    githubUrl: "https://github.com/yourusername/microservices",
  },
  {
    title: "Real-time Analytics Platform",
    description:
      "Built a real-time analytics platform processing large volumes of data streams.",
    technologies: ["Python", "Apache Kafka", "Elasticsearch", "React"],
    githubUrl: "https://github.com/yourusername/analytics",
    liveUrl: "https://analytics-demo.example.com",
  },
];

export default function Projects() {
  return (
    <PageSection>
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </PageSection>
  );
}
