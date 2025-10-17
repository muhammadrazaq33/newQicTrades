export type PayoutStatus = "Completed" | "Pending";
export type PayoutMethod = "USDT" | "BTC" | "ETH";

export type PayoutRow = {
  date: string;
  amount: string;
  method: PayoutMethod;
  status: PayoutStatus;
};

export const payoutHistory: PayoutRow[] = [
  {
    date: "Oct 6, 2025",
    amount: "$120.00",
    method: "USDT",
    status: "Completed",
  },
  { date: "Oct 3, 2025", amount: "$98.50", method: "BTC", status: "Pending" },
  {
    date: "Sep 29, 2025",
    amount: "$75.25",
    method: "USDT",
    status: "Completed",
  },
  {
    date: "Sep 22, 2025",
    amount: "$142.75",
    method: "ETH",
    status: "Completed",
  },
  {
    date: "Sep 15, 2025",
    amount: "$67.80",
    method: "BTC",
    status: "Completed",
  },
];
