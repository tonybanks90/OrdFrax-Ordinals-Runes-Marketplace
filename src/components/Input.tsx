import React from "react";

type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
  value?: string; // Allows controlled inputs
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Callback for input changes
  disabled?: boolean; // Option to disable the input
  mode?: "light" | "dark"; // Supports light and dark modes
};

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  disabled = false,
  mode = "dark", // Default to dark mode
}) => {
  const isDark = mode === "dark";

  return (
    <div className="mb-4">
      <label
        className={`block text-sm font-medium mb-2 ${
          isDark ? "text-gray-400" : "text-gray-700"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full p-2 border rounded-lg focus:ring ${
          isDark
            ? "bg-gray-900 text-white border-gray-700 focus:ring-[#F7931A]"
            : "bg-white text-gray-900 border-gray-300 focus:ring-blue-500"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      />
    </div>
  );
};
