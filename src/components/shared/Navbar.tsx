"use client";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import RoleSwitcher from "@/components/shared/RoleSwitcher";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Compass className="h-5 w-5 text-primary" />
          <span className="text-xl font-bold tracking-tight">
            darna<span className="text-primary">.</span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/experiences" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Explore
          </Link>
          <Link href="/community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Community
          </Link>
          <Link href="/#curators" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            For Curators
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Show when="signed-out">
            <SignInButton>
              <button
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "hidden md:inline-flex"
                )}
              >
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className={cn(buttonVariants({ variant: "default", size: "sm" }))}>
                Get Started
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <RoleSwitcher />
            <UserButton userProfileMode="navigation" userProfileUrl="/dashboard/account" />
          </Show>
        </div>
      </div>
    </motion.nav>
  );
}
