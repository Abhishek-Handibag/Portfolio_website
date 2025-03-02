import PageSection from "@/components/PageSection";
import SkillCard from "@/components/SkillCard";
import {
  SiPython,
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  { name: "Python", level: "Expert", icon: <SiPython /> },
  { name: "TensorFlow", level: "Advanced", icon: <SiTensorflow /> },
  { name: "Docker", level: "Expert", icon: <SiDocker /> },
  { name: "Kubernetes", level: "Advanced", icon: <SiKubernetes /> },
  { name: "AWS", level: "Advanced", icon: <SiAmazonaws /> },
  { name: "MongoDB", level: "Expert", icon: <SiMongodb /> },
  { name: "PostgreSQL", level: "Advanced", icon: <SiPostgresql /> },
  { name: "React", level: "Intermediate", icon: <SiReact /> },
  { name: "Node.js", level: "Advanced", icon: <SiNodedotjs /> },
] as const;

export default function Skills() {
  return (
    <PageSection>
      <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </PageSection>
  );
}
