import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function EnterTradeDetailsCard() {
  return (
    <div className="bg-white rounded-[10px] p-5 md:p-6 shadow-sm">
      <h3 className="sm:text-[22px] text-xl font-semibold text-[#000000] sm:mb-6 mb-4">
        Enter Trade Details
      </h3>

      <div className="sm:mb-5 mb-4">
        <label className="text-[#000000] sm:text-[16px] text-sm font-medium mb-2 block">
          Enter USD Amount
        </label>
        <Input
          type="text"
          placeholder="$0 - 1000"
          className="h-12 border bg-white placeholder:text-[#000000] border-[#D1D5DB] focus:border-[#c3c8ce] focus:ring-[#D1D5DB] text-base"
        />
      </div>

      <div className="sm:mb-10 mb-6">
        <label className="text-[#000000] sm:text-[16px] text-sm font-medium mb-2 block">
          You&apos;ll Receive
        </label>
        <div className="flex items-center justify-between bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg px-4 h-12">
          <span className="text-[#000000] font-medium sm:text-[18px] text-[15px]">
            0.00000000 BTC
          </span>
          <span className="text-[#6B7280] sm:text-[16px] text-sm">
            @ $ 64,500/BTC
          </span>
        </div>
      </div>

      <Button
        className="w-full h-12 bg-gradient-to-r from-[#029DFF] to-[#64C3FF]
 hover:from-[#64C3FF] hover:to-[#029DFF] transition-all duration-300 text-white font-medium sm:text-[18px] text-base rounded-lg sm:mb-6 mb-4"
      >
        Confirm & Start Trade
      </Button>

      <p className="text-center text-[#4B5563] sm:text-[16px] text-sm">
        Cancel and go back to Marketplace
      </p>
    </div>
  );
}

export default EnterTradeDetailsCard;
