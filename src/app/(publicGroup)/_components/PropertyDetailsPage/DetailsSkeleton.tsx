import React from "react";

const DetailsSkeleton = () => {
  return (
    <div className="mx-auto max-w-screen-xl animate-pulse px-4 py-10 sm:px-6 lg:px-10">
      <div className="mb-8 h-4 w-48 rounded-full bg-slate-200 dark:bg-slate-800" />
      <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
        <div className="aspect-[3/4] w-full rounded-3xl bg-slate-200 dark:bg-slate-800" />
        <div className="space-y-4 pt-4">
          <div className="h-3 w-24 rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="h-10 w-3/4 rounded-xl bg-slate-200 dark:bg-slate-800" />
          <div className="h-4 w-32 rounded-full bg-slate-200 dark:bg-slate-800" />
          <div className="mt-6 h-px bg-slate-200 dark:bg-slate-800" />
          <div className="space-y-2 pt-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-800"
              />
            ))}
          </div>
          <div className="mt-6 grid grid-cols-4 gap-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-20 rounded-2xl bg-slate-200 dark:bg-slate-800"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;
