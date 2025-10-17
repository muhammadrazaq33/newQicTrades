"use client";

import * as React from "react";
import { Info } from "lucide-react";
import FiltersBar from "@/components/ResellOffersComponents/FiltersBar";
import ActiveResells from "@/components/ResellOffersComponents/ActiveResells";
import OffersList from "@/components/ResellOffersComponents/ResellOffersCards";
import { initialOffers as offersFromFile } from "@/data/ResellOffersCards";

type Offer = {
  id: string;
  trader: string;
  ratingPct: number;
  trades: number;
  asset: "BTC" | "USDT";
  direction: "Buy" | "Sell";
  basePriceZAR: number; // price per 1 asset unit in ZAR
  paymentMethod: "Capitec Pay" | "Skrill" | "PayPal";
  tradeMin: number;
  tradeMax: number;
  initialMarkupPct: number; // default slider position
};

const CRYPTO_OPTIONS = ["All", "BTC", "USDT"] as const;
const OFFER_TYPE_OPTIONS = ["All", "Buy", "Sell"] as const;
const PAYMENT_OPTIONS = ["All", "Capitec Pay", "Skrill", "PayPal"] as const;
const SORT_OPTIONS = [
  "Relevance",
  "Best Rating",
  "Price: Low to High",
  "Price: High to Low",
] as const;

export default function ResellOffers() {
  const [query, setQuery] = React.useState("");
  const [cryptoFilter, setCryptoFilter] =
    React.useState<(typeof CRYPTO_OPTIONS)[number]>("All");
  const [offerTypeFilter, setOfferTypeFilter] =
    React.useState<(typeof OFFER_TYPE_OPTIONS)[number]>("All");
  const [paymentFilter, setPaymentFilter] =
    React.useState<(typeof PAYMENT_OPTIONS)[number]>("All");
  const [sortBy, setSortBy] =
    React.useState<(typeof SORT_OPTIONS)[number]>("Relevance");

  const filtered = React.useMemo(() => {
    let data = [...offersFromFile];

    if (cryptoFilter !== "All") {
      data = data.filter((o) => o.asset === cryptoFilter);
    }
    if (offerTypeFilter !== "All") {
      data = data.filter((o) => o.direction === offerTypeFilter);
    }
    if (paymentFilter !== "All") {
      data = data.filter((o) => o.paymentMethod === paymentFilter);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      data = data.filter(
        (o) =>
          o.trader.toLowerCase().includes(q) ||
          o.paymentMethod.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "Best Rating":
        data.sort((a, b) => b.ratingPct - a.ratingPct);
        break;
      case "Price: Low to High":
        data.sort((a, b) => a.basePriceZAR - b.basePriceZAR);
        break;
      case "Price: High to Low":
        data.sort((a, b) => b.basePriceZAR - a.basePriceZAR);
        break;
      default:
        break; // Relevance keeps original
    }
    return data;
  }, [cryptoFilter, offerTypeFilter, paymentFilter, sortBy, query]);

  return (
    <div className="w-full bg-[#F6F6F6]">
      {/* Page background wrapper to match design */}
      <div className=" w-full max-w-screen-xl mx-auto px-3 sm:px-8 py-8">
        <div className="">
          {/* Header */}
          <header className="mb-6 md:mb-7">
            <div className="flex items-center gap-4">
              <h1 className="sm:text-[32px] text-[26px] font-bold text-[#009CFF] leading-8">
                Resell Offers
              </h1>
              <Info
                aria-hidden
                className="mt-[4px] h-4 w-4 text-[#009CFF] cursor-pointer"
                strokeWidth={3}
              />
            </div>
            <div className="mt-3 flex items-center gap-4">
              <p className="leading-6 sm:text-[16px] text-[12px] text-[#4B5563]">
                Browse available offers from other traders and resell them with
                your own markup.
              </p>
              <Info
                aria-hidden
                className="mt-[2px] h-4 w-4 text-[#009CFF] cursor-pointer sm:block hidden"
                strokeWidth={3}
              />
            </div>
          </header>

          {/* Filters bar */}
          <FiltersBar
            query={query}
            onQueryChange={setQuery}
            cryptoFilter={cryptoFilter}
            onCryptoChange={setCryptoFilter}
            offerTypeFilter={offerTypeFilter}
            onOfferTypeChange={setOfferTypeFilter}
            paymentFilter={paymentFilter}
            onPaymentChange={setPaymentFilter}
            sortBy={sortBy}
            onSortByChange={setSortBy}
            cryptoOptions={[...CRYPTO_OPTIONS] as unknown as string[]}
            offerTypeOptions={[...OFFER_TYPE_OPTIONS] as unknown as string[]}
            paymentOptions={[...PAYMENT_OPTIONS] as unknown as string[]}
            sortOptions={[...SORT_OPTIONS] as unknown as string[]}
          />

          {/* Content grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_360px]">
            {/* Left column: Cards only */}
            <div className="min-w-0">
              {/* Cards */}
              <OffersList offers={filtered} />
            </div>

            {/* Right column: Active Resells */}
            <aside className="order-2 md:order-none self-start rounded-xl border border-[#EAECF0] bg-white p-4 md:sticky md:top-6 md:p-5">
              <ActiveResells />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
