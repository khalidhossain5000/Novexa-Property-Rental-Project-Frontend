import { IUserTypes } from "@/app/(authGroup)/_authTypes/authTypes";
import { ICategory, IPropertyTypes, IRentalRequest } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";

export enum RentalRequestStatus {
    PENDING="PENDING",
    APPROVED="APPROVED",
    REJECTED="REJECTED",
    ACTIVE="ACTIVE",
    COMPLETED="COMPLETED"
}

export interface IPropertyResponse{
      success: boolean;
      message: string;
      data: IPropertyTypes[];
}


export interface IPropertyDetailsTypes{

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
  rentalRequest?:IRentalRequest[]
  user?:IUserTypes
}
export interface IPropertyDetailsRes{
    success:boolean;
    message:string;
    data:IPropertyDetailsTypes
}

