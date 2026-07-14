"use client";
import { PROPERTY_TYPES } from "@/lib/data";
import { cn } from "@/lib/utils";

export const MAX_PRICE = 300;

export type ExperienceFilterState = {
  maxPrice: number;
  propertyTypes: string[];
  minBedrooms: number;
};

export const DEFAULT_FILTERS: ExperienceFilterState = {
  maxPrice: MAX_PRICE,
  propertyTypes: [],
  minBedrooms: 0,
};

export default function ExperienceFilters({
  filters,
  onChange,
}: {
  filters: ExperienceFilterState;
  onChange: (filters: ExperienceFilterState) => void;
}) {
  function toggleType(type: string) {
    const next = filters.propertyTypes.includes(type)
      ? filters.propertyTypes.filter((t) => t !== type)
      : [...filters.propertyTypes, type];
    onChange({ ...filters, propertyTypes: next });
  }

  return (
    <aside className="w-full shrink-0 space-y-8 sm:w-64">
      {/* Price Range */}
      <div>
        <h3 className="mb-3 text-sm font-semibold">Price Range</h3>
        <input
          type="range"
          min={0}
          max={MAX_PRICE}
          step={10}
          value={filters.maxPrice}
          onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full accent-primary"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>$0</span>
          <span>up to ${filters.maxPrice}</span>
        </div>
      </div>

      {/* Property Type */}
      <div>
        <h3 className="mb-3 text-sm font-semibold">Property Type</h3>
        <div className="space-y-2">
          {PROPERTY_TYPES.map((type) => (
            <label key={type} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={filters.propertyTypes.includes(type)}
                onChange={() => toggleType(type)}
                className="h-4 w-4 rounded border-border accent-primary"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <h3 className="mb-3 text-sm font-semibold">Bedrooms</h3>
        <div className="flex gap-2">
          {[0, 1, 2, 3, 4].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => onChange({ ...filters, minBedrooms: n })}
              className={cn(
                "h-9 w-9 rounded border text-sm font-medium transition-colors",
                filters.minBedrooms === n
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50"
              )}
            >
              {n === 0 ? "Any" : `${n}+`}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
