"use client";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { CalendarDays, Users } from "lucide-react";
import type { Experience } from "@/lib/data";
import { motion } from "framer-motion";

export default function BookingWidget({ experience }: { experience: Experience }) {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState(1);
  const [booked, setBooked] = useState(false);

  const total = experience.price * guests;

  function handleBook() {
    if (!date) return;
    setBooked(true);
  }

  if (booked) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-border/60 bg-card p-6 text-center shadow-sm"
      >
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="font-bold text-lg mb-2">Booking Requested!</h3>
        <p className="text-muted-foreground text-sm mb-4">
          Your curator will confirm within 24 hours.
        </p>
        <p className="font-semibold text-primary">
          {date?.toLocaleDateString("en-US", { dateStyle: "long" })}
        </p>
        <Button variant="outline" className="mt-4 w-full rounded-xl" onClick={() => setBooked(false)}>
          Change date
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm space-y-5">
      <div className="flex items-baseline justify-between">
        <p className="text-2xl font-bold">${experience.price}</p>
        <p className="text-sm text-muted-foreground">per person</p>
      </div>

      <div>
        <p className="text-sm font-medium mb-2 flex items-center gap-1.5">
          <CalendarDays className="h-4 w-4 text-primary" />
          Select a date
        </p>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={{ before: new Date() }}
          className="rounded-xl border border-border/60 p-3 w-full"
        />
      </div>

      <div>
        <p className="text-sm font-medium mb-2 flex items-center gap-1.5">
          <Users className="h-4 w-4 text-primary" />
          Guests
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setGuests(Math.max(1, guests - 1))}
            className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors font-bold"
          >
            −
          </button>
          <span className="w-8 text-center font-semibold">{guests}</span>
          <button
            onClick={() => setGuests(Math.min(12, guests + 1))}
            className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors font-bold"
          >
            +
          </button>
        </div>
      </div>

      {date && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-border/60 pt-4 space-y-1.5"
        >
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">${experience.price} × {guests} guest{guests > 1 ? "s" : ""}</span>
            <span>${total}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </motion.div>
      )}

      <Button
        className="w-full rounded-xl h-11"
        disabled={!date}
        onClick={handleBook}
      >
        {date ? "Request to Book" : "Select a date"}
      </Button>

      <p className="text-xs text-center text-muted-foreground">Free cancellation up to 48 hours before</p>
    </div>
  );
}
