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

export interface IPropertyTypes{

  id:string;
  title:string;
  description:string;
  location:string;
  price:string;
  amenities:string;
  thumbnailImage:string;
  status:"AVAILABLE" | "BOOKED"
  categoryId:string;
  landLordId:string;
  created_At:string;
  updated_At:string;
  category:ICategory;
}
export interface ICurrentLandlordPropertiesResponse {
  success: boolean;
  message: string;
  data: IPropertyTypes[];
}