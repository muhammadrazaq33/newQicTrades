export type TxStatus = "Completed" | "Pending" | "Failed";
export type TxType = "Deposit" | "Withdraw" | "Transfer";

export interface Transaction {
  date: string;
  type: TxType;
  currency: "BTC" | "USDT" | "ZAR";
  amount: string;
  status: TxStatus;
  txid: string;
}

export const transactions: Transaction[] = [
  {
    date: "Oct 6, 2025",
    type: "Deposit",
    currency: "BTC",
    amount: "0.015",
    status: "Completed",
    txid: "x7f...c2e",
  },
  {
    date: "Oct 5, 2025",
    type: "Withdraw",
    currency: "USDT",
    amount: "150.00",
    status: "Pending",
    txid: "z9e...1af",
  },
  {
    date: "Oct 3, 2025",
    type: "Transfer",
    currency: "ZAR",
    amount: "1000",
    status: "Completed",
    txid: "y8a...bbd",
  },
  {
    date: "Oct 1, 2025",
    type: "Deposit",
    currency: "BTC",
    amount: "0.005",
    status: "Completed",
    txid: "k7h...m2n",
  },
  {
    date: "Sep 28, 2025",
    type: "Withdraw",
    currency: "USDT",
    amount: "50.00",
    status: "Failed",
    txid: "p4q...1Bu",
  },
  {
    date: "Sep 22, 2025",
    type: "Deposit",
    currency: "USDT",
    amount: "500.00",
    status: "Completed",
    txid: "f1a...9zQ",
  },
  {
    date: "Sep 18, 2025",
    type: "Transfer",
    currency: "BTC",
    amount: "0.010",
    status: "Completed",
    txid: "m3r...7Ls",
  },
];
