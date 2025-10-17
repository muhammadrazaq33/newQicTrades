"use client";

import type * as React from "react";
import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// ✅ Define explicit option types matching ResellOffers.tsx
type CryptoOption = "All" | "BTC" | "USDT";
type OfferTypeOption = "All" | "Buy" | "Sell";
type PaymentOption = "All" | "Capitec Pay" | "Skrill" | "PayPal";
type SortOption =
  | "Relevance"
  | "Best Rating"
  | "Price: Low to High"
  | "Price: High to Low";

// ✅ Updated prop types — strongly typed for each filter
type FiltersBarProps = {
  query: string;
  onQueryChange: (v: string) => void;

  cryptoFilter: CryptoOption;
  onCryptoChange: (v: CryptoOption) => void;

  offerTypeFilter: OfferTypeOption;
  onOfferTypeChange: (v: OfferTypeOption) => void;

  paymentFilter: PaymentOption;
  onPaymentChange: (v: PaymentOption) => void;

  sortBy: SortOption;
  onSortByChange: (v: SortOption) => void;

  cryptoOptions: string[];
  offerTypeOptions: string[];
  paymentOptions: string[];
  sortOptions: string[];
};

export default function FiltersBar({
  query,
  onQueryChange,
  cryptoFilter,
  onCryptoChange,
  offerTypeFilter,
  onOfferTypeChange,
  paymentFilter,
  onPaymentChange,
  sortBy,
  onSortByChange,
  cryptoOptions,
  offerTypeOptions,
  paymentOptions,
  sortOptions,
}: FiltersBarProps) {
  return (
    <div className="mb-5 rounded-xl border border-[#EAECF0] bg-white p-3 md:p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        {/* Search */}
        <div className="relative flex-1 min-w-0 ">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#98A2B3]" />
          <Input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search by payment method or trader name..."
            className="h-10 w-full rounded-lg border border-[#E5E7EB] pl-9 text-[14px] placeholder:text-[#98A2B3] focus-visible:ring-0 bg-white"
          />
        </div>

        {/* Cryptocurrency */}
        <Dropdown
          label="Cryptocurrency"
          value={cryptoFilter}
          onChange={onCryptoChange}
          options={cryptoOptions}
        />

        {/* Offer Type */}
        <Dropdown
          label="Offer Type"
          value={offerTypeFilter}
          onChange={onOfferTypeChange}
          options={offerTypeOptions}
        />

        {/* Payment Method */}
        <Dropdown
          label="Payment Method"
          value={paymentFilter}
          onChange={onPaymentChange}
          options={paymentOptions}
          className="min-w-[168px]"
        />

        {/* Sort By */}
        <Dropdown
          label="Sort By"
          value={sortBy}
          onChange={onSortByChange}
          options={sortOptions}
          icon={<SlidersHorizontal className="h-4 w-4 text-[#475467]" />}
        />
      </div>
    </div>
  );
}

function Dropdown(props: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  className?: string;
  icon?: React.ReactNode;
}) {
  const { label, value, options, onChange, className, icon } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`h-10 justify-between gap-2 rounded-lg border-[#E4E7EC] bg-white px-3 text-[14px] text-[#344054] hover:bg-white ${className || ""}`}
        >
          <span className="line-clamp-1 flex items-center gap-2">
            {icon ? icon : null}
            <span className="text-[#98A2B3]">{label}</span>
          </span>
          <div className="ml-2 flex items-center gap-1">
            <span className="max-w-[120px] truncate text-[#101828]">
              {value}
            </span>
            <ChevronDown className="h-4 w-4 text-[#475467]" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-[220px] bg-white border border-[#E5E7EB]"
      >
        {options.map((opt) => (
          <DropdownMenuItem key={opt} onClick={() => onChange(opt)}>
            {opt}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
