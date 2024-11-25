import React from "react";
import Header from "../components/Header"; // Import the Header component
import RuneDetailPage from "../components/RuneDetailPage"; // Import the RuneDetailPage component
import BentoBox from "../components/OrderRunes"; // Import the BentoBox component
import Footer from "../components/Footer"; // Import the Footer component

const Rune: React.FC = () => {
  return (
    <div>
      {/* Header at the top */}
      <Header />

      {/* Main Content */}
      <div className="pt-[8rem] max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-6">
        {/* Left Section: Rune Detail */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-4">
          <RuneDetailPage />
        </div>

        {/* Right Section: BentoBox */}
        <div className="flex-1 bg-gray-50 shadow-md rounded-lg p-4">
          <BentoBox />
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Rune;
