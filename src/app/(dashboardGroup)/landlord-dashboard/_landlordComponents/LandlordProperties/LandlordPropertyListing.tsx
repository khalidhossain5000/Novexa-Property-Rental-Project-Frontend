

import ListingActions from "@/app/(dashboardGroup)/_components/listing/ListingAction";
import ListingMobileCard from "@/app/(dashboardGroup)/_components/listing/ListingMobileCard";
import ListingTableRow from "@/app/(dashboardGroup)/_components/listing/ListingTableRow";
import { ICategoryResponse, ICurrentLandlordPropertiesResponse } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";

interface ILandlordPropertyProps {
  currentLandlordProperties: ICurrentLandlordPropertiesResponse;
  propertyCategories:ICategoryResponse
}

const LandlordPropertyListing = ({
  currentLandlordProperties,
  propertyCategories
}: ILandlordPropertyProps) => {
  const landlordProperties = currentLandlordProperties?.data;

  return (
    <div className="space-y-5">
      <div className="mb-8">
        <h2 className="font-lora text-2xl font-bold text-foreground">
          Manage Properties
        </h2>

        <p className="mt-1 font-inter text-sm text-foreground/60">
          Review all properties, update details, or remove listings.
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 md:block">
        <table className="w-full text-left text-sm font-inter">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300">
            <tr>
              <th className="px-6 py-4">Property</th>

              <th className="px-6 py-4">Price</th>

              <th className="px-6 py-4">Location</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {landlordProperties.map((property) => (
              <ListingTableRow
                key={property.id}
                image={property.thumbnailImage}
                title={property.title}
                subtitle={property.location}
                columns={[`$ ${property.price}`, property.location]}
                status={
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      property.status === "AVAILABLE"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                        : "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
                    }`}
                  >
                    {property.status}
                  </span>
                }
                actions={<ListingActions property={property} propertyCategories={propertyCategories}/>}
              />
            ))}

            {landlordProperties.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-8 text-center text-foreground/50"
                >
                  No properties found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card */}

      <div className="grid grid-cols-1 gap-4 md:hidden">
        {landlordProperties.map((property) => (
          <ListingMobileCard
            key={property.id}
            image={property.thumbnailImage}
            title={property.title}
            subtitle={property.location}
            badges={
              <>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  $ {property.price}
                </span>

                <span
                  className={`rounded-full px-2.5 py-1 ${
                    property.status === "AVAILABLE"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                      : "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
                  }`}
                >
                  {property.status}
                </span>
              </>
            }
            description={property.description}
            actions={<ListingActions property={property} propertyCategories={propertyCategories}/>}
          />
        ))}
      </div>
    </div>
  );
};

export default LandlordPropertyListing;
