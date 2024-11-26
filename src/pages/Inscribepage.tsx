import React, { useState } from "react";
import Header from "../components/Header"; // Import the Header component
import InscribOrd from "./InscribOrd"; // Import the InscribOrd page
import InscribRune from "./InscribRune"; // Import the InscribRune page

const InscribePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"ordinals" | "runes">("ordinals");

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-[8rem] max-w-8xl mx-auto p-14">
        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-6 py-2 font-semibold text-sm rounded-lg ${
              activeTab === "ordinals"
                ? "bg-[#F7931A] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setActiveTab("ordinals")}
          >
            Ordinals
          </button>
          <button
            className={`px-6 py-2 font-semibold text-sm rounded-lg ${
              activeTab === "runes"
                ? "bg-[#F7931A] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setActiveTab("runes")}
          >
            Runes
          </button>
        </div>

        {/* Conditional Rendering */}
        <div>
          {activeTab === "ordinals" ? <InscribOrd /> : <InscribRune />}
        </div>
      </div>
    </div>
  );
};

export default InscribePage;
