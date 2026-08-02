"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Eye } from "lucide-react";
import Image from "next/image";
import { IRentalRequest } from "../../_dashboardTypes/dashboardTypes";
import { Badge } from "@/components/ui/badge";

interface RentalRequestDetailsModalProps {
  rentalReq: IRentalRequest;
}

const RentalRequestDetailsModal = ({
  rentalReq,
}: RentalRequestDetailsModalProps) => {
  const { property } = rentalReq;

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-2 cursor-pointer bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-2 rounded-sm shadow-sm font-inter hover:scale-105 hover:bg-emerald-300 transition duration-400">
          <Eye size={15} />
          View Details
        </div>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl bg-card border-none">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold font-lora">
            Rental Request Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Property Image */}
          <div className="relative h-48 lg:not-last-of-type:h-56 w-full overflow-hidden rounded-xl">
            <Image
              src={property.thumbnailImage}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Request Status */}
          <div className="flex items-center justify-between rounded-xl  dark:shadow-xl dark:shadow-primary/20 shadow-sm p-4">
            <div>
              <p className="text-sm text-muted-foreground font-inter">
                Request Status
              </p>

              {rentalReq.status === "PENDING" && (
                <Badge className="bg-[#f7f794] text-yellow-400 dark:text-black">
                  Pending
                </Badge>
              )}
              {rentalReq.status === "APPROVED" && (
                <Badge className="bg-blue-600 text-white dark:text-black">
                  Approved
                </Badge>
              )}
              {rentalReq.status === "REJECTED" && (
                <Badge className="bg-red-600  text-white dark:text-black">
                  Rejected
                </Badge>
              )}

              {rentalReq.status === "ACTIVE" && (
                <Badge className="bg-emerald-500 text-text-primary dark:text-black">
                  Active
                </Badge>
              )}

              {rentalReq.status === "COMPLETED" && (
                <Badge className="bg-slate-600 text-text-primary dark:text-black">
                  Completed
                </Badge>
              )}
            </div>

            <div className="text-right">
              <p className="text-sm text-muted-foreground font-lora">
                Monthly Rent
              </p>

              <p className="text-lg font-bold font-inter">
                ${rentalReq.totalAmount}
              </p>
            </div>
          </div>

          {/* Property Information */}
          <div className="space-y-3  shadow-sm">
            <h3 className="text-lg font-semibold font-lora">
              Property Information
            </h3>

            <div className="grid grid-cols-1 gap-3 rounded-xl shadow-sm p-4  sm:grid-cols-2 dark:shadow-xl dark:shadow-primary/20">
              <div>
                <p className="text-sm text-muted-foreground font-lora">Title</p>
                <p className="font-medium font-inter">{property.title}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground font-lora">
                  Location
                </p>
                <p className="font-medium font-inter">{property.location}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground font-lora">
                  Property Status
                </p>

                <p className="font-medium font-inter">{property.status}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground font-lora">Price</p>

                <p className="font-medium font-inter">${property.price}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="">
            <h3 className="mb-2 text-lg font-semibold font-lora">
              Description
            </h3>

            <p className="rounded-xl shadow-sm p-4 text-sm leading-relaxed text-muted-foreground font-inter dark:shadow-xl dark:shadow-primary/20">
              {property.description}
            </p>
          </div>

          {/* Amenities */}

          <div>
            <h3 className="mb-2 text-lg font-semibold font-lora">Amenities</h3>

            <p className="rounded-xl dark:shadow-xl dark:shadow-primary/30 shadow-sm p-4 text-sm text-muted-foreground font-inter">
              {property.amenities || "No amenities provided"}
            </p>
          </div>

          {/* Request Dates */}

          <div className="grid grid-cols-1 gap-3 rounded-xl dark:shadow-xl dark:shadow-primary/20 shadow-sm p-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground font-lora">
                Requested At
              </p>

              <p className="font-medium font-inter">
                {new Date(rentalReq.created_At).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground font-lora">
                Last Updated
              </p>

              <p className="font-medium font-inter">
                {new Date(rentalReq.updated_At).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RentalRequestDetailsModal;
