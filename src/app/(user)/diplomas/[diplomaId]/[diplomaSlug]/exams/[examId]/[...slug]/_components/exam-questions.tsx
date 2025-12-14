'use client';
import { useState, Dispatch, SetStateAction } from 'react';

import {
  CheckAnswersPayload,
  CheckAnswersSuccessResponse,
} from '@/lib/types/questions';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Question } from '@/lib/types/questions';
import ExamTimerRing from './exam-timer';

import { ChevronLeft, ChevronRight } from 'lucide-react';

type ExamQuestionsProps = {
  questions: Question[];
  currentQuestionIndex: number;
  setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;
  examTimeInMinutes: number; // in minutes
  onCheckAnswersSuccess: (data: CheckAnswersSuccessResponse) => void;
  isCheckingAnswers: boolean;
  checkAnswersMutation: (
    payload: CheckAnswersPayload
  ) => Promise<CheckAnswersSuccessResponse>;
};

export default function ExamQuestions({
  questions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  examTimeInMinutes,
  onCheckAnswersSuccess,
  isCheckingAnswers,
  checkAnswersMutation,
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

  const submitAnswers = async () => {
    const response = await checkAnswersMutation({
      answers: answeredQuestions,
      time: examTimeInMinutes,
    });

    if (response.message === 'success') {
      onCheckAnswersSuccess(response);
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold text-primary mb-4">
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
          disabled={currentQuestionIndex === 0 || isCheckingAnswers}
        >
          <ChevronLeft size={18} />
          Previous
        </Button>

        <ExamTimerRing minutes={examTimeInMinutes} />

        <Button
          className="flex-2 grow"
          onClick={() => {
            if (isLastQuestion) {
              submitAnswers();
              return;
            }

            handleNextQuestion();
          }}
          disabled={isCheckingAnswers}
        >
          {isCheckingAnswers && <Spinner />}
          {isLastQuestion ? 'Finish' : 'Next'}
          {!isLastQuestion && <ChevronRight size={18} />}
        </Button>
      </footer>
    </div>
  );
}
