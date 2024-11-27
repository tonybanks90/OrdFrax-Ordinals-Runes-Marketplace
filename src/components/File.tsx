import React from "react";

const File: React.FC = () => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6 max-w-lg mx-auto">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">File Inscription</h2>
      <p className="text-gray-600 mb-4">Upload a file to inscribe your ordinal.</p>

      {/* File Input */}
      <input
        type="file"
        className="block w-full border border-gray-300 rounded-lg p-2 text-gray-800 mb-6 focus:ring focus:ring-[#F7931A]"
      />

      {/* Supported Formats */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Supported Formats</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Videos",
            "Images",
            "GIF",
            "3D",
            "Audio",
            "Games",
            "JavaScript",
            "SVGs",
            "HTML",
          ].map((format) => (
            <div
              key={format}
              className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg shadow-md cursor-default text-sm"
            >
              {format}
            </div>
          ))}
        </div>
      </div>

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

export default File;
