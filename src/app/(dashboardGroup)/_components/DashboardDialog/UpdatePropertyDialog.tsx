"use client";

import { useState } from "react";
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

import { IPropertyTypes } from "../../_dashboardTypes/dashboardTypes";
import ImageUploadField from "@/components/ImageUploadField/ImageUploadField";
import { Button } from "@/components/ui/button";

interface IUpdatePropertyDialogProps {
  property: IPropertyTypes;
}

const UpdatePropertyDialog = ({ property }: IUpdatePropertyDialogProps) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(property.thumbnailImage);

  const [imageUploading, setImageUploading] = useState(false);

  return (
    <Dialog >
      <DialogTrigger>
        <div className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
          <Pencil className="h-4 w-4" />
          Update
        </div>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl bg-background border-transparent shadow-sm">
        <DialogHeader>
          <DialogTitle>Update Property</DialogTitle>
        </DialogHeader>

        <form action="" className="space-y-5">
          {/* Title */}
          <div className="space-y-2">
            <Label>Property Title</Label>

            <Input
              name="title"
              defaultValue={property.title}
              className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label>Description</Label>

            <Textarea
              name="description"
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
                defaultValue={property.location}
                className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              />
            </div>

            {/* Price */}
            <div className="space-y-2">
              <Label>Price</Label>

              <Input
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
                name="amenities"
                defaultValue={property.amenities}
                className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              />
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
          />

          {/* to get thumbnail url */}
          <input type="hidden" name="thumbnailImage" value={thumbnailUrl} />

          <button
            disabled={imageUploading}
            type="submit"
            className="cursor-pointer w-full rounded-xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            {imageUploading ? "Uploading image..." : "Update Property"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatePropertyDialog;
