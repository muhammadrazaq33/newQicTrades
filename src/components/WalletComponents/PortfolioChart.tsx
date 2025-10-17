"use client";

import { CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "BTC", value: 45, color: "#F7931A" }, // orange
  { name: "USDT", value: 35, color: "#26A17B" }, // green
  { name: "ZAR", value: 20, color: "#1E4D8B" }, // blue
];

export default function PortfolioChart() {
  const total = 35732;

  return (
    <div className="w-full py-0">
      <CardHeader className="border-b border-[#E6ECF4] pb-0">
        <CardTitle className="sm:text-[22px] text-lg font-bold text-[#1F2937] pb-0">
          Portfolio Distribution
        </CardTitle>
      </CardHeader>

      <div className="p-5">
        <ChartContainer
          config={{
            BTC: { label: "BTC", color: "#F59E0B" },
            USDT: { label: "USDT", color: "#10B981" },
            ZAR: { label: "ZAR", color: "#1E4D8B" },
          }}
          className="relative mx-auto h-[260px] w-full"
        >
          <>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                {/* <ChartTooltip content={<ChartTooltipContent />} /> */}
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={72}
                  outerRadius={105}
                  strokeWidth={6}
                  startAngle={90}
                  endAngle={-270}
                >
                  {data.map((d, i) => (
                    <Cell key={i} fill={d.color} stroke="#FFFFFF" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Center label */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xs uppercase tracking-wide text-[#7B8496]">
                  Total
                </div>
                <div className="text-2xl font-semibold text-[#1F2432]">
                  ${new Intl.NumberFormat().format(total)}
                </div>
              </div>
            </div>
          </>
        </ChartContainer>

        {/* Legend  */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {data.map((d) => (
            <div key={d.name} className="flex items-center gap-2">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: d.color }}
                aria-hidden="true"
              />
              <span className="sm:text-[15px] text-[11px] font-medium text-[#000000]">
                {d.name}
              </span>
              <span className="sm:text-[15px] text-[11px] text-[#6B7280]">
                {d.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
