import PageSection from "@/components/PageSection";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <PageSection>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              I'm a passionate Software Engineer specializing in AI and Backend
              Development with several years of experience building robust and
              scalable applications.
            </p>
            <p>
              My expertise lies in developing machine learning models, natural
              language processing systems, and high-performance backend services
              that power modern applications.
            </p>
            <p>
              I enjoy solving complex problems and constantly learning about new
              technologies and best practices in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <ul className="space-y-2">
                <li>5+ years in Software Development</li>
                <li>3+ years specializing in AI/ML</li>
                <li>Led multiple successful projects</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <ul className="space-y-2">
                <li>M.S. in Computer Science</li>
                <li>B.S. in Software Engineering</li>
                <li>Various technical certifications</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageSection>
  );
}
