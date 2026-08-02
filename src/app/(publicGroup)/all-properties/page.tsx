import React, { Suspense } from "react";
import { getAllProperties } from "../_actions/getAllProperty";
import AllProperties from "@/app/(publicGroup)/_components/AllPropertiesPage/AllProperties";
import { getPropertyCategories } from "@/app/(dashboardGroup)/_actions/categoryActions";
import PropertiesSkeleton from "../_components/AllPropertiesPage/PropertiesSkeleton";

const AllPropertiesPublicPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) => {
  const query = await searchParams;
  console.log(query, "this is search");
  const allPropertiesRes = await getAllProperties({ query });
  const allCategories = await getPropertyCategories();

  return (
    <div>
      <Suspense fallback={<PropertiesSkeleton />}>
        <AllProperties
          allPropertiesRes={allPropertiesRes}
          allCategories={allCategories}
          query={query}
        />
      </Suspense>
    </div>
  );
};

export default AllPropertiesPublicPage;
