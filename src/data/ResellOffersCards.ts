export type Offer = {
  id: string;
  trader: string;
  ratingPct: number;
  trades: number;
  asset: "BTC" | "USDT";
  direction: "Buy" | "Sell";
  basePriceZAR: number;
  paymentMethod: "Capitec Pay" | "Skrill" | "PayPal";
  tradeMin: number;
  tradeMax: number;
  initialMarkupPct: number;
};

export const initialOffers: Offer[] = [
  {
    id: "1",
    trader: "SatoshiMaster",
    ratingPct: 98,
    trades: 742,
    asset: "BTC",
    direction: "Sell",
    basePriceZAR: 1230000,
    paymentMethod: "Capitec Pay",
    tradeMin: 500,
    tradeMax: 50000,
    initialMarkupPct: 2.5,
  },
  {
    id: "2",
    trader: "BitTrader",
    ratingPct: 96,
    trades: 531,
    asset: "BTC",
    direction: "Buy",
    basePriceZAR: 1235000,
    paymentMethod: "Skrill",
    tradeMin: 1000,
    tradeMax: 100000,
    initialMarkupPct: 1.7,
  },
  {
    id: "3",
    trader: "CryptoPro",
    ratingPct: 99,
    trades: 1024,
    asset: "USDT",
    direction: "Sell",
    basePriceZAR: 19.5,
    paymentMethod: "PayPal",
    tradeMin: 200,
    tradeMax: 20000,
    initialMarkupPct: 3,
  },
];
