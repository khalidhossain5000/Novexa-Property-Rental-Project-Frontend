"use client";
import { IPropertyDetailsRes } from "@/lib/types";
import {
  ArrowLeft,
  BookMarked,
  ChevronRight,
  Hash,
  HouseWifiIcon,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useActionState } from "react";
import PropertyStatCard from "./PropertyStatCard";
import { sendRentalRequest } from "@/app/(publicGroup)/_actions/rentalRequestActions";
interface IPropertyDetailsProps {
  propertyDetailsRes: IPropertyDetailsRes;
  currentUserId: string;
}
const PropertyDetails = ({
  propertyDetailsRes,
  currentUserId,
}: IPropertyDetailsProps) => {
  const details = propertyDetailsRes.data;
  const [state, action, isPending] = useActionState(
    sendRentalRequest.bind(null, details.price, details.id),
    null,
  );
  const myRentalRequest = details.rentalRequest?.find(
    (req) => req.tenantId === currentUserId,
  );

  const myRentalRequestStatus = myRentalRequest?.status;
  console.log(
    state,
    "this is state after rental req",
    details,
    "details",
    currentUserId,
    "currentUserId",
  );
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0d1117]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
          <Link
            href="/"
            className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            Catalog
          </Link>
          <ChevronRight size={12} />
          <Link
            href="/all-properties"
            className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            {details.category.name || "Not Found"}
          </Link>
          <ChevronRight size={12} />
          <span className="text-teal-600 dark:text-teal-400 font-medium line-clamp-1 max-w-45">
            {details.title}
          </span>
        </nav>

        {/* ── Hero Grid ── */}
        <div className="grid gap-10 lg:grid-cols-[360px_1fr] xl:gap-16">
          {/* Left — Book Cover */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-85">
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-teal-500/10 blur-2xl dark:bg-teal-500/20" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-2xl shadow-slate-300/40 dark:border-slate-700/40 dark:bg-slate-800 dark:shadow-black/60">
                {details.thumbnailImage ? (
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={details.thumbnailImage}
                      alt={details.title || "property details"}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                ) : (
                  <div className="flex aspect-3/4 w-full items-center justify-center bg-linear-to-br from-teal-50 to-slate-100 dark:from-teal-950/40 dark:to-slate-800">
                    <HouseWifiIcon className="h-20 w-20 text-teal-300 dark:text-teal-700" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right — Details */}
          <div className="flex flex-col justify-center">
            {/* Tags row */}
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/50 dark:text-teal-300">
                <Hash size={10} />
                {details.category.name || "not-found"}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                  details.status === "AVAILABLE"
                    ? "border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-400"
                    : "border border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/40 dark:text-rose-400"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${details.status === "AVAILABLE" ? "bg-emerald-500" : "bg-rose-500"}`}
                />
                {details.status === "AVAILABLE" ? "Available" : "Booked"}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-2 text-3xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-4xl xl:text-5xl">
              {details.title || "Untitled"}
            </h1>

            {/* Author */}
            <p className="mb-1 text-sm text-slate-500 dark:text-slate-400">
              by{" "}
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                {details?.user?.firstName || "Unknown Author"}
              </span>
            </p>

            {/* Star rating */}

            {/* Divider */}
            <div className="mb-6 h-px bg-slate-200 dark:bg-slate-700/60" />

            {/* Amenities */}
            <div className="mb-6">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                Amenities
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {details.amenities || "No description available."}
              </p>
            </div>

            {/* Stat cards */}
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <PropertyStatCard label="Status" value={details.status} />
              <PropertyStatCard label="Added On" value={details.created_At} />
              <PropertyStatCard
                label="Category"
                value={details.category.name || "—"}
              />
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <form action={action}>
                <button
                  type="submit"
                disabled={isPending || myRentalRequestStatus === "PENDING"}
                  className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                >
                  <BookMarked size={16} />
                  {isPending
                    ? "Sending..."
                    : myRentalRequestStatus === "PENDING"
                      ? "Request Sended Wait For Admin Approval"
                      : myRentalRequestStatus === "APPROVED"
                        ? "Accepted"
                        : myRentalRequestStatus === "REJECTED"
                          ? "Rejected"
                          : "Send Rent Request"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/*  Description Section  */}
        {details.description && (
          <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-700/60 dark:bg-slate-800/40">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              About this Property
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {details.description}
            </p>
          </div>
        )}

        {/*  Back button */}
        <div className="mt-10">
          <Link
            href={"/all-properties"}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400"
          >
            <ArrowLeft size={15} />
            Back to catalog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

// {
//     "id": "0f058886-128b-48a8-8b2a-d316f0e52838",
//     "title": "Affordable Bachelor Flat",
//     "description": "One-bedroom flat located close to public transport and shopping centers.",
//     "location": "Mohammadpur, Dhaka",
//     "price": "22000",
//     "amenities": "WiFi, Security, Lift",
//     "thumbnailImage": "https://i.ibb.co.com/dJWwQNvF/mountain.jpg",
//     "status": "AVAILABLE",
//     "categoryId": "ba20a26c-e49d-48ba-b269-1dd29ebe2eb8",
//     "landLordId": "dff740e5-6de9-448b-95ff-6a899a9a4ebf",
//     "created_At": "2026-07-11T15:10:05.121Z",
//     "updated_At": "2026-07-11T15:10:05.121Z",
//     "category": {
//         "id": "ba20a26c-e49d-48ba-b269-1dd29ebe2eb8",
//         "name": "Duplex",
//         "created_At": "2026-07-06T15:33:44.076Z",
//         "updated_At": "2026-07-06T15:33:44.076Z"
//     },
//     "user": {
//         "id": "dff740e5-6de9-448b-95ff-6a899a9a4ebf",
//         "firstName": "Landlord Rent",
//         "lastName": "Nest",
//         "email": "landlord@rentnest.com",
//         "profilePhoto": "https://i.ibb.co.com/MxG3yzrq/fb.jpg",
//         "role": "LANDLORD",
//         "status": "ACTIVE",
//         "created_At": "2026-07-09T08:44:18.328Z",
//         "updated_At": "2026-07-09T08:44:18.328Z"
//     }
// }
