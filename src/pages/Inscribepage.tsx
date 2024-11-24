import React from "react";
import Header from "../components/Header";

const InscribePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-24 px-6">
        <h1 className="text-4xl font-bold text-center text-[#F7931A] mb-8">
          Inscribe Ordinals
        </h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Create and mint your unique ordinals directly on Bitcoin L2 powered by ICP.
          Inscribe text, images, videos, and more.
        </p>

        {/* Placeholder for inscription form */}
        <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Inscription Form
          </h2>
          <p className="text-gray-600 mb-6">
            Coming soon! Use this space to inscribe your ordinals with custom data.
          </p>
        </div>
      </main>
    </div>
  );
};

export default InscribePage;
