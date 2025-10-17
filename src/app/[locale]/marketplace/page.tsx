import MarketplaceContainer from "@/components/MarketPlaceComponents/MarketPlaceCom";
import MarketPlaceHero from "@/components/MarketPlaceComponents/MarketPlaceHero";
import BoostEarning from "@/components/shared/layout/BoostEarning";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FFFFFF] to-[#EFF6FF] ">
        <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-8 py-8 md:py-20 text-slate-800">
          <MarketPlaceHero />
        </div>
      </div>
      <div className="bg-[#F9FAFB] ">
        <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-8 pt-15 md:pt-20 pb-10 text-slate-800">
          {/* Header row: Title/desc left, Promo card right */}
          <div className="flex flex-col items-stretch justify-between gap-6 md:flex-row md:items-center">
            {/* Left: title + subtitle */}
            <div className="flex-1">
              <h1 className="text-[28px] font-extrabold leading-tight text-[#111827] md:text-[32px]">
                Marketplace
              </h1>
              <p className="mt-2 max-w-[560px] sm:text-[16px] text-[13px] leading-relaxed text-[#4B5563]">
                Find the best offers to buy or sell cryptocurrency with escrow
                protection.
              </p>
            </div>

            {/* Right: Promo card */}
            <BoostEarning />
          </div>
          {/* tas (sell and uy) */}
          <div className=" mt-10 flex items-center gap-6">
            <button className="relative pb-2 text-[15px] font-semibold text-[#0F172A]">
              Buy Offers
              <span className="absolute -bottom-[1px] left-0 right-0 h-[2px] rounded bg-[#2F80ED]" />
            </button>
            <button className="pb-2 text-[15px] font-medium text-[#6B7280] hover:text-[#111827]">
              Sell Offers
            </button>
          </div>

          {/* Divider */}
          <div className="mt-6 border-b border-[#E5E7EB]" />
          {/* MarketplaceContainer */}
          <MarketplaceContainer />
        </div>
      </div>
    </>
  );
}

export default page;
