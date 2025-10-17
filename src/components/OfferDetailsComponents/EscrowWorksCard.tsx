import React from "react";
import { Shield } from "lucide-react";

function EscrowWorksCard() {
  return (
    <div className="bg-white rounded-xl p-5 md:p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-5">
        <Shield className="w-6 h-6 text-[#2563EB]" />
        <h3 className="sm:text-xl text-lg font-semibold text-[#000000]">
          How Escrow Works
        </h3>
      </div>

      <div className="space-y-5 sm:space-y-6 mb-6 sm:mt-6 mt-2">
        {/* Step 1 */}
        <div className="flex gap-3">
          <div className="sm:w-10 w-8 sm:h-10 h-8 bg-[#DBEAFE] flex items-center justify-center flex-shrink-0 rounded-full">
            <span className="text-[#2563EB] font-semibold sm:text-[16px] text-sm">
              1
            </span>
          </div>
          <div>
            <h4 className="text-[#000000] font-medium sm:text-[17px] text-sm mb-1">
              Buyer sends payment to seller
            </h4>
            <p className="text-[#4B5563] sm:text-[15px] text-xs leading-relaxed">
              Follow the seller&apos;s payment instructions and send the exact
              amount.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-3">
          <div className=" rounded-full sm:w-10 w-8 sm:h-10 h-8 bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
            <span className="text-[#2563EB] font-semibold sm:text-[16px] text-sm">
              2
            </span>
          </div>
          <div>
            <h4 className="text-[#000000] font-medium sm:text-[17px] text-sm mb-1">
              Crypto is held in QicTrader Escrow
            </h4>
            <p className="text-[#4B5563] sm:text-[15px] text-xs leading-relaxed">
              The cryptocurrency is securely locked in our escrow service while
              payment is verified.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex gap-3">
          <div className="rounded-full sm:w-10 w-8 sm:h-10 h-8 bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
            <span className="text-[#2563EB] font-semibold sm:text-[16px] text-sm">
              3
            </span>
          </div>
          <div>
            <h4 className="text-[#000000] font-medium sm:text-[17px] text-sm mb-1">
              Escrow releases crypto automatically
            </h4>
            <p className="text-[#4B5563] sm:text-[15px] text-xs leading-relaxed">
              Once payment is confirmed, the cryptocurrency is released to your
              wallet.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <div className="w-16 h-16 rounded-full bg-[#DBEAFE] flex items-center justify-center">
          <Shield className="w-8 h-8 text-[#2563EB]" />
        </div>
      </div>
    </div>
  );
}

export default EscrowWorksCard;
