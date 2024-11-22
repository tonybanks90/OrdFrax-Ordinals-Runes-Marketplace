import React from "react";
import { FiHome, FiEdit, FiShoppingCart } from "react-icons/fi"; // Icons for menu
import { Button } from "./Button"; // Reusable button component

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-yellow-500/80 backdrop-blur-md z-50 shadow-md">
      {/* Upper Section */}
      <div className="flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="text-[#F7931A] font-bold text-xl">
          ORDFRAX
        </div>

        {/* Dropdown */}
        <div className="relative">
          <select
            className="bg-transparent border border-[#F7931A] text-[#F7931A] rounded-lg py-1 px-3 focus:outline-none"
            defaultValue="testnet"
          >
            <option value="testnet">Bitcoin Testnet</option>
            <option value="mainnet">Bitcoin Mainnet</option>
          </select>
        </div>

        {/* Connect Button */}
        <Button label="Connect" />
      </div>

      {/* Lower Section */}
      <nav className="flex justify-around bg-[#F7931A] py-2 text-white text-sm">
        <a href="/" className="flex flex-col items-center">
          <FiHome className="text-xl" />
          <span>Home</span>
        </a>
        <a href="/inscribe" className="flex flex-col items-center">
          <FiEdit className="text-xl" />
          <span>Inscribe</span>
        </a>
        <a href="/marketplace" className="flex flex-col items-center">
          <FiShoppingCart className="text-xl" />
          <span>Marketplace</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
