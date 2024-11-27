import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // For active state styling
import { FiHome, FiEdit, FiShoppingCart, FiTrendingUp } from "react-icons/fi"; // Icons
import { Button } from "./Button"; // Reusable button component
import WalletCard from "./WalletCard"; // Import the WalletCard modal

const Header: React.FC = () => {
  const [isWalletCardOpen, setIsWalletCardOpen] = useState(false); // State to control the modal visibility
  const [walletAddress, setWalletAddress] = useState<string | null>(null); // Store the connected wallet address

  const handleConnect = (address: string) => {
    setWalletAddress(address); // Set the wallet address once connected
    setIsWalletCardOpen(false); // Close the WalletCard modal
  };

  return (
    <>
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 shadow-md">
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
            label={walletAddress ? walletAddress : "Connect"}
            containerClass={`bg-[#F7931A] text-white font-bold hover:bg-yellow-600 px-4 py-2 rounded-lg shadow-lg ${
              walletAddress ? "bg-green-600" : ""
            }`}
            onClick={() => setIsWalletCardOpen(true)} // Open WalletCard when clicked
          />
        </div>

        {/* Lower Section */}
        <nav className="flex justify-around bg-[#F7931A] py-2 text-white text-sm">
          {[ 
            { to: "/", icon: FiHome, label: "Home" },
            { to: "/inscribe", icon: FiEdit, label: "Inscribe" },
            { to: "/marketplace", icon: FiShoppingCart, label: "Marketplace" },
            {
              to: "/dex",
              icon: FiTrendingUp,
              label: "Dex",
              onClick: () => alert("Coming soon!"),
            },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={item.onClick}
              className={({ isActive }) =>
                `flex flex-col items-center group transition ${
                  isActive ? "font-bold underline" : "opacity-80"
                }`
              }
            >
              <item.icon className="text-xl group-hover:scale-110 transition-transform" />
              <span className="text-xs group-hover:underline">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </header>

      {/* Display WalletCard modal if isWalletCardOpen is true */}
      {isWalletCardOpen && (
        <div className="relative z-50">
          <WalletCard onClose={() => setIsWalletCardOpen(false)} onConnect={handleConnect} />
        </div>
      )}
    </>
  );
};

export default Header;
