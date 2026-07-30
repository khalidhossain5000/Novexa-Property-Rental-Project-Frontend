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
import { useActionState } from "react";
import { deletePropertyAction } from "../../_actions/propertyActions";

type DeletePropertyDialogProps = {
  propertyId: string;
};

const DeletePropertyDialog = ({
  propertyId,
}: DeletePropertyDialogProps) => {

  const [state, formAction, pending] = useActionState(
    deletePropertyAction,
    null
  );

console.log(propertyId,'this is proer id')
  return (
    <Dialog>

      {/* Delete Button */}
      <DialogTrigger     className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-red-400 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
       
        <div onClick={() => console.log("clicked delete id:", propertyId)}>Delete</div>
      </DialogTrigger>


      {/* Dialog */}
      <DialogContent className="bg-background">

        <DialogHeader>
          <DialogTitle>
            Delete Property?
          </DialogTitle>

          <DialogDescription>
            Are you sure you want to delete this property?
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>


        <form action={formAction}>

          <input
            type="hidden"
            name="propertyId"
            value={propertyId}
            readOnly
          />


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