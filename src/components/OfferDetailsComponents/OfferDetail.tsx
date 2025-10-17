"use client";

import OfferDetailsCard from "./OfferDetailsCard";
import OfferTermsConditionsCard from "./OfferTermsConditionsCard";
import EnterTradeDetailsCard from "./EnterTradeDetailsCard";
import EscrowWorksCard from "./EscrowWorksCard";
import Image from "next/image";
import BoostEarning from "../shared/layout/BoostEarning";

export default function OfferDetail() {
  return (
    <div className="">
      <div className="">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#000000] mb-2">
            Offer Details
          </h1>
          <p className="text-[#000000] text-sm md:text-base">
            Review the offer details before proceeding with the trade
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-7 md:space-y-6">
            {/* Offer Details Card */}
            <OfferDetailsCard />

            {/* Offer Terms & Conditions Card */}
            <OfferTermsConditionsCard />

            {/* Enter Trade Details Card */}
            <EnterTradeDetailsCard />

            {/* Seller's Notes Card */}
            <div className="md:block hidden bg-white rounded-[10px] p-5 md:p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#000000] mb-3">
                Seller&apos;s Notes
              </h3>
              <p className="text-[#374151] sm:text-[16px] text-sm leading-relaxed">
                Once you confirm, please stay online. I&apos;ll send payment
                details immediately. Make sure to include the transaction
                reference in your payment description.
              </p>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1 space-y-5 md:space-y-6">
            {/* How Escrow Works Card */}
            <EscrowWorksCard />

            {/* Boost Your Earning Card */}
            <BoostEarning />
            {/* Seller's Notes Card */}
            <div className="block md:hidden bg-white rounded-[10px] p-5 md:p-6 shadow-sm mt-8">
              <h3 className="text-xl font-semibold text-[#000000] mb-3">
                Seller&apos;s Notes
              </h3>
              <p className="text-[#374151] sm:text-[16px] text-sm leading-relaxed">
                Once you confirm, please stay online. I&apos;ll send payment
                details immediately. Make sure to include the transaction
                reference in your payment description.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
