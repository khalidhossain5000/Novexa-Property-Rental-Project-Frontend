import React, { Suspense } from "react";
import { getPorpertyDetails } from "../../_actions/getAllProperty";
import PropertyDetails from "@/app/(publicGroup)/_components/PropertyDetailsPage/PropertyDetails";
import { getMe } from "@/service/getMe";
import DetailsSkeleton from "../../_components/PropertyDetailsPage/DetailsSkeleton";
interface IParamsProps {
  params: Promise<{ id: string }>;
}
const PropertyDetailsPage = async ({ params }: IParamsProps) => {
  const { id } = await params;
  const propertyDetailsRes = await getPorpertyDetails(id);
  const currentUser = await getMe();
  const currentUserId = currentUser?.data?.id;
  const currentUserRole=currentUser?.data.role
  console.log(id,propertyDetailsRes,currentUserId,"all info over here in detials page")
  return (
    <div>
      <Suspense fallback={<DetailsSkeleton />}>
        <PropertyDetails
          propertyDetailsRes={propertyDetailsRes}
          currentUserId={currentUserId}
          currentUserRole={currentUserRole}
        />
      </Suspense>
    </div>
  );
};

export default PropertyDetailsPage;
