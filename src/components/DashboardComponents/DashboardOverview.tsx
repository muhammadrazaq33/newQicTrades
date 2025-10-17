"use client";

import {
  CheckCircle2,
  MessageSquare,
  Megaphone,
  Lock,
  Wallet2,
  LinkIcon,
} from "lucide-react";
import type React from "react";

export function DashboardOverview() {
  return (
    <section className="sm:mt-12 mt-6">
      <div className="">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <RecentActivityCard />
          <EscrowOverviewCard />
          <WalletOverviewCard />
          <AffiliateReferralCard />
        </div>
      </div>
    </section>
  );
}

/* Card Shell */
function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        // base
        "rounded-2xl bg-white shadow-sm",
        // subtle border to match crisp cards
        "border border-[#E6E8EC]",
        // internal spacing
        "p-6 md:p-7",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/* Typography helpers */
const H3: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h3 className="sm:text-[24px] text-[18px] font-semibold leading-6 text-[#000000]">
    {children}
  </h3>
);
const Muted: React.FC<React.PropsWithChildren> = ({ children }) => (
  <p className="sm:text-[16px] text-[13px] leading-5 text-[#9CA3AF]">
    {children}
  </p>
);

/* 1) Recent Activity */
function RecentActivityCard() {
  const items = [
    {
      icon: (
        <CheckCircle2
          className="sm:h-6 h-5 sm:w-6 w-5 text-[#22C55E]"
          aria-hidden="true"
        />
      ),
      title: "Trade #482 completed successfully.",
      time: "2h ago",
    },
    {
      icon: (
        <MessageSquare
          className="sm:h-6 h-5 sm:w-6 w-5 text-[#3B82F6]"
          aria-hidden="true"
        />
      ),
      title: "New message from Trader_247.",
      time: "3h ago",
    },
    {
      icon: (
        <Megaphone
          className="sm:h-6 h-5 sm:w-6 w-5 text-[#F97316]"
          aria-hidden="true"
        />
      ),
      title: "Offer updated (Buy 0.2 BTC @ $41,000).",
      time: "5h ago",
    },
    {
      icon: (
        <Lock
          className="sm:h-6 h-5 sm:w-6 w-5 text-[#8B5CF6]"
          aria-hidden="true"
        />
      ),
      title: "Escrow released for Trade #477.",
      time: "1d ago",
    },
  ];

  return (
    <Card>
      <H3>Recent Activity</H3>
      <ul className="mt-6 space-y-5">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-0.5 shrink-0">{item.icon}</div>
            <div className="flex-1">
              <p className="sm:text-[18px] text-[15px] leading-6 text-[#374151]">
                {item.title}
              </p>
              <Muted>{item.time}</Muted>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

/* 2) Escrow Overview */
function EscrowOverviewCard() {
  return (
    <Card>
      <div className="flex items-center gap-2">
        <Lock
          className="sm:h-6 h-5 sm:w-6 w-5 text-[#1E4D8B]"
          aria-hidden="true"
        />
        <H3>Escrow Overview</H3>
      </div>

      <div className="mt-5 space-y-4">
        <div className="flex flex-col items-baseline justify-between">
          <p className="sm:text-[16px] text-[13px] text-[#6B7280]">
            Active Escrow Trades
          </p>
          <p className="sm:text-[18px] text-[15px] font-medium text-[#000000]">
            3
          </p>
        </div>
        <div className="flex flex-col items-baseline justify-between">
          <p className="sm:text-[16px] text-[13px] text-[#6B7280]">
            Funds in Escrow
          </p>
          <p className="text-[18px] font-semibold text-[#0B0F1A]">$1,250</p>
        </div>
        <div className="pt-1">
          <p className="m:text-[16px] text-[13px] text-[#6B7280]">
            Next Release
          </p>
          <p className="sm:text-[18px] text-[15px] font-medium text-[#000000]">
            Trade #489 <span className="text-[#6B7280]">(ETA 2h)</span>
          </p>
        </div>
      </div>

      <button
        type="button"
        className="mt-6 w-full rounded-lg border border-[#0DA1FF] px-4 py-2.5 sm:text-[16px] text-[14px] font-medium text-[#0DA1FF] hover:bg-[#EAF4FF] transition"
        aria-label="View Escrow Details"
      >
        View Escrow Details
      </button>
    </Card>
  );
}

/* 3) Wallet Overview */
function WalletOverviewCard() {
  const balances = [
    { label: "BTC Balance", value: "0.5342", unit: "BTC" },
    { label: "USDT Balance", value: "2,130.00", unit: "USDT" },
    { label: "ZAR Balance", value: "41,200", unit: "ZAR" },
  ];
  return (
    <Card>
      <div className="flex items-center gap-2">
        <Wallet2
          className="sm:h-6 h-5 sm:w-6 w-5 text-[#1E4D8B]"
          aria-hidden="true"
        />
        <H3>Wallet Overview</H3>
      </div>

      {/* Balances */}
      <div className="mt-9 grid grid-cols-3 sm:gap-3 gap-2">
        {balances.map((b, i) => (
          <div
            key={i}
            className="rounded-xl bg-[#F9FAFB] px-3 py-3 text-center"
          >
            <p className="sm:text-[18px] text-[14px] text-[#6B7280]">
              {b.label}
            </p>
            <p className="mt-1.5 sm:text-[18px] text-[14px] font-medium text-[#000000]">
              {b.value}
            </p>
            <p className="sm:text-[18px] text-[18px] font-medium text-[#000000]">
              {b.unit}
            </p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-9 flex items-center gap-3">
        <button
          type="button"
          className="flex-1 rounded-lg px-4 py-2.5 sm:text-[16px] text-[14px] font-semibold text-white hover:brightness-95 transition"
          aria-label="Deposit"
          style={{
            background: "linear-gradient(180deg, #089FFF 0%, #60C2FF 100%)",
          }}
        >
          Deposit
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg border border-[#0DA1FF] bg-white px-4 py-2.5 sm:text-[16px] text-[14px] font-medium text-[#0DA1FF] hover:bg-[#EAF4FF] transition"
          aria-label="Withdraw"
        >
          Withdraw
        </button>
      </div>
    </Card>
  );
}

/* 4) Affiliate & Referral */
function AffiliateReferralCard() {
  return (
    <Card className={"bg-[#DDEBFF] sm:space-y-12 space-y-8"}>
      <div className="flex items-center gap-2">
        <LinkIcon
          className="sm:h-6 h-5 sm:w-6 w-5 text-[#1E4D8B]"
          aria-hidden="true"
        />
        <H3>Affiliate & Referral Summary</H3>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-3">
        <div className="text-left">
          <p className="sm:text-[16px] text-[12px] text-[#6B7280]">
            Referrals Joined
          </p>
          <p className="mt-1 sm:text-[20px] text-[18px] font-medium text-[#000000]">
            32
          </p>
        </div>
        <div className="text-left">
          <p className="sm:text-[16px] text-[12px] text-[#6B7280]">Earnings</p>
          <p className="mt-1 sm:text-[20px] text-[18px] font-medium text-[#000000]">
            $560
          </p>
        </div>
        <div className="text-left">
          <p className="sm:text-[16px] text-[12px] text-[#6B7280]">
            Commission Pending
          </p>
          <p className="mt-1 sm:text-[20px] text-[18px] font-medium text-[#000000]">
            $45
          </p>
        </div>
      </div>

      <button
        type="button"
        className="mt-6 w-full rounded-lg border border-[#0DA1FF] bg-white px-4 py-2.5 sm:text-[16px] text-[14px] font-medium text-[#0DA1FF] hover:bg-[#DDEBFF] transition"
        aria-label="Go to Affiliate Page"
      >
        Go to Affiliate Page
      </button>
    </Card>
  );
}

export default DashboardOverview;
