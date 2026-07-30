

import { ICategoryResponse, IPropertyTypes } from "../../_dashboardTypes/dashboardTypes";
import DeletePropertyDialog from "../DashboardDialog/DeletePropertyDialog";
import UpdatePropertyDialog from "../DashboardDialog/UpdatePropertyDialog";


interface IListingActionsProps {
  property: IPropertyTypes;
    propertyCategories:ICategoryResponse
  
}

const ListingActions = async({ property,propertyCategories }: IListingActionsProps) => {

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">

      <UpdatePropertyDialog property={property} propertyCategories={propertyCategories}/>

      <DeletePropertyDialog  propertyId={property.id}/> 
    

    </div>
  );
};

export default ListingActions;