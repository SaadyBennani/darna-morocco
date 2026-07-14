"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Compass, Store, ChevronDown, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { setActiveRole } from "@/lib/actions/role";
import { isRole, ROLES, type Role } from "@/lib/roles";
import { cn } from "@/lib/utils";

const ROLE_LABELS: Record<Role, string> = {
  traveler: "Traveler",
  merchant: "Merchant",
};

const ROLE_ICONS: Record<Role, typeof Compass> = {
  traveler: Compass,
  merchant: Store,
};

export default function RoleSwitcher() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  if (!isLoaded || !user) return null;

  const activeRole: Role = isRole(user.publicMetadata.activeRole)
    ? (user.publicMetadata.activeRole as Role)
    : "traveler";

  const handleSelect = (role: Role) => {
    if (role === activeRole) {
      setOpen(false);
      return;
    }
    startTransition(async () => {
      await setActiveRole(role);
      await user.reload();
      setOpen(false);
      router.push(`/dashboard/${role}`);
    });
  };

  const ActiveIcon = ROLE_ICONS[activeRole];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        disabled={pending}
        aria-label={`Switch mode (currently ${ROLE_LABELS[activeRole]})`}
        className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-2.5 py-1.5 text-sm font-medium hover:bg-muted/60 transition-colors disabled:opacity-60"
      >
        <ActiveIcon className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">{ROLE_LABELS[activeRole]}</span>
        <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-56 p-1.5">
        {ROLES.map((role) => {
          const Icon = ROLE_ICONS[role];
          const isActive = role === activeRole;
          return (
            <button
              key={role}
              onClick={() => handleSelect(role)}
              disabled={pending}
              className={cn(
                "flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-sm text-left hover:bg-muted/60 transition-colors disabled:opacity-60",
                isActive && "bg-muted/40"
              )}
            >
              <Icon className="h-4 w-4 text-muted-foreground" />
              <span className="flex-1">{ROLE_LABELS[role]} mode</span>
              {isActive && <Check className="h-4 w-4 text-primary" />}
            </button>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}
