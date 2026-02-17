import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
}

export const BlogCard = ({
  id,
  title,
  category,
  excerpt,
  date,
}: BlogCardProps) => (
  // Changed: bg-surface -> bg-foreground/5 for a darker card background
  // Changed: hover:shadow-xl -> hover:shadow-2xl for a more dramatic lift
  // Added: hover:bg-foreground/10 for a subtle interaction change
  <article className="group bg-foreground/5 rounded-2xl border border-foreground/10 overflow-hidden hover:shadow-2xl hover:border-primary/30 hover:bg-foreground/10 transition-all duration-300 flex flex-col">
    <div className="p-6 flex-grow">
      <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
        {category}
      </span>
      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h2>
      <p className="text-foreground/70 text-sm line-clamp-3 mb-4">{excerpt}</p>
    </div>
    <div className="p-6 pt-0 mt-auto border-t border-foreground/10 flex items-center justify-between">
      <time className="text-xs text-foreground/50">{date}</time>
      <Link
        href={`/posts/${id}`}
        className="text-sm font-bold text-secondary hover:underline flex items-center gap-1"
      >
        Read More <span>→</span>
      </Link>
    </div>
  </article>
);
