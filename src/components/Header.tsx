import React from "react";
import { FiHome, FiEdit, FiShoppingCart } from "react-icons/fi";
import { Button } from "./Button"; // Reusable button component
import { Link } from "react-router-dom"; // Navigation using React Router

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-yellow-500/80 backdrop-blur-md z-50 shadow-md">
      {/* Upper Section */}
      <div className="flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="text-[#F7931A] font-zentry text-2xl font-bold tracking-wide">
        <b>ORDFRAX</b>
        </div>

        {/* Network Selector */}
        <div className="relative">
          <select
            className="bg-transparent border border-[#F7931A] text-[#F7931A] rounded-lg py-1 px-3 focus:outline-none font-general cursor-pointer"
            defaultValue="testnet"
            aria-label="Select Network"
          >
            <option value="testnet">Bitcoin Testnet</option>
            <option value="mainnet">Bitcoin Mainnet</option>
          </select>
        </div>

        {/* Connect Button */}
        <Button
          label="Connect"
          containerClass="bg-[#F7931A] text-white font-bold hover:bg-yellow-600 px-4 py-2 rounded-lg shadow-lg"
        />
      </div>

      {/* Lower Section */}
      <nav className="flex justify-around bg-[#F7931A] py-2 text-white text-sm">
        {[
          { to: "/", icon: FiHome, label: "Home" },
          { to: "/inscribe", icon: FiEdit, label: "Inscribe" },
          { to: "/marketplace", icon: FiShoppingCart, label: "Marketplace" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex flex-col items-center group transition"
          >
            <item.icon className="text-xl group-hover:scale-110 transition-transform" />
            <span className="text-xs group-hover:underline">{item.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
