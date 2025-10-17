import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-stretch">
        {/* Right content first on mobile */}
        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-2xl border-2 border-[#009CFF] bg-white p-3 sm:p-5 md:p-6">
            <div className="absolute inset-0 pointer-events-none" />
            {/* Top flow: Vendor -> Reseller -> Client */}
            <div className="flex items-center justify-between gap-3 sm:gap-4 rounded-xl bg-white px-3 sm:px-4 py-3">
              <Pill label="Vendor" />
              <ArrowRight className="h-5 w-5 text-[#139CF8]" />
              <Pill label="Reseller" />
              <ArrowRight className="h-5 w-5 text-[#139CF8]" />
              <Pill label="Client" />
            </div>
            <div className="mt-1.5 flex items-center justify-between text-center text-[11px] sm:text-xs text-[#828282] sm:px-5 px-3">
              <span>Creates Offer</span>
              <span>Adds Markup</span>
              <span>Buys Crypto</span>
            </div>

            <div className="sm:mt-16 mt-10 rounded-xl border-2 border-[#009CFF] bg-white p-3 sm:p-5">
              <div className="flex items-center justify-between text-[16px]">
                <span className="text-slate-600">Transaction</span>
                <span className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[#009CFF] font-medium">
                  Protected by Escrow
                </span>
              </div>
              <button className="mt-3 w-full rounded-lg border-2 border-[#009CFF] bg-white px-3 py-2 text-[#139CF8] text-[18px] font-bold hover:bg-[#EAF5FF] transition-colors">
                QicTrader Secure Flow
              </button>
            </div>
          </div>
        </div>

        {/* Left content on mobile bottom */}
        <div className="order-2 md:order-1 flex flex-col justify-center sm:pr-6 pr-0">
          <h1 className="text-[22px] sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-8 sm:leading-tight sm:text-left text-center">
            Buy, Sell & Resell Crypto Securely with Escrow Protection
          </h1>
          <p className="mt-3 text-slate-600 text-base font-medium sm:text-lg sm:text-left text-center">
            QicTrader lets you trade BTC &amp; USDT safely — create offers,
            resell deals, and earn through our affiliate program.
          </p>
          <div className="sm:mt-12 mt-10 flex items-center gap-3 sm:self-start self-center">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-[#69C5FF] to-[#009CFF]
 px-6 py-6 text-white font-medium shadow-sm ring-1 ring-[#139CF8]/20 transition-colors min-w-40"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-flex h-11  items-center justify-center rounded-lg border border-[#139CF8] bg-white px-5 py-6 text-[#139CF8] font-medium hover:bg-[#EAF5FF] transition-colors min-w-40"
            >
              View Marketplace
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 justify-center sm:w-20 w-16 sm:h-20 h-16 rounded-full bg-[#EDF8FF] px-3 py-3 sm:text-sm text-xs font-bold text-[#009CFF]">
      {label}
    </span>
  );
}
