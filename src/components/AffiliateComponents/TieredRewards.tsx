"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Medal } from "lucide-react";

function TierCard({
  title,
  icon,
  headerFrom,
  headerTo,
  requirement,
  rewardText,
}: {
  title: string;
  icon: string;
  headerFrom: string;
  headerTo: string;
  medalColor: string;
  requirement: string;
  rewardText: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#E8EAEE] bg-white shadow-sm">
      <div
        className={`flex items-center justify-between px-4 py-4`}
        style={{
          background: `linear-gradient(90deg, ${headerFrom} 0%, ${headerTo} 100%)`,
        }}
      >
        <span className="sm:text-[17px] text-[15px] font-bold text-[#1F2937]">
          {title}
        </span>
        {icon}
      </div>

      <div className="px-4 py-5 space-y-3">
        <div className="space-y-1">
          <div className="sm:text-[15px] text-[12px] text-[#6B7280]">
            Requirement
          </div>
          <div className="sm:text-[17px] text-[14px] font-medium text-[#000000]">
            {requirement}
          </div>
        </div>
        <div className="space-y-1 mt-2">
          <div className="sm:text-[15px] text-[12px] text-[#6B7280]">
            Reward
          </div>
          <button
            type="button"
            className="sm:text-[17px] text-[14px] font-medium text-[#1E4D8B] hover:underline"
          >
            {rewardText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TieredRewards() {
  return (
    <Card className="rounded-2xl border border-[#E8EAEE] bg-white shadow-sm">
      <CardHeader className="pb-0">
        <CardTitle className="sm:test-[20px] text-[16px] font-bold text-[#111827]">
          Tiered Rewards
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <TierCard
            title="Bronze"
            icon="🥉"
            headerFrom="#FFE9A7"
            headerTo="#F5D46A"
            medalColor="#B7791F"
            requirement="1–10 Referrals"
            rewardText="2% Trade Commission"
          />
          <TierCard
            title="Silver"
            icon="🥈"
            headerFrom="#F3F5F9"
            headerTo="#E4E8F0"
            medalColor="#9CA3AF"
            requirement="11–50 Referrals"
            rewardText="3% Trade Commission"
          />
          <TierCard
            title="Gold"
            icon="🥇"
            headerFrom="#FFF39D"
            headerTo="#FFD34F"
            medalColor="#D97706"
            requirement="50+ Referrals"
            rewardText="5% Trade Commission"
          />
        </div>
      </CardContent>
    </Card>
  );
}
