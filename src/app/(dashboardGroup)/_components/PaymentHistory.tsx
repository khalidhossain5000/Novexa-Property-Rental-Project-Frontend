import React from "react";
import { IPaymentResponse } from "../_dashboardTypes/dashboardTypes";
import ListingMobileCard from "./listing/ListingMobileCard";
import ListingTableRow from "./listing/ListingTableRow";
import PaymentDetailsDialog from "./PaymentDetailsDialog";
interface IPaymentProps {
  paymentHistoryRes: IPaymentResponse;
}
const PaymentHistory = ({ paymentHistoryRes }: IPaymentProps) => {
  const paymentHistory = paymentHistoryRes.data;

  console.log(paymentHistory, "payment hsitory");
  return (
    <div>
      {/* Desktop Table */}
      <div className="hidden overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 md:block">
        <table className="w-full text-left text-sm font-inter">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300">
            <tr>
              <th className="px-6 py-4">transactionId</th>

              <th className="px-6 py-4">Total Paid</th>

              <th className="px-6 py-4">Paid At</th>

              <th className="px-6 py-4">Status</th>

              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {paymentHistory.map((payment) => (
              <ListingTableRow
                key={payment.id}
                title={payment.transactionId}
                columns={[`${payment.paidAt}`, `$ ${payment.totalAmount}`]}
                status={
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                      payment.status === "COMPLETED"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                        : "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
                    }`}
                  >
                    {payment.status}
                  </span>
                }
                actions={<PaymentDetailsDialog payment={payment} />}
              />
            ))}

            {paymentHistory.length === 0 && (
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
        {paymentHistory.map((payment) => (
          <ListingMobileCard
            key={payment.id}
            title={payment.transactionId}
            badges={
              <>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  $ {payment.totalAmount}
                </span>

                <span
                  className={`rounded-full px-2.5 py-1 ${
                    payment.status === "COMPLETED"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                      : "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300"
                  }`}
                >
                  {payment?.status}
                </span>
              </>
            }
            description={payment.paidAt}
            actions={<PaymentDetailsDialog payment={payment} />}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
