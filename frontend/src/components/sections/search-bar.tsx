import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchBar() {
  return (
    <section className="bg-[var(--moola-purple)] px-6 py-4 md:px-20">
      <div className="mx-auto flex max-w-7xl items-center gap-2">
        <Input
          type="search"
          placeholder="Search over 250 gift card brands"
          className="h-12 flex-1 rounded-lg border-0 bg-white text-base placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-white/20"
        />
        <Button
          size="icon"
          className="size-12 rounded-lg bg-[var(--moola-purple-light)] hover:bg-[var(--moola-purple-light)]/90"
          aria-label="Search"
        >
          <Search className="size-5 text-white" />
        </Button>
      </div>
    </section>
  );
}
