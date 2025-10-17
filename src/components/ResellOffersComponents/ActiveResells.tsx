"use client";
import { TrendingUp } from "lucide-react";

export default function ActiveResells() {
  return (
    <aside className="order-2 md:order-none self-start bg-white p-4 md:sticky md:top-6 md:p-5">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center">
          <TrendingUp className="h-6 w-6 text-[#1E4D8B]" />
        </div>
        <h2 className="sm:text-[20px] text-[18px] font-bold text-[#1F2937]">
          Your Active Resells
        </h2>
      </div>

      <div className="space-y-4">
        <ActiveResellItem
          title="BTC via Capitec"
          status={{ label: "Active", colorBg: "#DCFCE7", colorText: "#166534" }}
          markup="+2.5%"
          profit="+1250 ZAR"
        />
        <ActiveResellItem
          title="USDT via PayPal"
          status={{ label: "Active", colorBg: "#DCFCE7", colorText: "#166534" }}
          markup="+3%"
          profit="+850 ZAR"
        />
        <ActiveResellItem
          title="BTC via Skrill"
          status={{
            label: "Pending",
            colorBg: "#FEF9C3",
            colorText: "#854D0E",
          }}
          markup="+1.8%"
          profit="-"
        />
      </div>

      <button
        type="button"
        className="mt-3 inline-flex sm:text-[16px] text-[13px] font-medium text-[#1E4D8B] hover:underline"
      >
        View all resells
      </button>
    </aside>
  );
}

function ActiveResellItem({
  title,
  status,
  markup,
  profit,
}: {
  title: string;
  status: { label: string; colorBg: string; colorText: string };
  markup: string;
  profit: string;
}) {
  return (
    <div className=" p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="sm:text-[16px] text-[14px] font-medium text-[#000000]">
            {title}
          </h3>
          <div className="mt-1 grid grid-cols-2 gap-x-6 gap-y-2 sm:text-[13px] text-[12px]">
            <p className="text-[#6B7280]">Markup:</p>
            <p className="text-[#F2994A] font-medium">{markup}</p>
            <p className="text-[#667085]">Est. Profit:</p>
            <p className="text-[#000000] font-semibold">{profit}</p>
          </div>
        </div>
        <span
          className="shrink-0 rounded-full sm:px-3 px-2.5 sm:py-1.5 py-1 sm:text-[15px] text-[11px]"
          style={{ backgroundColor: status.colorBg, color: status.colorText }}
        >
          {status.label}
        </span>
      </div>
    </div>
  );
}
