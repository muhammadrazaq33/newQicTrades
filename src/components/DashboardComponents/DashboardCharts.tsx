"use client";

import type React from "react";

// Requirements matched: lucide-react icons, exact-like layout, spacing, colors, tooltips, dots, area, titles.

import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Area,
  AreaChart,
  type DotProps,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChartIcon, TrendingUp } from "lucide-react";

type MonthPoint = { month: string; value: number };
type ProfitPoint = { month: string; pct: number };

const volumeData: MonthPoint[] = [
  { month: "Jan", value: 3800 },
  { month: "Feb", value: 5000 },
  { month: "Mar", value: 2300 },
  { month: "Apr", value: 1800 },
  { month: "May", value: 2600 },
  { month: "Jun", value: 3000 },
  { month: "Jul", value: 4200 },
  { month: "Aug", value: 5000 }, // vertical ref line position + active dot example
  { month: "Sep", value: 6200 },
  { month: "Oct", value: 7000 },
  { month: "Nov", value: 8200 },
  { month: "Dec", value: 10000 },
];

const profitData: ProfitPoint[] = [
  { month: "Jan", pct: 2.5 },
  { month: "Feb", pct: 1.2 },
  { month: "Mar", pct: -1.5 }, // negative red dot
  { month: "Apr", pct: -1.8 }, // negative red dot
  { month: "May", pct: 2.4 },
  { month: "Jun", pct: 2.8 }, // vertical ref line position + tooltip example
  { month: "Jul", pct: 4.0 },
  { month: "Aug", pct: 4.2 },
  { month: "Sep", pct: 3.8 },
  { month: "Oct", pct: 2.6 },
  { month: "Nov", pct: 3.4 },
  { month: "Dec", pct: 4.8 },
];

// Utility formatters
const fmtCurrency = (v: number) =>
  `$${v.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

const fmtPercent = (v: number) =>
  `${v.toLocaleString(undefined, { maximumFractionDigits: 1 })}%`;

// Inline Tailwind palette tuned to match the design
const COLORS = {
  cardBg: "bg-white",
  cardBorder: "border-gray-200",
  cardShadow:
    "shadow-[0_1px_1px_rgba(0,0,0,0.03),0_1px_0_rgba(0,0,0,0.04),0_0_0_1px_rgba(0,0,0,0.06)]",
  title: "text-gray-900",
  axis: "text-gray-500",
  grid: "#E5E7EB80",
  refLine: "#9CA3AF",
  blueLine: "#1E40AF", // deep blue line
  blueDot: "#1D4ED8", // active dot
  blueAreaTop: "#1E3A8A", // gradient top
  blueAreaBottom: "#FFFFFF",
  greenLine: "#16A34A",
  redDot: "#EF4444",
};

// Shared card wrapper
function CardShell(props: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-xl ${COLORS.cardBg} border ${COLORS.cardBorder} ${COLORS.cardShadow} sm:p-5 p-3 sm:mt-12 mt-1`}
    >
      <div className="mb-2 flex items-center gap-2">
        <span className="inline-flex sm:h-6 h-5 sm:w-6 w-5 items-center justify-center text-[#000000]">
          {props.icon}
        </span>
        <h3
          className={`sm:text-[20px] text-[15px] text-[#000000] font-semibold leading-none ${COLORS.title}`}
        >
          {props.title}
        </h3>
      </div>
      {props.children}
    </div>
  );
}

// Custom dot for profit chart: red for negatives, green for non-negatives
function ProfitDot(props: DotProps & { payload?: any }) {
  const { cx, cy, payload } = props as any;
  if (cx == null || cy == null) return null;
  const positive = payload?.pct >= 0;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={5}
      fill={positive ? COLORS.greenLine : COLORS.redDot}
      stroke="white"
      strokeWidth={2}
    />
  );
}

