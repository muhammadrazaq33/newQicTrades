"use client";

import { Card } from "@/components/ui/card";
import { UsersRound, DollarSign, LineChart } from "lucide-react";

export default function AffiliateStatsCards() {
  return (
    <div className="grid grid-cols-1 sm:gap-5 gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <Card
        className="rounded-2xl border-[0.75px] border-[#9cd8f8] bg-[#B3E5FF] shadow-sm"
      >
        <div className="flex items-start gap-4 p-5 sm:p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#FFFFFF] text-[#1E4D8B] shadow-[#00000000]">
            <UsersRound className="sm:h-6 h-5 sm:w-6 w-5" />
          </div>
          <div className="flex flex-col sm:gap-2 gap-1.5">
            <p className="sm:text-[16px] font-medium text-sm text-[#6B7280]">
              Total Referrals
            </p>
            <div className=" flex items-end gap-2">
              <span className="sm:text-2xl text-[20px] font-bold text-[#111827]">
                128
              </span>
            </div>
            <span className="sm:text-[16px] text-xs text-[#6B7280]">
              Active: 67
            </span>
          </div>
        </div>
      </Card>

      {/* Card 2 */}
      <Card
        className="rounded-2xl border-[0.75px] border-[#9cd8f8] bg-[#B3E5FF] shadow-sm"
      >
        <div className="flex items-start gap-4 p-5 sm:p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#FFFFFF] text-[#1E4D8B] shadow-[#00000000]">
            <DollarSign className="sm:h-6 h-5 sm:w-6 w-5" />
          </div>
          <div className="flex flex-col sm:gap-2 gap-1.5">
            <p className="sm:text-[16px] font-medium text-sm text-[#6B7280]">
              Total Earnings
            </p>
            <div className="">
              <span className="sm:text-2xl text-[20px] font-bold text-[#111827]">
                $1,342.50
              </span>
            </div>
            <p className="sm:text-[16px] text-xs text-[#6B7280]">
              Updated hourly
            </p>
          </div>
        </div>
      </Card>

      {/* Card 3 */}
      <Card
        className="rounded-2xl border-[0.75px] border-[#9cd8f8] bg-[#B3E5FF]  shadow-sm "
      >
        <div className="flex items-start gap-4 p-5 sm:p-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#FFFFFF] text-[#1E4D8B] shadow-[#00000000]">
            <LineChart className="sm:h-6 h-5 sm:w-6 w-5" />
          </div>
          <div className="flex flex-col sm:gap-2 gap-1.5">
            <p className="sm:text-[16px] font-medium text-sm text-[#6B7280]">
              Conversion Rate
            </p>
            <div className="">
              <span className="sm:text-2xl text-[20px] font-bold text-[#111827]">
                52%
              </span>
            </div>
            <p className="sm:text-[16px] text-xs text-[#6B7280]">
              Above average
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
