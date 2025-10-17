import React from "react";

function OfferDetailsCard() {
  return (
    <div className="bg-white rounded-[10px] p-5 md:p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex flex-row-reverse lg:flex-row items-start justify-between">
            <div className="inline-block bg-[#DBEAFE] text-[#2563EB] px-3 py-1.5 rounded-md text-sm font-medium mb-4">
              Buy BTC
            </div>
            {/* Right Section - Seller Info */}
            <div className="flex flex-col items-start md:items-end">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                  <span className="text-[#2563EB] font-bold text-lg">C</span>
                </div>
                <div>
                  <p className="text-[#1A1A1A] font-semibold">@ CryptoAlex</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 fill-[#FCD34D]"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="text-[#1A1A1A] text-sm font-medium ml-1">
                      4.8
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[#000000] text-sm mb-2">
                243 trades completed
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                <span className="text-[#000000] text-sm font-medium">
                  Online Now
                </span>
              </div>
            </div>
          </div>
          {/* tttttt */}
          <div className="mb-5 sm:mt-0 mt-6">
            <p className="text-[#000000] text-sm mb-1">Price</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000]">
              $ 64,500<span className="text-2xl md:text-3xl">/BTC</span>
            </h2>
          </div>

          <div className="mb-4">
            <p className="text-[#000000] text-sm mb-1">Limits</p>
            <p className="text-[#000000] font-semibold">
              Min $ 10 - Max $ 1,000
            </p>
          </div>

          <div>
            <p className="text-[#000000] text-sm mb-1">Payment Method</p>
            <p className="text-[#000000] font-semibold">Bank Transfer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferDetailsCard;
