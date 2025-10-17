export type TradeRow = {
  id: string;
  tradeId: string;
  counterparty: string;
  crypto: "BTC" | "USDT";
  amount: string;
  status: "Active" | "Pending" | "Dispute";
  startDate: string;
};

export const trades: TradeRow[] = [
  {
    id: "1",
    tradeId: "T-48291",
    counterparty: "CryptoMaster",
    crypto: "BTC",
    amount: "0.45",
    status: "Active",
    startDate: "2023-06-15",
  },
  {
    id: "2",
    tradeId: "T-48290",
    counterparty: "BitTrader99",
    crypto: "USDT",
    amount: "1,200.00",
    status: "Active",
    startDate: "2023-06-14",
  },
  {
    id: "3",
    tradeId: "T-48285",
    counterparty: "CoinCollector",
    crypto: "BTC",
    amount: "0.12",
    status: "Pending",
    startDate: "2023-06-13",
  },
  {
    id: "4",
    tradeId: "T-48280",
    counterparty: "BlockchainBaron",
    crypto: "USDT",
    amount: "850.00",
    status: "Active",
    startDate: "2023-06-12",
  },
  {
    id: "5",
    tradeId: "T-48275",
    counterparty: "SatoshiFan",
    crypto: "BTC",
    amount: "0.22",
    status: "Dispute",
    startDate: "2023-06-11",
  },
  // Extra rows to total 12 (for pagination demo)
  {
    id: "6",
    tradeId: "T-48274",
    counterparty: "AltCoinAce",
    crypto: "USDT",
    amount: "2,400.00",
    status: "Active",
    startDate: "2023-06-10",
  },
  {
    id: "7",
    tradeId: "T-48273",
    counterparty: "HashHero",
    crypto: "BTC",
    amount: "0.31",
    status: "Pending",
    startDate: "2023-06-09",
  },
  {
    id: "8",
    tradeId: "T-48272",
    counterparty: "BlockBuddy",
    crypto: "USDT",
    amount: "640.00",
    status: "Active",
    startDate: "2023-06-08",
  },
  {
    id: "9",
    tradeId: "T-48271",
    counterparty: "ChainChamp",
    crypto: "BTC",
    amount: "0.08",
    status: "Dispute",
    startDate: "2023-06-07",
  },
  {
    id: "10",
    tradeId: "T-48270",
    counterparty: "LedgerLion",
    crypto: "USDT",
    amount: "1,050.00",
    status: "Active",
    startDate: "2023-06-06",
  },
  {
    id: "11",
    tradeId: "T-48269",
    counterparty: "WhaleWatcher",
    crypto: "BTC",
    amount: "0.16",
    status: "Active",
    startDate: "2023-06-05",
  },
  {
    id: "12",
    tradeId: "T-48268",
    counterparty: "MerkleMaven",
    crypto: "USDT",
    amount: "300.00",
    status: "Pending",
    startDate: "2023-06-04",
  },
];
