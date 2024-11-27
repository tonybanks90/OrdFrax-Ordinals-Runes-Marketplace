import React from "react";

interface ButtonProps {
  label: string; // The text displayed on the button
  onClick?: () => void; // Optional click handler
  color?: string; // Background color of the button
  textColor?: string; // Text color of the button
  className?: string; // Additional styles for the button
  containerClass?: string; // Styling for the button's outer container
  disabled?: boolean; // Whether the button is disabled
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = "#F7931A", // Default color
  textColor = "#FFFFFF", // Default text color
  className = "",
  containerClass = "",
  disabled = false, // Default is not disabled
}) => {
  return (
    <div className={containerClass}>
      <button
        onClick={onClick}
        disabled={disabled} // Disable the button if true
        className={`py-2 px-4 rounded-lg font-semibold hover:bg-opacity-80 transition-all ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
        style={{
          backgroundColor: disabled ? "#E0E0E0" : color, // Light grey when disabled
          color: disabled ? "#B0B0B0" : textColor, // Grey text when disabled
        }}
      >
        {label}
      </button>
    </div>
  );
};
