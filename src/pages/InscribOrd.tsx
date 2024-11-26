import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../components/Button"; // Your custom reusable Button component

const InscribOrd: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Inscribe Ordinals</h1>

      {/* Custom Button Navigation */}
      <div className="flex justify-center space-x-4 mb-8">
        <Button
          label="File"
          onClick={() => navigate("/inscribe/file")}
          color="#F7931A"
          containerClass="px-4 py-2 bg-[#F7931A] text-white rounded-lg shadow-md hover:bg-yellow-600"
        />
        <Button
          label="Text"
          onClick={() => navigate("/inscribe/text")}
          color="#F7931A"
          containerClass="px-4 py-2 bg-[#F7931A] text-white rounded-lg shadow-md hover:bg-yellow-600"
        />
      </div>

      {/* Render Outlet for File or Text Component */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default InscribOrd;
