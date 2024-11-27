import React from "react";
import Mint from "../components/Mint";
import EtchMint from "../components/EtchMint";

const InscribeRune: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-50 text-gray-800 min-h-screen">
      {/* Mint Component - 60% */}
      <div className="flex-grow lg:w-3/5 bg-white shadow-md rounded-lg p-6">
        <Mint />
      </div>

      {/* EtchMint Component - 40% */}
      <div className="lg:w-2/5 bg-white shadow-md rounded-lg p-6">
        <EtchMint  />
      </div>
    </div>
  );
};

export default InscribeRune;
