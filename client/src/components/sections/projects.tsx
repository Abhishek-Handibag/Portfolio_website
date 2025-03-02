import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const projects = [
  {
    title: "Web Content Q&A Tool",
    description:
      "A comprehensive tool that combines a Flask-based backend service for intelligent web content extraction and AI-powered question answering using Google's Gemini 1.5 Flash 8B model.",
    image:
      "https://www.iab.com/wp-content/uploads/2024/06/legal-issues-and-business-considerations-when-using-generative-artificial-intelligence-in-digital-advertising-3-1024x312.jpg",
    technologies: [
      "Flask",
      "Python",
      "Google Gemini AI",
      "React",
      "JavaScript",
     
    ],
    github: "https://github.com/Abhishek-Handibag/Web-Content-Q-A-Tool-Backend",
    secondaryGithub:
      "https://github.com/Abhishek-Handibag/Web-Content-Q-A-Tool",
    demo: "https://web-content-q-a-tool.vercel.app/",
  },
  {
    title: "Secure-share-hub",
    description:
      "A secure file sharing platform with end-to-end encryption, built using React and Django, offering password-protected uploads and customizable permissions.",
    image:
     "data:image/jpeg;base64,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",
    technologies: ["Python", "Django", "React", "Material-UI", "Docker"],
    github: "https://github.com/Abhishek-Handibag/Secure-share-hub",
    demo: null,
  },
  {
    title: "AutoResponder",
    description:
      "An automated email response system designed to streamline customer support by automatically replying to emails containing specific trigger words.",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    technologies: ["Python", "CSV", "HTML Email Templates"],
    github: "https://github.com/Abhishek-Handibag/AutoResponder",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of my recent work"
        />

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col">
                <div
                  className="h-48 w-full rounded-t-lg"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <CardHeader>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="space-x-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
                  {project.secondaryGithub && (
                    <a href={project.secondaryGithub} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4 mr-2" />
                        Frontend
                      </Button>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
