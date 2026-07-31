import { IPropertyTypes } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";

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