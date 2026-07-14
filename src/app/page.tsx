"use client";
import { motion } from "framer-motion";
import { Search, Compass, ShieldCheck, Users, Headset } from "lucide-react";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ExperienceCard from "@/components/shared/ExperienceCard";
import ZellijDivider from "@/components/shared/ZellijDivider";
import NewsCard from "@/components/shared/NewsCard";
import NewsletterForm from "@/components/shared/NewsletterForm";
import { EXPERIENCES, NEWS } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const SERVICES = [
  {
    icon: Compass,
    title: "Curated Discovery",
    description: "Every experience is hand-vetted by our team before it reaches you.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Booking",
    description: "Secure payments and verified curators, so you can book with confidence.",
  },
  {
    icon: Users,
    title: "Local Community",
    description: "Connect with hosts and fellow travelers through the Darna forum.",
  },
  {
    icon: Headset,
    title: "List Your Property",
    description: "Share your riad, camp, or tour with travelers around the world.",
    href: "/sign-up?role=merchant",
  },
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const featured = EXPERIENCES.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-background" />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white"
        >
          <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary-foreground/90">
            Morocco, Unlocked
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            Find Your Sanctuary in
            <br />
            Modern Morocco
          </motion.h1>
          <motion.p variants={fadeUp} className="mb-10 max-w-xl mx-auto text-lg text-white/80">
            Hand-curated experiences and properties from local experts — from Sahara glamping to Fes medina riads.
          </motion.p>
          <motion.div variants={fadeUp} className="flex max-w-lg mx-auto gap-2">
            <Input
              placeholder="Search experiences, cities..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 rounded bg-white/10 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm focus:bg-white/20 flex-1"
            />
            <Link
              href={`/experiences${query ? `?q=${encodeURIComponent(query)}` : ""}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 px-6 rounded shrink-0 gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
              )}
            >
              <Search className="h-4 w-4" />
              Search
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6 flex justify-center gap-6 text-sm text-white/60">
            <span>🏜️ Sahara</span>
            <span>🕌 Marrakech</span>
            <span>🏔️ Atlas</span>
            <span>🌊 Essaouira</span>
          </motion.div>
        </motion.div>
      </section>

      <ZellijDivider />

      {/* Featured Communities */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">Handpicked for You</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Communities</h2>
          </div>
          <Link
            href="/experiences"
            className={cn(buttonVariants({ variant: "ghost" }), "hidden sm:flex")}
          >
            View all
          </Link>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((exp) => (
            <motion.div key={exp.id} variants={fadeUp}>
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10 text-center sm:hidden">
          <Link href="/experiences" className={cn(buttonVariants({ variant: "outline" }))}>
            View all experiences
          </Link>
        </div>
      </section>

      {/* Our Services */}
      <section id="curators" className="border-y border-border/60 bg-muted/30 py-20 scroll-mt-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">Why Darna</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {SERVICES.map(({ icon: Icon, title, description, href }) => {
              const content = (
                <>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </>
              );
              return (
                <motion.div key={title} variants={fadeUp}>
                  {href ? (
                    <Link href={href} className="block rounded-lg p-4 -m-4 transition-colors hover:bg-background/60">
                      {content}
                    </Link>
                  ) : (
                    <div>{content}</div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Latest News */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">Stay Informed</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest News</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-primary p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Join the Darna Community</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Get new experiences, property listings, and community stories delivered to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
