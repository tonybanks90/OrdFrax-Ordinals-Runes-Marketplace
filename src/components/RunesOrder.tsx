import React from "react";

const RunesOrder: React.FC = () => {
  return (
    <div className="mt-6 p-4 bg-gray-50 shadow-md rounded-lg max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      <div className="space-y-3">
        {/* You Pay */}
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">You Pay:</span>
          <span className="font-bold text-gray-800">0.00 BTC</span>
        </div>

        {/* Unit Price */}
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Unit Price:</span>
          <span className="font-bold text-gray-800">0.0001 BTC</span>
        </div>

        {/* Network Fee */}
        <div className="flex justify-between">
          <span className="font-medium text-gray-600">Network Fee:</span>
          <span className="font-bold text-gray-800">0.00002 BTC</span>
        </div>
      </div>

      {/* Connect Wallet Button */}
      <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
        Connect Wallet
      </button>
    </div>
  );
};

export default RunesOrder;
