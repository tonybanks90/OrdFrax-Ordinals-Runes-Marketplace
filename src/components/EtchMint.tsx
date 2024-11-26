import React from "react";

interface EtchMintProps {
  inputMode: "file" | "text";
}

const EtchMint: React.FC<EtchMintProps> = ({ inputMode }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Etch | Mint</h2>
      {inputMode === "file" ? (
        <div>
          <label className="block text-gray-600 mb-2">Upload File:</label>
          <input
            type="file"
            className="block w-full border border-gray-300 rounded p-2"
          />
        </div>
      ) : (
        <div>
          <label className="block text-gray-600 mb-2">Enter Text:</label>
          <textarea
            className="block w-full border border-gray-300 rounded p-2"
            rows={5}
            placeholder="Type your text here..."
          ></textarea>
        </div>
      )}
      <button className="mt-4 bg-[#F7931A] text-white px-6 py-2 rounded-lg">
        Etch | Mint Now
      </button>
    </div>
  );
};

export default EtchMint;
