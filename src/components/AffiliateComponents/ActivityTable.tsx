"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { referrals } from "@/data/ReferralRow";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

const PAGE_SIZE = 5;

export default function ActivityTable() {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(referrals.length / PAGE_SIZE));
  const rows = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return referrals.slice(start, start + PAGE_SIZE);
  }, [page]);

  const go = (n: number) => setPage(Math.min(totalPages, Math.max(1, n)));

  return (
    <Card className="rounded-2xl border-0 bg-white shadow-sm sm:py-0 py-2">
      <div className="p-4 sm:p-6">
        <h3 className="mb-4 sm:text-[20px] text-[16px] font-bold text-[#111827] sm:mb-6">
          Referral Activity Log
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-[720px] w-full border-collapse">
            <thead>
              <tr className="text-left sm:text-[15px] text-[10px] text-[#6B7280]">
                <th className="py-3 pl-4 pr-3 font-medium">Date Joined</th>
                <th className="px-3 font-medium">Username</th>
                <th className="px-3 font-medium">Status</th>
                <th className="px-3 font-medium">Trades Made</th>
                <th className="px-3 font-medium">Earnings</th>
                <th className="px-3 pr-4 font-medium">Rank</th>
              </tr>
            </thead>
            <tbody className="">
              {rows.map((r, i) => (
                <tr
                  key={r.username}
                  className={[
                    "text-sm",
                    i % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white",
                  ].join(" ")}
                >
                  <td className="py-3 pl-4 pr-3 font-medium sm:text-[15px] text-[10px] text-[#111827]">
                    {r.date}
                  </td>
                  <td className="px-3 font-medium sm:text-[15px] text-[10px] text-[#1E4D8B]">
                    {r.username}
                  </td>
                  <td className="px-3">
                    {r.status === "Active" ? (
                      <Badge className="rounded-full bg-[#DCFCE7] px-3 py-1 sm:text-[13px] text-xs font-medium text-[#166534] hover:bg-[#e8fbef]">
                        Active
                      </Badge>
                    ) : (
                      <Badge className="rounded-full bg-[#F3F4F6] px-3 py-1 sm:text-[13px] text-xs font-medium text-[#1F2937] hover:bg-[#eef2f6]">
                        Inactive
                      </Badge>
                    )}
                  </td>
                  <td className="px-3 sm:text-[15px] text-[10px] text-[#111827]">
                    {r.trades}
                  </td>
                  <td className="px-3 sm:text-[15px] text-[10px] font-medium text-[#111827]">
                    ${r.earnings.toFixed(2)}
                  </td>
                  <td className="px-3 pr-4">
                    <span
                      className={[
                        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
                        r.rank === "🥇 Gold" && "bg-[#FEF9C3] text-[#854D0E]",
                        r.rank === "🥈 Silver" && "bg-[#F3F4F6] text-[#1F2937]",
                        r.rank === "🥉 Bronze" && "bg-[#FEF3C7] text-[#92400E]",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {r.rank}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer / Pagination */}
        <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:mt-6 sm:flex-row sm:items-center">
          <p className="sm:text-[15px] text-[10px] text-[#374151]">
            Showing <span className="font-medium text-[#374151]">1</span> to{" "}
            <span className="font-medium text-[#374151]">
              {Math.min(PAGE_SIZE, referrals.length)}
            </span>{" "}
            of{" "}
            <span className="font-medium text-[#374151]">
              {referrals.length}
            </span>{" "}
            referrals
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="h-9 rounded-lg border-[#e6ebf3] bg-white text-[#9CA3AF] hover:bg-[#f7f9fc]"
              onClick={() => go(page - 1)}
              disabled={page === 1}
            >
              <ChevronLeft
                className="sm:h-10 h-4 sm:w-10 w-4"
                strokeWidth={4}
              />
            </Button>

            {[...Array(3)].map((_, i) => {
              const n = i + 1;
              const active = n === page;
              return (
                <Button
                  key={n}
                  variant={active ? "default" : "outline"}
                  className={[
                    "h-9 w-9 rounded-lg px-0 font-semibold sm:text-[15px] text-[10px]",
                    active
                      ? "bg-[#009CFF] text-white hover:bg-[#2a6be0]"
                      : "border-[#e6ebf3] bg-white text-[#111827] hover:bg-[#f7f9fc]",
                  ].join(" ")}
                  onClick={() => go(n)}
                >
                  {n}
                </Button>
              );
            })}

            <Button
              variant="outline"
              className="h-9 rounded-lg border-[#e6ebf3] bg-white text-[#9CA3AF] hover:bg-[#f7f9fc]"
              onClick={() => go(page + 1)}
              disabled={page === totalPages}
            >
              <ChevronRight
                className="sm:h-10 h-4 sm:w-10 w-4"
                strokeWidth={4}
              />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
