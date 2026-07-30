import PropertyListingCard from "@/app/(dashboardGroup)/_components/PropertyListingCard/PropertyListingCard";
import { ICurrentLandlordPropertiesResponse } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";

interface ILandlordPropertyProps {
  currentLandlordProperties: ICurrentLandlordPropertiesResponse;
}

const LandlordPropertyListing = ({
  currentLandlordProperties,
}: ILandlordPropertyProps) => {
  const landlordProperties = currentLandlordProperties.data;

  return (
    <div className="space-y-5">
      {landlordProperties.map((property) => (
        <PropertyListingCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default LandlordPropertyListing;
