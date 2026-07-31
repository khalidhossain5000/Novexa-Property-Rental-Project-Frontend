import ListingMobileCard from "@/app/(dashboardGroup)/_components/listing/ListingMobileCard";
import ListingTableRow from "@/app/(dashboardGroup)/_components/listing/ListingTableRow";
import { IAdminPropertiesResponse } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";
import React from "react";

interface IAdminPropertiesProps {
  allAdminPropertiesRes: IAdminPropertiesResponse;
}

const AllPropertiesAdmin = ({
  allAdminPropertiesRes,
}: IAdminPropertiesProps) => {
  const adminProperties = allAdminPropertiesRes.data;
  return (
    <div>
      {/* Desktop Table */}
      {/* Desktop Table */}
      <div className="hidden overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 md:block">
        <table className="w-full text-left text-sm font-inter">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300">
            <tr>
              <th className="px-6 py-4">Property</th>

              <th className="px-6 py-4">Price</th>

              <th className="px-6 py-4">Location</th>

              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {adminProperties.map((property) => (
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
              />
            ))}

            {adminProperties.length === 0 && (
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
        {adminProperties.map((property) => (
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
          />
        ))}
      </div>
    </div>
  );
};

export default AllPropertiesAdmin;
