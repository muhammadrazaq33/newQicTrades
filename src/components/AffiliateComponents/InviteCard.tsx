"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MessageCircle, Send, Twitter, Copy } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function InviteCard() {
  const [copied, setCopied] = useState(false);
  const refLink = "https://qictrader.com/ref/safwan123";

  async function onCopy() {
    await navigator.clipboard.writeText(refLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <Card className="rounded-[15px] border-2 border-[#1E4D8B] bg-white shadow-sm py-0">
      <div className="p-4 sm:p-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row">
          {/* Left content */}
          <div className="flex-1">
            <h3 className="sm:text-[20px] text-[15px] font-bold text-[#111827]">
              Invite Friends &amp; Earn
            </h3>

            <div className="mt-4">
              <label className="mb-2 block font-medium sm:text-[15px] text-xs text-[#374151]">
                Your Referral Link
              </label>
              <div className="flex w-full items-center gap-1">
                <Input
                  readOnly
                  value={refLink}
                  className="h-11 flex-1 rounded-[10px] border border-[#D1D5DB] bg-[#F9FAFB] sm:text-[16px] text-[14px] text-[#374151] placeholder:text-[#9aa3b2] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  onClick={onCopy}
                  className="h-11 rounded-[10px] bg-[#009CFF] px-4 text-white hover:bg-[#2669e0] sm:text-[16px] text-[14px] "
                >
                  <Copy className=" h-4 w-4" />
                  {copied ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 sm:text-[15px] text-xs font-medium text-[#374151]">
                Share via
              </p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  className="rounded-[10px] border-[#e5eaf2] bg-[#EFF6FF] text-[#1E4D8B] sm:text-[16px] text-xs hover:bg-[#f3f7fe]"
                >
                  <Mail className="mr-1 h-4 w-4" />
                  Email
                </Button>
                <Button
                  variant="outline"
                  className="rounded-[10px] border-[#e5eaf2] bg-[#F0FDF4] text-[#16A34A] sm:text-[16px] text-xs hover:bg-[#f3f7fe]"
                >
                  <MessageCircle className="mr-1 h-4 w-4" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="rounded-[10px] border-[#e5eaf2] bg-[#F3F4F6] text-[#374151] sm:text-[16px] text-xs hover:bg-[#f3f7fe]"
                >
                  <Send className="mr-1 h-4 w-4" />
                  Telegram
                </Button>
                <Button
                  variant="outline"
                  className="rounded-[10px] border-[#e5eaf2] bg-white text-[#1DA1F2] sm:text-[16px] text-xs hover:bg-[#f3f7fe]"
                >
                  <Twitter className="mr-1 h-4 w-4" />
                  Twitter
                </Button>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full max-w-[220px] self-center lg:max-w-[200px]">
            <Card className="flex h-full flex-col items-center justify-center rounded-[10px] shadow-[#0000000D] border border-[#eef1f6] bg-white py-4 px-0">
              <div className="relative aspect-square w-30 overflow-hidden rounded-[10px] bg-yellow">
                <Image
                  src="/Images/affiliateimage2.png"
                  alt="QR to share referral link"
                  fill
                  sizes="140px"
                  className="object-cover"
                />
              </div>
              <p className="mt-0 sm:text-[12px] text-[10px] text-[#6B7280]">
                Scan to share
              </p>
            </Card>
          </div>
        </div>
      </div>
    </Card>
  );
}
