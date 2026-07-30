"use client";

import Image from "next/image";
import { HousePlug } from "lucide-react";

interface IListingMobileCardProps {
  image?: string;
  title: string;
  subtitle?: string;
  badges?: React.ReactNode;
  description?: string;
  actions?: React.ReactNode;
}

const ListingMobileCard = ({
  image,
  title,
  subtitle,
  badges,
  description,
  actions,
}: IListingMobileCardProps) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start gap-4 p-4">
        {/* Image */}
        <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
          {image ? (
            <Image src={image} alt={title} fill className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-slate-400">
              <HousePlug className="h-5 w-5" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{title}</h3>

          {subtitle && <p className="text-xs text-foreground/60">{subtitle}</p>}

          {/* Dynamic badges */}
          {badges && (
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
              {badges}
            </div>
          )}

          {description && (
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-foreground/70">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Dynamic Actions */}
      {actions && (
        <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/60 sm:flex-row sm:items-center sm:justify-between">
          {actions}
        </div>
      )}
    </div>
  );
};

export default ListingMobileCard;
