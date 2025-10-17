"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Pencil, Pause, Play, Trash2 } from "lucide-react";
import { offers } from "@/data/offers";

type Status = "Active" | "Paused";

function StatusPill({ status }: { status: Status }) {
  const styles =
    status === "Active"
      ? "bg-[#DBEAFE] text-[#1E40AF] border border-[#D6E6FF]"
      : "bg-[#F3F4F6] text-[#1F2937] border border-[#E5E7EB]";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 sm:text-[14px] text-[10px] font-medium",
        styles
      )}
      aria-label={`Status ${status}`}
    >
      {status}
    </span>
  );
}

function OfferTypePill({ type }: { type: "Buy" | "Sell" }) {
  const styles =
    type === "Buy"
      ? "bg-[#DBEAFE] text-[#1E40AF]"
      : "bg-[#E9F9EF] text-[#22C55E]";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 sm:text-[14px] text-[10px] font-medium",
        styles
      )}
    >
      {type}
    </span>
  );
}

export default function OffersSummaryTable() {
  return (
    <Card className="sm:mt-12 mt-6 rounded-2xl border border-[#ECEEF2] bg-white shadow-sm">
      <CardHeader className="pb-0">
        <CardTitle className="sm:text-[22px] text-[18px] font-semibold text-[#000000]">
          My Offers Summary
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0 overflow-x-auto max-w-full">
        <div className="w-full overflow-x-auto">
          <table className="min-w-[680px] w-full border-spacing-0">
            <thead>
              <tr className="bg-[#F7FAFD]">
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 pl-4 sm:pl-6 pr-2 sm:pr-4 border-b border-[#EAECEF]">
                  Offer Type
                </th>
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 px-2 sm:px-4 border-b border-[#EAECEF]">
                  Currency Pair
                </th>
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 px-2 sm:px-4 border-b border-[#EAECEF]">
                  Rate per Unit
                </th>
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 px-4 sm:px-4 border-b border-[#EAECEF]">
                  Limit
                </th>
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 px-2 sm:px-4 border-b border-[#EAECEF]">
                  Payment Method
                </th>
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 px-4 sm:px-4 border-b border-[#EAECEF]">
                  Status
                </th>
                <th className="text-left sm:text-[14px] text-[10px] text-[#6B7280] font-medium py-2 sm:py-3 pl-5 sm:pl-10 pr-2 sm:pr-4 border-b border-[#EAECEF]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {offers.map((row, idx) => (
                <tr
                  key={row.id}
                  className={cn(
                    "bg-white",
                    idx !== offers.length - 1 && "border-b border-[#F0F2F5]"
                  )}
                >
                  <td className="py-2 sm:py-3 pl-3 sm:pl-6 pr-2 sm:pr-4 align-middle">
                    <OfferTypePill type={row.type} />
                  </td>

                  <td className="py-2 sm:py-4 px-2 sm:px-4 align-middle sm:text-[14px] text-[11px] text-[#6B7280]">
                    {row.pair}
                  </td>

                  <td className="py-2 sm:py-4 px-2 sm:px-4 align-middle sm:text-[14px] text-[11px] text-[#6B7280]">
                    {row.ratePerUnit}
                  </td>

                  <td className="py-2 sm:py-4 px-2 sm:px-4 align-middle sm:text-[14px] text-[11px] text-[#6B7280]">
                    {row.limit}
                  </td>

                  <td className="py-2 sm:py-4 px-2 sm:px-4 align-middle sm:text-[14px] text-[11px] text-[#6B7280]">
                    {row.paymentMethod}
                  </td>

                  <td className="py-2 sm:py-4 px-2 sm:px-4 align-middle">
                    <StatusPill status={row.status} />
                  </td>

                  <td className="py-2 sm:py-3 pl-0 sm:pl-6 pr-2 sm:pr-4 align-middle">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="sm:h-8 h-4 sm:w-8 w-4 text-[#6B7280] hover:text-[#0F172A] hover:bg-[#F3F4F6]"
                        aria-label="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>

                      {row.status === "Paused" ? (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="sm:h-8 h-4 sm:w-8 w-4 text-[#6B7280] hover:text-[#0F172A] hover:bg-[#F3F4F6]"
                          aria-label="Play"
                        >
                          <Play className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="sm:h-8 h-4 sm:w-8 w-4 text-[#6B7280] hover:text-[#0F172A] hover:bg-[#F3F4F6]"
                          aria-label="Pause"
                        >
                          <Pause className="h-4 w-4" />
                        </Button>
                      )}

                      <Button
                        variant="ghost"
                        size="icon"
                        className="sm:h-8 h-4 sm:w-8 w-4 text-[#EF4444] hover:text-[#B91C1C] hover:bg-[#FEF2F2]"
                        aria-label="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
