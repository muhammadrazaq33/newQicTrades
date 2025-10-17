export type OfferRow = {
  id: string;
  type: "Buy" | "Sell";
  pair: string;
  ratePerUnit: string;
  limit: string;
  paymentMethod: string;
  status: "Active" | "Paused";
};

export const offers: OfferRow[] = [
  {
    id: "1",
    type: "Buy",
    pair: "BTC/ZAR",
    ratePerUnit: "850,000",
    limit: "0.1 - 1.0 BTC",
    paymentMethod: "Bank Transfer",
    status: "Active",
  },
  {
    id: "2",
    type: "Sell",
    pair: "USDT/ZAR",
    ratePerUnit: "18.50",
    limit: "100 - 5,000 USDT",
    paymentMethod: "PayPal",
    status: "Active",
  },
  {
    id: "3",
    type: "Buy",
    pair: "BTC/ZAR",
    ratePerUnit: "845,000",
    limit: "0.05 - 0.5 BTC",
    paymentMethod: "Cash Deposit",
    status: "Paused",
  },
  {
    id: "4",
    type: "Sell",
    pair: "BTC/USDT",
    ratePerUnit: "41,200",
    limit: "0.01 - 0.2 BTC",
    paymentMethod: "Crypto Transfer",
    status: "Active",
  },
];
