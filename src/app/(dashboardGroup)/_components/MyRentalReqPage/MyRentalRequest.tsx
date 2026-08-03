import React from "react";
import { IRentalReqResponse } from "../../_dashboardTypes/dashboardTypes";
import ListingTableRow from "../listing/ListingTableRow";
import ListingMobileCard from "../listing/ListingMobileCard";
import RentalRequestDetailsModal from "./RentalRequestDetailsDialog";
import GiveReviewBtn from "./GiveReviewBtn";
import Link from "next/link";
import { CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
interface MyRentalReqProps {
  myRentalReqRes: IRentalReqResponse;
}
const MyRentalRequest = ({ myRentalReqRes }: MyRentalReqProps) => {
  const myRentalReq = myRentalReqRes.data;
  return (
    <div>
      {/* Desktop Table */}
      <div className="hidden overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 md:block">
        <table className="w-full text-left text-sm font-inter">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300">
            <tr>
              <th className="px-6 py-4 font-lora">Image</th>
              <th className="px-6 py-4 font-lora">Property Title</th>

              <th className="px-6 py-4 font-lora">Total Price</th>

              <th className="px-6 py-4 font-lora">Landlord Name</th>
              <th className="px-6 py-4 font-lora">Request Send On</th>

              <th className="px-6 py-4 font-lora">Status</th>

              <th className="px-6 py-4 font-lora ">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {myRentalReq.map((rentalReq) => (
              <ListingTableRow
                key={rentalReq.id}
                image={rentalReq.property.thumbnailImage}
                columns={[
                  rentalReq.property.title,
                  rentalReq.totalAmount,
                  `$ ${rentalReq.property.user?.firstName}`,
                  `${rentalReq.created_At.split("T")[0]}`,
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
                      <Badge className="bg-rose-600  text-white dark:text-black">
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
                actions={
                  <div className="flex items-center gap-2">
                    <RentalRequestDetailsModal rentalReq={rentalReq} />

                    {rentalReq.status === "APPROVED" && (
                      <Link
                        href={`/dashboard/requests/${rentalReq?.id}/pay`}
                        className="flex items-center gap-2 cursor-pointer bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-1 rounded-sm shadow-sm font-inter hover:scale-105 hover:bg-emerald-300 transition duration-400 text-sm"
                      >
                        <CreditCard size={16} />
                        Proceed to Payment
                      </Link>
                    )}

                    {rentalReq.status === "ACTIVE" && (
                      <GiveReviewBtn propertyId={rentalReq.property.id} />
                    )}
                    {}
                  </div>
                }
              />
            ))}

            {myRentalReq.length === 0 && (
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

      <div className="grid grid-cols-1 gap-4 md:hidden px-2 pt-4">
        {myRentalReq.map((rentalReq) => (
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

                   <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Request On: {`${rentalReq.created_At.split("T")[0]}`}
                </span>
              </>
            }
            actions={
              <div className="flex items-center justify-center w-full gap-2">
                <RentalRequestDetailsModal rentalReq={rentalReq} />

                {rentalReq.status === "APPROVED" && (
                  <Link
                    href={`/dashboard/requests/${rentalReq?.id}/pay`}
                    className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-700 active:scale-95 font-lora"
                  >
                    <CreditCard size={16} />
                    Proceed to Payment
                  </Link>
                )}

                {rentalReq.status === "ACTIVE" && (
                  <GiveReviewBtn propertyId={rentalReq.property.id} />
                )}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MyRentalRequest;
