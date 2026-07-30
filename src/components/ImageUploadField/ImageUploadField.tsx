"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Upload, X } from "lucide-react";
import { imageUpload } from "@/lib/imageUpload";
interface IImageUploadProps {
  onUploadSuccess: (url: string) => void;
  onUploadStateChange: (loading: boolean) => void;
  onRemove: () => void;
}
const ImageUploadField = ({
  onUploadSuccess,
  onUploadStateChange,
  onRemove,
}: IImageUploadProps) => {
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleThumbnailChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      // loading start
      setIsUploading(true);
      onUploadStateChange(true);

      // upload image
      const uploadedUrl = await imageUpload(file as File);
      setThumbnailPreview(uploadedUrl as string);

      // parent url send
      onUploadSuccess(uploadedUrl as string);
    } catch (error) {
      console.error("Image upload failed:", error);
    } finally {
      // loading stop
      setIsUploading(false);
      onUploadStateChange(false);
    }
  };

  const removeThumbnail = () => {
    setThumbnailPreview(null);
    onRemove();
    const fileInput = document.getElementById("thumbnail") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-text-secondary">
        Thumbnail Image
      </Label>

      {isUploading ? (
        <div className="flex h-48 items-center justify-center rounded-lg border border-border bg-surface">
          <div className="flex flex-col items-center gap-3 text-text-secondary">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />

            <span className="text-sm font-medium">Uploading image...</span>
          </div>
        </div>
      ) : !thumbnailPreview ? (
        <Label
          htmlFor="thumbnail"
          className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-surface p-6 transition-all hover:border-primary hover:bg-background"
        >
          <Upload className="mb-2 h-6 w-6 text-text-secondary" />

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
        </Label>
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
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploadField;
