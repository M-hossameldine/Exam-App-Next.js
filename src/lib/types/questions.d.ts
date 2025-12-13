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

export type QuestionsResponse = ApiResponse<Question, 'questions'>;
export type QuestionsSuccessResponse = SuccessResponse<
  PaginatedData<Question, 'questions'>
>;