export function MonthlyTradingVolumeCard() {
  return (
    <CardShell
      title="Monthly Trading Volume"
      icon={<LineChartIcon size={18} />}
    >
      <ChartContainer
        // Map config keys to CSS variables for ChartTooltip content color badges
        config={{
          volume: {
            label: "Volume",
            color: COLORS.blueLine,
          },
        }}
        className="w-full sm:mt-6 mt-4"
      >
        <AreaChart
          data={volumeData}
          margin={{ top: 0, right: 8, bottom: 0, left: 0 }}
        >
          <defs>
            <linearGradient id="volGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={COLORS.blueAreaTop}
                stopOpacity={0.38}
              />
              <stop
                offset="100%"
                stopColor={COLORS.blueAreaBottom}
                stopOpacity={1}
              />
            </linearGradient>
          </defs>

          <CartesianGrid stroke={COLORS.grid} vertical horizontal />
          <XAxis
            dataKey="month"
            axisLine={{ stroke: COLORS.grid }}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            interval={1}
          />
          <YAxis
            tickFormatter={(v) => fmtCurrency(v)}
            domain={[0, 10000]}
            ticks={[0, 2500, 5000, 7500, 10000]}
            axisLine={{ stroke: COLORS.grid }}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            width={56}
          />

          <ReferenceLine
            x="Aug"
            stroke={COLORS.refLine}
            strokeWidth={2}
            strokeOpacity={0.9}
          />

          <ChartTooltip
            cursor={{ stroke: "transparent" }}
            content={
              <ChartTooltipContent
                className="rounded-xl border border-gray-200 bg-white shadow-lg"
                labelFormatter={(label) => String(label)}
                formatter={(value) => (
                  <div className="text-gray-700">
                    <span className="text-gray-500">Value:</span>{" "}
                    {fmtCurrency(Number(value))}
                  </div>
                )}
              />
            }
          />

          <Area
            type="monotone"
            dataKey="value"
            name="volume"
            stroke={COLORS.blueLine}
            strokeWidth={3}
            fill="url(#volGradient)"
            dot={{ r: 0 }}
            activeDot={{
              r: 7,
              fill: COLORS.blueDot,
              stroke: "white",
              strokeWidth: 2,
            }}
            isAnimationActive={false}
          />
        </AreaChart>
      </ChartContainer>
    </CardShell>
  );
}

export function ProfitTrendCard() {
  return (
    <CardShell title="Profit Trend" icon={<TrendingUp size={18} />}>
      <ChartContainer
        config={{
          profit: {
            label: "Profit",
            color: COLORS.greenLine,
          },
        }}
        className=" w-full sm:mt-6 mt-4"
      >
        <ReLineChart
          data={profitData}
          margin={{ top: 0, right: 8, bottom: 0, left: 0 }}
        >
          <CartesianGrid stroke={COLORS.grid} vertical horizontal />
          <XAxis
            dataKey="month"
            axisLine={{ stroke: "#E5E7EB" }}
            tickLine={true}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            interval={1}
          />
          <YAxis
            tickFormatter={(v) => fmtPercent(v)}
            domain={[-2, 6]}
            ticks={[-2, 0, 2, 4, 6]}
            axisLine={{ stroke: "#E5E7EB" }}
            tickLine={true}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            width={40}
          />

          <ReferenceLine
            x="Jun"
            stroke={COLORS.refLine}
            strokeWidth={2}
            strokeOpacity={0.9}
          />

          <ChartTooltip
            cursor={{ stroke: "transparent" }}
            content={
              <ChartTooltipContent
                className="rounded-xl border border-gray-200 bg-white shadow-lg"
                labelFormatter={(label) => String(label)}
                formatter={(value, _name, item) => {
                  const v = Number(value);
                  return (
                    <div className="text-gray-700">
                      <span className="text-gray-500">Profit:</span>{" "}
                      <span
                        className={v >= 0 ? "text-emerald-600" : "text-red-600"}
                      >
                        {fmtPercent(v)}
                      </span>
                    </div>
                  );
                }}
              />
            }
          />

          <Line
            type="monotone"
            dataKey="pct"
            name="profit"
            stroke={COLORS.greenLine}
            strokeWidth={3}
            dot={<ProfitDot />}
            activeDot={{ r: 6, stroke: "white", strokeWidth: 2 }}
            isAnimationActive={false}
          />
        </ReLineChart>
      </ChartContainer>
    </CardShell>
  );
}

/**
 * DashboardCharts
 * Responsive 2-up layout for the two cards, stacking on small screens.
 */
export default function DashboardCharts() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <MonthlyTradingVolumeCard />
        <ProfitTrendCard />
      </div>
    </section>
  );
}
