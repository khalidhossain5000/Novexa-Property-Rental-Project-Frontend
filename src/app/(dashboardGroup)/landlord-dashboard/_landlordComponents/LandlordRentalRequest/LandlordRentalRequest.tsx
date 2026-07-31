import ListingActions from "@/app/(dashboardGroup)/_components/listing/ListingAction";
import ListingMobileCard from "@/app/(dashboardGroup)/_components/listing/ListingMobileCard";
import ListingTableRow from "@/app/(dashboardGroup)/_components/listing/ListingTableRow";
import { IRentalReqResponse } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";
import React from "react";
import RentalRequestActions from "./RentalReqActionBtn";
interface ILandlordRentalRequestProps {
  rentalReqLandlord: IRentalReqResponse;
}
const LandlordRentalRequest = ({
  rentalReqLandlord,
}: ILandlordRentalRequestProps) => {
  const rentalReqData = rentalReqLandlord?.data || [];
  return (
    <div>
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
                  `$ ${rentalReq.tenant.firstName}`,
                  rentalReq.tenant.email,
                ]}
                status={
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      rentalReq.status === "ACTIVE"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                        : "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
                    }`}
                  >
                    {rentalReq.status}
                  </span>
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

                <span
                  className={`rounded-full px-2.5 py-1 ${
                    rentalReq.status === "ACTIVE"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                      : "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
                  }`}
                >
                  {rentalReq.status}
                </span>
              </>
            }
            description={rentalReq.created_At}
            actions={<RentalRequestActions rentalReqId={rentalReq.id} />}
          />
        ))}
      </div>
    </div>
  );
};

export default LandlordRentalRequest;

// [
//     {
//         "id": "00faa21c-1d0f-4bac-b592-aa5e971ebdd0",
//         "status": "ACTIVE",
//         "totalAmount": "22000",
//         "propertyId": "00ea3514-48d0-4e6b-8d9b-e607d84d8154",
//         "tenantId": "494bbd0a-67f9-435a-a9b4-a9efd24b25b8",
//         "created_At": "2026-07-18T12:25:29.410Z",
//         "updated_At": "2026-07-18T13:15:46.066Z",
//         "property": {
//             "id": "00ea3514-48d0-4e6b-8d9b-e607d84d8154",
//             "title": "Affordable Bachelor Flat",
//             "description": "One-bedroom flat located close to public transport and shopping centers.",
//             "location": "Mohammadpur, Dhaka",
//             "price": "22000",
//             "amenities": "WiFi, Security, Lift",
//             "thumbnailImage": "https://i.ibb.co.com/dJWwQNvF/mountain.jpg",
//             "status": "BOOKED",
//             "categoryId": "ba20a26c-e49d-48ba-b269-1dd29ebe2eb8",
//             "landLordId": "dff740e5-6de9-448b-95ff-6a899a9a4ebf",
//             "created_At": "2026-07-11T15:08:40.818Z",
//             "updated_At": "2026-07-18T13:15:46.245Z"
//         },
//         "tenant": {
//             "id": "494bbd0a-67f9-435a-a9b4-a9efd24b25b8",
//             "firstName": "Tenant Rent",
//             "lastName": "Nest",
//             "email": "tenant@rentnest.com",
//             "profilePhoto": "https://i.ibb.co.com/MxG3yzrq/fb.jpg",
//             "role": "TENANT",
//             "status": "ACTIVE",
//             "created_At": "2026-07-09T08:43:27.872Z",
//             "updated_At": "2026-07-09T08:43:27.872Z"
//         }
//     }
// ]
