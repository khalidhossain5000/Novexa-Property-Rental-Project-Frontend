"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CreditCard, HouseWifiIcon, Loader2, MapPin } from "lucide-react";
import { createPayment } from "../../_actions/paymentActions";

interface IPaymentInitiateProps {
  rentalRequest: {
    id: string;
    property: {
      title: string;
      price: string;
      location?: string;
      thumbnailImage?: string;
    };
  };
}

const PaymentInitiate = ({ rentalRequest }: IPaymentInitiateProps) => {
  const router = useRouter();
  const [state, action, isPending] = useActionState(
    createPayment.bind(null, rentalRequest.id),
    null,
  );

 
  useEffect(() => {
    if (state?.success && state?.data?.paymentGatewayUrl) {
      router.push(state.data.paymentGatewayUrl);
    }
  }, [state, router]);

  const { property } = rentalRequest;

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <h1 className="mb-1 text-xl font-bold text-text-primary font-lora">
        Complete Your Payment
      </h1>
      <p className="mb-6 text-sm text-text-secondary font-inter">
        Review your rental details before proceeding to the payment gateway.
      </p>

      {/* Property summary */}
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-border bg-background p-3">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-surface">
          {property.thumbnailImage ? (
            <Image
              src={property.thumbnailImage}
              alt={property.title || "thumbnail image"}
              fill
              sizes="64px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <HouseWifiIcon className="h-6 w-6 text-text-muted" />
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-text-primary font-inter">
            {property.title}
          </p>
          {property.location && (
            <p className="mt-0.5 flex items-center gap-1 text-xs text-text-muted">
              <MapPin size={11} />
              <span className="truncate font-inter">{property.location}</span>
            </p>
          )}
          <p className="mt-1 text-sm font-bold text-primary font-inter">
            ${Number(property.price).toLocaleString()}
            <span className="ml-1 text-xs font-normal text-text-muted">
              /month
            </span>
          </p>
        </div>
      </div>

      {/* Error message */}
      {state?.success === false && (
        <p className="mb-4 text-sm font-medium text-error font-inter">
          {typeof state?.message === "string"
            ? state.message
            : "Something went wrong. Please try again."}
        </p>
      )}

      <form action={action}>
     
        <button
          type="submit"
          disabled={isPending}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-accent shadow-lg transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
        >
          {isPending ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Redirecting to payment...
            </>
          ) : (
            <>
              <CreditCard size={16} />
              Pay Now
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default PaymentInitiate;