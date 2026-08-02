"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import { createCategories } from "@/app/(dashboardGroup)/_actions/categoryActions";
import PrimaryBtn from "@/components/shared/Button/PrimaryBtn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddCategoryForm = () => {
  const [state, action, isPending] = useActionState(createCategories, null);

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message ?? "Category added successfully.");
    } else {
      toast.error(state.message ?? "Something went wrong.");
    }
  }, [state]);

  return (
    <form
      action={action}
      className="space-y-6 max-w-lg shadow-lg mx-auto bg-background p-6 lg:p-12 rounded-lg"
    >
      <div className="space-y-2 ">
        <Label htmlFor="name py-3">
          Category Name <span className="text-destructive">*</span>
        </Label>

        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Enter category name"
          required
          disabled={isPending}
          autoComplete="off"
        />
      </div>

      <div className="text-center flex items-center justify-center">
        {" "}
        <PrimaryBtn type="submit" disabled={isPending} className="w-full  justify-center">
          {isPending ? "Adding Category..." : "Add Category"}
        </PrimaryBtn>
      </div>
    </form>
  );
};

export default AddCategoryForm;
