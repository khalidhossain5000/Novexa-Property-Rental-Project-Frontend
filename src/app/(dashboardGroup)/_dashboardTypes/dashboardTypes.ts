import {  IUserTypes } from "@/app/(authGroup)/_authTypes/authTypes";
import { RentalRequestStatus } from "@/lib/types";

export interface ICategory {
  id?: string;
  name?: string;
  created_At?: string;
  updated_At?: string;
}

export interface ICategoryResponse {
  success: boolean;
  message: string;
  data?: ICategory[];
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
  rentalRequest?:IRentalRequest[]
  user?:IUserTypes[]
}
export interface ICurrentLandlordPropertiesResponse {
  success: boolean;
  message: string;
  data: IPropertyTypes[];
}


//landlord rental req related

export interface IPropertyTypesRentReq{

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
export interface IRentalRequest{
  id:string;
  status:RentalRequestStatus,
  totalAmount:string;
  propertyId:string;
  tenantId:string;
  created_At:string;
  updated_At:string;
  property:IPropertyTypesRentReq;
  tenant:IUserTypes;
  
}
export interface IRentalReqResponse{
  success:boolean;
  message:string;
  data:IRentalRequest[]
}


//admin all users type

export interface IUserResponse{
success:boolean;
message:string;
data:IUserTypes[]
}


//admin all properties get res types


export interface IAdminPropertiesResponse{
success:boolean;
message:string;
data:IPropertyTypes[]
}

//payment tyypes

enum PaymentStatus {
    PENDING="PENDING",
    COMPLETED="COMPLETED",
    FAILED="FAILED"
}

export interface IPayment{
  id:string;
  transactionId:string;
  totalAmount:string;
  provider:string;
  paidAt:string;
  status:PaymentStatus
  rentalRequestId:string;
  rentalRequest:IRentalRequest
}
export interface IPaymentResponse{
  success:boolean;
  message:string;
  data:IPayment[]
}

//dashboards stats

export interface ITenantStats{
  totalRequestSent:number;
  pendingRequest:number;
  rejectedRequest:number;
  activeRent:number;
}
export interface ITenanstStatsRes{
  success:boolean;
  message:string;
  data:ITenantStats
}


//landlord stats

export interface ILandlordStats{
  totalRentReq:number;
  totalActiveRent:number;
  totalEarn:string;
  totalPropertiesAdded:number;
}


export interface ILandlordStatsRes{
  success:true;
  message:string;
  data:ILandlordStats
}

//admin
export interface IAdminStats{
  totalUsersCount:number;
  totalPropertiesCount:number;
  totalRentalRequestCount:number;
  activePropertyCount:number;
}


export interface IAdminStatsResponse{
  success:true;
  message:string;
  data:IAdminStats
}
