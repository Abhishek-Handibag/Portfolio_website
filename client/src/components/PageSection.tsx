import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function PageSection({
  children,
  className,
  id,
}: PageSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center",
        className
      )}
      id={id}
    >
      {children}
    </motion.section>
  );
}
