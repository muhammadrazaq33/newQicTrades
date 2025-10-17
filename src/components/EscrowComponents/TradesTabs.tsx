"use client";

import { useMemo, useState } from "react";
import {
  ongoingTrades,
  completedTrades,
  disputedTrades,
  type Trade,
  type TabKey,
} from "@/data/TradesTableData";
// import { ModeratorReview } from "./moderator-review";
import { TradesTable } from "./TradesTable";

type TabDef = { key: TabKey; label: string };

const TABS: TabDef[] = [
  { key: "ongoing", label: "Ongoing Trades" },
  { key: "completed", label: "Completed Trades" },
  { key: "disputed", label: "Disputed Trades" },
];

export default function TradesTabs() {
  const [active, setActive] = useState<TabKey>("ongoing");

  const data = useMemo<Trade[]>(() => {
    if (active === "ongoing") return ongoingTrades;
    if (active === "completed") return completedTrades;
    return disputedTrades;
  }, [active]);

  return (
    <section className="w-full mt-20">
      <div className=" border-b-[2px] border-slate-200">
        <nav
          className="-mb-px flex gap-6"
          role="tablist"
          aria-label="Trades tabs"
        >
          {TABS.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                role="tab"
                aria-selected={isActive}
                className={[
                  "relative pb-3 font-medium text-[12px] md:text-base",
                  isActive
                    ? "text-[#0A2463]"
                    : "text-[#64748B] hover:text-slate-700",
                ].join(" ")}
              >
                {t.label}
                <span
                  className={[
                    "absolute inset-x-0 -bottom-[1px] h-[2px] rounded-full transition-colors",
                    isActive ? "bg-[#0A2463]" : "bg-transparent",
                  ].join(" ")}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </nav>
      </div>

      <div className="pt-5 pb-10">
        <TradesTable trades={data} tab={active} />
        {/* {active === "disputed" ? <ModeratorReview /> : null} */}
      </div>
    </section>
  );
}
