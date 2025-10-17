import ActiveTradesTable from "@/components/DashboardComponents/ActiveTradesTable";
import DashboardCharts from "@/components/DashboardComponents/DashboardCharts";
import DashboardOverview from "@/components/DashboardComponents/DashboardOverview";
import OffersSummaryTable from "@/components/DashboardComponents/OffersSummaryTable";
import StatsCards from "@/components/DashboardComponents/StatsCards";
import { Info } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-8 py-12">

        {/* Stats Cards */}
        <StatsCards />
        {/* Dashboard Charts */}
        <DashboardCharts />
        {/* <Dashboard Overview Cards /> */}
        <DashboardOverview />
        {/* Offers Summary Table */}
        <OffersSummaryTable />
        {/* Active Trades Table */}
        <ActiveTradesTable />
      </div>
    </div>
  );
}
