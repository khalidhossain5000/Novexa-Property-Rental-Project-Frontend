import Image from "next/image";
import { IPropertyTypes } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  MapPin,
  Pencil,
  Trash2,
  Wallet,
} from "lucide-react";

interface IPropertyListingCardProps {
  property: IPropertyTypes;
}

const PropertyListingCard = ({
  property,
}: IPropertyListingCardProps) => {
  return (
    <Card className="overflow-hidden border-border bg-card shadow-sm transition-all hover:shadow-md">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row">
          {/* Image */}

          <div className="relative h-60 w-full lg:h-auto lg:w-80">
            <Image
              src={property.thumbnailImage}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}

          <div className="flex flex-1 flex-col justify-between p-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-2xl font-bold text-text-primary">
                  {property.title}
                </h2>

                <Badge
                  className={
                    property.status === "AVAILABLE"
                      ? "bg-success text-white"
                      : "bg-error text-white"
                  }
                >
                  {property.status}
                </Badge>
              </div>

              <p className="line-clamp-2 text-sm text-text-secondary">
                {property.description}
              </p>

              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin className="h-4 w-4 text-primary" />

                <span>{property.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Wallet className="h-5 w-5 text-primary" />

                <span className="text-lg font-semibold text-primary">
                  ৳ {property.price}/month
                </span>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold text-text-primary">
                  Amenities
                </h4>

                <div className="flex flex-wrap gap-2">
                  {property.amenities
                    .split(",")
                    .map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="border-border bg-surface text-text-secondary"
                      >
                        {item.trim()}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>

            {/* Actions */}

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                className="bg-primary hover:bg-primary-hover"
              >
                <Pencil className="mr-2 h-4 w-4" />
                Update
              </Button>

              <Button
                variant="destructive"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyListingCard;