"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Download } from "lucide-react";
import { useMemo, useState } from "react";

type Point = { label: string; value: number };

const weekly: Point[] = [
  { label: "Week 1", value: 170 },
  { label: "Week 2", value: 320 },
  { label: "Week 3", value: 160 },
  { label: "Week 4", value: 130 },
];

const monthly: Point[] = [
  { label: "Jun", value: 580 },
  { label: "Jul", value: 720 },
  { label: "Aug", value: 640 },
  { label: "Sep", value: 834 },
];

const allTime: Point[] = [
  { label: "2022", value: 2100 },
  { label: "2023", value: 3450 },
  { label: "2024", value: 4200 },
  { label: "2025", value: 5130 },
];

const tabs: Array<"Weekly" | "Monthly" | "All Time"> = [
  "Weekly",
  "Monthly",
  "All Time",
];

export default function EarningsChart() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Weekly");

  const data = useMemo(() => {
    if (tab === "Monthly") return monthly;
    if (tab === "All Time") return allTime;
    return weekly;
  }, [tab]);

  return (
    <Card className="rounded-2xl border-0 bg-white shadow-sm sm:py-0 py-2">
      <div className="p-4 sm:p-6">
        <div className="mb-4 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="mt-4 text-center font-medium sm:text-[18px] text-sm text-[#000000] capitalize">
          Your total affiliate earnings this month:
          <span className="ml-1 font-semibold text-[#2F7AF8]">
            ${(834.5).toFixed(2)}
          </span>
        </p>

          {/* Segmented control */}
          <div className="flex items-center gap-1 rounded-[10px] bg-[#F3F4F6] py-2 px-3">
            {tabs.map((t) => {
              const active = t === tab;
              return (
                <Button
                  key={t}
                  onClick={() => setTab(t)}
                  variant="outline"
                  className={[
                    "h-9 rounded-[10px] sm:text-[15px] text-[13px] border-none",
                    active
                      ? " bg-[#FFFFFF] text-[#1E4D8B]"
                      : " text-[#4B5563] hover:bg-[#f7f9fc]",
                  ].join(" ")}
                >
                  {t}
                </Button>
              );
            })}
            <Button
              variant="ghost"
              className="ml-1 h-9 rounded-xl text-[#6B7280] hover:bg-[#f5f7fb]"
              aria-label="Download"
            >
              <Download className="sm:h-6 h-4 sm:w-6 w-4" strokeWidth={3} />
            </Button>
          </div>
        </div>

        <ChartContainer
          className="!aspect-auto h-[320px] w-full"
          config={{
            value: { label: "Earnings", color: "#2F7AF8" },
          }}
        >
          <BarChart data={data} barSize={38} margin={{ left: 10, right: 10 }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(30, 77, 139, 0.8)" />
                <stop offset="100%" stopColor="rgba(0, 174, 239, 0.6)" />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} stroke="#edf1f7" />
            <XAxis
              dataKey="label"
              tick={{ fill: "#9aa3b2", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#9aa3b2", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="bg-white text-[#0b1020] border border-[#e6ebf3]"
                  formatter={(v) => (
                    <span className="font-mono tabular-nums">
                      ${Number(v).toFixed(2)}
                    </span>
                  )}
                  nameKey="value"
                />
              }
            />

            <Bar
              dataKey="value"
              fill="url(#barGradient)"
              radius={[8, 8, 0, 0]}
              activeBar={false}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </Card>
  );
}
