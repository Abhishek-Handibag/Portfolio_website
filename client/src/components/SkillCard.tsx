import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export default function SkillCard({ icon, name, level }: SkillCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <div className="text-3xl text-primary">{icon}</div>
          <div>
            <h3 className="font-medium">{name}</h3>
            <p
              className={cn("text-sm", {
                "text-yellow-500": level === "Beginner",
                "text-green-500": level === "Intermediate",
                "text-blue-500": level === "Advanced",
                "text-purple-500": level === "Expert",
              })}
            >
              {level}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
