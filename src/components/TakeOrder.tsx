import React, { useState } from "react";
import { RuneSaleData } from "../data/RuneSaleData";
import RuneSaleTable from "./RuneSaleTable";
import RunesOrder from "./RunesOrder";

const TakeOrder: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Buy" | "Sell">("Buy"); // State for active tab

  const handleTabClick = (tab: "Buy" | "Sell") => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4">
      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "Buy" ? "text-white bg-green-500" : "text-green-500"
          }`}
          onClick={() => handleTabClick("Buy")}
        >
          Buy
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "Sell" ? "text-white bg-red-500" : "text-red-500"
          }`}
          onClick={() => handleTabClick("Sell")}
        >
          Sell
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {activeTab === "Buy" ? (
          <RuneSaleTable data={RuneSaleData.buyData} />
        ) : (
          <RuneSaleTable data={RuneSaleData.sellData} />
        )}
      </div>

      {/* Order Component */}
      <RunesOrder />
    </div>
  );
};

export default TakeOrder;
