import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Server, Brain, Cpu } from "lucide-react";

export default function About() {
  const services = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI Integration",
      description: "Implementing Large Language Models (LLMs) for synthetic data generation, deepfake detection, face blurring, and intelligent automation."
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: "Backend Development",
      description: "Designing and developing scalable APIs with Flask, PostgreSQL, and Dockerized environments for seamless data handling and AI integration."
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Full-Stack Engineering",
      description: "Building end-to-end applications with React, Flask, and PostgreSQL, optimizing performance and enhancing user experience."
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Cloud & DevOps",
      description: "Deploying scalable applications using Docker, orchestrating containerized environments on AWS EC2, and automating infrastructure with Terraform for efficient scaling and management."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about AI and software engineering"
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With hands-on experience in AI-driven solutions and full-stack development, I specialize in integrating Large Language Models (LLMs) and building scalable backend systems. My expertise spans generative AI, data augmentation, and cloud-based deployments, enabling innovative and impactful applications.
                </p>
                <div className="mt-6 space-y-3 text-muted-foreground">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    1+ years of Experience in AI/ML integration and backend development
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Proven ability to deliver full-stack applications with AI-powered features
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Skilled in developing scalable, containerized systems on AWS
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <Card key={index} className="bg-card hover:bg-card/80 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4">{service.icon}</div>
                    <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}