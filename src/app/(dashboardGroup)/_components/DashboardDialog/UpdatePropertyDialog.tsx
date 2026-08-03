"use client";

import { useActionState, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Pencil } from "lucide-react";

import {
  ICategoryResponse,
  IPropertyTypes,
} from "../../_dashboardTypes/dashboardTypes";
import ImageUploadField from "@/components/ImageUploadField/ImageUploadField";
import { updatePropertyAction } from "../../_actions/propertyActions";
import { toast } from "sonner";

interface IUpdatePropertyDialogProps {
  property: IPropertyTypes;
  propertyCategories: ICategoryResponse;
}

const UpdatePropertyDialog = ({
  property,
  propertyCategories,
}: IUpdatePropertyDialogProps) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(property.thumbnailImage);

  const [imageUploading, setImageUploading] = useState(false);
  const [state, action, isPending] = useActionState(
    updatePropertyAction.bind(null, property.id),
      {
    success: false,
    message: "",
  }
  );
  const categories = propertyCategories.data;
console.log(state,'this is state upadte proerpty')

useEffect(() => {
  if (state.success) {
    toast.success("Property Updated Successfully");
  }
}, [state.success]);
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center justify-center gap-2 cursor-pointer bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-2 rounded-sm shadow-sm font-inter hover:scale-105 hover:bg-emerald-300 transition duration-400 w-full ">
          <Pencil className="h-4 w-4" />
          Update
        </div>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl bg-background border-transparent shadow-sm font-inter">
        <DialogHeader>
          <DialogTitle>Update Property</DialogTitle>
        </DialogHeader>

        <form action={action} className="space-y-5">
          {/* Title */}
          <div className="space-y-2">
            <Label className="font-inter">Property Title</Label>

            <Input
              name="title"
                key={property.id}
              defaultValue={property.title}
              className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label>Description</Label>

            <Textarea
              name="description"
                key={property.id}
              defaultValue={property.description}
              className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              rows={5}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Location */}
            <div className="space-y-2">
              <Label>Location</Label>

              <Input
                name="location"
                  key={property.id}
                defaultValue={property.location}
                className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              />
            </div>

            {/* Price */}
            <div className="space-y-2">
              <Label>Price</Label>

              <Input
                key={property.id}
                name="price"
                type="number"
                defaultValue={property.price}
                className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              />
            </div>

            {/* Amenities */}
            <div className="space-y-2">
              <Label>Amenities</Label>

              <Input
                key={property.id}
                name="amenities"
                defaultValue={property.amenities}
                className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="category"
                className="text-sm font-medium text-text-secondary font-inter"
              >
                Category
              </Label>

              <select
                id="category"
                name="categoryId"
                defaultValue={property.categoryId}
                className="flex h-10 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-primary shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled>
                  Choose a category
                </option>

                {categories?.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Image Upload */}

          <ImageUploadField
            onUploadSuccess={(url) => {
              setThumbnailUrl(url);
            }}
            onUploadStateChange={(loading) => {
              setImageUploading(loading);
            }}
            onRemove={() => {
              setThumbnailUrl("");
            }}
              defaultImage={property.thumbnailImage}
          />

          {/* to get thumbnail url */}
          <input type="hidden" name="thumbnailImage" value={thumbnailUrl} />

          <button
            disabled={imageUploading}
            type="submit"
            className=" w-full rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            {imageUploading
              ? "Uploading image..."
              : isPending
                ? "Updating......"
                : "Update Property"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatePropertyDialog;
