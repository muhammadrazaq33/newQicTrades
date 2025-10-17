"use client";

import { useMemo } from "react";
import {
  ArrowRight,
  Banknote,
  ChevronDown,
  DollarSign,
  Grid2X2,
  LayoutList,
  ListFilter,
  Search,
  Star,
  Wallet,
  Landmark,
  CreditCard,
  Circle,
} from "lucide-react";
import Image from "next/image";

type Offer = {
  id: string;
  sellerInitial: string;
  sellerName: string;
  rating: number;
  status: "online" | "away";
  sellingAsset: string;
  price: string;
  priceCurrency: string;
  payments: Array<{
    label: string;
    icon: "bank" | "landmark" | "card" | "wallet";
  }>;
  limits: string;
  available: string;
  cta: string;
};

const OFFERS: Offer[] = [
  {
    id: "1",
    sellerInitial: "C",
    sellerName: "CryptoBoss",
    rating: 4.9,
    status: "online",
    sellingAsset: "BTC",
    price: "$65,400",
    priceCurrency: "USD",
    payments: [
      { label: "Bank Transfer", icon: "landmark" },
      { label: "Easypaisa", icon: "wallet" },
    ],
    limits: "Min $10 – Max $500",
    available: "0.025 BTC",
    cta: "Buy BTC",
  },
  {
    id: "2",
    sellerInitial: "B",
    sellerName: "BitcoinPro",
    rating: 4.8,
    status: "online",
    sellingAsset: "BTC",
    price: "$65,350",
    priceCurrency: "USD",
    payments: [
      { label: "Bank Transfer", icon: "landmark" },
      { label: "PayPal", icon: "wallet" },
    ],
    limits: "Min $50 – Max $1,000",
    available: "0.045 BTC",
    cta: "Buy BTC",
  },
  {
    id: "3",
    sellerInitial: "C",
    sellerName: "CryptoTrader",
    rating: 4.7,
    status: "away",
    sellingAsset: "USDT",
    price: "$1.01",
    priceCurrency: "USD",
    payments: [{ label: "Bank Transfer", icon: "landmark" }],
    limits: "Min $100 – Max $5,000",
    available: "4,500 USDT",
    cta: "Buy USDT",
  },
  {
    id: "4",
    sellerInitial: "B",
    sellerName: "BitExchanger",
    rating: 4.6,
    status: "online",
    sellingAsset: "BTC",
    price: "$65,200",
    priceCurrency: "USD",
    payments: [
      { label: "Western Union", icon: "bank" },
      { label: "Wise", icon: "card" },
    ],
    limits: "Min $200 – Max $2,000",
    available: "0.035 BTC",
    cta: "Buy BTC",
  },
  {
    id: "5",
    sellerInitial: "C",
    sellerName: "CoinMaster",
    rating: 4.9,
    status: "online",
    sellingAsset: "USDT",
    price: "$1.00",
    priceCurrency: "USD",
    payments: [
      { label: "Bank Transfer", icon: "landmark" },
      { label: "Cash Deposit", icon: "wallet" },
    ],
    limits: "Min $500 – Max $10,000",
    available: "15,000 USDT",
    cta: "Buy USDT",
  },
  {
    id: "6",
    sellerInitial: "B",
    sellerName: "BlockchainTrader",
    rating: 4.5,
    status: "away",
    sellingAsset: "BTC",
    price: "$65,500",
    priceCurrency: "USD",
    payments: [
      { label: "Bank Transfer", icon: "landmark" },
      { label: "Revolut", icon: "card" },
    ],
    limits: "Min $300 – Max $3,000",
    available: "0.075 BTC",
    cta: "Buy BTC",
  },
];

function PaymentBadge({
  label,
  icon,
}: {
  label: string;
  icon: "bank" | "landmark" | "card" | "wallet";
}) {
  const Icon =
    icon === "bank"
      ? Banknote
      : icon === "landmark"
        ? Landmark
        : icon === "card"
          ? CreditCard
          : Wallet;
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-[#E5E7EB] bg-white px-2 py-1 text-xs text-[#374151]">
      <Icon className="h-3.5 w-3.5 text-[#6B7280]" />
      {label}
    </span>
  );
}
function StatusPill({ status }: { status: Offer["status"] }) {
  const isOnline = status === "online";
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        isOnline
          ? "bg-[#E8F7EE] text-[#1B8F3E]"
          : "bg-[#F3F4F6] text-[#6B7280]",
      ].join(" ")}
    >
      <span
        className={[
          "mr-1 inline-block h-1.5 w-1.5 rounded-full",
          isOnline ? "bg-[#22C55E]" : "bg-[#9CA3AF]",
        ].join(" ")}
      />
      {isOnline ? "Online now" : "Away"}
    </span>
  );
}

