import { cn } from '@/lib/utils/tailwind-merge';

import { AppBadge } from '@/components/ui/app-badge';
import LearningObjective from './learning-objective';

import { Brain, BookOpenCheck, RectangleEllipsis } from 'lucide-react';

type LayoutAsideProps = {
  className?: string;
};

export default function LayoutAside({ className }: LayoutAsideProps) {
  return (
    <aside
      className={cn(
        "relative flex justify-center items-center bg-gray-100 overflow-hidden before:content-[''] before:absolute before:top-[10vh] before:right-[-4rem] before:w-[25rem] before:h-[25rem] before:rounded-full before:bg-primary-400 before:z-10 after:content-[''] after:absolute after:bottom-[-6rem] after:left-4 after:w-[25rem] after:h-[25rem] after:rounded-full after:bg-primary-400 after:z-10",
        className
      )}
    >
      <div className="z-20 flex justify-center w-full min-h-full px-32 py-28 backdrop-blur-3xl bg-background/60">
        <div className="flex flex-col max-w-md w-full">
          <AppBadge className="mb-10" />

          <h2 className="text-3xl font-bold mb-14 mt-auto ">
            Empower your learning journey with our smart exam platform.
          </h2>

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
