import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon" asChild>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="mailto:your.email@example.com">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </a>
      </Button>
    </div>
  );
}
