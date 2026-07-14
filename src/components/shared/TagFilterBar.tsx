"use client";
import { cn } from "@/lib/utils";

export default function TagFilterBar({
  tags,
  active,
  onChange,
}: {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-none">
      {["All", ...tags].map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={cn(
            "shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            active === tag
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
