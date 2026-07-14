"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ForumPostCard from "@/components/shared/ForumPostCard";
import TagFilterBar from "@/components/shared/TagFilterBar";
import { Button } from "@/components/ui/button";
import { FORUM_POSTS, FORUM_TAGS, type ForumPost } from "@/lib/forum-data";
import { Send } from "lucide-react";

export default function CommunityPage() {
  const { user } = useUser();
  const [activeTag, setActiveTag] = useState("All");
  const [draft, setDraft] = useState("");
  const [posts, setPosts] = useState<ForumPost[]>(FORUM_POSTS);

  const filtered = useMemo(() => {
    if (activeTag === "All") return posts;
    return posts.filter((p) => p.tags.includes(activeTag));
  }, [posts, activeTag]);

  function handlePost() {
    if (!draft.trim()) return;
    const newPost: ForumPost = {
      id: `local-${Date.now()}`,
      author: {
        name: user?.fullName || "You",
        avatarUrl: user?.imageUrl || "https://i.pravatar.cc/100?img=1",
      },
      title: draft.trim().slice(0, 80),
      excerpt: draft.trim(),
      tags: [],
      createdAt: new Date().toISOString(),
      replyCount: 0,
      likeCount: 0,
    };
    setPosts((prev) => [newPost, ...prev]);
    setDraft("");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-muted/20 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-2">Community Forum</h1>
            <p className="text-muted-foreground">
              Tips, meetups, and stories from travelers and curators across Morocco.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 space-y-8">
          {/* Tag Filter Bar */}
          <TagFilterBar tags={FORUM_TAGS} active={activeTag} onChange={setActiveTag} />

          {/* Create Post Interaction Area */}
          <div className="rounded-lg border border-border/60 bg-card p-4">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Share a tip, ask a question, or plan a meetup..."
              rows={3}
              className="w-full resize-none rounded border border-input bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            />
            <div className="mt-3 flex justify-end">
              <Button size="sm" className="gap-2" onClick={handlePost} disabled={!draft.trim()}>
                <Send className="h-3.5 w-3.5" />
                Post
              </Button>
            </div>
          </div>

          {/* Forum Feed */}
          <motion.div
            key={activeTag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {filtered.length === 0 ? (
              <p className="py-12 text-center text-muted-foreground">No posts with this tag yet.</p>
            ) : (
              filtered.map((post) => <ForumPostCard key={post.id} post={post} />)
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
