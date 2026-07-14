"use client";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ZellijDivider from "@/components/shared/ZellijDivider";
import { MOCK_BOOKINGS, EXPERIENCES } from "@/lib/data";
import { CalendarDays, MapPin, Compass, Users, Settings, Gift } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const QUICK_ACTIONS = [
  {
    icon: Compass,
    title: "Browse Experiences",
    description: "Discover new adventures across Morocco.",
    href: "/experiences",
  },
  {
    icon: CalendarDays,
    title: "My Bookings",
    description: "View your upcoming and past trips.",
    href: "#upcoming-events",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with hosts and fellow travelers.",
    href: "/community",
  },
  {
    icon: Settings,
    title: "Account Settings",
    description: "Manage your profile and preferences.",
    href: "/dashboard/account",
  },
];

export default function TravelerDashboard() {
  const { user } = useUser();
  const bookingsWithDetails = MOCK_BOOKINGS.map((b) => ({
    ...b,
    experience: EXPERIENCES.find((e) => e.id === b.experienceId)!,
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back{user?.firstName ? `, ${user.firstName}` : ""}
          </h1>
          <p className="text-muted-foreground">Your home base for exploring and booking authentic Morocco.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Quick Actions Bento Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {QUICK_ACTIONS.map(({ icon: Icon, title, description, href }, i) => (
                <Link
                  key={title}
                  href={href}
                  className="group relative overflow-hidden rounded-lg border border-border/60 bg-card p-5 transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                  <ZellijDivider id={`bento-zellij-${i}`} className="absolute inset-x-0 bottom-0 opacity-60" />
                </Link>
              ))}
            </div>

            {/* Community Perks Promo */}
            <Link
              href="/community"
              className="mt-6 flex items-center gap-4 rounded-lg bg-primary p-6 text-white transition-opacity hover:opacity-95"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-white/15">
                <Gift className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Unlock Community Perks</h3>
                <p className="text-sm text-white/80">
                  Join the forum to swap tips with fellow travelers and get curator discounts.
                </p>
              </div>
            </Link>
          </div>

          {/* Upcoming Events Column */}
          <div id="upcoming-events" className="scroll-mt-24">
            <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-3">
              {bookingsWithDetails.length === 0 ? (
                <p className="text-sm text-muted-foreground">No upcoming trips yet.</p>
              ) : (
                bookingsWithDetails.map(({ id, date, status, experience }) => (
                  <div key={id} className="flex gap-3 rounded-lg border border-border/60 bg-card p-3 items-center">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded">
                      <Image src={experience.imageUrl} alt={experience.title} fill className="object-cover" sizes="56px" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold truncate">{experience.title}</h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {experience.location}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <CalendarDays className="h-3 w-3" />
                        {new Date(date).toLocaleDateString("en-US", { dateStyle: "medium" })}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                        status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </span>
                  </div>
                ))
              )}
            </div>
            <Link
              href="/experiences"
              className="mt-4 block text-center text-sm font-medium text-primary hover:underline"
            >
              Browse more experiences
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
