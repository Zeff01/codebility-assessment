import Link from "next/link";

export const Hero = () => (
  <section className="relative overflow-hidden py-24 md:py-16 bg-background">
    {/* Background Decorative Element (Senior UI Touch) */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full" />
    </div>

    <div className="max-w-5xl mx-auto px-6 text-center">
      {/* Badge / Top Label */}
      <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 rounded-full">
        2026 Developer Edition
      </span>

      {/* Heading: High Contrast and Bold */}
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-foreground leading-[0.9] mb-8">
        Decoding the <br />
        <span className="text-primary">Future of Tech.</span>
      </h1>

      {/* Subheading: Balanced and Readable */}
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/50 leading-relaxed mb-12">
        A deep dive into Full Stack development, hardware security, and the
        modular systems powering the next generation of the web.
      </p>

      {/* Call to Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="#articles"
          className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-black uppercase tracking-widest text-xs rounded-full hover:opacity-90 transition-all shadow-xl shadow-primary/20"
        >
          Start Reading
        </Link>
        <Link
          href="https://github.com/wendev27"
          target="_blank"
          className="w-full sm:w-auto px-8 py-4 bg-foreground/5 border border-foreground/10 text-foreground font-black uppercase tracking-widest text-xs rounded-full hover:bg-foreground/10 transition-all"
        >
          View Projects
        </Link>
      </div>
    </div>
  </section>
);
