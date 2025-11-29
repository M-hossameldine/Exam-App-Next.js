import { cn } from "@/lib/utils/tailwind-merge";

import LearningObjective from "./learning-objective";

import {
  FolderCode,
  Brain,
  BookOpenCheck,
  RectangleEllipsis,
} from "lucide-react";

type LayoutAsideProps = {
  className?: string;
};

export default function LayoutAside({ className }: LayoutAsideProps) {
  return (
    <aside
      className={cn(
        "relative flex justify-center items-center bg-gray-100 p-4",
        className
      )}
    >
      <div
        className="absolute top-0 left-0 w-full h-full overflow-y-hidden"
        aria-hidden="true"
      >
        <span className="absolute top-[10vh] -right-16 w-[25rem] h-[25rem] rounded-full bg-primary-400" />
        <span className="absolute -bottom-24 left-4  w-[25rem] h-[25rem] rounded-full bg-primary-400 block" />
      </div>

      <div className="absolute top-0 left-0 flex justify-center w-full min-h-full px-32 py-28 backdrop-blur-3xl bg-background/60">
        <div className="flex flex-col max-w-md w-full">
          <h3 className="flex items-start gap-1 text-xl font-semibold mb-10 text-primary">
            <span className="relative mt-1" aria-hidden="true">
              <FolderCode className="absolute top-0 left-0 w-6 h-6 fill-primary" />
              <FolderCode className="absolute top-0 left-0 w-6 h-6 [&_path:nth-child(3)]:stroke-blue-600 [&_path]:stroke-white" />
            </span>
            <span className="ps-6">Exam App</span>
          </h3>
          <h1 className="text-3xl font-bold mb-14 mt-auto ">
            Empower your learning journey with our smart exam platform.
          </h1>

          <div className="flex flex-col gap-9 mb-auto">
            <LearningObjective
              title="Tailored Diplomas"
              description="Choose from specialized tracks like Frontend, Backend, and Mobile Development."
              icon={Brain}
            />
            <LearningObjective
              title="Focused Exams"
              description="Access topic-specific tests including HTML, CSS, JavaScript, and more."
              icon={BookOpenCheck}
            />
            <LearningObjective
              title="Smart Multi-Step Forms"
              description="Choose from specialized tracks like Frontend, Backend, and Mobile Development."
              icon={RectangleEllipsis}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
