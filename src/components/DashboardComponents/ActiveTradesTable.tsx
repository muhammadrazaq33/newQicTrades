"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { trades } from "@/data/trade";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

type TradeStatus = "Active" | "Pending" | "Dispute";

function StatusPill({ status }: { status: TradeStatus }) {
  const map = {
    Active: "bg-[#E9F9EF] text-[#22C55E] border border-[#CEF2DB]",
    Pending: "bg-[#FFF3E6] text-[#F59E0B] border border-[#FDE7CC]",
    Dispute: "bg-[#FEEBEC] text-[#EF4444] border border-[#FBD0D3]",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 sm:text-[14px] text-[11px] font-medium",
        map[status]
      )}
      aria-label={`Status ${status}`}
    >
      {status}
    </span>
  );
}

const PAGE_SIZE = 5;

export default function ActiveTradesTable() {
  const [page, setPage] = useState(2); // default to 2 to match screenshot
  const totalPages = Math.ceil(trades.length / PAGE_SIZE);

  const pageData = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return trades.slice(start, start + PAGE_SIZE);
  }, [page]);

  return (
    <Card className=" sm:mt-12 mt-6 rounded-2xl border border-[#ECEEF2] bg-white shadow-sm relative w-full max-w-[100vw] overflow-x-hidde">
      <CardHeader className="pb-0 ">
        <CardTitle className="sm:text-[22px] text-[18px] font-semibold text-[#000000]">
          Active Trades
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="w-full overflow-x-auto">
          <table className="min-w-[680px] w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-[#F7FAFD]">
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 pl-4 sm:pl-6 pr-2 sm:pr-4 border-b border-[#EAECEF]">
                  Trade ID
                </th>
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 px-2 sm:px-4 border-b border-[#EAECEF]">
                  Counterparty
                </th>
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 px-2 sm:px-4 border-b border-[#EAECEF]">
                  Crypto Type
                </th>
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 px-2 sm:px-4 border-b border-[#EAECEF]">
                  Amount
                </th>
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 px-4 border-b border-[#EAECEF]">
                  Status
                </th>
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 px-3.5 sm:px-4 border-b border-[#EAECEF]">
                  Start Date
                </th>
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 pl-2 sm:pl-10 pr-2 sm:pr-4 border-b border-[#EAECEF]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((row, idx) => (
                <tr
                  key={row.id}
                  className={cn(
                    "bg-white",
                    idx !== pageData.length - 1 && "border-b border-[#F0F2F5]"
                  )}
                >
                  <td className="sm:py-4 py-2 pt-0 pl-4 sm:pr-4 pr-3  align-middle">
                    <span className="inline-flex sm:text-[15px] text-[11px] font-medium text-[#111827] ">
                      {row.tradeId}
                    </span>
                  </td>
                  <td className="py-2 sm:py-4 px-2 sm:px-4 align-middle sm:text-[15px] text-[11px] text-[#6B7280]">
                    {row.counterparty}
                  </td>
                  <td className="py-2 sm:py-4 px-2 sm:px-5.5 align-middle sm:text-[15px] text-[11px] text-[#6B7280]">
                    {row.crypto}
                  </td>
                  <td className="py-2 sm:py-4 px-2 sm:px-4 align-middle sm:text-[15px] text-[11px] text-[#6B7280]">
                    {row.amount}
                  </td>
                  <td className="py-2 sm:py-4 px-2 sm:px-4 align-middle">
                    <StatusPill status={row.status} />
                  </td>
                  <td className="py-2 sm:py-4 px-2 sm:px-4 align-middle sm:text-[15px] text-[11px] text-[#6B7280]">
                    {row.startDate}
                  </td>
                  <td className="py-2 sm:py-3 pl-0 sm:pl-6 pr-2 sm:pr-4 align-middle">
                    <Link
                      href="#"
                      className="sm:text-[15px] text-[11px] font-medium text-[#1E4D8B] hover:underline"
                    >
                      View Trade
                      <span className="sr-only">{` for ${row.tradeId}`}</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer: results info + pagination */}
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="sm:text-[15px] text-[11px] text-[#374151]">
            Showing{" "}
            <span className="font-medium text-[#374151]">
              {(page - 1) * PAGE_SIZE + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium text-[#374151]">
              {Math.min(page * PAGE_SIZE, trades.length)}
            </span>{" "}
            of{" "}
            <span className="font-medium text-[#374151]">{trades.length}</span>{" "}
            results
          </p>

          <nav
            aria-label="Pagination"
            className="inline-flex items-center gap-1 rounded-lg border border-[#E5E7EB] shadow-[#0000000D] bg-white p-1"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="sm:h-9 h-6 sm:w-9 w-6 text-[#6B7280] hover:bg-[#F3F4F6]"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const num = i + 1;
              const active = num === page;
              return (
                <button
                  key={num}
                  onClick={() => setPage(num)}
                  className={cn(
                    "sm:h-9 h-6 sm:w-9 w-6 rounded-md sm:text-[15px] text-[10px] font-semibold",
                    active
                      ? "bg-[#1E4D8B] text-white"
                      : "text-[#374151] hover:bg-[#F3F4F6]"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {num}
                </button>
              );
            })}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="sm:h-9 h-6 sm:w-9 w-6 text-[#6B7280] hover:bg-[#F3F4F6]"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      </CardContent>
    </Card>
  );
}
