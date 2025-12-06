import { cn } from "@/lib/utils/tailwind-merge";
import { LucideIcon } from "lucide-react";

type LearningObjectiveProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
};

export default function LearningObjective({
  title,
  description,
  icon: Icon,
  className,
}: LearningObjectiveProps) {
  return (
    <div className={cn("flex gap-5 items-start", className)}>
      <span
        className="flex justify-center items-center w-9 h-9 border-[.0938rem] border-primary text-primary"
        aria-hidden="true"
      >
        <Icon className="w-6 h-6" />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <p className="text-secondary-700">{description}</p>
      </div>
    </div>
  );
}
