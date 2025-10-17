import React from "react";
import { Lock } from "lucide-react";

function OfferTermsConditionsCard() {
  return (
    <div className="bg-white rounded-[10px] p-5 md:p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-[#000000] mb-4">
        Offer Terms & Conditions
      </h3>
      <ul className="space-y-3 mb-5">
        <li className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 flex-shrink-0"></div>
          <span className="text-[#000000] text-sm">
            Payment must be made within 15 minutes.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 flex-shrink-0"></div>
          <span className="text-[#000000] text-sm">
            Send exact amount shown on screen.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 flex-shrink-0"></div>
          <span className="text-[#000000] text-sm">
            Contact seller only via QicTrader chat.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 flex-shrink-0"></div>
          <span className="text-[#000000] text-sm">
            Ensure your bank account name matches your QicTrader profile.
          </span>
        </li>
      </ul>
      <div className="flex items-center gap-2 text-[#2563EB] bg-[#EFF6FF] px-4 py-3 rounded-lg">
        <Lock className="w-4 h-4 flex-shrink-0" />
        <span className="text-sm font-medium text-[#374151]">
          Your funds are protected by QicTrader Escrow.
        </span>
      </div>
    </div>
  );
}

export default OfferTermsConditionsCard;
