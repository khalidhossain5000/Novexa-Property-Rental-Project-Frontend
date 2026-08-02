"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import Image from "next/image";
import { IPayment } from "../../_dashboardTypes/dashboardTypes";
import { Badge } from "@/components/ui/badge";

interface IPaymentDetailsDialogProps {
  payment: IPayment;
}

const PaymentDetailsDialog = ({ payment }: IPaymentDetailsDialogProps) => {
  const property = payment?.rentalRequest.property;

  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex items-center gap-2 cursor-pointer bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-2 rounded-sm shadow-sm font-inter hover:scale-105 hover:bg-emerald-300 transition duration-400">
          <Eye size={14} />
          Show Details
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl bg-card border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold font-lora">
            Payment Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 rounded-xl  dark:shadow-xl dark:shadow-primary/20 shadow-sm">
          {/* Payment Information */}
          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Payment Information
            </h3>

            <div className="grid grid-cols-1 gap-4 rounded-xl  p-4 sm:grid-cols-2">
              <div>
                <p className="text-xs text-slate-500">Transaction ID</p>
                <p className="break-all text-sm font-medium">
                  {payment.transactionId}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Amount Paid</p>
                <p className="text-sm font-semibold">${payment.totalAmount}</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Payment Provider</p>
                <p className="text-sm font-medium">{payment.provider}</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Payment Status</p>

                {payment.status === "PENDING" && (
                  <Badge className="bg-[#f7f794] text-text-primary dark:text-black">
                    Pending
                  </Badge>
                )}

                {payment.status === "FAILED" && (
                  <Badge className="bg-rose-600  text-white dark:text-black">
                    Failed
                  </Badge>
                )}

                {payment.status === "COMPLETED" && (
                  <Badge className="bg-slate-800 dark:text-slate-100 text-primary dark:text-black">
                    Completed
                  </Badge>
                )}
              </div>

              <div>
                <p className="text-xs text-slate-500">Paid At</p>

                <p className="text-sm">
                  {new Date(payment.paidAt).toLocaleString()}
                </p>
              </div>
            </div>
          </section>

          {/* Property Information */}

          <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Property Information
            </h3>

            <div className="rounded-xl  p-4">
              <div className="mb-4 flex gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-lg">
                  <Image
                    src={property.thumbnailImage}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold">{property.title}</h4>

                  <p className="text-sm text-slate-500">{property.location}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-slate-500">Description</p>

                  <p>{property.description}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-500">Amenities</p>

                  <p>{property.amenities}</p>
                </div>

                <div className="flex gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">
                    Status: {property.status}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">
                    Price: ${property.price}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Rental Request Information */}

          <section className="rounded-xl  dark:shadow-xl dark:shadow-primary/20 shadow-sm font-lora">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Rental Request
            </h3>

            <div className="rounded-xl  p-4 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Request Status</span>

                <span className="font-semibold">
                  {payment.rentalRequest.status}
                </span>
              </div>

              <div className="mt-3 flex justify-between">
                <span className="text-slate-500">Requested At</span>

                <span>
                  {new Date(
                    payment.rentalRequest.created_At,
                  ).toLocaleDateString()}
                </span>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDetailsDialog;
