import { ArrowRight, ArrowUp } from "lucide-react";

export default function MarketPlaceHero() {
  return (
    <section className="">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-stretch">
        {/* Right content first on mobile */}
        <div className="order-1 md:order-2 grid grid-cols-2 sm:gap-5 gap-3">
          {/* 1st */}
          <div className="p-4 bg-white rounded-[12px] shadow-xl sm:space-y-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="sm:text-xl text-[16px] font-bold text-[#000]">
                BTC
              </p>
              <div className="flex items-center">
                <p>
                  <ArrowUp className="text-[#22C55E] h-5 w-5" />
                </p>
                <p className="text-[#22C55E] sm:text-[16px] text-[13px]">
                  1.3%
                </p>
              </div>
            </div>
            <div className="sm:text-2xl text-[20px] font-bold ">$65,980</div>
            <div className="flex items-center justify-between">
              <p className="sm:text-[16px] text-[12px] text-[#6B7280]">
                Active Trades
              </p>
              <p className="text-[#374151] sm:text-[16px] text-[12px] font-medium">
                12,590
              </p>
            </div>
          </div>
          {/* 2nd */}
          <div className="p-4 bg-white rounded-[12px] shadow-xl sm:space-y-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="sm:text-xl text-[16px] font-bold text-[#000]">
                USDT
              </p>
              <div className="flex items-center">
                <p>
                  <ArrowUp className="text-[#22C55E] h-5 w-5" />
                </p>
                <p className="text-[#22C55E] sm:text-[16px] text-[13px]">
                  5.8%
                </p>
              </div>
            </div>
            <div className="sm:text-2xl text-[20px] font-bold ">$72,820</div>
            <div className="flex items-center justify-between">
              <p className="sm:text-[16px] text-[12px] text-[#6B7280]">
                Active Trades
              </p>
              <p className="text-[#374151] sm:text-[16px] text-[12px] font-medium">
                63,320
              </p>
            </div>
          </div>
          {/* 3d */}
          <div className="p-4 bg-white rounded-[12px] shadow-xl sm:space-y-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="sm:text-xl text-[16px] font-bold text-[#000]">
                ETH
              </p>
              <div className="flex items-center">
                <p>
                  <ArrowUp className="text-[#22C55E] h-5 w-5" />
                </p>
                <p className="text-[#22C55E] sm:text-[16px] text-[13px]">
                  3.5%
                </p>
              </div>
            </div>
            <div className="sm:text-2xl text-[20px] font-bold ">$72,950</div>
            <div className="flex items-center justify-between">
              <p className="sm:text-[16px] text-[12px] text-[#6B7280]">
                Active Trades
              </p>
              <p className="text-[#374151] sm:text-[16px] text-[12px] font-medium">
                87,330
              </p>
            </div>
          </div>
          {/* 4th */}
          <div className="p-4 flex justify-center items-center">
            <p className="sm:text-[18px] text-[12px] text-[#6B7280]">
              Rates update every minute
            </p>
          </div>
        </div>

        {/* Left content on mobile bottom */}
        <div className="order-2 md:order-1 sm:mt-0 mt-4 flex flex-col justify-center sm:pr-8 md:pr-12 pr-0">
          <h1 className="text-[22px] sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-8 sm:leading-tight sm:text-left text-center">
            Buy & Sell Bitcoin or USDT Instantly
          </h1>
          <p className="mt-4.5 text-slate-600 text-base font-medium sm:text-lg sm:text-left text-center">
            Trade securely using our escrow protection — fast, simple, and
            transparent.
          </p>
          <div className="sm:mt-12 mt-11 flex items-center gap-3 sm:self-start self-center">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-[#69C5FF] to-[#009CFF]
 px-6 py-6 text-white font-medium shadow-sm ring-1 ring-[#139CF8]/20 transition-colors min-w-40"
            >
              Buy Crypto
            </a>
            <a
              href="#"
              className="inline-flex h-11  items-center justify-center rounded-lg border border-[#139CF8] bg-white px-5 py-6 text-[#139CF8] font-medium hover:bg-[#EAF5FF] transition-colors min-w-40"
            >
              Sell Crypto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
