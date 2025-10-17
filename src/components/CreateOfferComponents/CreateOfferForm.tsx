"use client";

import type React from "react";

import { Info, ChevronDown, DollarSign, CreditCard, Plus } from "lucide-react";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1 block sm:text-[15px] text-sm font-medium text-[#374151]">
      {children}
    </label>
  );
}

function SelectLike({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <select
        className="w-full rounded-lg border border-[#E6EAF1] bg-white px-3 py-2.5 pr-10 text-sm text-[#1F2D3D] placeholder:text-[#9AA3B2] focus:border-[#2E72FF] focus:outline-none"
        defaultValue=""
      >
        <option value="" disabled>
          {placeholder}
        </option>
        <option>BTC</option>
        <option>ETH</option>
        <option>USDT</option>
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#97A3B6]" />
    </div>
  );
}

function TextInput({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg border border-[#D1D5DB] bg-white px-3 py-2.5 sm:text-[16px] text-sm text-[#1F2D3D] placeholder:text-[#CCCCCC] focus:border-[#D1D5DB] focus:outline-none"
    />
  );
}

function TextArea({
  placeholder,
  rows = 4,
}: {
  placeholder: string;
  rows?: number;
}) {
  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      className="w-full rounded-lg border border-[#D1D5DB] sm:bg-white bg-[#F6F6F6] px-3 py-2.5 sm:text-[16px] text-sm text-[#1F2D3D] placeholder:text-[#CCCCCC] focus:border-[#D1D5DB] focus:outline-none"
    />
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="sm:text-[20px] text-base font-medium text-[#009CFF]">
      {children}
    </h3>
  );
}

