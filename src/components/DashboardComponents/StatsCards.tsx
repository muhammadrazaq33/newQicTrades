"use client";

import type React from "react";
import {
  TrendingUp,
  CheckCheck,
  Megaphone,
  DollarSign,
  Shield,
  type LucideIcon,
} from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
  sub: string | React.ReactNode;
};

function GradientBadge({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="
        relative sm:h-12 h-8 sm:w-12 w-8 shrink-0 overflow-hidden rounded-full
        shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]
        bg-[radial-gradient(circle_at_30%_25%,#D7E2F2_0%,#AFC2DA_35%,#8EA8C9_60%,#6F87AD_80%,#5D79A3_100%)]
      "
    >
      {/* highlight sheen */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,0.85),rgba(255,255,255,0)_45%)]" />
      {/* subtle top light */}
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.35),rgba(255,255,255,0))]" />
      <div className="relative z-[1] flex h-full w-full items-center justify-center text-white">
        {children}
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, value, label, sub }: Stat) {
  return (
    <div
      className=" mb-0
        bg-white rounded-2xl ring-1 ring-black/5
        shadow-[0_8px_24px_rgba(0,0,0,0.06)]
        p-4 md:p-6
        flex items-center gap-4
      "
    >
      <GradientBadge>
        <Icon className="sm:h-5 h-4 sm:w-5 w-4" strokeWidth={2.25} />
      </GradientBadge>

      <div className="flex-1">
        {/* Main metric number */}
        <div className="sm:text-[22px] text-[18px] leading-tight font-semibold text-[#1E293B] tracking-tight">
          {value}
        </div>
        {/* Title/label */}
        <div className="mt-1 sm:text-[15px] text-[12px] sm:leading-6 leading-4 text-[#6B7280]">
          {label}
        </div>
        {/* Secondary line */}
        <div className=" mt-1 sm:text-[13px] text-[11px] leading-5 text-[#9CA3AF]">
          {sub}
        </div>
      </div>
    </div>
  );
}

export default function StatsCards() {
  const stats: Stat[] = [
    {
      icon: TrendingUp,
      value: "254",
      label: "Total Trades",
      sub: "+12 this week",
    },
    {
      icon: CheckCheck,
      value: "238",
      label: "Completed Trades",
      sub: "94% success rate",
    },
    {
      icon: Megaphone,
      value: "8",
      label: "Active Offers",
      sub: "2 currently reselling",
    },
    {
      icon: DollarSign,
      value: "$4,320.50",
      label: "Total Profit",
      sub: (
        <>
          {"+3.4% vs last "}
          <span className="block">month</span>
        </>
      ),
    },
    {
      icon: Shield,
      value: "$1,250",
      label: "Escrow Balance",
      sub: "Held in active trades",
    },
  ];

  return (
    <section className="sm:mb-0 mb-10">
      <div className="">
        <div
          className="
            grid grid-cols-2 lg:gap-6 md:gap-5 gap-4
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
