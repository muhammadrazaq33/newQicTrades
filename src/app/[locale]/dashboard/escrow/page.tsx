import { ModeratorReview } from "@/components/EscrowComponents/ModeratorReview";
import { TradesTable } from "@/components/EscrowComponents/TradesTable";
import TradesTabs from "@/components/EscrowComponents/TradesTabs";

export default function Page() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-8 pb-12">
  

        {/* Trades Table */}
        <section className="">
          <TradesTabs />
        </section>

        {/* Moderator Review */}
        <section className="">
          <ModeratorReview />
        </section>
      </div>
    </div>
  );
}
