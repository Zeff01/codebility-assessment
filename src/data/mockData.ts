import type { InfrastructureFeature } from "../types";
import { BarChart3, Mic, QrCode, Store, Target, Users } from "lucide-react";

export const INFRASTRUCTURE_FEATURES: InfrastructureFeature[] = [
  {
    id: "pay-per-redemption",
    title: "Pay-per-redemption",
    description:
      "No clicks, no impressions, no fluff. You pay platform fees only when a card is actually spent in-store.",
    icon: Target,
    badge: "Zero Risk",
  },
  {
    id: "trackable-everywhere",
    title: "Trackable everywhere",
    description:
      "QR-coded accross A-frames, takeout boxes, social, programmatic - one source of truth, one dashboard.",
    icon: QrCode,
    badge: "Omnichannel",
  },
  {
    id: "closed-loop-attribution",
    title: "Closed-loop attribution",
    description:
      "POS-integrated tracking from impression to bill total. See average ticket, repeat rate, true incremental lift.",
    icon: BarChart3,
    badge: "POS Synced",
  },
  {
    id: "multi-unit-ready",
    title: "Multi-unit ready",
    description:
      "Roll out one campaign across 5 or 500 locations. Per-store performance, brand-level rollups.",
    icon: Store,
    badge: "Enterprise",
  },
  {
    id: "remarketing-built-in",
    title: "Re-marketing built in",
    description:
      "Every claim ties a customer to their in-store spend. Build a database of proven high-spenders you can SMS-retarget when traffic dips.",
    icon: Users,
    badge: "First-Party Data",
  },
  {
    id: "creator-attribution",
    title: "Creator attribution",
    description:
      "See which influencers actuall drove paying customers - not just likes. Stop paying creators who cant move bills.",
    icon: Mic,
    badge: "ROI Verified",
  },
];
