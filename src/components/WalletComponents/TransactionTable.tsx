"use client";

import { transactions, type Transaction } from "../../data/TransactionData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  ArrowBigDown,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  ExternalLink,
} from "lucide-react";

function StatusPill({ status }: { status: Transaction["status"] }) {
  if (status === "Completed")
    return (
      <Badge className="rounded-full bg-[#DCFCE7] px-3 py-1 sm:text-xs text-[10px] text-[#166534] hover:bg-[#E8FFF1]">
        Completed
      </Badge>
    );
  if (status === "Pending")
    return (
      <Badge className="rounded-full bg-[#FEF9C3] px-3 py-1 sm:text-xs text-[10px] text-[#854D0E] hover:bg-[#FFF8E6]">
        Pending
      </Badge>
    );
  return (
    <Badge className="rounded-full bg-[#FEE2E2] px-3 py-1 sm:text-xs text-[10px] text-[#991B1B] hover:bg-[#FFECEC]">
      Failed
    </Badge>
  );
}

export default function TransactionTable() {
  return (
    <div className="w-full">
      <div className="border-b border-[#E6ECF4] px-4 py-4 md:px-6">
        <h3 className="sm:text-[22px] text-lg font-bold text-[#1F2937] -mt-3 pb-3">
          Transaction History
        </h3>
      </div>

      <div className="overflow-x-auto px-4 md:px-6">
        <Table className="min-w-[720px] border-separate border-spacing-y-3">
          <TableHeader>
            <TableRow className="border-b border-[#E6ECF4] text-[#6B7280]">
              <TableHead className=" text-[#6B7280] font-medium sm:text-[15px] text-[11px]">
                Date
              </TableHead>
              <TableHead className="text-[#6B7280] font-medium sm:text-[15px] text-[11px]">
                Type{" "}
              </TableHead>
              <TableHead className="text-[#6B7280] font-medium sm:text-[15px] text-[11px]">
                Currency
              </TableHead>
              <TableHead className="text-[#6B7280] font-medium sm:text-[15px] text-[11px]">
                Amount
              </TableHead>
              <TableHead className="text-[#6B7280] font-medium sm:text-[15px] text-[11px]">
                Status
              </TableHead>
              <TableHead className="text-right text-[#6B7280] font-medium sm:text-[15px] text-[11px]">
                TxID
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.slice(0, 5).map((tx, idx) => (
              <TableRow
                key={idx}
                className="bg-white ring-1 ring-[#F0F3F8] hover:bg-[#F9FBFF] transition-colors"
              >
                <TableCell className="first:rounded-l-lg whitespace-nowrap text-[#1F2937] sm:text-[15px] text-[11px]">
                  {" "}
                  {tx.date}
                </TableCell>
                <TableCell className="text-[#1F2937] sm:text-[15px] text-[11px]">
                  {tx.type}
                </TableCell>
                <TableCell className="text-[#1F2937] sm:text-[15px] text-[11px]">
                  {tx.currency}
                </TableCell>
                <TableCell className="text-[#1F2937] sm:text-[15px] text-[11px]">
                  {tx.amount}
                </TableCell>
                <TableCell>
                  <StatusPill status={tx.status} />
                </TableCell>
                <TableCell className="last:rounded-r-lg text-right">
                  <div className="ml-auto inline-flex items-center gap-2 text-[#7B8496]">
                    <span className="sm:text-[15px] text-[11px] text-[#6B7280]">
                      {tx.txid}
                    </span>
                    <Copy className="h-4 w-4 cursor-pointer text-[#9CA3AF]" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-between gap-3 px-4 py-4 text-sm text-[#7B8496] md:flex-row md:px-6">
        <div className="text-[#6B7280] sm:text-[15px] text-[11px]">
          Showing <span>1-5</span> of <span>7</span> transactions
        </div>
        <div className="inline-flex items-center gap-2">
          <button
            className="h-9 w-9 rounded-full border border-[#E1E7F0] bg-white text-[#7B8496] hover:bg-[#F5F7FB] flex justify-center items-center"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="h-9 min-w-9 rounded-full border border-[#2775FF] bg-[#009CFF] px-3 text-white">
            1
          </button>
          <button className="h-9 min-w-9 rounded-full border border-[#E1E7F0] bg-white px-3 text-[#4B5563] hover:bg-[#F5F7FB]">
            2
          </button>
          <button
            className="h-9 w-9 rounded-full border border-[#E1E7F0] bg-white text-[#4B5563] hover:bg-[#F5F7FB]  flex justify-center items-center"
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
