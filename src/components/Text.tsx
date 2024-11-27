import React from "react";

const Text: React.FC = () => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6 max-w-lg mx-auto">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Text Inscription</h2>
      <p className="text-gray-600 mb-4">Enter text to inscribe your ordinal.</p>

      {/* Text Input */}
      <textarea
        className="w-full mt-4 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-[#F7931A] text-gray-800"
        rows={5}
        placeholder="Enter your text here..."
      />

      {/* Submit & Pay Button */}
      <div className="mt-8 text-center">
        <button
          className="w-full py-3 px-6 bg-[#F7931A] text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
          onClick={() => alert("Submit & Pay functionality coming soon!")}
        >
          Submit & Pay
        </button>
      </div>
    </div>
  );
};

export default Text;
