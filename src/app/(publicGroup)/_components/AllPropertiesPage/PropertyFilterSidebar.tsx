"use client";

import { ICategory } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";
import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

interface PropertyFilterSidebarProps {
  categories: ICategory[];
  onPendingChange?: (pending: boolean) => void;
  onFilterApply?: () => void;
}

const PropertyFilterSidebar = ({
  categories,
  onPendingChange,
   onFilterApply
}: PropertyFilterSidebarProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const debouncedReference = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || "",
  );
  const [minPrice, setMinPrice] = useState(searchParams.get("minPrice") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [type, setType] = useState(searchParams.get("type") || "");

  useEffect(() => {
    onPendingChange?.(isPending);
  }, [isPending, onPendingChange]);

  const updateQuery = (key: string, value: string) => {
    if (debouncedReference.current) {
      clearTimeout(debouncedReference.current);
    }

    debouncedReference.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`);
      })
       onFilterApply?.();
    }, 500);
  };

  const clearFilter = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    setType("");

    startTransition(() => {
      router.replace(pathname);
    });
  };

  return (
    <div className="w-full space-y-6">
      {/* Search */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-muted">
          Search
        </label>

        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />

          <input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              updateQuery("searchTerm", e.target.value);
            }}
            placeholder="Search property..."
            className="w-full rounded-xl border border-border bg-background py-2.5 pl-9 pr-3 text-sm text-text-primary outline-none transition-colors focus:border-primary"
          />
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-muted">
          Price Range
        </label>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => {
              setMinPrice(e.target.value);
              updateQuery("minPrice", e.target.value);
            }}
            placeholder="Min"
            className="rounded-xl border border-border bg-background px-3 py-2 text-sm text-text-primary outline-none transition-colors focus:border-primary"
          />

          <input
            type="number"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value);
              updateQuery("maxPrice", e.target.value);
            }}
            placeholder="Max"
            className="rounded-xl border border-border bg-background px-3 py-2 text-sm text-text-primary outline-none transition-colors focus:border-primary"
          />
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text-muted">
          Property Type
        </label>

        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            updateQuery("type", e.target.value);
          }}
          className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm text-text-primary outline-none transition-colors focus:border-primary"
        >
          <option value="">All Types</option>

          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Active filters */}
      {(searchTerm || minPrice || maxPrice || type) && (
        <div className="flex items-center justify-between rounded-xl bg-error/10 px-3 py-2">
          <span className="text-xs font-medium text-error">
            Filters applied
          </span>

          <button
            onClick={clearFilter}
            className="flex items-center gap-1 text-xs font-semibold text-error hover:text-error/80"
          >
            <X size={14} />
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyFilterSidebar;