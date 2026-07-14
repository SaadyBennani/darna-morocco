"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquare, ThumbsUp } from "lucide-react";
import type { ForumPost } from "@/lib/forum-data";

export default function ForumPostCard({ post }: { post: ForumPost }) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="rounded-lg border border-border/60 bg-card p-5"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
          <Image src={post.author.avatarUrl} alt={post.author.name} fill className="object-cover" sizes="36px" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">{post.author.name}</p>
          <p className="text-xs text-muted-foreground">
            {new Date(post.createdAt).toLocaleDateString("en-US", { dateStyle: "medium" })}
          </p>
        </div>
      </div>

      <h3 className="font-semibold mb-1.5 leading-snug">{post.title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <ThumbsUp className="h-3.5 w-3.5" />
            {post.likeCount}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="h-3.5 w-3.5" />
            {post.replyCount}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
