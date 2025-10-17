import { ArrowRight } from "lucide-react";

type Offer = {
  id: string;
  name: string;
  coin: "BTC" | "USDT";
  change: string;
  limit: string;
  payment: string;
  action: "Buy" | "Sell";
};

const offers: Offer[] = [
  {
    id: "1",
    name: "CryptoKing",
    coin: "BTC",
    change: "+2.05%",
    limit: "$ 20 - $ 1000",
    payment: "Bank Transfer",
    action: "Buy",
  },
  {
    id: "2",
    name: "BTCMaster",
    coin: "USDT",
    change: "+1.75%",
    limit: "$ 50 - $ 5000",
    payment: "PayPal",
    action: "Sell",
  },
  {
    id: "3",
    name: "CoinTrader",
    coin: "BTC",
    change: "+2.25%",
    limit: "$ 100 - $ 2500",
    payment: "Cash App",
    action: "Buy",
  },
  {
    id: "4",
    name: "BlockchainPro",
    coin: "USDT",
    change: "+1.50%",
    limit: "$ 200 - $ 10000",
    payment: "Wire Transfer",
    action: "Sell",
  },
];

export default function LiveMarket() {
  return (
    <section className="">
      <div className="text-center">
        <h2 className="text-xl md:text-3xl font-bold text-slate-900">
          Live Marketplace — Start Trading Instantly
        </h2>
        <p className="mt-4 sm:text-[16px] text-[14px] text-slate-600 max-w-2xl mx-auto">
          Browse active offers from verified traders or create your own to start
          buying and selling crypto securely.
        </p>
      </div>

      <div className="sm:mt-12 mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-4 md:gap-6">
        {offers.map((o) => (
          <MarketCard key={o.id} offer={o} />
        ))}
      </div>

      <div className="sm:mt-12 mt-8 flex justify-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-lg border border-[#139CF8] bg-white px-4 py-2.5 text-[#139CF8] font-medium hover:bg-[#EAF5FF] transition-colors"
        >
          View All Offers <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function MarketCard({ offer }: { offer: Offer }) {
  const isBuy = offer.action === "Buy";
  return (
    <article className="rounded-2xl bg-[#12161C] text-white border border-[#1E2630] p-3 sm:p-6 md:p-7 shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset]">
      <header className="flex items-center justify-between">
        <div className="flex items-center sm:gap-3 gap-1">
          <div className="sm:h-8 h-6 sm:w-8 w-6 rounded-full bg-[#0E2F45] text-[#009CFF] grid place-items-center font-medium tsm:ext-sm text-xs">
            {offer.name.charAt(0)}
          </div>
          <div>
            <div className="font-medium sm:text-xl text-[11px]">
              {offer.name}
            </div>
          </div>
        </div>
        <Badge coin={offer.coin} />
      </header>

      <dl className="mt-7 space-y-5 sm:text-sm text-[11px] text-white/80">
        <div className=" text-white/60 flex items-center justify-between">
          Price: <span className="text-[#22C55E]">{offer.change}</span>
        </div>
        <div className="flex items-end justify-between">
          <dt className="text-white/60">Limit:</dt>
          <dd>{offer.limit}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-white/60">Payment:</dt>
          <dd>{offer.payment}</dd>
        </div>
      </dl>

      <div className="mt-8">
        {isBuy ? (
          <button className="w-full rounded-lg bg-[#139CF8] hover:bg-[#0F8DE3] active:bg-[#0C7FCC] text-white px-3 py-2 font-medium transition-colors">
            Buy
          </button>
        ) : (
          <button className="w-full rounded-lg border border-[#139CF8] text-[#139CF8] hover:bg-[#0C2436] px-3 py-2 font-medium transition-colors">
            Sell
          </button>
        )}
      </div>
    </article>
  );
}

function Badge({ coin }: { coin: "BTC" | "USDT" }) {
  const styles =
    coin === "BTC"
      ? "bg-[#2A2113] text-[#F5B53F] border-[#80622A]"
      : "bg-[#0E1F16] text-[#22C55E] border-[#2B5C3F]";
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-1 sm:text-xs text-[9px] font-medium ${styles}`}
    >
      {coin}
    </span>
  );
}
