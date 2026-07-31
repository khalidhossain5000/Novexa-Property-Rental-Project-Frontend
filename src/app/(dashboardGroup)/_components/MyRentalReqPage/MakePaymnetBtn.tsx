"use client";

import React, { useActionState } from "react";
import { createPayment } from "../../_actions/paymentActions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

interface IPaymentProps {
  rentalRequestId: string;
}

const MakePaymnetBtn = ({ rentalRequestId }: IPaymentProps) => {
  const [state, action, isPending] = useActionState(
    createPayment.bind(null, rentalRequestId),
    null,
  );

  const router = useRouter();

  const handlePayment = () => {
    if (state?.data?.paymentGatewayUrl) {
      router.push(state.data.paymentGatewayUrl);
    }
  };

  return (
    <>
      <form action={action}>
        <button
          type="submit"
          disabled={isPending}
          className="flex items-center gap-2 cursor-pointer bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-1 rounded-sm shadow-sm disabled:opacity-50"
        >
          {isPending ? "Creating..." : "Make Payment"}
        </button>
      </form>

      <Dialog open={!!state}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {state?.success ? "Payment Ready" : "Payment Failed"}
            </DialogTitle>
          </DialogHeader>

          {state?.success ? (
            <div className="space-y-5">
              <p>
                Your payment request has been created successfully.
              </p>

              <button
                onClick={handlePayment}
                className="w-full rounded-xl bg-emerald-600 px-5 py-3 text-white"
              >
                Click here to complete payment
              </button>
            </div>
          ) : (
            <div>
              <p className="text-red-500">
                {typeof state?.message === "string"
                  ? state.message
                  : "Something went wrong"}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MakePaymnetBtn;