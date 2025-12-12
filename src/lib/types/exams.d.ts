export type Exam = {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: string;
};

export type PaginatedExams = PaginatedData<Exam, 'exams'>;
export type ExamsResponse = ApiResponse<PaginatedExams>;
export type ExamsSuccessResponse = SuccessResponse<PaginatedExams>;
