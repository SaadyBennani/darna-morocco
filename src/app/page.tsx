"use client";
import { motion } from "framer-motion";
import { Search, ArrowRight, Users, Map, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ExperienceCard from "@/components/shared/ExperienceCard";
import { EXPERIENCES } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white"
        >
          <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-300">
            Morocco, Unlocked
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
          >
            Discover Authentic
            <br />
            <span className="text-amber-300">Morocco</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mb-10 max-w-xl mx-auto text-lg text-white/80">
            Hand-curated experiences with local experts. From Sahara glamping to Fes medina tours — find your story.
          </motion.p>
          <motion.div variants={fadeUp} className="flex max-w-lg mx-auto gap-2">
            <Input
              placeholder="Search experiences, cities..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 rounded-xl bg-white/10 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm focus:bg-white/20 flex-1"
            />
            <Link
              href={`/experiences${query ? `?q=${encodeURIComponent(query)}` : ""}`}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 px-6 rounded-xl shrink-0 gap-2"
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

      {/* Stats */}
      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-10 grid grid-cols-3 gap-6 text-center">
          {[
            { icon: Map, label: "Experiences", value: "500+" },
            { icon: Users, label: "Local Curators", value: "50+" },
            { icon: Star, label: "Happy Travelers", value: "12,000+" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label}>
              <Icon className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 scroll-mt-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 items-center lg:grid-cols-2"
        >
          <motion.div variants={fadeUp} className="relative aspect-4/3 overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80"
              alt="A narrow alley in a Moroccan medina"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>
          <div>
            <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              Our Story
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold tracking-tight sm:text-4xl mb-5">
              About Darna
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">Darna</span>{" "}
              means &ldquo;our home&rdquo; in Moroccan Arabic. We started it to connect independent
              travelers with the people who know Morocco best — local guides, artisans, and hosts
              running small, authentic experiences you won&apos;t find in a typical tour package.
            </motion.p>
            <motion.p variants={fadeUp} className="text-muted-foreground">
              Every experience on Darna is vetted and hosted by a local curator, not a corporate operator.
              Book with confidence, travel with intention.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Featured Experiences */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Handpicked for You</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Experiences</h2>
          </div>
          <Link
            href="/experiences"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden sm:flex gap-1"
            )}
          >
            View all <ArrowRight className="h-4 w-4" />
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
          <Link
            href="/experiences"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            View all experiences
          </Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="curators" className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 scroll-mt-16">
        <div className="rounded-3xl bg-primary p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-3">Are you a local expert?</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Share your Morocco with the world. List your experiences and connect with travelers who want authentic stories.
          </p>
          <Link
            href="/sign-up?role=merchant"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "rounded-xl")}
          >
            Become a Curator
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
