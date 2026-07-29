"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Upload, X } from "lucide-react";

const ImageUploadField = () => {
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
    <div className="space-y-2">
      <Label className="text-sm font-medium text-text-secondary">
        Thumbnail Image
      </Label>

      {!thumbnailPreview ? (
        <Label
          htmlFor="thumbnail"
          className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-surface p-6 transition-all hover:border-primary hover:bg-background"
        >
          <Upload />
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
            <X />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploadField;
