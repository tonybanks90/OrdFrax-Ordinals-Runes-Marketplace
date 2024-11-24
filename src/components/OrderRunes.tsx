import React, { useState } from "react";
import TakeOrder from "./TakeOrder";
import MakeOrder from "./MakeOrder";

const OrderRunes: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<"take" | "make">("take");

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      {/* Toggle Titles */}
      <div className="flex justify-around border-b border-gray-300 pb-4">
        <h2
          className={`cursor-pointer text-xl font-bold ${
            activeComponent === "take" ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setActiveComponent("take")}
        >
          Take Order
        </h2>
        <h2
          className={`cursor-pointer text-xl font-bold ${
            activeComponent === "make" ? "text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setActiveComponent("make")}
        >
          Make Order
        </h2>
      </div>

      {/* Display Selected Component */}
      <div className="mt-6">
        {activeComponent === "take" && <TakeOrder />}
        {activeComponent === "make" && <MakeOrder />}
      </div>
    </div>
  );
};

export default OrderRunes;
