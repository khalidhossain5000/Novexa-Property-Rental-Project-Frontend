"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Image from "next/image";
import { IRentalRequest } from "../../_dashboardTypes/dashboardTypes";

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
        <div className="flex items-center gap-2 cursor-pointer bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-1 rounded-sm shadow-sm">
          <Eye size={15} />
          View Details
        </div>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl bg-card">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Rental Request Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Property Image */}
          <div className="relative h-56 w-full overflow-hidden rounded-xl">
            <Image
              src={property.thumbnailImage}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Request Status */}
          <div className="flex items-center justify-between rounded-xl border p-4">
            <div>
              <p className="text-sm text-muted-foreground">Request Status</p>

              <span
                className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                  rentalReq.status === "PENDING"
                    ? "bg-yellow-100 text-yellow-700"
                    : rentalReq.status === "APPROVED"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                }`}
              >
                {rentalReq.status}
              </span>
            </div>

            <div className="text-right">
              <p className="text-sm text-muted-foreground">Monthly Rent</p>

              <p className="text-lg font-bold">${rentalReq.totalAmount}</p>
            </div>
          </div>

          {/* Property Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Property Information</h3>

            <div className="grid grid-cols-1 gap-3 rounded-xl border p-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Title</p>
                <p className="font-medium">{property.title}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{property.location}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Property Status</p>

                <p className="font-medium">{property.status}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Price</p>

                <p className="font-medium">${property.price}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="mb-2 text-lg font-semibold">Description</h3>

            <p className="rounded-xl border p-4 text-sm leading-relaxed text-muted-foreground">
              {property.description}
            </p>
          </div>

          {/* Amenities */}

          <div>
            <h3 className="mb-2 text-lg font-semibold">Amenities</h3>

            <p className="rounded-xl border p-4 text-sm text-muted-foreground">
              {property.amenities || "No amenities provided"}
            </p>
          </div>

          {/* Request Dates */}

          <div className="grid grid-cols-1 gap-3 rounded-xl border p-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Requested At</p>

              <p className="font-medium">
                {new Date(rentalReq.created_At).toLocaleDateString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Last Updated</p>

              <p className="font-medium">
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
