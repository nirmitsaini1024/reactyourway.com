import * as React from "react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { Rocket, Wrench, Gauge, SearchCheck } from "lucide-react";

const itemsSample: BentoItem[] = [
  {
    title: "Launch Fast",
    meta: "Days, not months",
    description:
      "Get a high‑impact website shipped quickly using our proven Sitefy build process.",
    icon: <Rocket className="w-4 h-4 text-blue-500" />,
    status: "Priority",
    tags: ["MVP", "Go‑to‑Market", "Timeline"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Custom Builds",
    meta: "Next.js + shadcn/ui",
    description:
      "Tailored pages and components aligned to your brand, not cookie‑cutter templates.",
    icon: <Wrench className="w-4 h-4 text-emerald-500" />,
    status: "Bespoke",
    tags: ["Design", "Components"],
  },
  {
    title: "Performance First",
    meta: "Core Web Vitals",
    description:
      "Optimized images, caching, and clean code so your site feels instant everywhere.",
    icon: <Gauge className="w-4 h-4 text-purple-500" />,
    tags: ["Speed", "UX"],
    colSpan: 2,
  },
  {
    title: "SEO & Growth",
    meta: "Structured data",
    description:
      "On‑page SEO, metadata, and best practices to help you rank and convert.",
    icon: <SearchCheck className="w-4 h-4 text-sky-500" />,
    status: "Ready",
    tags: ["SEO", "Analytics"],
  },
];

function BentoGridDemo() {
  return <BentoGrid items={itemsSample} />;
}

export { BentoGridDemo };


