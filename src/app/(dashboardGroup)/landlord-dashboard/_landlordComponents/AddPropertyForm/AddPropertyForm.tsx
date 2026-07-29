"use client";

import React, { useState } from "react";
import Image from "next/image";
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

const AddPropertyForm = () => {
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setThumbnailPreview(previewUrl);
    }
  };

  const removeThumbnail = () => {
    setThumbnailPreview(null);
    const fileInput = document.getElementById("thumbnail") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

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
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors sm:p-8">
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
                  name='price'
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
                    className="border-border bg-surface text-text-primary focus:ring-2 focus:ring-primary focus:ring-offset-1"
                  >
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="border-none  bg-surface text-text-primary">
                    <SelectItem value="AVAILABLE"  className="cursor-pointer hover:bg-slate-200 dark:bg-slate-800">Available</SelectItem>
                    <SelectItem value="PENDING" className="cursor-pointer hover:bg-slate-200 dark:bg-slate-800">Pending</SelectItem>
                    <SelectItem value="RENTED" className="cursor-pointer hover:bg-slate-200 dark:bg-slate-800">Rented</SelectItem>
                  </SelectContent>
                </Select>
              </div>
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

            {/* Category & Thumbnail Upload Row */}
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
                    className="border-border bg-surface text-text-primary focus:ring-2 focus:ring-primary focus:ring-offset-1"
                  >
                    <SelectValue placeholder="Choose a category" />
                  </SelectTrigger>
                  <SelectContent className="border-border bg-surface text-text-primary">
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="shared">Shared Room</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Thumbnail Upload with Preview & Remove */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-text-secondary">
                  Thumbnail Image
                </Label>

                {!thumbnailPreview ? (
                  <label
                    htmlFor="thumbnail"
                    className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-surface p-6 transition-all hover:border-primary hover:bg-background"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-2 h-10 w-10 text-text-muted"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-text-secondary">
                      Upload thumbnail
                    </span>
                    <span className="mt-1 text-xs text-text-muted">
                      PNG, JPG or WEBP (max 2MB)
                    </span>
                    <Input
                      id="thumbnail"
                      type="file"
                      accept="image/png, image/jpeg, image/webp"
                      className="hidden"
                      onChange={handleThumbnailChange}
                    />
                  </label>
                ) : (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border">
                    <Image
                      src={thumbnailPreview}
                      alt="Thumbnail preview"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <button
                      type="button"
                      onClick={removeThumbnail}
                      className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5 text-white transition hover:bg-black/80"
                      title="Remove image"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary font-semibold text-white shadow-sm transition-all hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:text-background"
            >
              Publish Property
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPropertyForm;
