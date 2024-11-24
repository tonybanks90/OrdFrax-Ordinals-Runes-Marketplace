import React from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const Switchbutton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center space-x-4 mb-8">
      <Button
        label="Rune Shop"
        onClick={() => navigate("/marketplace/runeshop")}
        color="#F7931A" // Pass color here
      />
      <Button
        label="Ordinal Shop"
        onClick={() => navigate("/marketplace/ordinalshop")}
        color="#F7931A" // Pass color here
      />
    </div>
  );
};

export default Switchbutton;
