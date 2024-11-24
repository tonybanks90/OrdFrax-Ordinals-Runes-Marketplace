import React from "react";
import { useParams } from "react-router-dom";
import { runesData } from "../data/runesData";


const RuneDetailPage: React.FC = () => {
  const { name } = useParams<{ name: string }>(); // Get the rune name from the URL
  const rune = runesData.find((item) => item.name === name); // Find the rune by name

  if (!rune) {
    // Show error message if rune is not found
    return (
      <div>
        {/* Include Header */}
        <div className="text-center mt-16">
          <h1 className="text-2xl font-bold text-red-500">Rune Not Found</h1>
          <p className="text-gray-500 mt-2">
            The rune you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
       {/* Include Header */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Rune Name */}
        <h1 className="text-4xl font-bold text-center text-[#F7931A] mb-8">
          {rune.name}
        </h1>

        {/* Rune Details */}
        <div className="bg-[#1A1A1A] text-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-[#F7931A]">Rune Details</h2>
          <ul className="space-y-4">
            <li>
              <span className="font-bold">Volume (24h):</span> {rune.volume}
            </li>
            <li>
              <span className="font-bold">Price (sats):</span> {rune.priceSats}
            </li>
            <li>
              <span className="font-bold">Market Cap:</span> {rune.marketCap}
            </li>
            <li>
              <span className="font-bold">Holders:</span> {rune.holders}
            </li>
            <li>
              <span className="font-bold">Etching Time:</span> {rune.etchingTime}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RuneDetailPage;
