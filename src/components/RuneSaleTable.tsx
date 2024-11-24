import React from "react";

interface RuneSaleTableProps {
  data: { quantity: number; price: number }[]; // Array of objects with quantity and price
}

const RuneSaleTable: React.FC<RuneSaleTableProps> = ({ data }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Table Header */}
      <div className="grid grid-cols-3 gap-4 border-b border-gray-300 pb-2 mb-2 text-sm font-semibold text-gray-700">
        <span>Quantity</span>
        <span>Price</span>
        <span>Total</span>
      </div>

      {/* Table Rows */}
      <div className="space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 gap-4 items-center py-2 ${
              index !== data.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <span className="text-gray-800">{item.quantity}</span>
            <span className="text-gray-800">{item.price.toFixed(2)}</span>
            <span className="text-gray-800 font-semibold">
              {(item.quantity * item.price).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RuneSaleTable;
