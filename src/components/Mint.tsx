import React from "react";
import { MintableData } from "../data/MintableData";


const Mint: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Mint Table</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {/* Name with Sticky Position */}
            <th
              className="text-left px-4 py-2 text-gray-600 font-semibold sticky left-0 bg-gray-100 z-10"
            >
              Name
            </th>
            <th className="text-left px-4 py-2 text-gray-600 font-semibold">Progress</th>
            <th className="text-left px-4 py-2 text-gray-600 font-semibold">Mints</th>
            <th className="text-center px-4 py-2 text-gray-600 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {MintableData.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              {/* Sticky Name with Image */}
              <td
                className="flex items-center gap-3 px-4 py-2 sticky left-0 bg-white z-10"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 object-cover rounded-md"
                />
                <span className="text-gray-700 font-medium">{item.name}</span>
              </td>

              {/* Progress Bar */}
              <td className="px-4 py-2">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-[#F7931A] h-3 rounded-full"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{item.progress}%</span>
              </td>

              {/* Mints */}
              <td className="px-4 py-2 text-gray-700 font-medium">{item.mints}</td>

              {/* Action Buttons */}
              <td className="px-4 py-2 flex justify-center gap-3">
                <button className="px-3 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition">
                  Trade
                </button>
                <button className="px-3 py-2 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition">
                  Mint
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mint;
