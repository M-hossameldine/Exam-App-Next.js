'use client';
import { useState, Dispatch, SetStateAction } from 'react';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Question } from '@/lib/types/questions';
import ExamTimerRing from './exam-timer';

import { ChevronLeft, ChevronRight } from 'lucide-react';

type ExamQuestionsProps = {
  questions: Question[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;
};

export default function ExamQuestions({
  questions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
}: ExamQuestionsProps) {
  // state
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answeredQuestions, setAnsweredQuestions] = useState(
    questions?.map?.(question => ({
      questionId: question._id,
      correct: '',
    })) || []
  );

  // derived state
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const currentQuestion = questions[currentQuestionIndex];

  // callbacks
  const saveAnswer = (questionIndex: number, answer: string) => {
    setAnsweredQuestions(prev => {
      prev[questionIndex] = { ...prev[questionIndex], correct: answer };

      return prev;
    });
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex === 0) return;

    setCurrentQuestionIndex(prev => {
      const newQuestionIndex = prev - 1;

      const mappedAnswer = answeredQuestions[newQuestionIndex];
      setCurrentAnswer(mappedAnswer?.correct || '');

      return newQuestionIndex;
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) return;

    setCurrentQuestionIndex(prev => {
      const newQuestionIndex = prev + 1;

      const mappedAnswer = answeredQuestions[newQuestionIndex];
      setCurrentAnswer(mappedAnswer?.correct || '');

      return newQuestionIndex;
    });
  };

  const submitAnswers = () => {
    // TODO: submit answers to the server endpoint
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold text-primary mb-4 mt-10">
        {currentQuestion?.question}
      </h2>

      <RadioGroup value={currentAnswer}>
        {currentQuestion?.answers?.map?.(answer => (
          <Button
            key={answer.key}
            onClick={() => {
              saveAnswer(currentQuestionIndex, answer.key);
              setCurrentAnswer(answer.key);
            }}
            className="flex justify-start items-center gap-2.5 p-4 text-secondary bg-secondary-50 hover:bg-secondary-100 cursor-pointer"
          >
            <RadioGroupItem value={answer.key} id={answer.key} />
            <Label htmlFor={answer.key}>{answer.answer}</Label>
          </Button>
        ))}
      </RadioGroup>

      <footer className="flex gap-4 items-center mt-10">
        <Button
          className="flex-2 grow"
          onClick={() => handlePreviousQuestion()}
          disabled={currentQuestionIndex === 0}
        >
          <ChevronLeft size={18} />
          Previous
        </Button>

        <ExamTimerRing minutes={20} />

        <Button
          className="flex-2 grow"
          onClick={() => {
            if (isLastQuestion) {
              submitAnswers();
              return;
            }

            handleNextQuestion();
          }}
        >
          {isLastQuestion ? 'Finish' : 'Next'}
          {!isLastQuestion && <ChevronRight size={18} />}
        </Button>
      </footer>
    </div>
  );
}
