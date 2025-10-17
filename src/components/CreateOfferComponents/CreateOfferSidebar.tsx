"use client";

import { Wallet, Lightbulb } from "lucide-react";
import Image from "next/image";
import BoostEarning from "../shared/layout/BoostEarning";

export default function CreateOfferSidebar() {
  return (
    <aside className="space-y-8">
      {/* Wallet Balance */}
      <div className="rounded-[15px] border border-[#E6EAF1] bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h4 className="sm:text-[20px] text-[16px] font-medium text-[#009CFF]">
            Wallet Balance
          </h4>
          {/* <Wallet className="h-5 w-5 text-[#97A3B6]" /> */}
        </div>

        <div className="sm:space-y-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[#4B5563] sm:text-[16] test-sm">BTC</span>
            <span className="font-medium sm:text-[17] test-sm text-[#333333]">
              0.0234 BTC
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#4B5563] sm:text-[16] test-sm">USDT</span>
            <span className="font-medium sm:text-[17] test-sm text-[#333333]">
              1,245.00 USDT
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-[#E6EAF1] pt-2">
            <span className="text-[#4B5563] sm:text-[16] test-sm">
              Estimated Value
            </span>
            <span className="font-medium sm:text-[17] test-sm text-[#333333]">
              $3,456.78
            </span>
          </div>
        </div>
      </div>
      {/* Fee Estimate */}
      <div className="rounded-[15px] border border-[#E6EAF1] bg-white p-5 shadow-sm">
        <h4 className="mb-5 sm:text-[20px] text-[16px] font-medium text-[#009CFF]">
          Fee Estimate
        </h4>
        <div className="sm:space-y-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[#4B5563] sm:text-[16] test-sm">
              Platform Fee
            </span>
            <span className="font-medium sm:text-[17] test-sm text-[#333333]">
              0.5%
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#4B5563] sm:text-[16] test-sm">
              Escrow Fee
            </span>
            <span className="font-medium sm:text-[17] test-sm text-[#333333]">
              0.2%
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-[#E6EAF1] pt-2">
            <span className="text-[#4B5563] sm:text-[16] test-sm">
              Total Fee
            </span>
            <span className="font-medium sm:text-[17] test-sm text-[#333333]">
              0.7%
            </span>
          </div>
        </div>
      </div>
      {/* Tips */}
      <div className="rounded-[15px] border border-[#1E4D8B1A] bg-[#EBEEF1] p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-2">
          <div className="bg-[#00AEEF1A] rounded-full sm:w-10 w-8 sm:h-10 h-8 flex justify-center items-center">
            <Lightbulb className="sm:h-6 h-5 sm:w-6 w-5 text-[#009CFF]" />
          </div>
          <h4 className="sm:text-[20px] text-[16px] font-medium text-[#009CFF]">
            Tips
          </h4>
        </div>
        <ul className="space-y-4 sm:text-[15px] text-sm text-[#374151]">
          <li className="flex gap-2">
            <span>
              <Lightbulb className="mt-1 h-3.5 w-3.5 text-[#cf9409] font-bold" />
            </span>
            Use clear offer titles and competitive pricing to attract more
            traders.
          </li>
          <li className="flex gap-2">
            <span>
              <Lightbulb className="mt-1 h-3.5 w-3.5 text-[#cf9409] font-bold" />
            </span>
            Detailed descriptions help build trust with potential trade
            partners.
          </li>
          <li className="flex gap-2">
            <span>
              <Lightbulb className="mt-1 h-3.5 w-3.5 text-[#cf9409] font-bold" />
            </span>
            Offering multiple payment methods increases your chance of
            completing trades.
          </li>
        </ul>
      </div>
      {/* Boost Your Earning Card */}
      <BoostEarning />
    </aside>
  );
}
