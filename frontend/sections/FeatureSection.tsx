import { Dot } from 'lucide-react'
import React, { ReactNode } from 'react'
import { CreditCard, QrCode, BarChart3, Store, Users, Megaphone } from "lucide-react";

type Features = {
  icon?: ReactNode,
  title: string,
  description: string
}

function FeatureSection() {

  const features: Features[] = [
    {
      icon: <CreditCard className="text-primary" size={20} />,
      title: "Pay-per-redemption",
      description:
        "No clicks, no impressions, no fluff. You pay platform fees only when a card is actually spent in-store.",
    },
    {
      icon: <QrCode className="text-primary" size={20} />,
      title: "Trackable everywhere",
      description:
        "QR-coded across A-frames, takeout boxes, social, programmatic — one source of truth, one dashboard.",
    },
    {
      icon: <BarChart3 className="text-primary" size={20} />,
      title: "Closed-loop attribution",
      description:
        "POS-integrated tracking from impression to bill total. See average ticket, repeat rate, true incremental lift.",
    },
    {
      icon: <Store className="text-primary" size={20} />,
      title: "Multi-unit ready",
      description:
        "Roll out one campaign across 5 or 500 locations. Per-store performance, brand-level rollups.",
    },
    {
      icon: <Users className="text-primary" size={20} />,
      title: "Re-marketing built in",
      description:
        "Every claim ties a customer to in-store spend. Build a database of high-value customers for SMS retargeting.",
    },
    {
      icon: <Megaphone className="text-primary" size={20} />,
      title: "Creator attribution",
      description:
        "See which influencers actually drove paying customers — not just likes.",
    },
  ];

  return (
    <section id='features' className='py-[60px]'>
      <div className='mx-auto max-w-7xl px-8'>
        {/* Title and Subtitle */}
        <div className='mb-16 max-w-[760px]'>
          <p className='inline-flex text-primary uppercase font-mono'>
            <Dot/>
            Built for Chain Operations
          </p>
          <h2 className="my-4 text-5xl font-semibold">
            Marketing infrastructure,
            <span className="block">
              not a marketing campaign
            </span>
          </h2>
        </div>

        {/* Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-bg border border-white/15 rounded-[22px] overflow-hidden">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-[40px] border border-white/10 bg-bg transition-colors hover:bg-white/5"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-[10px] bg-primary/15">
                {feature.icon}
              </div>

              <h4 className="mb-2.5 text-lg font-semibold tracking-[-0.015em] text-white">
                {feature.title}
              </h4>

              <p className="text-sm leading-[1.55] text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeatureSection