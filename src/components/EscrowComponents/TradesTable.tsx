"use client";

import type React from "react";

import type { Trade, TabKey } from "@/data/TradesTableData";
import { Eye, CheckCircle2, XCircle } from "lucide-react";

export function TradesTable({ trades, tab }: { trades: Trade[]; tab: TabKey }) {
  return (
    <div className=" mt-2">
      {/* Responsive table with horizontal scroll on all screens */}
      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="min-w-[520px] w-full border-collapse text-left text-sm ">
          <thead className="bg-[#F8FAFC] text-slate-500 sm:text-[15px] text-[10px]">
            <tr className="[&>th]:px-4 [&>th]:py-5 [&>th]:font-medium">
              <th className="min-w-[150px] ">Transaction ID</th>
              <th className="min-w-[200px]">Buyer</th>
              <th className="min-w-[160px]">Seller</th>
              <th className="min-w-[180px]">Amount</th>
              <th className="min-w-[120px]">Status</th>
              <th className="min-w-[120px]">Date</th>
              <th className="min-w-[120px] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {trades.map((t) => (
              <tr
                key={t.id}
                className="hover:bg-slate-50 sm:text-[15px] text-[10px]"
              >
                <td className="px-4 py-4 font-medium text-[#0F172A]">{t.id}</td>
                <td className="px-4 py-4 text-[#475569]"> Buyer#{t.id.slice(-4).toUpperCase()}</td>
                <td className="px-4 py-4text-[#475569]">{t.seller}</td>
                <td className="px-4 py-4">
                  <span className="font-medium text-[#475569]">
                    {t.amountCrypto}
                  </span>{" "}
                  <span className="text-[#94A3B8]">/ {t.amountFiat}</span>
                </td>
                <td className="px-4 py-4">
                  <StatusBadge tab={tab} />
                </td>
                <td className="px-4 py-4 text-[#475569] ">{t.date}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center justify-end gap-3">
                    <IconButton
                      title="View"
                      className="text-[#0A2463] hover:text-[#2B4CB3]"
                    >
                      <Eye className="sm:h-6 h-5 sm:w-6 w-5" />
                    </IconButton>
                    <IconButton
                      title={tab === "ongoing" ? "Mark Complete" : "Approve"}
                      className="text-[#22C55E] hover:text-emerald-700"
                    >
                      <CheckCircle2 className="sm:h-6 h-5 sm:w-6 w-5" />
                    </IconButton>
                    <IconButton
                      title={tab === "disputed" ? "Resolve/Close" : "Remove"}
                      className="text-[#EF4444] hover:text-rose-700"
                    >
                      <XCircle className="sm:h-6 h-5 sm:w-6 w-5" />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({ tab }: { tab: TabKey }) {
  if (tab === "ongoing") {
    return (
      <span className="inline-flex items-center rounded-full bg-[#FEF3C7] px-2.5 py-1 sm:text-[13px] text-[10px] font-semibold text-[#F59E0B] ring-1 ring-inset ring-amber-200">
        Active
      </span>
    );
  }
  if (tab === "completed") {
    return (
      <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
        Completed
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full bg-rose-100 px-2.5 py-1 text-xs font-medium text-rose-700 ring-1 ring-inset ring-rose-200">
      Disputed
    </span>
  );
}

function IconButton({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      className={[
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-transparent bg-white shadow-sm",
        "hover:bg-slate-50 active:scale-95 transition",
        className || "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
