export interface ICategory {
  id: string;
  name: string;
  created_At: string;
  updated_At: string;
}

export interface ICategoryResponse {
  success: boolean;
  message: string;
  data: ICategory[];
}
