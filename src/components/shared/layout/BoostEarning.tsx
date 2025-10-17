import Image from "next/image";
import React from "react";

function BoostEarning() {
  return (
    <div className="w-full md:max-w-[400px]">
      <div
        className="rounded-2xl p-5 text-[#7C3A00] shadow-[0_10px_24px_rgba(0,0,0,0.08)] flex items-center justify-between gap-4"
        style={{
          background:
            "linear-gradient(103.67deg, #F19A2F 14.88%, #FBC84B 99.43%)",
        }}
      >
        {/* content */}
        <div className="self-start">
          <div className="sm:text-[24px] text-[20px] font-bold text-white">
            Boost Your Earning!
          </div>
          <p className="mt-2 sm:text-[16px] text-[13px] leading-6 text-white/90">
            Join our Affiliate Program and earn up to 10% commission
          </p>
          <button
            className="sm:mt-10 mt-8 inline-flex items-center justify-center rounded-lg bg-white px-4 py-2.5 text-[14px] font-semibold text-[#F59E0B] shadow-sm"
            aria-label="Join Now"
          >
            Join Now
          </button>
        </div>
        <div className="self-end">
          {/*  */}
          <Image
            src="/Images/CoinImage.png"
            width={130}
            height={130}
            className="object-contain"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default BoostEarning;
