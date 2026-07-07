import Image from "next/image";

const stayTypes = [
  {
    tag: "TREEHOUSE",
    title: "Elevated among the canopy",
    description:
      "Wake up level with the treetops. Floor-to-ceiling views, a private deck, and nothing between you and the forest but glass.",
    image: "/stay1.png",
  },
  {
    tag: "CABIN",
    title: "Cozy, private, by the water",
    description:
      "A wood-fired hearth, a private dock, and a lake that stays quiet till sunrise. Built for slowing down.",
    image: "/stay2.png",
  },
  {
    tag: "SUITE",
    title: "Spacious, ground-level, garden view",
    description:
      "Room to spread out — a soaking tub, a private garden entrance, and views that change with the season.",
    image: "/stay3.png",
  },
];

export default function OurStays() {
  return (
    <section id="stays" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-xl md:mb-12">
          <div className="mb-3 font-mono text-[12px] uppercase tracking-[0.08em] text-ink-soft">
            Handpicked, not algorithmic
          </div>
          <h2 className="mb-3 font-display text-[1.7rem] font-semibold leading-[1.15] tracking-[-0.01em] md:text-[2.4rem]">
            Three ways to{" "}
            <span className="italic text-ember">slow down.</span>
          </h2>
          <p className="text-[15.5px] leading-relaxed text-ink-soft md:text-[16px]">
            Every stay at Serene Valley is built around the land it sits
            on — pick the setting that matches how you want to disconnect.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {stayTypes.map((stay) => (
            <div
              key={stay.tag}
              className="border border-line bg-surface"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line">
                <Image
                  src={stay.image}
                  alt={stay.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.05em] text-ember">
                  {stay.tag}
                </div>
                <h3 className="mb-2 font-display text-[16px] font-semibold">
                  {stay.title}
                </h3>
                <p className="text-[13.8px] leading-relaxed text-ink-soft">
                  {stay.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}