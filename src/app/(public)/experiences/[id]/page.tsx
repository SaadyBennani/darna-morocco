import { notFound } from "next/navigation";
import Image from "next/image";
import { MapPin, Clock, Star, Users } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import BookingWidget from "@/components/shared/BookingWidget";
import { EXPERIENCES } from "@/lib/data";

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const experience = EXPERIENCES.find((e) => e.id === id);
  if (!experience) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero image */}
        <div className="relative h-[50vh] w-full">
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-3">
                  {experience.category}
                </span>
                <h1 className="text-4xl font-bold tracking-tight mb-3">{experience.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {experience.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {experience.durationHours} hours
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    {experience.rating} ({experience.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="prose prose-neutral max-w-none">
                <h2 className="text-xl font-semibold mb-3">About this experience</h2>
                <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
              </div>

              <div className="border border-border/60 rounded-2xl p-6 space-y-4">
                <h2 className="text-xl font-semibold">What&apos;s included</h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">✓ Expert local guide</li>
                  <li className="flex items-center gap-2">✓ All equipment provided</li>
                  <li className="flex items-center gap-2">✓ Traditional refreshments</li>
                  <li className="flex items-center gap-2">✓ Free cancellation up to 48h before</li>
                </ul>
              </div>

              <div className="border border-border/60 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <Users className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Local Curator</p>
                    <p className="text-sm text-muted-foreground">Verified host · Responds within 1 hour</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your curator is a passionate local expert with deep knowledge of Morocco&apos;s culture,
                  history, and hidden gems. They speak English, French, and Arabic.
                </p>
              </div>
            </div>

            {/* Sticky booking widget */}
            <div className="mt-8 lg:mt-0">
              <div className="sticky top-24">
                <BookingWidget experience={experience} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
