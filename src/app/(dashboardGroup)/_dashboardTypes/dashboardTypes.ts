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
export interface IRentalRequest{
  id:string;
  status:RentalRequestStatus,
  totalAmount:string;
  propertyId:string;
  tenantId:string;
  created_At:string;
  updated_At:string;
  property:IPropertyTypes;
  tenant:IUserTypes
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








// {
//     "success": true,
//     "message": "Yours all rental request retrived successfully",
//     "data": [
//         {
//             "id": "00faa21c-1d0f-4bac-b592-aa5e971ebdd0",
//             "status": "REJECTED",
//             "totalAmount": "22000",
//             "propertyId": "00ea3514-48d0-4e6b-8d9b-e607d84d8154",
//             "tenantId": "494bbd0a-67f9-435a-a9b4-a9efd24b25b8",
//             "created_At": "2026-07-18T12:25:29.410Z",
//             "updated_At": "2026-07-30T17:51:01.143Z",
//             "property": {
//                 "id": "00ea3514-48d0-4e6b-8d9b-e607d84d8154",
//                 "title": "Affordable Bachelor Flat",
//                 "description": "One-bedroom flat located close to public transport and shopping centers.",
//                 "location": "Mohammadpur, Dhaka",
//                 "price": "22000",
//                 "amenities": "WiFi, Security, Lift",
//                 "thumbnailImage": "https://i.ibb.co.com/dJWwQNvF/mountain.jpg",
//                 "status": "BOOKED",
//                 "categoryId": "ba20a26c-e49d-48ba-b269-1dd29ebe2eb8",
//                 "landLordId": "dff740e5-6de9-448b-95ff-6a899a9a4ebf",
//                 "created_At": "2026-07-11T15:08:40.818Z",
//                 "updated_At": "2026-07-18T13:15:46.245Z"
//             },
//             "tenant": {
//                 "id": "494bbd0a-67f9-435a-a9b4-a9efd24b25b8",
//                 "firstName": "Tenant Rent",
//                 "lastName": "Nest",
//                 "email": "tenant@rentnest.com",
//                 "profilePhoto": "https://i.ibb.co.com/MxG3yzrq/fb.jpg",
//                 "role": "TENANT",
//                 "status": "ACTIVE",
//                 "created_At": "2026-07-09T08:43:27.872Z",
//                 "updated_At": "2026-07-09T08:43:27.872Z"
//             }
//         },
//         {
//             "id": "93968ab9-9256-4c03-88da-c690b16290ac",
//             "status": "PENDING",
//             "totalAmount": "22000",
//             "propertyId": "0f058886-128b-48a8-8b2a-d316f0e52838",
//             "tenantId": "494bbd0a-67f9-435a-a9b4-a9efd24b25b8",
//             "created_At": "2026-07-31T08:50:32.160Z",
//             "updated_At": "2026-07-31T08:50:32.160Z",
//             "property": {
//                 "id": "0f058886-128b-48a8-8b2a-d316f0e52838",
//                 "title": "Affordable Bachelor Flat",
//                 "description": "One-bedroom flat located close to public transport and shopping centers.",
//                 "location": "Mohammadpur, Dhaka",
//                 "price": "22000",
//                 "amenities": "WiFi, Security, Lift",
//                 "thumbnailImage": "https://i.ibb.co.com/dJWwQNvF/mountain.jpg",
//                 "status": "AVAILABLE",
//                 "categoryId": "ba20a26c-e49d-48ba-b269-1dd29ebe2eb8",
//                 "landLordId": "dff740e5-6de9-448b-95ff-6a899a9a4ebf",
//                 "created_At": "2026-07-11T15:10:05.121Z",
//                 "updated_At": "2026-07-11T15:10:05.121Z"
//             },
//             "tenant": {
//                 "id": "494bbd0a-67f9-435a-a9b4-a9efd24b25b8",
//                 "firstName": "Tenant Rent",
//                 "lastName": "Nest",
//                 "email": "tenant@rentnest.com",
//                 "profilePhoto": "https://i.ibb.co.com/MxG3yzrq/fb.jpg",
//                 "role": "TENANT",
//                 "status": "ACTIVE",
//                 "created_At": "2026-07-09T08:43:27.872Z",
//                 "updated_At": "2026-07-09T08:43:27.872Z"
//             }
//         }
//     ]
// }