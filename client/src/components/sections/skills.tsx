import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import { Progress } from "@/components/ui/progress";

const skills = {
  "AI & Machine Learning": [
    { name: "Generative AI", level: 90 },
    { name: "LangChain/LangGraph", level: 85 },
    { name: "Computer Vision", level: 80 }
  ],
  "Backend Development": [
    { name: "Python/FastAPI/Django", level: 95 },
    { name: "PostgreSQL/Vector Databases", level: 90 },
    { name: "AWS", level: 85 }
  ],
  // "Cloud & DevOps": [
  //   { name: "AWS", level: 85 },
  //   { name: "Docker", level: 90 },
  //   { name: "CI/CD", level: 85 }
  // ],
  "Software Developement": [
    { name: "React", level: 85 },
    { name: "Docker", level: 80 },
    { name: "Material UI", level: 95 }
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies I work with"
        />

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">{category}</h3>
                  <div className="space-y-6">
                    {categorySkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
