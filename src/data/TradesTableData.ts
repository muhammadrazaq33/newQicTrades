export type TabKey = "ongoing" | "completed" | "disputed";

export type Trade = {
  id: string;
  buyer: string;
  seller: string;
  amountCrypto: string;
  amountFiat: string;
  date: string; // ISO-like string for quick demo
};

export const ongoingTrades: Trade[] = [
  {
    id: "#TRX4829",
    buyer: "john.doe@example.com",
    seller: "crypto_seller_1",
    amountCrypto: "0.020 BTC",
    amountFiat: "$1,200",
    date: "2023-05-15",
  },
  {
    id: "#TRX4832",
    buyer: "emma.wilson@example.com",
    seller: "eth_trader",
    amountCrypto: "0.015 BTC",
    amountFiat: "$900",
    date: "2023-05-10",
  },
];

export const completedTrades: Trade[] = [
  {
    id: "#TRX4711",
    buyer: "alex.lee@example.com",
    seller: "btc_store",
    amountCrypto: "0.050 BTC",
    amountFiat: "$3,100",
    date: "2023-04-28",
  },
  {
    id: "#TRX4697",
    buyer: "maria.garcia@example.com",
    seller: "coin_vendor",
    amountCrypto: "0.010 BTC",
    amountFiat: "$620",
    date: "2023-04-22",
  },
];

export const disputedTrades: Trade[] = [
  {
    id: "#TRX4603",
    buyer: "steve.chan@example.com",
    seller: "crypto_seller_1",
    amountCrypto: "0.025 BTC",
    amountFiat: "$1,500",
    date: "2023-04-10",
  },
  {
    id: "#TRX4592",
    buyer: "noor.khan@example.com",
    seller: "eth_trader",
    amountCrypto: "0.018 BTC",
    amountFiat: "$1,080",
    date: "2023-04-08",
  },
];
