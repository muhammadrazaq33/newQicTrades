"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";
import { payoutHistory, type PayoutRow } from "@/data/PayoutHistory";

function StatusBadge({ status }: { status: PayoutRow["status"] }) {
  if (status === "Completed") {
    return (
      <span className="inline-flex items-center rounded-full bg-[#DCFCE7] px-2.5 py-1 sm:text-[14px] text-[12px] font-medium text-[#166534]">
        Completed
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-[#FEF9C3] px-2.5 py-1 sm:text-[14px] text-[12px] font-medium text-[#854D0E]">
      Pending
    </span>
  );
}

export default function AffiliatePayoutTable() {
  return (
    <Card className="rounded-2xl border border-[#E8EAEE] bg-white shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="sm:text-[20px] text-[16px] font-bold text-[#111827]">
          Affiliate Payout History
        </CardTitle>
        <Button
          variant="ghost"
          className="sm:h-10 h-8 sm:w-10 w-8 rounded-[10px] text-[#6B7280] hover:bg-[#F3F4F6]"
          aria-label="Download"
        >
          <Download className="sm:h-6 h-4 sm:w-6 w-4" strokeWidth={3} />
          <span className="sr-only">Download</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table className="sm:min-w-[640px] min-w-[440px]">
            <TableHeader>
              <TableRow className="border-0 border-b border-[#EEF1F4]">
                <TableHead className="text-[10px] sm:text-[15px] font-medium text-[#6B7280]">
                  Date
                </TableHead>
                <TableHead className="text-[10px] sm:text-[15px] font-medium text-[#6B7280]">
                  Amount
                </TableHead>
                <TableHead className="text-[10px] sm:text-[15px] font-medium text-[#6B7280] text-center">
                  Method
                </TableHead>
                <TableHead className="text-center pr-5 text-[10px] sm:text-[15px] font-medium text-[#6B7280]">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payoutHistory.map((row, idx) => (
                <TableRow
                  key={idx}
                  className={`border-0 border-b border-[#EEF1F4] rounded-[10px] hover:bg-transparent ${
                    idx % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"
                  }`}
                >
                  <TableCell className="py-4 font-medium sm:text-[15px] text-[10px] text-[#111827]">
                    {row.date}
                  </TableCell>
                  <TableCell className="py-4 font-medium sm:text-[15px] text-[10px] text-[#111827]">
                    {row.amount}
                  </TableCell>
                  <TableCell className="py-4 sm:text-[15px] text-[10px] text-[#1F2A37] text-center">
                    {row.method}
                  </TableCell>
                  <TableCell className="py-4 text-center">
                    <StatusBadge status={row.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
