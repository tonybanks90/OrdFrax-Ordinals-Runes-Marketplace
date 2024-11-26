// File.tsx
import React from "react";

const File: React.FC = () => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">File Inscription</h2>
      <p className="text-gray-600">Upload a file to inscribe your ordinal.</p>
      <input type="file" className="mt-4" />
    </div>
  );
};

export default File;
