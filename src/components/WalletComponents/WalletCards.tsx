"use client";

import type React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function WalletCard({
  img,
  title,
  balance,
  unit,
  usd,
  cta,
  badge,
}: {
  img: string;
  title: string;
  balance: string;
  unit: string;
  usd: string;
  cta: string;
  badge?: React.ReactNode;
}) {
  return (
    <Card
      className="rounded-2xl border border-[#E6ECF4] shadow-sm"
      style={{
        background: "linear-gradient(135deg, #E6F0FF 25%, #F0F7FF 95.71%)"
      }}
    >
      <CardContent className="p-4 md:p-6">
        {/* header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
          <div className="flex h-[40px] w-[60px]  items-center justify-center">
              <Image
                src={img}
                width={60}
                height={60}
                className="object-contain rounded-tl-[10px] rounded-bl-[10px] "
                alt="logo"
              />
            </div>
            <div className="sm:text-[18px] text-sm">
              <div className="font-semibold text-[#1F2937]">{title}</div>
              {badge}
            </div>
          </div>
        </div>

        {/* balance */}
        <div className="mt-6">
          <div className="sm:text-2xl text-[20px] font-bold tracking-tight text-[#000000]">
            {balance}
            <span className="sm:text-[22px] ml-1 text-[18px] font-bold text-[#000000]">
              {"   "}
              {unit}
            </span>
          </div>
          <div className="mt-1 sm:text-[16px] text-sm text-[#6B7280]">
            {usd} USD
          </div>
        </div>

        {/* cta */}
        <div className="mt-6">
          <Button
            className="h-12 w-full rounded-lg border border-[#009CFF] bg-white text-[#009CFF] sm:text-[18px] text-[16px] hover:bg-[#F1F7FF]"
            variant="ghost"
          >
            {cta}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function WalletCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {/* BTC */}
      <WalletCard
        img="/Images/flag1.jpg"
        title="BTC Wallet"
        balance="0.5324"
        unit="BTC"
        usd="$31,452.12"
        cta="Manage BTC"
        badge={<div className="sr-only">BTC</div>}
      />

      {/* USDT */}
      <WalletCard
        img="/Images/flag2.png"
        title="USDT Wallet"
        balance="2,130.00"
        unit="USDT"
        usd="$2,130.00"
        cta="Manage USDT"
        badge={<div className="sr-only">USDT</div>}
      />

      {/* ZAR */}
      <WalletCard
        img="/Images/flag3.jpg"
        title="ZAR Wallet"
        balance="41,200"
        unit="ZAR"
        usd="$2,150.50"
        cta="Manage ZAR"
        badge={<div className="sr-only">ZAR</div>}
      />
    </div>
  );
}
