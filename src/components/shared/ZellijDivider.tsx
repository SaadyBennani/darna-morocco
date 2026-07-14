import { cn } from "@/lib/utils";

export default function ZellijDivider({
  id = "zellij-pattern",
  className,
}: {
  id?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative h-4 w-full overflow-hidden", className)} aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full text-primary/15" preserveAspectRatio="xMidYMid slice">
        <pattern id={id} width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M12 0 L24 12 L12 24 L0 12 Z" fill="currentColor" />
          <path d="M12 6 L18 12 L12 18 L6 12 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}
