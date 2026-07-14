import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { MOCK_BOOKINGS, EXPERIENCES } from "@/lib/data";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function TravelerDashboard() {
  const bookingsWithDetails = MOCK_BOOKINGS.map((b) => ({
    ...b,
    experience: EXPERIENCES.find((e) => e.id === b.experienceId)!,
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-2">My Trips</h1>
        <p className="text-muted-foreground mb-10">Your upcoming and past Morocco adventures.</p>

        <div className="grid gap-4">
          {bookingsWithDetails.map(({ id, date, status, experience }) => (
            <div key={id} className="flex gap-4 rounded-2xl border border-border/60 bg-card p-4 items-center">
              <div className="relative h-20 w-28 shrink-0 rounded-xl overflow-hidden">
                <Image src={experience.imageUrl} alt={experience.title} fill className="object-cover" sizes="112px" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{experience.title}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {experience.location}
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {new Date(date).toLocaleDateString("en-US", { dateStyle: "long" })}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                  status === "confirmed"
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/experiences" className={buttonVariants({ variant: "default" })}>
            Browse more experiences
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
