"use client";

import React, { useActionState, useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { ICategoryResponse } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";

import ImageUploadField from "@/components/ImageUploadField/ImageUploadField";
import { createProperty } from "@/app/(dashboardGroup)/_actions/propertyActions";
import PrimaryBtn from "@/components/shared/Button/PrimaryBtn";

interface AddPropertyFormProps {
  propertyCategories: ICategoryResponse;
}

const AddPropertyForm = ({ propertyCategories }: AddPropertyFormProps) => {
  const categories = propertyCategories.data;
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const [imageUploading, setImageUploading] = useState(false);

  //form submit
  const [state, action, isPending] = useActionState(createProperty, false);
  return (
    <div className="flex min-h-screen items-start justify-center  px-4 py-10">
      <div className="w-full max-w-3xl space-y-6">
        {/* Header Card */}
        <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-colors sm:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary font-lora">
            List a New Property
          </h1>
          <p className="mt-2 text-sm text-text-muted font-inter">
            Fill in the details to make your property stand out
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm transition-colors md:p-4 lg:p-6 xl:p-8">
          <form action={action} className="space-y-6">
            {/* Title & Price Row */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="title"
                  className="text-sm font-medium text-text-secondary font-inter"
                >
                  Property Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g. Affordable Bachelor Flat"
                  className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 p-3"
                />
                {state.errors?.title && (
                  <p className="text-red-600 font-lora">
                    {state.errors.title[0]}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="price"
                  className="text-sm font-medium text-text-secondary font-inter"
                >
                  Monthly Price (Usd)
                </Label>
                <Input
                  id="price"
                  type="number"
                  name="price"
                  placeholder="22000.90"
                  min="0"
                  className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 p-3"
                />
                {state.errors?.price && (
                  <p className="text-red-600 font-lora">
                    {state.errors.price[0]}
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-sm font-medium text-text-secondary font-inter"
              >
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Describe the property, nearby facilities, and what makes it special."
                className="resize-none border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              />
              {state.errors?.description && (
                <p className="text-red-600 font-lora">
                  {state.errors.description[0]}
                </p>
              )}
            </div>

            {/* Location & category Row */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="location"
                  className="text-sm font-medium text-text-secondary font-inter"
                >
                  Location
                </Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g. Mohammadpur, Dhaka"
                  className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 p-3"
                />
                {state.errors?.location && (
                  <p className="text-red-600 font-lora">
                    {state.errors.location[0]}
                  </p>
                )}
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
                  defaultValue=""
                  className="flex h-10 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-text-primary shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 "
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
                {state.errors?.categoryId && (
                  <p className="text-red-600 font-lora">
                    {state.errors.categoryId[0]}
                  </p>
                )}
              </div>
            </div>

            {/* image upload & amneites */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                {/* Thumbnail Upload with Preview & Remove */}
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
                <input
                  type="hidden"
                  name="thumbnailImage"
                  value={thumbnailUrl}
                />
                {state.errors?.thumbnailImage && (
                  <p className="text-red-600 font-lora">
                    {state.errors.thumbnailImage[0]}
                  </p>
                )}
              </div>

              {/* Amenities */}
              <div className="space-y-2">
                <Label
                  htmlFor="amenities"
                  className="text-sm font-medium text-text-secondary font-inter"
                >
                  Amenities
                </Label>
                <Input
                  id="amenities"
                  name="amenities"
                  placeholder="e.g. WiFi, Security, Lift (comma separated)"
                  className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-1 p-3 focus-visible:ring-primary focus-visible:ring-offset-1"
                />
                {state.errors?.amenities && (
                  <p className="text-red-600 font-lora">
                    {state.errors.amenities[0]}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <PrimaryBtn
              type="submit"
              disabled={imageUploading || !thumbnailUrl}
              className="w-full text-center justify-center"
            >
              {imageUploading
                ? "Uploading image..."
                : isPending
                  ? "Creating Property..."
                  : "Add Property"}
            </PrimaryBtn>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyForm;
