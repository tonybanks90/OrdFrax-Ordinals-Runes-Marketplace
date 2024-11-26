import React from "react";
import { Button } from "./Button";

const Services: React.FC = () => {
  return (
    <section className=" bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-[#F7931A]">Explore Our Services</h2>
      <p className="text-lg text-gray-700 mb-10">
        Discover the power of Ordinals on Bitcoin. From inscription minting to a vibrant marketplace, 
        we bring everything you need under one roof.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Ordinal Minting</h3>
          <p className="text-gray-600 mb-6">
            Create unique inscriptions directly on Bitcoin's blockchain with ease.
          </p>
          <Button label="Start Minting" onClick={() => alert("Navigate to Minting")} />
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Marketplace</h3>
          <p className="text-gray-600 mb-6">
            Explore, buy, and sell ordinals in a decentralized marketplace.
          </p>
          <Button label="Visit Marketplace" onClick={() => alert("Navigate to Marketplace")} />
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Bitcoin Integration</h3>
          <p className="text-gray-600 mb-6">
            Seamlessly connect to Bitcoin L2 for advanced capabilities.
          </p>
          <Button label="Learn More" onClick={() => alert("Navigate to Integration")} />
        </div>
      </div>
    </section>
  );
};

export default Services;
