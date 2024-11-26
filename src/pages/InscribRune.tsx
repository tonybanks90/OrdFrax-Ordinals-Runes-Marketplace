import React, { useState } from "react";
import Mint from "../components/Mint"; // Mint component
import EtchMint from "../components/EtchMint"; // Etch|Mint component

const InscribRune: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mint" | "etchMint">("mint");
  const [inputMode, setInputMode] = useState<"file" | "text">("file");

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Inscribe Runes</h1>

      {/* Input Mode Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-6 py-2 font-semibold text-sm rounded-lg ${
            inputMode === "file"
              ? "bg-[#F7931A] text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setInputMode("file")}
        >
          File
        </button>
        <button
          className={`px-6 py-2 font-semibold text-sm rounded-lg ${
            inputMode === "text"
              ? "bg-[#F7931A] text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setInputMode("text")}
        >
          Text
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-6 py-2 font-semibold text-sm rounded-lg ${
            activeTab === "mint"
              ? "bg-[#F7931A] text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("mint")}
        >
          Mint
        </button>
        <button
          className={`px-6 py-2 font-semibold text-sm rounded-lg ${
            activeTab === "etchMint"
              ? "bg-[#F7931A] text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setActiveTab("etchMint")}
        >
          Etch | Mint
        </button>
      </div>

      {/* Conditional Rendering */}
      <div>
        {activeTab === "mint" ? (
          <Mint inputMode={inputMode} />
        ) : (
          <EtchMint inputMode={inputMode} />
        )}
      </div>
    </div>
  );
};

export default InscribRune;
