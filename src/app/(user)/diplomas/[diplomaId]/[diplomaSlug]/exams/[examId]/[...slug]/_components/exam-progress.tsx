import { Progress } from '@/components/ui/progress';

type ExamProgressProps = {
  title: string;
  totalQuestions: number;
  currentQuestion: number;
};

export default function ExamProgress({
  title,
  totalQuestions,
  currentQuestion,
}: ExamProgressProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between text-sm text-secondary-500">
        <p className="text-sm text-secondary-500">{title}</p>

        <p className="text-sm text-secondary-500">
          Question{' '}
          <span className="text-primary font-bold"> {currentQuestion} </span> of{' '}
          {totalQuestions}
        </p>
      </div>

      <Progress value={(currentQuestion / totalQuestions) * 100} />
    </div>
  );
}
