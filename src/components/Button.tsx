import React from "react";

interface ButtonProps {
  label: string; // The text displayed on the button
  onClick?: () => void; // Optional click handler
  color?: string; // Background color of the button
  textColor?: string; // Text color of the button
  className?: string; // Additional styles for the button
  containerClass?: string; // Styling for the button's outer container
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  color = "#F7931A", // Default color
  textColor = "#FFFFFF", // Default text color
  className = "",
  containerClass = "",
}) => {
  return (
    <div className={containerClass}>
      <button
        onClick={onClick}
        className={`py-2 px-4 rounded-lg font-semibold hover:bg-opacity-80 transition-all ${className}`}
        style={{
          backgroundColor: color,
          color: textColor,
        }}
      >
        {label}
      </button>
    </div>
  );
};
