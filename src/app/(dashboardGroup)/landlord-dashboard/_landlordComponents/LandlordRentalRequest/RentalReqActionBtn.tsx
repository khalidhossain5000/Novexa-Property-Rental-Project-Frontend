"use client";

import { updateRentalReqStatus } from "@/app/(dashboardGroup)/_actions/propertyActions";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
enum RentalRequestStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}
interface IRentalRequestActionsProps {
  rentalReqId: string;
  currentStatus: RentalRequestStatus;
}

const RentalRequestActions = ({
  rentalReqId,
  currentStatus,
}: IRentalRequestActionsProps) => {
  const [clickedStatus, setClickedStatus] = useState("");

  const [state, action, isPending] = useActionState(
    updateRentalReqStatus.bind(null, rentalReqId),
    {
      success: false,
      message: "",
    },
  );

  useEffect(() => {
    if (state.success) {
      toast.success("Rental Request Status Updated");
    }
  }, [state]);

  console.log(isPending, "dsfds", state);
  return (
    <form action={action} className="flex gap-2 justify-end">
      <button
        type="submit"
        name="status"
        value="APPROVED"
        onClick={() => setClickedStatus("APPROVED")}
        disabled={isPending || currentStatus === "APPROVED"}
        className="rounded-lg bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      >
        {isPending && clickedStatus === "APPROVED" ? "Updating..." : "Approve"}
      </button>

      <button
        type="submit"
        name="status"
        value="REJECTED"
        disabled={isPending || currentStatus === "REJECTED"}
        onClick={() => setClickedStatus("REJECTED")}
        className="rounded-lg bg-rose-100 px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      >
        {isPending && clickedStatus === "REJECTED" ? "Updating..." : "Reject"}
      </button>
    </form>
  );
};

export default RentalRequestActions;
