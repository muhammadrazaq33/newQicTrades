import { Globe, Shield, TrendingUp, UsersRound } from "lucide-react";

const features = [
  {
    icon: <Shield className="sm:h-8 h-4 sm:w-8 w-4 text-[#139CF8]" />,
    title: "Secure Escrow",
    desc: "Every transaction is protected by our secure escrow system, ensuring safe trades.",
  },
  {
    icon: <TrendingUp className="sm:h-8 h-4 sm:w-8 w-4 text-[#139CF8]" />,
    title: "Resell & Earn",
    desc: "Add your markup to existing offers and profit from successful trades.",
  },
  {
    icon: <UsersRound className="sm:h-8 h-4 sm:w-8 w-4 text-[#139CF8]" />,
    title: "Affiliate Program",
    desc: "Refer users and earn a percentage of their trading fees for life.",
  },
  {
    icon: <Globe className="sm:h-8 h-4 sm:w-8 w-4 text-[#139CF8]" />,
    title: "Global Marketplace",
    desc: "Connect with traders worldwide and access multiple payment methods.",
  },
];

export default function PlatformFeatures() {
  return (
    <section className="">
      <div className="rounded-3xl text-white">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl md:text-3xl font-semibold">
            Platform Features
          </h3>
          <p className="sm:mt-8 mt-6 sm:text-[16px] text-[14px] text-white/70">
            QicTrader offers a complete suite of tools to make crypto trading
            secure, profitable, and accessible.
          </p>
        </div>

        <div className="sm:mt-12 mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl bg-[#0F131A] border border-[#1E2630] sm:p-8 p-4 hover:border-[#2A3543] transition-colors"
            >
              <div className="sm:h-14 h-8 sm:w-14 w-8 grid place-items-center rounded-lg bg-[#10222E] border border-[#1E2630]">
                {f.icon}
              </div>
              <h4 className="sm:mt-10 mt-6 sm:text-[20px] text-[14px] font-semibold">
                {f.title}
              </h4>
              <p className="sm:mt-5 mt-4 sm:text-[16px] text-[12px] text-white/70">
                {f.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
