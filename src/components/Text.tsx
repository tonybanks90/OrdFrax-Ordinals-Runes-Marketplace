// Text.tsx
import React from "react";

const Text: React.FC = () => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Text Inscription</h2>
      <p className="text-gray-600">Enter text to inscribe your ordinal.</p>
      <textarea
        className="w-full mt-4 p-2 border border-gray-300 rounded-lg"
        rows={5}
        placeholder="Enter your text here..."
      />
    </div>
  );
};

export default Text;
