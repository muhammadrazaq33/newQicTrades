import { FileText, ShieldCheck, RefreshCw, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Create an Offer",
    desc: "Define price and payment method.",
    icon: <FileText className="sm:h-5 h-3.5 sm:w-5 w-3.5 text-[#139CF8]" />,
  },
  {
    title: "Resell Offers",
    desc: "Add markup and share.",
    icon: <RefreshCw className="sm:h-5 h-3.5 sm:w-5 w-3.5 text-[#139CF8]" />,
  },
  {
    title: "Escrow Secures the Trade",
    desc: "Funds released safely after confirmation.",
    icon: <ShieldCheck className="sm:h-5 h-3.5 sm:w-5 w-3.5 text-[#139CF8]" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="">
      <h3 className="text-center text-xl md:text-3xl font-semibold text-slate-900">
        How QicTrader Works
      </h3>

      {/* NOTE: Keep three columns even on mobile as requested */}
      <div className="mt-10 sm:mt-20 grid grid-cols-3 gap-2 sm:gap-6">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="relative flex flex-col items-center text-center"
          >
            <div className="grid place-items-center sm:h-12 h-8 sm:w-12 w-8 rounded-full bg-[#EAF5FF]">
              <span className="text-xl">{s.icon}</span>
            </div>

            {i < steps.length - 1 && (
              <div className="absolute top-6 right-[-10px] pointer-events-none">
                <div className="relative ">
                  <ArrowRight className="absolute -right-3 -top-3 h-6 w-6 text-[#139CF8]" />
                </div>
              </div>
            )}

            <div className="sm:mt-6 mt-4 font-medium text-slate-900 text-[10px] sm:text-base">
              {s.title}
            </div>
            <p className="sm:mt-3 mt-1.5 text-[9px] sm:text-sm text-slate-600">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
