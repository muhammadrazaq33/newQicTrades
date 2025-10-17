import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PortfolioChart from "@/components/WalletComponents/PortfolioChart";
import TransactionTable from "@/components/WalletComponents/TransactionTable";
import WalletCards from "@/components/WalletComponents/WalletCards";
import { WarningProvider } from "@radix-ui/react-dialog";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  BatteryWarningIcon,
  ChevronRight,
  FileWarningIcon,
  Info,
  Lock,
  MessageSquareWarningIcon,
  RefreshCw,
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-8 py-12">

        {/* Wallet Cards */}
        <WalletCards />
        {/* Action Buttons */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Button
            className="bg-[linear-gradient(180deg,#009CFF_0%,#63C3FF_100%)] h-12 w-full border-0 text-white rounded-[10px] sm:text-[18px] text-[16px] shadow-sm hover:opacity-95"
            variant="ghost"
          >
            <ArrowDownToLine
              className="mr-1 sm:h-6 h-5 sm:w-6 w-5"
              strokeWidth={3}
            />
            Deposit
          </Button>

          {/* Outline neutral */}
          <Button
            className="h-12 w-full rounded-[10px] sm:text-[18px] text-[16px] border border-[#D8DFEA] bg-white text-[#1F2432] hover:bg-[#F5F7FB]"
            variant="outline"
          >
            <ArrowUpFromLine
              className="mr-1 sm:h-6 h-5 sm:w-6 w-5 text-[#1F2432]"
              strokeWidth={3}
            />
            Withdraw
          </Button>

          <Button
            className="h-12 w-full rounded-[10px] sm:text-[18px] text-[16px] border border-[#D8DFEA] bg-white text-[#1F2432] hover:bg-[#F5F7FB]"
            variant="outline"
          >
            <RefreshCw
              className="mr-1 sm:h-6 h-5 sm:w-6 w-5 text-[#1F2432]"
              strokeWidth={3}
            />
            Transfer
          </Button>
        </div>

        {/* Table + Chart */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="rounded-2xl border border-[#E6ECF4] bg-white shadow-sm lg:col-span-2">
            <CardContent className="p-0">
              <TransactionTable />
            </CardContent>
          </Card>

          <Card className="rounded-2xl border border-[#E6ECF4] bg-white shadow-sm">
            <CardContent className="p-0">
              <PortfolioChart />
            </CardContent>
          </Card>
        </div>

        {/* Security Tip */}
        <div className="mt-6 rounded-[10px] border border-[#E6ECF4] bg-white p-4 text-sm text-[#6B7280]">
          <div className="flex items-start gap-2">
            <div className="inline-flex  items-center justify-center gap-2">
              <Lock className="h-4 w-4 text-[#6B7280]" strokeWidth={3} />
              <p className="text-[#374151] sm:text-[13px] text-[11px]">⚠️ </p>
            </div>
            <p className="text-[#374151] sm:text-[16px] text-[13px]">
              <span className="font-bold text-[#374151]">Security Tip:</span>{" "}
              Never share your private keys or passwords. Always verify wallet
              addresses before transferring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