export default function CreateOfferForm() {
  return (
    <section className="rounded-[15px] border border-[#E6EAF1] sm:bg-white bg-[#F6F6F6] p-6 shadow-sm">
      {/* Tabs */}
      <div className="mb-6 overflow-hidden rounded-[10px] border border-[#D1D5DB]">
        <div className="grid grid-cols-2">
          <button
            className="relative inline-flex items-center justify-center px-4 py-3 sm:text-[17px] text-sm font-medium text-white"
            type="button"
            style={{
              background: "linear-gradient(180deg, #009CFF 0%, #63C3FF 100%)",
            }}
          >
            <span className="absolute inset-0" />
            <span className="relative">Buy Offer</span>
          </button>
          <button
            className="inline-flex items-center justify-center bg-white px-4 py-3 sm:text-[17px] text-sm font-medium text-[#374151]"
            type="button"
          >
            Sell Offer
          </button>
        </div>
      </div>

      {/* Basic Info */}
      <div className="mb-6 space-y-5 mt-8">
        <SectionTitle>Basic Info</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label>Cryptocurrency</Label>
            <div className="relative">
              <select className="w-full appearance-none sm:bg-white bg-[#F6F6F6] px-3 py-2.5 pr-10 rounded-[10px] border border-[#D1D5DB] sm:text-[16px] text-sm text-[#333333] focus:border-[#3333] focus:outline-none">
                <option>BTC</option>
                <option>ETH</option>
                <option>USDT</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#97A3B6]" />
            </div>
          </div>
          <div>
            <Label>Currency</Label>
            <div className="relative">
              <select className="w-full appearance-none sm:bg-white bg-[#F6F6F6] px-3 py-2.5 pr-10 rounded-[10px] border border-[#D1D5DB] sm:text-[16px] text-sm text-[#333333] focus:border-[#3333]  focus:outline-none">
                <option>ZAR</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#97A3B6]" />
            </div>
          </div>
        </div>

        <div className="">
          <Label>Offer Title</Label>
          <TextInput placeholder="Enter a short title (e.g., Buy BTC with PayPal)" />
        </div>
        <div>
          <Label>Offer Description</Label>
          <TextArea placeholder="Describe your offer terms, conditions, and notes for users." />
        </div>
      </div>

      {/* Trade Parameters */}
      <div className="mb-6 space-y-5 mt-8">
        <SectionTitle>Trade Parameters</SectionTitle>

        <div>
          <Label>Price Type</Label>
          <div className="mb-6 overflow-hidden rounded-[10px] border border-[#D1D5DB]">
            <div className="grid grid-cols-2">
              <button
                className="relative inline-flex items-center justify-center px-4 py-3 sm:text-[17px] text-sm font-medium text-white"
                type="button"
                style={{
                  background:
                    "linear-gradient(180deg, #009CFF 0%, #63C3FF 100%)",
                }}
              >
                <span className="absolute inset-0" />
                <span className="relative">Fixed Rate</span>
              </button>
              <button
                className="inline-flex items-center justify-center bg-white px-4 py-3 sm:text-[17px] text-sm font-medium text-[#374151]"
                type="button"
              >
                Floating Rate
              </button>
            </div>
          </div>
        </div>

        <div>
          <Label>Price</Label>
          <div className="relative">
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <DollarSign className="h-4 w-4" />
            </div>
            <input
              type="number"
              placeholder="0.00"
              className="w-full rounded-lg border border-[#D1D5DB] bg-white pl-9 pr-3 py-2.5 sm:text-[16px] text-sm text-[#1F2D3D] placeholder:text-[#9AA3B2] focus:border-[#D1D5DB] focus:outline-none"
            />
          </div>
          <p className="mt-1 text-xs text-[#6B7280]">
            Example: 1 BTC = 0.00 ZAR
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <Label>Min Transaction Amount</Label>
            <TextInput placeholder="ZAR 0.00" type="number" />
          </div>
          <div>
            <Label>Max Transaction Amount</Label>
            <TextInput placeholder="ZAR 0.00" type="number" />
          </div>
        </div>

        <div>
          <Label>Trade Limit Duration</Label>
          <div className="relative">
            <select className="w-full appearance-none rounded-[10px] border border-[#D1D5DB] sm:bg-white bg-[#F6F6F6] px-3 py-2.5 pr-10 sm:text-[16px] text-sm text-[#333333] focus:border-[#3333] focus:outline-none">
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#97A3B6]" />
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-6 space-y-5 mt-8">
        <SectionTitle>Payment Method</SectionTitle>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            "FNB E-wallet",
            "Capitec Pay",
            "Skrill",
            "PayPal",
            "Bank Transfer",
          ].map((m) => (
            <button
              key={m}
              type="button"
              className="flex items-center gap-2 rounded-xl border border-[#E6EAF1] sm:bg-white bg-[#F6F6F6] px-4 py-3 sm:text-[15px] text-[10px] font-medium text-[#333333] hover:border-[#d5d9e0] hover:shadow-sm"
            >
              <span className="flex sm:h-8 h-6 sm:w-8 w-6 items-center justify-center rounded-full bg-[#F2F5F9]">
                <CreditCard className="sm:h-4 h-[12px] sm:w-4 w-[12px] text-[#97A3B6]" />
              </span>
              {m}
            </button>
          ))}
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-dashed border-[#E6EAF1] bg-white px-4 py-3 sm:text[15px] text-[10px] font-medium text-[#333333] hover:border-[#d5d9e0] hover:shadow-sm"
          >
            <span className="flex sm:h-8 h-6 sm:w-8 w-6 items-center justify-center rounded-full bg-[#F2F5F9]">
              <Plus className="sm:h-4 h-[12px] sm:w-4 w-[12px] text-[#97A3B6] shrink-0" />
            </span>
            Add Custom Method
          </button>
        </div>

        <div className="space-y-3 mt-8">
          <label className="flex cursor-pointer items-center gap-2 sm:text-[15px] text-[12px] text-[#374151]">
            <input type="checkbox" className="h-4 w-4 accent-[#2E72FF]" />I
            agree to QicTrader’s Terms & Conditions.
          </label>
          <label className="flex cursor-pointer items-center gap-2 sm:text-[15px] text-[12px] text-[#374151]">
            <input type="checkbox" className="h-4 w-4 accent-[#2E72FF]" />I have
            verified my account.
          </label>
        </div>
      </div>
    </section>
  );
}
