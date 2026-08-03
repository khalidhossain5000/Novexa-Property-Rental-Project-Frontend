/* eslint-disable @next/next/no-img-element */
import { IPropertyTypes } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";
import PrimaryBtn from "@/components/shared/Button/PrimaryBtn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrStatusCritical } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
interface IPopertyProps {
  property: IPropertyTypes;
}
const PropertyCard = ({ property }: IPopertyProps) => {
  
  return (
    <div className="relative overflow-hidden rounded-2xl p-[1px] bg-linear-to-tr from-[#f98d00] to-[#f9a300] dark:from-[#0a121f] dark:to-[#0a0e16db] shadow-xl">
      {/* Inner Card */}
      <div className="flex flex-col justify-between h-full rounded-2xl bg-white dark:bg-[#0f172a] p-4 sm:p-5 lg:p-6 transition-all duration-300">
        {/* Thumbnail */}
        <div className="relative h-52 sm:h-60 lg:h-64 overflow-hidden rounded-xl">
          <Image
            src={property?.thumbnailImage}
            width={200}
            height={100}
            alt="room thumbnail"
            className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
          />

          {/* Host Badge */}
          <div className="absolute top-3 left-3 bg-[#fac512] text-black text-xs sm:text-sm font-semibold px-3 py-1 rounded-md shadow-md font-inter">
            Hosted By: {property?.user?.firstName}
          </div>
        </div>

        {/* Content */}
        <div className="mt-5 flex flex-col gap-4">
          {/* Title */}
          <h1 className="font-lora text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100 text-center">
            {property.title}
          </h1>

          {/* Info Row */}
          <div className="flex justify-between items-center text-gray-800 dark:text-gray-300 text-sm sm:text-base font-medium px-2">
            <div className="flex items-center gap-2">
              <GrStatusCritical />
              <span className="hidden sm:inline font-inter">Status</span>
              {property.status}
            </div>

            <div className="flex items-center gap-2">
              <TbCategory />
              <span className="hidden sm:inline font-inter">Category</span>
              {property.category.name}
            </div>
          </div>

          {/* Availability */}
          <div className="flex font-inter justify-between text-sm sm:text-base font-medium text-gray-700 dark:text-gray-400">
            <span>
              Added On{" "}
              <span className="font-semibold">
                {new Date(property.created_At).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </span>

            <span>
              Last Updated{" "}
              <span className="font-semibold">
                {new Date(property.updated_At).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-lg font-lora sm:text-xl font-bold text-gray-900 dark:text-gray-100">
            ${property.price}
            <span className="font-inter ml-1 text-sm font-medium text-gray-600 dark:text-gray-400">
              / month
            </span>
          </h2>

          <Link href={`/all-properties/${property.id}`}>
            <PrimaryBtn className="px-4 py-2 text-sm sm:text-base hover:opacity-90 font-inter">
              Details
            </PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
