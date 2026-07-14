import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { EXPERIENCES, MOCK_BOOKINGS } from "@/lib/data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { Plus, Eye } from "lucide-react";
import Link from "next/link";

export default function MerchantDashboard() {
  const myListings = EXPERIENCES.slice(0, 3);
  const upcomingBookings = MOCK_BOOKINGS;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Curator Hub</h1>
            <p className="text-muted-foreground">Manage your experiences and bookings.</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Experience
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Active Listings", value: myListings.length },
            { label: "Upcoming Bookings", value: upcomingBookings.length },
            { label: "Total Earnings", value: "$1,840" },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-2xl border border-border/60 bg-card p-5 text-center">
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-4">Your Listings</h2>
        <div className="grid gap-4">
          {myListings.map((exp) => (
            <div key={exp.id} className="flex gap-4 rounded-2xl border border-border/60 bg-card p-4 items-center">
              <div className="relative h-16 w-24 shrink-0 rounded-xl overflow-hidden">
                <Image src={exp.imageUrl} alt={exp.title} fill className="object-cover" sizes="96px" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.location} · ${exp.price}/person</p>
              </div>
              <Link
                href={`/experiences/${exp.id}`}
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <Eye className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
