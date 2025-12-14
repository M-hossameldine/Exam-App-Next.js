'use client';

import { useState, useMemo } from 'react';
import { useParams } from 'next/navigation';

import { useQuestions } from '@/hooks/questions/use-questions';
import { useCheckAnswers } from '@/hooks/questions/use-check-answers';

import { deslugifyTitle } from '@/lib/utils/navigation';

import PageWrapper from '../../../../../../../_components/page-wrapper';
import ExamProgress from './exam-progress';
import ExamQuestions from './exam-questions';
import ExamResult from './exam-result';

import { CircleQuestionMark } from 'lucide-react';

export default function QuestionsWrapper() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExamResult, setIsExamResult] = useState(false);

  const { diplomaId, diplomaSlug, examId, slug } = useParams<{
    diplomaId: string;
    diplomaSlug: string;
    examId: string;
    slug: string;
  }>();

  // queries & mutations
  const { data: questions } = useQuestions(examId);
  const {
    mutateAsync: checkAnswersMutation,
    data: resultData,
    isPending: isCheckingAnswers,
  } = useCheckAnswers();

  const examResult = useMemo(() => {
    if (!resultData || !showExamResult) return null;

    const { correctQuestions = [], WrongQuestions = [] } = resultData;

    const answersIdMap = [...correctQuestions, ...WrongQuestions].reduce<
      Record<string, { correctAnswer: string; incorrectAnswer: string | null }>
    >((acc, answer) => {
      acc[answer.QID] = {
        correctAnswer: answer.correctAnswer,
        incorrectAnswer: answer.inCorrectAnswer,
      };

      return acc;
    }, {});

    const resultAnswers = questions?.questions?.map?.(question => {
      const checkedQuestion = answersIdMap[question._id];

      let correctAnswer: string = '';
      let wrongAnswer: string | null = null;

      question.answers.forEach(answer => {
        if (answer.key === checkedQuestion?.correctAnswer) {
          correctAnswer = answer.answer;
        }
        if (answer.key === checkedQuestion?.incorrectAnswer) {
          wrongAnswer = answer.answer;
        }
      });

      return {
        questionId: question._id,
        question: question.question,
        correctAnswer,
        wrongAnswer,
      };
    });

    return {
      answers: resultAnswers,
      correct: resultData.correct,
      wrong: resultData.wrong,
      total: resultData.total,
    };
  }, [questions, resultData, showExamResult]);

  const handleCheckAnswersSuccess = () => {
    setIsExamResult(true);
  };

  return (
    <PageWrapper
      title={`[${deslugifyTitle(slug)}] Questions`}
      icon={CircleQuestionMark}
      goBackUrl={`/diplomas/${diplomaId}/${diplomaSlug}`}
    >
      <div className="p-6 bg-white h-[calc(100vh-202px)] overflow-auto flex flex-col">
        <ExamProgress
          title={`${deslugifyTitle(diplomaSlug)} - ${deslugifyTitle(slug)}`}
          totalQuestions={questions?.questions?.length || 0}
          currentQuestion={currentQuestionIndex + 1}
        />

        {questions?.questions && !showExamResult && (
          <ExamQuestions
            questions={questions.questions}
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            examTimeInMinutes={questions.exam.duration || 0}
            onCheckAnswersSuccess={handleCheckAnswersSuccess}
            isCheckingAnswers={isCheckingAnswers}
            checkAnswersMutation={checkAnswersMutation}
          />
        )}

        {examResult && showExamResult && (
          <ExamResult
            answers={examResult.answers || []}
            correct={examResult.correct}
            wrong={examResult.wrong}
            total={examResult.total}
            onRestartExam={() => {
              setIsExamResult(false);
              setCurrentQuestionIndex(0);
            }}
          />
        )}
      </div>
    </PageWrapper>
  );
}
