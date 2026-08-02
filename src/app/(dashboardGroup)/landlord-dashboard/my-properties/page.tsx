import React from "react";
import LandlordPropertyListing from "../_landlordComponents/LandlordProperties/LandlordPropertyListing";
import { getCurrentLandlordProperties } from "../../_actions/propertyActions";
import { getPropertyCategories } from "../../_actions/categoryActions";

const LandlordAllPropertiesPage = async () => {
  const currentLandlordProperties = await getCurrentLandlordProperties();

  const propertyCategories = await getPropertyCategories();

  return (
    <div>
      <LandlordPropertyListing
        currentLandlordProperties={currentLandlordProperties}
        propertyCategories={propertyCategories}
      />
    </div>
  );
};

export default LandlordAllPropertiesPage;
