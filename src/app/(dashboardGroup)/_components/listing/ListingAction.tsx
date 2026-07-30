"use client";

import { IPropertyTypes } from "../../_dashboardTypes/dashboardTypes";
import DeletePropertyDialog from "../DashboardDialog/DeletePropertyDialog";
import UpdatePropertyDialog from "../DashboardDialog/UpdatePropertyDialog";


interface IListingActionsProps {
  property: IPropertyTypes;
}

const ListingActions = ({ property }: IListingActionsProps) => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">

      <UpdatePropertyDialog property={property} />

      {/* <DeletePropertyDialog  propertyId={property.id}/>  */}
      <DeletePropertyDialog  /> 

    </div>
  );
};

export default ListingActions;