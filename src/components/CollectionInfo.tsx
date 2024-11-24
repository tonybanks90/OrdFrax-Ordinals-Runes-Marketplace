import React from "react";
import { Button } from "./Button";

const CollectionInfo: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
        {/* Collection Name and Description */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold text-[#F7931A]">Bitcoin Apes</h1>
          <p className="text-gray-600 mt-2">
            A collection of unique Bitcoin Apes inscribed directly on the Bitcoin blockchain.
          </p>
        </div>

        {/* Collection Stats */}
        <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Items</h3>
            <p className="text-gray-800">10,000</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Holders</h3>
            <p className="text-gray-800">2,500</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Market Cap</h3>
            <p className="text-gray-800">1,200 BTC</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Search Ordinals..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring focus:ring-[#F7931A]"
        />
      </div>
    </div>
  );
};

export default CollectionInfo;
