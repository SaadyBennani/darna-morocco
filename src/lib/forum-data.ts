export type ForumPost = {
  id: string;
  author: { name: string; avatarUrl: string };
  title: string;
  excerpt: string;
  tags: string[];
  createdAt: string;
  replyCount: number;
  likeCount: number;
};

export const FORUM_TAGS = ["Tips", "Housing", "Food", "Events", "Transport", "Curators"];

export const FORUM_POSTS: ForumPost[] = [
  {
    id: "f1",
    author: { name: "Yasmine El Fassi", avatarUrl: "https://i.pravatar.cc/100?img=32" },
    title: "Best neighborhoods in Marrakech for a first-time long stay?",
    excerpt:
      "Looking to spend six weeks in Marrakech this fall. Gueliz vs the Medina — which is easier for a remote worker who still wants to be close to the souks?",
    tags: ["Housing", "Tips"],
    createdAt: "2026-07-10",
    replyCount: 14,
    likeCount: 32,
  },
  {
    id: "f2",
    author: { name: "Karim Benjelloun", avatarUrl: "https://i.pravatar.cc/100?img=12" },
    title: "Grand taxi etiquette — what I wish I knew sooner",
    excerpt:
      "Shared taxis between cities are the cheapest way to travel but the unwritten rules confused me at first. Sharing a quick guide for newcomers.",
    tags: ["Transport", "Tips"],
    createdAt: "2026-07-08",
    replyCount: 9,
    likeCount: 21,
  },
  {
    id: "f3",
    author: { name: "Layla Amrani", avatarUrl: "https://i.pravatar.cc/100?img=45" },
    title: "Community iftar next week in Essaouira — everyone welcome",
    excerpt:
      "Hosting a rooftop gathering for travelers and locals staying near the medina. Bring a dish if you can, we'll cover the rest.",
    tags: ["Events", "Food"],
    createdAt: "2026-07-06",
    replyCount: 27,
    likeCount: 58,
  },
  {
    id: "f4",
    author: { name: "Omar Idrissi", avatarUrl: "https://i.pravatar.cc/100?img=18" },
    title: "How I found my Sahara camp curator (and what to ask before booking)",
    excerpt:
      "A few questions that separate the well-run desert camps from the ones cutting corners on water and guides.",
    tags: ["Curators", "Tips"],
    createdAt: "2026-07-03",
    replyCount: 11,
    likeCount: 40,
  },
  {
    id: "f5",
    author: { name: "Sofia Tazi", avatarUrl: "https://i.pravatar.cc/100?img=47" },
    title: "Where to find the best street food in Fes el-Bali",
    excerpt:
      "Three stalls near Bab Boujloud that locals actually eat at, plus one bakery that sells out of msemen by 10am.",
    tags: ["Food"],
    createdAt: "2026-06-29",
    replyCount: 16,
    likeCount: 44,
  },
  {
    id: "f6",
    author: { name: "Hicham Ouazzani", avatarUrl: "https://i.pravatar.cc/100?img=8" },
    title: "Renting a riad for a month — deposit norms and red flags",
    excerpt:
      "After getting burned once, here's what I now check before wiring any deposit for a longer riad stay.",
    tags: ["Housing"],
    createdAt: "2026-06-24",
    replyCount: 8,
    likeCount: 19,
  },
  {
    id: "f7",
    author: { name: "Nadia Chraibi", avatarUrl: "https://i.pravatar.cc/100?img=53" },
    title: "Atlas hiking meetup — looking for 3 more people this Saturday",
    excerpt:
      "Small group heading to Imlil for a day hike with a local guide. Splitting the guide fee, message me if interested.",
    tags: ["Events", "Transport"],
    createdAt: "2026-06-20",
    replyCount: 22,
    likeCount: 35,
  },
];
