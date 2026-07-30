"use client";

import { Pencil, Trash2 } from "lucide-react";
import { IPropertyTypes } from "../../_dashboardTypes/dashboardTypes";

interface IListingActionsProps {


  property: IPropertyTypes;
}



const ListingActions = ({ property }: IListingActionsProps) => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <button

        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        <Pencil className="h-4 w-4" />
        Update
      </button>

      <button
   
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 dark:bg-rose-900/20 dark:text-rose-300 dark:hover:bg-rose-900/40"
      >
        <Trash2 className="h-4 w-4" />
        Delete
      </button>
    </div>
  );
};

export default ListingActions;
