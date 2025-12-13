import { slugifyTitle } from '@/lib/utils/navigation';

import Link from 'next/link';
import { Exam } from '@/lib/types/exams';

import { Timer } from 'lucide-react';

type ExamCardProps = {
  exam: Exam;
  diplomaId: string;
  diplomaSlug: string;
};

export default function ExamCard({
  exam,
  diplomaId,
  diplomaSlug,
}: ExamCardProps) {
  return (
    <Link
      href={`/diplomas/${diplomaId}/${diplomaSlug}/exams/${
        exam._id
      }/${slugifyTitle(exam.title)}`}
      className="flex justify-between items-center w-full p-4 bg-primary-50"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold text-primary">{exam.title}</h3>

        <p className="text-sm text-secondary-500">{exam.duration} Questions</p>
      </div>

      <div className="flex items-center gap-1.5">
        <Timer className="size-6 text-secondary-500" />
        <p>Duration: {exam.duration} minutes</p>
      </div>
    </Link>
  );
}
