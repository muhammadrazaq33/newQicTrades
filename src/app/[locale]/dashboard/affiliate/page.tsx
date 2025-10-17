import ActivityTable from "@/components/AffiliateComponents/ActivityTable";
import AffiliatePayoutTable from "@/components/AffiliateComponents/AffiliatePayoutTable";
import AffiliateStatsCards from "@/components/AffiliateComponents/AffiliateStatsCards";
import EarningsChart from "@/components/AffiliateComponents/EarningsChart";
import FaqAccordion from "@/components/AffiliateComponents/FaqAccordion";
import InviteCard from "@/components/AffiliateComponents/InviteCard";
import TieredRewards from "@/components/AffiliateComponents/TieredRewards";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-8 py-12">
        {/* Header */}

        <section className="mb-6 sm:mb-8">
          <AffiliateStatsCards />
        </section>
        {/* Invite */}
        <section className="mb-6 sm:mb-8">
          <InviteCard />
        </section>
        {/* Chart */}
        <section className="mb-6 sm:mb-8">
          <EarningsChart />
        </section>
        {/* Table */}
        <section className="mb-6 sm:mb-8">
          <ActivityTable />
        </section>
        {/* Tiered Rewards */}
        <section className="mb-6 sm:mb-8">
          <TieredRewards />
        </section>

        {/* Affiliate Payout Table */}
        <section className="mb-6 sm:mb-8">
          <AffiliatePayoutTable />
        </section>

        {/* Faq Accordion */}
        <section className="">
          <FaqAccordion />
        </section>
      </div>
    </div>
  );
}
