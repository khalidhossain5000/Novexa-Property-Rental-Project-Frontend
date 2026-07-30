"use client";

import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategoryResponse } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";

import ImageUploadField from "@/components/ImageUploadField/ImageUploadField";
interface AddPropertyFormProps {
  propertyCategories: ICategoryResponse;
}

const AddPropertyForm = ({ propertyCategories }: AddPropertyFormProps) => {
  const categories = propertyCategories.data;
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const [imageUploading, setImageUploading] = useState(false);
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
          <form className="space-y-6">
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
                  className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                />
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
                  className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                />
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
            </div>

            {/* Location & Status Row */}
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
                  className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="status"
                  className="text-sm font-medium text-text-secondary font-inter"
                >
                  Status
                </Label>
                <Select>
                  <SelectTrigger
                    id="status"
                    className="border-border bg-surface text-text-primary focus:ring-2 focus:ring-primary focus:ring-offset-1 w-full cursor-pointer"
                  >
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="border-none  bg-surface text-text-primary">
                    <SelectItem
                      value="AVAILABLE"
                      className="cursor-pointer hover:bg-slate-200 dark:bg-slate-600"
                    >
                      Available
                    </SelectItem>
                    <SelectItem
                      value="PENDING"
                      className="cursor-pointer hover:bg-slate-200 dark:bg-slate-600"
                    >
                      Pending
                    </SelectItem>
                    <SelectItem
                      value="RENTED"
                      className="cursor-pointer hover:bg-slate-200 dark:bg-slate-600"
                    >
                      Rented
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Category & amneites */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label
                  htmlFor="category"
                  className="text-sm font-medium text-text-secondary amenities"
                >
                  Category
                </Label>
                <Select>
                  <SelectTrigger
                    id="category"
                    className="border-border bg-surface text-text-primary focus:ring-2 focus:ring-primary focus:ring-offset-1 w-full cursor-pointer lg:pr-12"
                  >
                    <SelectValue placeholder="Choose a category" />
                  </SelectTrigger>
                  <SelectContent className="border-none bg-surface text-text-primary">
                    {categories.map((cat) => (
                      <SelectItem
                        key={cat.id}
                        value={cat.name}
                        className="cursor-pointer hover:bg-slate-200 dark:bg-slate-800"
                      >
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                  className="border-border bg-surface text-text-primary placeholder:text-text-muted focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                />
              </div>
            </div>
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
            </div>
            {/* Submit Button */}
            <Button
              type="submit"
              disabled={imageUploading || !thumbnailUrl}
              className="w-full bg-primary font-semibold text-white shadow-sm transition-all hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:text-background"
            >
              {imageUploading ? "Uploading image..." : "Add Property"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyForm;
