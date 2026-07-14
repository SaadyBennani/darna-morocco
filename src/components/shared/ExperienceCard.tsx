"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Star } from "lucide-react";
import type { Experience } from "@/lib/data";

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
      {label}
    </span>
  );
}

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group rounded-2xl overflow-hidden border border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow"
    >
      <Link href={`/experiences/${experience.id}`}>
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute top-3 left-3">
            <CategoryBadge label={experience.category} />
          </div>
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-base leading-snug line-clamp-2">{experience.title}</h3>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{experience.location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {experience.durationHours}h
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {experience.rating} ({experience.reviewCount})
            </span>
          </div>
          <div className="pt-1 flex items-center justify-between">
            <p className="font-bold text-lg">${experience.price}</p>
            <p className="text-xs text-muted-foreground">per person</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
