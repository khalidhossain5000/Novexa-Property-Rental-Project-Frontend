"use client";

import Image from "next/image";
import { HousePlug } from "lucide-react";

interface IListingTableRowProps {
  image?: string;
  title: string;
  subtitle?: string;
  columns: React.ReactNode[];
  status?: React.ReactNode;
  actions?: React.ReactNode;
}

const ListingTableRow = ({
  image,
  title,
  subtitle,
  columns,
  status,
  actions,
}: IListingTableRowProps) => {
  return (
    <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/20">
      {/* Main info */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800">
            {image ? (
              <Image src={image} alt={title} fill className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-400">
                <HousePlug className="h-5 w-5" />
              </div>
            )}
          </div>

          <div>
            <p className="font-medium text-foreground">{title}</p>

            <p className="text-xs text-foreground/70">{subtitle}</p>
          </div>
        </div>
      </td>

      {/* Dynamic columns */}
      {columns.map((column, index) => (
        <td key={index} className="px-6 py-4 text-foreground/70">
          {column}
        </td>
      ))}

      {/* Status */}
      <td className="px-6 py-4">{status}</td>

      {/* Actions */}
      <td className="px-6 py-4 text-right">{actions}</td>
    </tr>
  );
};

export default ListingTableRow;
