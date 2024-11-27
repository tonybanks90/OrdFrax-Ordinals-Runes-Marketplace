import React, { useState } from "react";
import { Input } from "./Input";

const EtchRune: React.FC = () => {
  // State to track the selected radio button option
  const [addLogo, setAddLogo] = useState<string>("none");

  // Handle radio button change
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddLogo(event.target.value);
  };

  return (
    <div>
      <Input label="Rune" placeholder="Enter Rune..." />
      <Input label="Symbol" placeholder="Enter Symbol..." />
      <Input label="Amount" placeholder="Enter Amount..." />
      <Input label="Cap" placeholder="Enter Cap..." />

      {/* Add Logo Radio Buttons */}
      <div className="mt-4">
        <p className="text-gray-800 font-medium">Add Logo</p>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="addLogo"
              value="none"
              checked={addLogo === "none"}
              onChange={handleRadioChange}
              className="form-radio"
            />
            None
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="addLogo"
              value="text"
              checked={addLogo === "text"}
              onChange={handleRadioChange}
              className="form-radio"
            />
            Text
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="addLogo"
              value="file"
              checked={addLogo === "file"}
              onChange={handleRadioChange}
              className="form-radio"
            />
            File
          </label>
        </div>
      </div>

      {/* Conditionally render Input or File component based on selected radio button */}
      {addLogo === "text" && (
        <Input label="Text" placeholder="Enter text for logo..." />
      )}
      {addLogo === "file" && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-400 mb-2">Upload Logo</label>
          <input type="file" className="w-full p-2 border border-gray-700 rounded-lg bg-gray-900 text-white" />
        </div>
      )}

      {/* Submit & Pay Button */}
      <button className="mt-6 w-full bg-[#F7931A] text-white py-2 px-4 rounded hover:bg-[#e88217]">
        Submit & Pay
      </button>
    </div>
  );
};

export default EtchRune;
