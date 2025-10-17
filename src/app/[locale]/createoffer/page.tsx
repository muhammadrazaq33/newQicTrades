"use client";

import CreateOfferForm from "@/components/CreateOfferComponents/CreateOfferForm";
import CreateOfferSidebar from "@/components/CreateOfferComponents/CreateOfferSidebar";
import { Info } from "lucide-react";

export default function CreateOfferPage() {
  return (
    <>
      <div className="bg-[#F6F6F6]">
        <div className="w-full max-w-screen-xl mx-auto px-3 sm:px-8 py-8 md:py-16">
          {/* Main Grid Layout */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Left: form */}
            <div className="md:col-span-2">
              {/* Header */}
              <div className="sm:mb-8 mb-6">
                <div className="flex items-center sm:gap-10 gap-6">
                  <h1 className="text-2xl md:text-3xl font-semibold text-[#009CFF] mb-2">
                    Create a New Offer
                  </h1>
                  <Info className="h-5 w-5 text-[#00AEEF]" />
                </div>
                <p className="text-[#4B5563] text-sm md:text-base">
                  Set up your buying or selling offer and make it visible on the
                  marketplace.
                </p>
              </div>
              <CreateOfferForm />
              {/* Actions */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  className="rounded-xl border border-[#D1D5DB] bg-white px-4 py-3 sm:text-[16px] text-sm font-medium text-[#374151] hover:shadow-sm"
                >
                  Preview Offer
                </button>
                <button
                  type="button"
                  className="relative overflow-hidden rounded-xl px-4 py-3 sm:text-[16px] text-sm font-medium text-white hover:shadow-sm"
                >
                  <span
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background:
                        "linear-gradient(180deg, #009CFF 0%, #63C3FF 100%)",
                    }}
                  />
                  <span className="relative">Publish Offer</span>
                </button>
              </div>
            </div>

            {/* Right: sidebar (stacks below on mobile by DOM order) */}
            <div className="md:col-span-1">
              <CreateOfferSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
