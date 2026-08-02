"use client";
import {
  ICategory,
  ICategoryResponse,
} from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";
import { IPropertyResponse } from "@/lib/types";
import {
  HouseHeartIcon,
  HouseIcon,
  HouseWifi,
  MapPin,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import React, { useState } from "react";
import PropertyFilterSidebar from "./PropertyFilterSidebar";
import PropertiesSkeleton from "./PropertiesSkeleton";
import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "@/components/shared/Button/PrimaryBtn";

interface IPropertiesProps {
  allPropertiesRes: IPropertyResponse;
  allCategories: ICategoryResponse;
  query?:
    | {
        [key: string]: string | undefined;
      }
    | undefined;
}

const AllProperties = ({
  allPropertiesRes,
  allCategories
}: IPropertiesProps) => {
  const allProperties = allPropertiesRes.data;
  const categories = allCategories.data as ICategory[];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Ambient theme glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-secondary/20 blur-[120px]" />

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-surface p-6 shadow-2xl transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-semibold text-text-primary">
            Filter Properties
          </span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-1.5 text-text-muted hover:bg-background"
          >
            <X size={16} />
          </button>
        </div>
        <PropertyFilterSidebar
          categories={categories}
          onPendingChange={setIsFiltering}
        />
      </div>

      <div className="relative mx-auto container px-6 md:px-8 lg:px-13 xl:px-16 py-12">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
            <HouseHeartIcon size={11} />
            All Properties Collection
          </span>
          <h1 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
            Find Your Next Stay
          </h1>
          <p className="mt-2 max-w-xl text-sm text-text-secondary">
            Browse our curated listings with smart search and category filters.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Desktop Sidebar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-6 rounded-2xl border border-border bg-card p-5 shadow-sm">
              <PropertyFilterSidebar
                categories={categories}
                onPendingChange={setIsFiltering}
              />
            </div>
          </aside>

          {/* Main content */}
          <div className="min-w-0 flex-1">
            {/* Toolbar */}
            <div className="mb-5 flex items-center justify-between gap-3">
              <p className="text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">
                  {allProperties.length}
                </span>{" "}
                {allProperties.length === 1 ? "property" : "properties"} found
              </p>
              <button
                onClick={() => setSidebarOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3.5 py-2 text-sm font-medium text-text-primary shadow-sm transition hover:bg-background lg:hidden"
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>
            </div>

            {/* Grid — only this part swaps to skeleton */}
            {isFiltering ? (
              <PropertiesSkeleton />
            ) : allProperties.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card py-20 text-center">
                <HouseIcon className="mb-4 h-10 w-10 text-text-muted" />
                <p className="text-sm font-semibold text-text-primary">
                  No properties matched
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  Try a broader search or different category.
                </p>
               
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {allProperties.map((property) => (
                  <div
                    key={property.id}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                  >
                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-surface">
                      {property.thumbnailImage ? (
                        <Image
                          src={property.thumbnailImage}
                          alt={property.title || "Property"}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <HouseWifi className="h-10 w-10 text-text-muted" />
                        </div>
                      )}

                      {/* Category badge */}
                      <div className="absolute left-3 top-3">
                        <span className="rounded-full bg-card/90 px-2.5 py-1 text-xs font-semibold text-text-primary shadow-sm backdrop-blur-sm">
                          {property?.category?.name || "General"}
                        </span>
                      </div>

                      {/* Status badge */}
                      <div className="absolute right-3 top-3">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm ${
                            property.status === "AVAILABLE"
                              ? "bg-success/15 text-success"
                              : "bg-error/15 text-error"
                          }`}
                        >
                          <Sparkles size={10} />
                          {property.status}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 flex-col p-4">
                      <div className="mb-2 flex items-center gap-1.5 text-xs text-text-muted">
                        <MapPin size={12} className="shrink-0 text-secondary" />
                        <span className="truncate">
                          {property.location || "Location not specified"}
                        </span>
                      </div>

                      <h2 className="mb-1.5 line-clamp-1 text-base font-semibold leading-snug text-text-primary">
                        {property.title || "Untitled Property"}
                      </h2>

                      <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-text-secondary">
                        {property.description || "No description available."}
                      </p>

                      {property.amenities && (
                        <div className="mb-3 line-clamp-1 text-xs text-text-muted">
                          <span className="font-medium text-text-secondary">
                            Amenities:{" "}
                          </span>
                          {property.amenities}
                        </div>
                      )}

                      {/* Footer */}
                      <div className="mt-auto flex items-center justify-between gap-2 border-t border-border pt-3">
                        <div>
                          <p className="text-lg font-bold text-primary">
                            ${Number(property.price).toLocaleString()}
                            <span className="ml-1 text-xs font-normal text-text-muted">
                              /month
                            </span>
                          </p>
                        </div>
                        <Link href={`/all-properties/${property.id}`}>
                          <PrimaryBtn>Details</PrimaryBtn>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AllProperties;
