import Image from "next/image";
import type { NewsItem } from "@/lib/data";

export default function NewsCard({ news }: { news: NewsItem }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border/60 bg-card">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={news.imageUrl}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
          {new Date(news.date).toLocaleDateString("en-US", { dateStyle: "long" })}
        </p>
        <h3 className="font-semibold leading-snug line-clamp-2">{news.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">{news.excerpt}</p>
      </div>
    </article>
  );
}
