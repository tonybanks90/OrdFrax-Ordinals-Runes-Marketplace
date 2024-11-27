import React from "react";
import { Input } from "./Input";

const MintRune: React.FC = () => {
  return (
    <div>
      <Input label="Rune/Rune ID" placeholder="Enter Rune ID..." />
      <Input label="Number of Mints" placeholder="Enter number of mints..." />

      {/* Submit & Pay Button */}
      <button className="mt-6 w-full bg-[#F7931A] text-white py-2 px-4 rounded hover:bg-[#e88217]">
        Submit & Pay
      </button>
    </div>
  );
};

export default MintRune;
