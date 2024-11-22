import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-[#F7931A] text-white font-semibold py-1 px-4 rounded-lg hover:bg-orange-600 transition-colors"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
