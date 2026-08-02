import ListingActions from "@/app/(dashboardGroup)/_components/listing/ListingAction";
import ListingMobileCard from "@/app/(dashboardGroup)/_components/listing/ListingMobileCard";
import ListingTableRow from "@/app/(dashboardGroup)/_components/listing/ListingTableRow";
import { IRentalReqResponse } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";
import React from "react";
import RentalRequestActions from "./RentalReqActionBtn";
import { Badge } from "@/components/ui/badge";
interface ILandlordRentalRequestProps {
  rentalReqLandlord: IRentalReqResponse;
}
const LandlordRentalRequest = ({
  rentalReqLandlord,
}: ILandlordRentalRequestProps) => {
  const rentalReqData = rentalReqLandlord?.data || [];
  return (
    <div className="p-3">
      {/* Desktop Table */}
      <div className="hidden overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 md:block">
        <table className="w-full text-left text-sm font-inter">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300">
            <tr>
              <th className="px-6 py-4">Property Image</th>
              <th className="px-6 py-4">Property Title</th>

              <th className="px-6 py-4">Total Price</th>

              <th className="px-6 py-4">Tenant Name</th>
              <th className="px-6 py-4">Tenant email</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {rentalReqData.map((rentalReq) => (
              <ListingTableRow
                key={rentalReq.id}
                image={rentalReq.property.thumbnailImage}
                columns={[
                  rentalReq.property.title,
                  rentalReq.totalAmount,
                  ` ${rentalReq.tenant.firstName}`,
                  rentalReq.tenant.email,
                ]}
                status={
                  <>
                    {rentalReq.status === "PENDING" && (
                      <Badge className="bg-[#f7f794] text-text-primary dark:text-black">
                        Pending
                      </Badge>
                    )}
                    {rentalReq.status === "APPROVED" && (
                      <Badge className="bg-blue-600 text-white dark:text-black">
                        Approved
                      </Badge>
                    )}
                    {rentalReq.status === "REJECTED" && (
                      <Badge className="bg-red-600  text-white dark:text-black">
                        Rejected
                      </Badge>
                    )}

                    {rentalReq.status === "ACTIVE" && (
                      <Badge className="bg-emerald-500 text-text-primary dark:text-black">
                        Active
                      </Badge>
                    )}

                    {rentalReq.status === "COMPLETED" && (
                      <Badge className="bg-slate-600 text-text-primary dark:text-black">
                        Completed
                      </Badge>
                    )}
                  </>
                }
                actions={<RentalRequestActions rentalReqId={rentalReq.id} />}
              />
            ))}

            {rentalReqData.length === 0 && (
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
        {rentalReqData.map((rentalReq) => (
          <ListingMobileCard
            key={rentalReq.id}
            image={rentalReq.property.thumbnailImage}
            title={rentalReq.property.title}
            subtitle={rentalReq.totalAmount}
            badges={
              <>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  $ Tenant Name: {rentalReq.tenant.firstName}
                </span>

                {rentalReq.status === "PENDING" && (
                  <Badge className="bg-[#f7f794] text-text-primary dark:text-black">
                    Pending
                  </Badge>
                )}
                {rentalReq.status === "APPROVED" && (
                  <Badge className="bg-blue-600 text-white dark:text-black">
                    Approved
                  </Badge>
                )}
                {rentalReq.status === "REJECTED" && (
                  <Badge className="bg-red-600  text-white dark:text-black">
                    Rejected
                  </Badge>
                )}

                {rentalReq.status === "ACTIVE" && (
                  <Badge className="bg-emerald-500 text-text-primary dark:text-black">
                    Active
                  </Badge>
                )}

                {rentalReq.status === "COMPLETED" && (
                  <Badge className="bg-slate-600 text-text-primary dark:text-black">
                    Completed
                  </Badge>
                )}
              </>
            }
            description={rentalReq.created_At.split("T")[0]}
            actions={<RentalRequestActions rentalReqId={rentalReq.id} />}
          />
        ))}
      </div>
    </div>
  );
};

export default LandlordRentalRequest;
