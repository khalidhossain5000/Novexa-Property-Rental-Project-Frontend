import { updateProfile } from "@/app/(authGroup)/_actions/authAction";
import ImageUploadField from "@/components/ImageUploadField/ImageUploadField";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@base-ui/react";
import { Edit, Home } from "lucide-react";
import Image from "next/image";
import React, { useActionState, useState } from "react";
interface IUpdateProfile {
  firstName: string;
  lastName: string;
  profilePhoto: string;
  id: string;
}
interface IUpdateProfileProps {
  payload: IUpdateProfile;
}
const UpdateProfileModal = ({ payload }: IUpdateProfileProps) => {
  const [profilePhoto, setProfilePhoto] = useState(payload.profilePhoto);

  const [imageUploading, setImageUploading] = useState(false);

  const [state, action, isPending] = useActionState(
    updateProfile.bind(null, payload.id),
    false,
  );
  console.log(payload, "update payload here");
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center justify-center gap-2 cursor-pointer bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-2 rounded-sm shadow-sm font-inter hover:scale-105 hover:bg-emerald-300 transition duration-400">
          <Edit size={14} />
          Update Profile
        </div>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl mx-auto bg-primary border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold font-lora dark:text-black">
            Current Profile Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 rounded-xl  dark:shadow-xl dark:shadow-primary/20 shadow-sm">
          <div className="w-full max-w-md mx-auto rounded-2xl border border-border bg-card p-8 shadow-xl dark:shadow-2xl dark:shadow-black/40">
            {/* Brand mark */}
            <div className="mb-6 flex flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/15">
                <Home className="h-6 w-6 text-primary" />
              </div>
            </div>

            {/* Form */}
            <form action={action} className="space-y-5">
              {/* First / Last name */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 justify-center">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="font-inter text-text-secondary"
                  >
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    defaultValue={`${payload?.firstName}`}
                    placeholder="Rahim"
                    className="border-border bg-background text-text-primary placeholder:text-slate-400 focus-visible:ring-primary/30 dark:placeholder:text-slate-500 dark:focus-visible:ring-primary/40 py-3"
                  />
                  {/* {state.errors?.firstName && (
                    <p className="text-red-600 font-lora">
                      {state.errors.firstName[0]}
                    </p>
                  )} */}
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="font-inter text-text-secondary"
                  >
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    defaultValue={`${payload?.lastName}`}
                    name="lastName"
                    placeholder="Uddin"
                    className="border-border bg-background text-text-primary placeholder:text-slate-400 focus-visible:ring-primary/30 dark:placeholder:text-slate-500 dark:focus-visible:ring-primary/40 py-3"
                  />
                  {/* {state.errors?.lastName && (
                    <p className="text-red-600 font-lora">
                      {state.errors.lastName[0]}
                    </p>
                  )} */}
                </div>
              </div>

              <div className="relative h-20 w-20 overflow-hidden rounded-lg">
                <Image
                  src={payload?.profilePhoto || "google.com"}
                  alt={"title"}
                  fill
                  className="object-cover"
                />

                {/* Image Upload */}

                <ImageUploadField
                  onUploadSuccess={(url) => {
                    setProfilePhoto(url);
                  }}
                  onUploadStateChange={(loading) => {
                    setImageUploading(loading);
                  }}
                  onRemove={() => {
                    setProfilePhoto("");
                  }}
                  defaultImage={payload.profilePhoto}
                />
                {/* to get thumbnail url */}
                <input
                  type="hidden"
                  name="thumbnailImage"
                  value={profilePhoto}
                />
              </div>
              {/* Submit */}

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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileModal;
