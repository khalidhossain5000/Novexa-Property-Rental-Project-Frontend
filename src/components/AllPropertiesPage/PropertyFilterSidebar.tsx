"use client";

import { ICategory } from "@/app/(dashboardGroup)/_dashboardTypes/dashboardTypes";
import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";

interface PropertyFilterSidebarProps {
  categories: ICategory[];
}

const PropertyFilterSidebar = ({
  categories,
}: PropertyFilterSidebarProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const debouncedReference = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || "",
  );

  const [minPrice, setMinPrice] = useState(
    searchParams.get("minPrice") || "",
  );

  const [maxPrice, setMaxPrice] = useState(
    searchParams.get("maxPrice") || "",
  );

  const [type, setType] = useState(
    searchParams.get("type") || "",
  );


  const updateQuery = (key: string, value: string) => {
    if (debouncedReference.current) {
      clearTimeout(debouncedReference.current);
    }

    debouncedReference.current = setTimeout(() => {
      const params = new URLSearchParams(
        searchParams.toString(),
      );

      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }

      router.replace(
        `${pathname}?${params.toString()}`,
      );
    }, 500);
  };


  const clearFilter = () => {
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    setType("");

    router.replace(pathname);
  };


  return (
    <aside className="w-full space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:w-80">

      {/* Search */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Search
        </label>

        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={searchTerm}
            onChange={(e)=>{
              setSearchTerm(e.target.value);
              updateQuery(
                "searchTerm",
                e.target.value
              );
            }}
            placeholder="Search property..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-800"
          />
        </div>
      </div>


      {/* Price Range */}
      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Price Range
        </label>


        <div className="grid grid-cols-2 gap-3">

          <input
            type="number"
            value={minPrice}
            onChange={(e)=>{
              setMinPrice(e.target.value);

              updateQuery(
                "minPrice",
                e.target.value
              );
            }}
            placeholder="Min"
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
          />


          <input
            type="number"
            value={maxPrice}
            onChange={(e)=>{
              setMaxPrice(e.target.value);

              updateQuery(
                "maxPrice",
                e.target.value
              );
            }}
            placeholder="Max"
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
          />

        </div>
      </div>



      {/* Category */}
      <div>

        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Property Type
        </label>


        <select
          value={type}
          onChange={(e)=>{

            setType(e.target.value);

            updateQuery(
              "type",
              e.target.value
            );

          }}
          className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-800"
        >

          <option value="">
            All Types
          </option>


          {
            categories.map((cat)=>(
              <option
                key={cat.id}
                value={cat.name}
              >
                {cat.name}
              </option>
            ))
          }

        </select>

      </div>



      {/* Active filters */}
      {
        (searchTerm || minPrice || maxPrice || type) && (

          <div className="flex items-center justify-between rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800">

            <span className="text-xs text-slate-500">
              Filters applied
            </span>


            <button
              onClick={clearFilter}
              className="flex items-center gap-1 text-xs font-semibold text-red-500"
            >
              <X size={14}/>
              Clear
            </button>

          </div>

        )
      }


    </aside>
  );
};


export default PropertyFilterSidebar;