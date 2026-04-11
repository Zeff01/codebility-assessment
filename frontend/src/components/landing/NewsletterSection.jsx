import SectionHeading from "@/components/landing/SectionHeading";

export default function NewsletterSection() {
  return (
    <section className="py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-2 lg:px-12  ">
        <div className="relative overflow-hidden rounded-[2rem] bg-fuchsia-600 p-6 text-white shadow-[0_24px_54px_rgba(99,102,241,0.35)] sm:p-8 lg:p-14">
          <div className="absolute right-[-140px] top-[-120px] h-[300px] w-[300px] rounded-full bg-white/15 blur-2xl" />
          <div className="absolute bottom-[-120px] left-[-80px] h-[260px] w-[260px] rounded-full bg-fuchsia-300/25 blur-2xl" />

          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-10">
            <div className="max-w-2xl">
              <SectionHeading
                title="Join the elite editorial fintech circle."
                description="Get curated gift guides and exclusive early access to new brand partnerships every week."
                variant="light"
              />
            </div>

            <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full rounded-xl border border-white/30 bg-white/10 px-4 text-sm font-medium text-white placeholder:text-white/70 outline-none ring-0 transition focus:border-white/60 focus:bg-white/20"
                aria-label="Email"
              />
              <button
                type="button"
                className="h-12 w-full whitespace-nowrap rounded-xl bg-white px-6 text-sm font-bold text-fuchsia-600 transition hover:bg-fuchsia-50 sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
