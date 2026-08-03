

import { ICategoryResponse, IPropertyTypes } from "../../_dashboardTypes/dashboardTypes";
import DeletePropertyDialog from "../DashboardDialog/DeletePropertyDialog";
import UpdatePropertyDialog from "../DashboardDialog/UpdatePropertyDialog";


interface IListingActionsProps {
  property: IPropertyTypes;
    propertyCategories:ICategoryResponse;
    rentalReqId?:string
  
}

const ListingActions = async({ property,propertyCategories,rentalReqId }: IListingActionsProps) => {
console.log(property,'this is property in delete diagog ')
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">

      <UpdatePropertyDialog property={property} propertyCategories={propertyCategories}/>

      <DeletePropertyDialog  propertyId={property.id}/> 
    

    </div>
  );
};

export default ListingActions;