function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm ring-1 ring-black/5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E5E7EB] text-sm font-semibold text-[#111827]">
              {offer.sellerInitial}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-semibold text-[#111827]">
                {offer.sellerName}
              </p>
            </div>
            <div className="mt-1 flex items-center gap-1 text-xs text-[#6B7280]">
              <Star className="h-3.5 w-3.5 fill-[#F59E0B] text-[#F59E0B]" />
              <span>{offer.rating}</span>
            </div>
          </div>
        </div>
        {/* Asset badge */}
        <div className="">
          <StatusPill status={offer.status} />
        </div>
      </div>

      {/* Body */}
      <div className="mt-10 space-y-6 text-sm">
        <div className="grid grid-cols-3 gap-y-4">
          <span className="text-[#6B7280] col-span-1">Selling:</span>
          <span className="text-[#111827] justify-self-end col-span-2">
            {offer.sellingAsset}
          </span>

          <span className="text-[#6B7280] col-span-1">Price:</span>
          <span className="text-[#111827] justify-self-end col-span-2">
            {offer.price}{" "}
            <span className="text-[#6B7280]">{offer.priceCurrency}</span>
          </span>

          <span className="text-[#6B7280] col-span-1">Payment:</span>
          <span className="flex flex-wrap gap-1 justify-self-end col-span-2">
            {offer.payments.map((p, i) => (
              <PaymentBadge key={i} label={p.label} icon={p.icon} />
            ))}
          </span>

          <span className="text-[#6B7280] col-span-1">Limits:</span>
          <span className="text-[#111827] justify-self-end col-span-2">
            {offer.limits}
          </span>

          <span className="text-[#6B7280] col-span-1">Available:</span>
          <span className="text-[#111827] justify-self-end col-span-2">
            {offer.available}
          </span>
        </div>
      </div>

      {/* CTA */}
      <button
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#35A6FF] to-[#1E88E5] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-[#2F9BFF] hover:to-[#1976D2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E88E5]"
        aria-label={offer.cta}
      >
        <DollarSign className="h-4 w-4" />
        {offer.cta}
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function MarketplaceContainer() {
  //   const offers = useMemo(() => offersSeed, []);

  return (
    <main className="">
      <section className="">
        {/* Filters toolbar */}
        <div className="mt-6 rounded-xl border border-[#E5E7EB] bg-white p-3 shadow-[0_2px_6px_rgba(0,0,0,0.04)] md:p-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <label className="flex min-w-[240px] flex-1 items-center gap-2 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5">
              <Search className="h-5 w-5 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search trader or offer ID"
                className="w-full bg-transparent text-[14px] text-[#111827] placeholder-[#9CA3AF] outline-none"
              />
            </label>

            {/* Select pills */}
            <button className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-[14px] text-[#111827]">
              BTC <ChevronDown className="h-4 w-4 text-[#6B7280]" />
            </button>

            <button className="inline-flex items-center gap-2 rounded-lg border border-[#2F80ED] bg-white px-3 py-2.5 text-[14px] font-semibold text-[#2F80ED]">
              Buy (active) <ChevronDown className="h-4 w-4" />
            </button>

            <button className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-[14px] text-[#111827]">
              Any Payment Method{" "}
              <ChevronDown className="h-4 w-4 text-[#6B7280]" />
            </button>

            <button className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-[14px] text-[#111827]">
              Any Country <ChevronDown className="h-4 w-4 text-[#6B7280]" />
            </button>

            <button className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-[14px] text-[#111827]">
              USD <ChevronDown className="h-4 w-4 text-[#6B7280]" />
            </button>

            <input
              type="text"
              placeholder="Min amount"
              className="w-[120px] rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-[14px] text-[#111827] placeholder-[#9CA3AF] outline-none"
            />
            <input
              type="text"
              placeholder="Max amount"
              className="w-[120px] rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5 text-[14px] text-[#111827] placeholder-[#9CA3AF] outline-none"
            />

            <button className="inline-flex items-center gap-2 rounded-lg bg-[#2F80ED] px-4 py-2.5 text-[14px] font-semibold text-white shadow-[0_6px_16px_rgba(47,128,237,0.35)]">
              <ListFilter className="h-4 w-4" />
              Apply Filters
            </button>

            <button className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-[14px] font-medium text-[#111827]">
              Reset
            </button>
          </div>
        </div>

        {/* Meta row: showing count + sort + layout */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="text-[14px] text-[#6B7280]">
            Showing <span className="font-semibold text-[#111827]">24</span>{" "}
            offers
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[14px] text-[#6B7280]">Sort by</span>
            <input
              type="text"
              className="w-[140px] rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-[14px] text-[#111827] placeholder-[#9CA3AF] outline-none"
              placeholder="Price"
            />
            <div className="ml-2 flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white p-1">
              <button
                aria-label="List view"
                className="rounded-md p-2 hover:bg-[#F3F4F6]"
              >
                <LayoutList className="h-5 w-5 text-[#6B7280]" />
              </button>
              <button
                aria-label="Grid view"
                className="rounded-md bg-[#2F80ED]/10 p-2"
              >
                <Grid2X2 className="h-5 w-5 text-[#2F80ED]" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {OFFERS.map((o) => (
            <OfferCard key={o.id} offer={o} />
          ))}
        </div>
      </section>
    </main>
  );
}
