import { Exam } from './exams';

export type Question = {
  _id: string;
  question: string;
  answers: {
    answer: string;
    key: string;
  }[];
  type: 'single_choice';
  correct: string;
  subject: null;
  exam: Exam;
  createdAt: string;
};

export type QuestionsResponsePayload = {
  questions: Question[];
  exam: Exam;
};
export type QuestionsResponse = ApiResponse<QuestionsResponsePayload>;
export type QuestionsSuccessResponse =
  SuccessResponse<QuestionsResponsePayload>;

export type CheckAnswersPayload = {
  answers: {
    questionId: string;
    correct: string;
  }[];
  time: number;
};

export type CheckAnswersResponsePayload = {
  correct: number;
  wrong: number;
  total: string;
  WrongQuestions: {
    QID: string;
    Question: string;
    inCorrectAnswer: string;
    correctAnswer: string;
  }[];
  correctQuestions: {
    QID: string;
    Question: string;
    correctAnswer: string;
    inCorrectAnswer: null;
  }[];
};
export type CheckAnswersResponse = ApiResponse<CheckAnswersResponsePayload>;
export type CheckAnswersSuccessResponse =
  SuccessResponse<CheckAnswersResponsePayload>;
