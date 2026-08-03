/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import Image from "next/image";
import { useActionState, useEffect, useState, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BookMarked, Coins, HouseWifiIcon, MapPin } from "lucide-react";
import { sendRentalRequest } from "@/app/(publicGroup)/_actions/rentalRequestActions";
import { toast } from "sonner";

interface IRentRequestDialogProps {
  propertyId: string;
  price: string;
  title: string;
  location?: string;
  thumbnailImage?: string;
  triggerDisabled?: boolean;
  triggerLabel: string;
}

const RentRequestDialog = ({
  propertyId,
  price,
  title,
  location,
  thumbnailImage,
  triggerDisabled,
  triggerLabel,
}: IRentRequestDialogProps) => {
  const [open, setOpen] = useState(false);
  // const [state, action, isPending] = useActionState(
  //   sendRentalRequest.bind(null, price, propertyId),
  //   null,
  // );

  const [isPendings, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleSendRequest = () => {
    startTransition(async () => {
      const result = await sendRentalRequest(price, propertyId);

      if (result.success) {
        toast.success("Request Send Wait for approval");
        setOpen(false);
      } else {
        setError(result.message || "Something went wrong");
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        type="button"
        disabled={triggerDisabled}
        onClick={() => setOpen(true)}
        className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-teal-600 px-6 py-3 lg:py-4 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <BookMarked size={16} />
        {triggerLabel}
      </Button>

      <DialogContent className="py-6 rounded-3xl border border-slate-200 bg-background p-0 dark:border-slate-700/60 dark:bg-slate-900 sm:max-w-lg lg:max-w-xl">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-slate-950 dark:text-white">
              Confirm Rent Request
            </DialogTitle>
          </DialogHeader>

          {/* Property mini preview */}
          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700/60 dark:bg-slate-800/60">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-700">
              {thumbnailImage ? (
                <Image
                  src={thumbnailImage}
                  alt={title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <HouseWifiIcon className="h-6 w-6 text-teal-400" />
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-950 dark:text-white">
                {title}
              </p>
              {location && (
                <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin size={11} />
                  <span className="truncate">{location}</span>
                </p>
              )}
              <p className="mt-1 flex items-center gap-1 text-sm font-bold text-teal-600 dark:text-teal-400">
                <Coins size={13} />${Number(price).toLocaleString("en-US")}
                <span className="text-xs font-normal text-slate-400">
                  /month
                </span>
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            Sending this request will notify the landlord. You&apos;ll be able
            to proceed to payment once they approve it.
          </p>
          {error && (
            <p className="mt-3 text-xs font-medium text-rose-600 dark:text-rose-400">
              {error}
            </p>
          )}
          {/* {state?.error && (
            <p className="mt-3 text-xs font-medium text-rose-600 dark:text-rose-400">
              {state.error}
            </p>
          )} */}
        </div>

        <DialogFooter className="flex flex-row items-center justify-end gap-2 border-t border-slate-200 px-6 py-4 dark:border-slate-700/60 pb-5">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setOpen(false)}
            className="cursor-pointer rounded-xl text-sm"
          >
            Cancel
          </Button>
          <Button
            type="button"
            disabled={isPendings}
            onClick={handleSendRequest}
            className="cursor-pointer rounded-xl bg-teal-600 px-5 text-sm font-semibold text-white hover:bg-teal-700 disabled:opacity-50"
          >
            {isPendings ? "Sending..." : "Confirm & Send Request"}
          </Button>
          {/* <form action={action}>
            <Button
              type="submit"
              disabled={isPending}
              className="cursor-pointer rounded-xl bg-teal-600 px-5 text-sm font-semibold text-white hover:bg-teal-700 disabled:opacity-50"
            >
              {isPending ? "Sending..." : "Confirm & Send Request"}
            </Button>
          </form> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default RentRequestDialog;
