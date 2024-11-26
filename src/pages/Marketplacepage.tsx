import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Switchbutton from "../components/Switchbutton";
import Footer from "../components/Footer";

const Marketplace: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-[8rem] max-w-12xl mx-auto p-14 pt-24 px-6">
        <h1 className="text-4xl font-bold text-center text-[#F7931A] mb-8">
          Ordinals Marketplace
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
          Explore, buy, and sell unique inscriptions directly on Bitcoin L2.
        </p>

        {/* Switch Buttons */}
        <Switchbutton />

        {/* Render Runeshop or Ordinalshop */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
