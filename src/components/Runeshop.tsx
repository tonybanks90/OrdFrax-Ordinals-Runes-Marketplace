import React from "react";
import { Link } from "react-router-dom";
import { runesData } from "../data/runesData"; // Import rune metadata

const Runeshop: React.FC = () => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-[#F7931A] mb-4">
        Rune Marketplace
      </h2>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-[#F7931A] text-white">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Volume (24h)</th>
            <th className="px-4 py-2 text-left">Price (sats)</th>
            <th className="px-4 py-2 text-left">Market Cap</th>
            <th className="px-4 py-2 text-left">Holders</th>
            <th className="px-4 py-2 text-left">Etching Time</th>
          </tr>
        </thead>
        <tbody>
          {runesData.map((rune, index) => (
            <Link to={`/marketplace/runeshop/${rune.name}`} key={index}>
              <tr
                className={`border-t border-gray-300 cursor-pointer hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2">{rune.name}</td>
                <td className="px-4 py-2">{rune.volume}</td>
                <td className="px-4 py-2">{rune.priceSats}</td>
                <td className="px-4 py-2">{rune.marketCap}</td>
                <td className="px-4 py-2">{rune.holders}</td>
                <td className="px-4 py-2">{rune.etchingTime}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Runeshop;
