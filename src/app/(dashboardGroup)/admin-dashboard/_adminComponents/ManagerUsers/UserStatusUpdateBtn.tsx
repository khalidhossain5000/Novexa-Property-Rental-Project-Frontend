"use client";

import { IUserTypes } from "@/app/(authGroup)/_authTypes/authTypes";
import { updateUserStatus } from "@/app/(dashboardGroup)/_actions/adminActions";
import { useActionState } from "react";


interface IUserStatusActionProps {
  user: IUserTypes;
}

const UserStatusActionBtn = ({ user }: IUserStatusActionProps) => {
  const [state, action, isPending] = useActionState(
    updateUserStatus.bind(null, user.id),
    false,
  );

  const nextStatus = user.status === "ACTIVE" ? "BAN" : "ACTIVE";

  return (
    <form action={action}>
      <input type="hidden" name="status" value={nextStatus} />

      <button
        type="submit"
        disabled={isPending}
        className={`inline-flex items-center justify-center rounded-lg px-3 py-2 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${
          user.status === "ACTIVE"
            ? "border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 dark:border-rose-900/50 dark:bg-rose-900/20 dark:text-rose-300 dark:hover:bg-rose-900/40"
            : "border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-900/50 dark:bg-emerald-900/20 dark:text-emerald-300 dark:hover:bg-emerald-900/40"
        }`}
      >
        {isPending
          ? "Updating..."
          : user.status === "ACTIVE"
            ? "Ban User"
            : "Unban User"}
      </button>
    </form>
  );
};

export default UserStatusActionBtn;