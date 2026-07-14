"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex max-w-md mx-auto items-center justify-center gap-2 text-white">
        <CheckCircle2 className="h-5 w-5" />
        <span>You&apos;re on the list — welcome home.</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setSubmitted(true);
      }}
      className="flex max-w-md mx-auto gap-2"
    >
      <Input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 rounded bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:bg-white/20"
      />
      <Button type="submit" size="lg" className="h-12 shrink-0 rounded bg-secondary text-secondary-foreground hover:bg-secondary/90">
        Subscribe
      </Button>
    </form>
  );
}
