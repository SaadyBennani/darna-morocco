"use client";
import { useState, useMemo, Suspense } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ExperienceCard from "@/components/shared/ExperienceCard";
import ExperienceFilters, {
  DEFAULT_FILTERS,
  type ExperienceFilterState,
} from "@/components/shared/ExperienceFilters";
import { EXPERIENCES, CATEGORIES } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { useSearchParams } from "next/navigation";

function ExploreContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filters, setFilters] = useState<ExperienceFilterState>(DEFAULT_FILTERS);

  const filtered = useMemo(() => {
    return EXPERIENCES.filter((exp) => {
      const matchesCategory = activeCategory === "All" || exp.category === activeCategory;
      const matchesQuery =
        !query ||
        exp.title.toLowerCase().includes(query.toLowerCase()) ||
        exp.location.toLowerCase().includes(query.toLowerCase());
      const matchesPrice = exp.price <= filters.maxPrice;
      const matchesPropertyType =
        filters.propertyTypes.length === 0 || filters.propertyTypes.includes(exp.propertyType);
      const matchesBedrooms = exp.bedrooms >= filters.minBedrooms;
      return matchesCategory && matchesQuery && matchesPrice && matchesPropertyType && matchesBedrooms;
    });
  }, [query, activeCategory, filters]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="border-b border-border/60 bg-muted/20 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-2">Explore Morocco</h1>
            <p className="text-muted-foreground mb-6">
              {EXPERIENCES.length} experiences across Morocco
            </p>
            <div className="flex gap-3 max-w-lg">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or location..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-9 h-11 rounded-xl"
                />
              </div>
              <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl shrink-0">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Category filters */}
        <section className="border-b border-border/60 sticky top-16 z-40 bg-background/95 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex gap-2 py-3 overflow-x-auto scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row">
            {/* Sidebar Filters */}
            <ExperienceFilters filters={filters} onChange={setFilters} />

            {/* Grid */}
            <div className="flex-1">
              {filtered.length === 0 ? (
                <div className="text-center py-24">
                  <p className="text-muted-foreground text-lg">No experiences found.</p>
                  <button
                    onClick={() => { setQuery(""); setActiveCategory("All"); setFilters(DEFAULT_FILTERS); }}
                    className="mt-4 text-sm text-primary underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <motion.div
                  key={`${query}-${activeCategory}-${filters.maxPrice}-${filters.propertyTypes.join(",")}-${filters.minBedrooms}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
                >
                  {filtered.map((exp) => (
                    <ExperienceCard key={exp.id} experience={exp} />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense>
      <ExploreContent />
    </Suspense>
  );
}
