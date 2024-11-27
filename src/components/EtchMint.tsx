import React, { useState } from "react";
import EtchRune from "./EtchRune";
import MintRune from "./MintRune";

const EtchMint: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"etch" | "mint">("etch");

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-center gap-4 mb-6">
        {/* Toggle Buttons */}
        <button
          className={`px-4 py-2 text-sm rounded ${
            selectedTab === "etch"
              ? "bg-[#F7931A] text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setSelectedTab("etch")}
        >
          Etch
        </button>
        <button
          className={`px-4 py-2 text-sm rounded ${
            selectedTab === "mint"
              ? "bg-[#F7931A] text-white"
              : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setSelectedTab("mint")}
        >
          Mint
        </button>
      </div>

      {/* Render the selected component */}
      {selectedTab === "etch" ? <EtchRune /> : <MintRune />}
    </div>
  );
};

export default EtchMint;
