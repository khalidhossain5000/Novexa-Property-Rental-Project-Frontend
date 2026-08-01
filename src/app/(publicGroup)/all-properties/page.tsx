import React from "react";
import { getAllProperties } from "../_actions/getAllProperty";
import AllProperties from "@/app/(publicGroup)/_components/AllPropertiesPage/AllProperties";
import { getPropertyCategories } from "@/app/(dashboardGroup)/_actions/getCategory";

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
      <AllProperties
        allPropertiesRes={allPropertiesRes}
        allCategories={allCategories}
        query={query}
      />
    </div>
  );
};

export default AllPropertiesPublicPage;
