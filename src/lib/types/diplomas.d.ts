export type Diploma = {
  _id: string;
  name: string;
  icon: string;
  createdAt: string;
};

type PaginatedDiplomas = PaginatedData<Diploma, 'subjects'>;
export type DiplomasResponse = ApiResponse<PaginatedDiplomas>;
export type DiplomasSuccessResponse = SuccessResponse<PaginatedDiplomas>;
