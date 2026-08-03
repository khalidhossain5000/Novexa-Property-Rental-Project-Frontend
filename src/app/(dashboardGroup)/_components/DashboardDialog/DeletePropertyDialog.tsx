/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useActionState, useEffect, useState } from "react";
import { deletePropertyAction } from "../../_actions/propertyActions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type DeletePropertyDialogProps = {
  propertyId: string;
};

const DeletePropertyDialog = ({ propertyId }: DeletePropertyDialogProps) => {
  const [state, formAction, pending] = useActionState(deletePropertyAction, {
    success: false,
    message: "string",
  });
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (state.success) {
      toast.success(state.message || "Property Deleted Successfully");
      setOpen(false);
      router.refresh();
    }
  }, [state, router]);
console.log(state,'delte state is here')
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Delete Button */}
      <DialogTrigger
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-2 cursor-pointer bg-rose-300 text-rose-700 dark:bg-rose-900 dark:text-rose-300 px-3 py-2 rounded-sm shadow-sm font-inter hover:scale-105 hover:bg-rose-300 transition duration-400 w-full "
      >
        Delete
      </DialogTrigger>

      {/* Dialog */}
      <DialogContent className="bg-background">
        <DialogHeader>
          <DialogTitle>Delete Property?</DialogTitle>

          <DialogDescription>
            Are you sure you want to delete this property? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>

        <form action={formAction}>
          <input type="hidden" name="propertyId" value={propertyId} readOnly />

          <DialogFooter>
            {/* Cancel */}
            <DialogClose className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
              Cancel
            </DialogClose>

            {/* Confirm Delete */}
            <Button
              type="submit"
              className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl    bg-emerlad-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              disabled={pending}
            >
              {pending ? "Deleting..." : "Confirm"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePropertyDialog;
