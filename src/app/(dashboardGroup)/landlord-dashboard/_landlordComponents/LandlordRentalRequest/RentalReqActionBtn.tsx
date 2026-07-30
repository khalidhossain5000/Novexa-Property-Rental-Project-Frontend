"use client";

import { updateRentalReqStatus } from "@/app/(dashboardGroup)/_actions/propertyActions";
import { useActionState } from "react";

interface IRentalRequestActionsProps {
  rentalReqId: string;
}

const RentalRequestActions = ({
  rentalReqId,
}: IRentalRequestActionsProps) => {
  const [state, action, isPending] = useActionState(
    updateRentalReqStatus.bind(null, rentalReqId),
    false,
  );

  return (
    <form action={action} className="flex gap-2 justify-end">

      <button
        type="submit"
        name="status"
        value="APPROVED"
        disabled={isPending}
        className="rounded-lg bg-emerald-100 px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-200 disabled:opacity-50 cursor-pointer"
      >
        {isPending ? "Updating..." : "Approve"}
      </button>


      <button
        type="submit"
        name="status"
        value="REJECTED"
        disabled={isPending}
        className="rounded-lg bg-rose-100 px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-200 disabled:opacity-50 cursor-pointer"
      >
        Reject
      </button>

    </form>
  );
};

export default RentalRequestActions;