import React from "react";
import { useNavigate } from "react-router-dom";
import { ordinalsData } from "../data/ordinalsData";

const Ordinalshop: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#F7931A]">
        Ordinal Marketplace
      </h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Volume (24h)</th>
            <th className="border border-gray-300 px-4 py-2">Price (sats)</th>
            <th className="border border-gray-300 px-4 py-2">Market Cap</th>
            <th className="border border-gray-300 px-4 py-2">Holders</th>
            <th className="border border-gray-300 px-4 py-2">Etching Time</th>
          </tr>
        </thead>
        <tbody>
          {ordinalsData.map((ordinal) => (
            <tr
              key={ordinal.id}
              onClick={() => navigate(`/ordinals/${ordinal.id}`)}
              className="cursor-pointer hover:bg-yellow-100 transition"
            >
              <td className="border border-gray-300 px-4 py-2">{ordinal.name}</td>
              <td className="border border-gray-300 px-4 py-2">{ordinal.volume}</td>
              <td className="border border-gray-300 px-4 py-2">{ordinal.price}</td>
              <td className="border border-gray-300 px-4 py-2">{ordinal.marketCap}</td>
              <td className="border border-gray-300 px-4 py-2">{ordinal.holders}</td>
              <td className="border border-gray-300 px-4 py-2">{ordinal.etchingTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ordinalshop;
