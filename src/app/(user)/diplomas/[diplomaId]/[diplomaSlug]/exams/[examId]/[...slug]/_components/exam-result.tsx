'use client';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import ResultChart from './result-chart';

import { RotateCcw, FolderSearch } from 'lucide-react';

type ExamResultProps = {
  answers: {
    questionId: string;
    question: string;
    correctAnswer: string;
    wrongAnswer: string | null;
  }[];
  correct: number;
  wrong: number;
  total: string;
  onRestartExam: () => void;
};

export default function ExamResult({
  answers,
  correct,
  wrong,
  onRestartExam,
}: ExamResultProps) {
  const router = useRouter();
  const { diplomaId, diplomaSlug } = useParams<{
    diplomaId: string;
    diplomaSlug: string;
  }>();

  const handleExploreDiploma = () => {
    router.push(`/diplomas/${diplomaId}/${diplomaSlug}`);
  };

  return (
    <div className="grow overflow-auto flex flex-col">
      <h3 className="text-2xl font-semibold text-primary mb-4">Result</h3>

      <div className="flex items-center">
        {/* Result Chart */}
        <div className="w-60">
          <ResultChart correct={correct} wrong={wrong} />
        </div>

        {/* Answers */}
        <div className="flex-1 flex flex-col gap-5 p-4 border border-secondary-100 max-h-[400px] overflow-auto">
          {answers?.map?.(answer => {
            const hasWrongAnswer = !!answer.wrongAnswer;

            return (
              <div key={answer.questionId}>
                <h4 className="text-xl font-semibold text-primary mb-2.5">
                  {answer.question}
                </h4>

                <RadioGroup>
                  {answer.wrongAnswer && (
                    <Button className="flex justify-start items-center gap-2.5 p-4 text-secondary bg-destructive-50 cursor-text pointer-events-none">
                      <RadioGroupItem
                        value={answer.wrongAnswer}
                        id={answer.wrongAnswer}
                        checked={true}
                        className="text-destructive border-destructive"
                      />

                      <Label htmlFor={answer.wrongAnswer}>
                        {answer.wrongAnswer}
                      </Label>
                    </Button>
                  )}

                  {answer.correctAnswer && (
                    <Button className="flex justify-start items-center gap-2.5 p-4 text-secondary bg-success-50 cursor-default pointer-events-none">
                      <RadioGroupItem
                        value={answer.correctAnswer}
                        id={answer.correctAnswer}
                        checked={!hasWrongAnswer}
                        className="text-success border-success"
                      />

                      <Label htmlFor={answer.correctAnswer}>
                        {answer.correctAnswer}
                      </Label>
                    </Button>
                  )}
                </RadioGroup>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Actions  */}
      <footer className="flex gap-4 mt-10">
        <Button
          variant="secondary"
          className="flex-1 grow"
          onClick={onRestartExam}
        >
          <RotateCcw size={18} />
          Restart
        </Button>

        <Button
          variant="default"
          className="flex-1 grow"
          onClick={handleExploreDiploma}
        >
          <FolderSearch size={18} />
          View Diploma
        </Button>
      </footer>
    </div>
  );
}
