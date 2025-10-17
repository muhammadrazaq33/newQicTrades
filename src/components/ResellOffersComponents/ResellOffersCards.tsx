"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import type { Offer } from "@/data/ResellOffersCards";

export default function ResellOffersCards({ offers }: { offers: Offer[] }) {
  return (
    <div className="flex flex-col gap-4 md:gap-5">
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}

function OfferCard({ offer }: { offer: Offer }) {
  const [markup, setMarkup] = React.useState<number>(offer.initialMarkupPct);

  const sellingPrice = React.useMemo(() => {
    const m = markup / 100;
    return offer.basePriceZAR * (1 + m);
  }, [markup, offer.basePriceZAR]);

  const actionPill =
    offer.direction === "Sell"
      ? { label: `Sell ${offer.asset}`, bg: "#DCFCE7", text: "#166534" }
      : { label: `Buy ${offer.asset}`, bg: "#DBEAFE", text: "#1E40AF" };

  const initials =
    offer.trader
      .split(" ")
      .map((s) => s[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "TR";

  return (
    <div className="rounded-xl border border-[#EAECF0] bg-white p-4 shadow-[0_1px_0_0_rgba(16,24,40,0.04)] md:p-5">
      {/* Header row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="sm:h-10 h-9 sm:w-10 w-9">
            <AvatarFallback className="bg-[#1E4D8B] sm:text-[18px] text-[13px] font-medium text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex flex-col items-start gap-0">
              <h3 className="sm:text-[16px] text-[15px] font-medium text-[#000000]">
                {offer.trader}
              </h3>
              <div className="flex items-center gap-1 text-[13px] text-[#6B7280]">
                <Star className="h-4 w-4 fill-[#FDB022] text-[#FDB022]" />
                <span>{offer.ratingPct}%</span>
                <span>•</span>
                <span>{offer.trades} trades</span>
              </div>
            </div>
          </div>
        </div>

        <span
          className="rounded-full px-3 py-[6px] text-[12px] font-medium"
          style={{ backgroundColor: actionPill.bg, color: actionPill.text }}
        >
          {actionPill.label}
        </span>
      </div>

      {/* Body grid */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr]">
        {/* Left group: base + markup */}
        <div className="p-4">
          <div className="grid grid-cols-1 gap-3">
            <div>
              <p className="sm:text-[15px] text-[12px] text-[#6B7280]">
                Base Price:
              </p>
              <div className="mt-1 sm:text-[20px] text-[18px] font-medium text-[#000000]">
                1 {offer.asset} = {formatZAR(offer.basePriceZAR)} ZAR
              </div>
            </div>

            <div className="mt-1">
              <div className="mb-1 flex items-center justify-between">
                <p className="sm:text-[15px] text-[12px] text-[#6B7280]">
                  Markup:
                </p>
                <p className="sm:text-[15px] text-[12px] font-medium text-[#F2994A]">
                  {markup >= 0 ? "+" : ""}
                  {markup.toFixed(1)}%
                </p>
              </div>
              <input
                type="range"
                min={0}
                max={5}
                step={0.1}
                value={markup}
                onChange={(e) => setMarkup(Number.parseFloat(e.target.value))}
                className="w-full appearance-none h-2 rounded-lg bg-[#E5E7EB] accent-[#F79009] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#F2994A] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:hover:scale-110"
              />
              <p className="mt-2 sm:text-[15px] text-[12px] text-[#4B5563]">
                Your selling price:{" "}
                <span className="font-medium text-[#4B5563]">
                  {formatZAR(sellingPrice)} ZAR
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right group: payment + range */}
        <div className=" p-4">
          <div className="grid grid-cols-1 gap-3">
            <div>
              <p className="sm:text-[15px] text-[12px] text-[#6B7280]">
                Payment Method:
              </p>
              <p className="mt-1 sm:text-[20px] text-[15px] font-medium text-[#000000]">
                {offer.paymentMethod}
              </p>
            </div>
            <div>
              <p className="sm:text-[15px] text-[12px] text-[#6B7280]">
                Trade Range:
              </p>
              <p className="mt-1 sm:text-[16px] text-[15px] font-medium text-[#000000]">
                {formatZAR(offer.tradeMin)} - {formatZAR(offer.tradeMax)} ZAR
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer actions */}
      <div className="mt-4 flex  gap-3 flex-row justify-evenly sm:justify-end">
        <Button
          variant="outline"
          className="h-10 rounded-lg border-[#D0D5DD] bg-white px-6 sm:text-[16px] text-[14px] text-[#374151] hover:bg-white"
        >
          View Details
        </Button>
        <Button
          className="h-10 rounded-lg px-6 sm:text-[16px] text-[14px] font-medium text-white shadow-sm hover:opacity-95"
          style={{
            background: "linear-gradient(180deg, #009CFF 0%, #63C3FF 100%)",
          }}
        >
          Resell Offer
        </Button>
      </div>
    </div>
  );
}

function formatZAR(n: number) {
  return n.toLocaleString("en-ZA", {
    maximumFractionDigits: 2,
  });
}
