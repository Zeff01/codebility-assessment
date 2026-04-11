import SectionHeading from "@/components/landing/SectionHeading";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Send, Users } from "lucide-react";

const steps = [
  {
    id: "send",
    title: "Send instantly.",
    description:
      "Choose a brand, add a message, and send it via email or text in seconds. Perfection delivered at light speed.",
    cta: "Get Started",
    tint: "bg-fuchsia-100 text-fuchsia-600",
    ctaColor: "text-fuchsia-600",
    image: "/images/hand-holding-phone.png",
    imageAlt: "3D hand holding a smartphone",
    icon: <Send aria-hidden="true" className="size-8" strokeWidth={1.8} />,
    imageClass:
      "object-contain p-2 transition-transform duration-700 group-hover:scale-105",
  },
  {
    // Invite & Earn card
    id: "earn",
    title: "Invite & Earn.",
    description:
      "Spread the joy of gifting with friends and earn rewards for every referral. A premium circle for premium givers.",
    cta: "Refer a Friend",
    tint: "bg-fuchsia-100 text-fuchsia-600",
    ctaColor: "text-fuchsia-600",
    image: "/images/thumbs-up.jpg",
    imageAlt: "Happy person giving a thumbs up",
    icon: <Users aria-hidden="true" className="size-8" strokeWidth={1.8} />,
    imageClass:
      "object-cover transition-transform duration-700 group-hover:scale-105",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-slate-100/90 py-[clamp(3.5rem,8vw,6.8rem)]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title="Experience the Moola difference."
            description="Simple for you, magical for them. Our streamlined platform handles the complexity so you can focus on the sentiment."
          />

          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              className="inline-flex size-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition-colors hover:text-fuchsia-600"
              aria-label="Previous"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-5"
                strokeWidth={1.8}
              />
            </button>
            <button
              type="button"
              className="inline-flex size-12 items-center justify-center rounded-full bg-fuchsia-600 text-white shadow-lg transition-colors hover:bg-fuchsia-500"
              aria-label="Next"
            >
              <ArrowRight
                aria-hidden="true"
                className="size-5"
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.id}
              className="group overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_24px_48px_rgba(15,23,42,0.05)] transition-all duration-500 hover:shadow-[0_30px_70px_rgba(15,23,42,0.1)] sm:p-8 md:p-10"
            >
              <div className="flex min-h-[320px] flex-col">
                <div
                  className={`mb-8 inline-flex size-16 items-center justify-center rounded-2xl ${step.tint}`}
                >
                  {step.icon}
                </div>

                <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-slate-600">
                  {step.description}
                </p>

                <a
                  href="#"
                  className={`mt-auto inline-flex items-center gap-2 text-sm font-bold ${step.ctaColor}`}
                >
                  {step.cta}
                  <ArrowRight
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={1.8}
                  />
                </a>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-3">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 42vw, 90vw"
                      className={step.imageClass}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
