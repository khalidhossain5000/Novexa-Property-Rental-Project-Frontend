/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useActionState, useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state) {
      setOpen(true);
    }
  }, [state]);

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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {state?.success ? "Payment Ready" : "Payment Failed"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-5">
            {state?.success ? (
              <>
                <p className="text-sm text-muted-foreground">
                  Your payment request has been created. Click below to continue
                  payment.
                </p>

                <button
                  onClick={handlePayment}
                  className="w-full rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold hover:bg-emerald-700"
                >
                  Click here to complete payment
                </button>
              </>
            ) : (
              <>
                <p className="text-sm text-red-500">
                  {state?.message || "Something went wrong"}
                </p>

                <button
                  onClick={() => setOpen(false)}
                  className="w-full rounded-xl border px-5 py-3"
                >
                  Close
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MakePaymnetBtn;
