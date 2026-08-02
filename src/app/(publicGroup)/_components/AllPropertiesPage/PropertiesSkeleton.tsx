const PropertiesSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="flex animate-pulse flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
        >
          {/* Image */}
          <div className="relative h-48 w-full bg-surface">
            <div className="absolute left-3 top-3 h-6 w-20 rounded-full bg-border/60" />
            <div className="absolute right-3 top-3 h-6 w-24 rounded-full bg-border/60" />
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col p-4">
            {/* Location */}
            <div className="mb-2 h-3 w-2/5 rounded bg-border/60" />

            {/* Title */}
            <div className="mb-1.5 h-4 w-4/5 rounded bg-border/60" />

            {/* Description */}
            <div className="mb-1.5 h-3 w-full rounded bg-border/50" />
            <div className="mb-3 h-3 w-3/4 rounded bg-border/50" />

            {/* Amenities */}
            <div className="mb-3 h-3 w-2/3 rounded bg-border/50" />

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between gap-2 border-t border-border pt-3">
              <div className="h-5 w-20 rounded bg-border/60" />
              <div className="h-8 w-20 rounded-lg bg-border/60" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertiesSkeleton;