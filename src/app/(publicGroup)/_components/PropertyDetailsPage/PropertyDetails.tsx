"use client";
import { IPropertyDetailsRes } from "@/lib/types";
import {
  ArrowLeft,
  BookMarked,
  Calendar,
  ChevronRight,
  Coins,
  Hash,
  HouseWifiIcon,
  Mail,
  MapPin,
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

// 
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
};

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

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#0d1117]">
      {/* Ambient page glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px] dark:bg-teal-500/20" />
      <div className="pointer-events-none absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px] dark:bg-teal-500/20" />

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav className="mb-8 flex min-w-0 items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
          <Link
            href="/"
            className="shrink-0 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
          >
            Catalog
          </Link>
          <ChevronRight size={12} className="shrink-0" />
          <Link
            href="/all-properties"
            className="shrink-0 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
          >
            {details.category.name || "Not Found"}
          </Link>
          <ChevronRight size={12} className="shrink-0" />
          <span className="line-clamp-1 max-w-45 font-medium text-teal-600 dark:text-teal-400">
            {details.title}
          </span>
        </nav>

        {/* ── Hero Grid ── */}
        <div className="grid gap-10 lg:grid-cols-[360px_1fr] xl:gap-16">
          {/* Left — Property Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-85">
              <div className="absolute -inset-4 rounded-3xl bg-teal-500/10 blur-2xl dark:bg-teal-500/20" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-2xl shadow-slate-300/40 dark:border-slate-700/40 dark:bg-slate-800 dark:shadow-black/60">
                {details.thumbnailImage ? (
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={details.thumbnailImage}
                      alt={details.title || "property details"}
                      fill
                      sizes="(max-width: 1024px) 90vw, 340px"
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

            {/* Location */}
            <p className="mb-1 flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={14} className="text-teal-600 dark:text-teal-400" />
              {details.location || "Location not specified"}
            </p>

            {/* Price */}
            <p className="mb-4 text-2xl font-bold text-teal-600 dark:text-teal-400">
              ৳{Number(details.price).toLocaleString("en-US")}
              <span className="ml-1 text-sm font-normal text-slate-400">
                /month
              </span>
            </p>

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
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              <PropertyStatCard label="Status" value={details.status} />
              <PropertyStatCard
                label="Price"
                value={`৳${Number(details.price).toLocaleString("en-US")}`}
              />
              <PropertyStatCard
                label="Location"
                value={details.location || "—"}
              />
              <PropertyStatCard
                label="Added On"
                value={formatDate(details.created_At)}
              />
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
                  className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
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

        {/* Description Section */}
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

        {/* Landlord Section */}
        {details.user && (
          <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-700/60 dark:bg-slate-800/40">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
              Listed By
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
                {details.user.profilePhoto ? (
                  <Image
                    src={details.user.profilePhoto}
                    alt={details.user.firstName || "Landlord"}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-400">
                    {details.user.firstName?.[0] || "L"}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-950 dark:text-white">
                  {details.user.firstName} {details.user.lastName}
                </p>
                <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <Mail size={12} />
                  <span className="truncate">{details.user.email}</span>
                </p>
              </div>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/50 dark:text-teal-300">
                {details.user.role}
              </span>
            </div>
          </div>
        )}

        {/* Back button */}
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