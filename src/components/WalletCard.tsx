// WalletCard.tsx
import React, { useState } from "react";
import { Button } from "./Button"; // Reusable button component

type WalletCardProps = {
  onClose: () => void; // Function to close the modal
  onConnect: (walletAddress: string) => void; // Function to handle wallet connection
};

const WalletCard: React.FC<WalletCardProps> = ({ onClose, onConnect }) => {
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const handleConnect = () => {
    if (selectedWallet) {
      // Simulating wallet address retrieval
      const mockAddress = selectedWallet === "PlugWallet"
        ? "plug-wallet-12345"
        : "internet-identity-67890";

      onConnect(mockAddress); // Pass the wallet address to the parent component (Header)
      onClose(); // Close the WalletCard modal
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 transform transition-all scale-95 hover:scale-100 z-60">
        <h2 className="text-lg font-bold text-center mb-4">Connect Wallet</h2>
        <div className="space-y-4">
          <div
            onClick={() => setSelectedWallet("PlugWallet")}
            className={`cursor-pointer p-3 rounded-lg border ${
              selectedWallet === "PlugWallet" ? "border-[#F7931A] bg-[#F7931A]/20" : "border-gray-300"
            } hover:border-[#F7931A]`}
          >
            Plug Wallet
          </div>
          <div
            onClick={() => setSelectedWallet("InternetIdentity")}
            className={`cursor-pointer p-3 rounded-lg border ${
              selectedWallet === "InternetIdentity" ? "border-[#F7931A] bg-[#F7931A]/20" : "border-gray-300"
            } hover:border-[#F7931A]`}
          >
            Internet Identity
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <Button
            label="Cancel"
            onClick={onClose} // Close the WalletCard modal
            containerClass="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          />
          <Button
            label="Connect"
            onClick={handleConnect} // Handle the wallet connection
            containerClass={`${
              selectedWallet ? "bg-[#F7931A]" : "bg-gray-300 cursor-not-allowed"
            } text-white px-4 py-2 rounded hover:bg-[#e88217]`}
            disabled={!selectedWallet} // Disable the button if no wallet is selected
          />
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
