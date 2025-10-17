export type ReferralRow = {
  date: string;
  username: string;
  status: "Active" | "Inactive";
  trades: number;
  earnings: number;
  rank: "Gold" | "Silver" | "Bronze" | string;
};

export const referrals: ReferralRow[] = [
  {
    date: "Oct 7, 2025",
    username: "@trade_master",
    status: "Active",
    trades: 14,
    earnings: 120.5,
    rank: "🥉 Bronze",
  },
  {
    date: "Oct 5, 2025",
    username: "@crypto_queen",
    status: "Inactive",
    trades: 3,
    earnings: 18.9,
    rank: "🥈 Silver",
  },
  {
    date: "Oct 1, 2025",
    username: "@zenbuyer",
    status: "Active",
    trades: 27,
    earnings: 242.0,
    rank: "🥇 Gold",
  },
  {
    date: "Sep 28, 2025",
    username: "@hodl_king",
    status: "Active",
    trades: 8,
    earnings: 67.3,
    rank: "🥈 Silver",
  },
  {
    date: "Sep 25, 2025",
    username: "@market_guru",
    status: "Active",
    trades: 21,
    earnings: 189.5,
    rank: "🥉 Bronze",
  },
];
