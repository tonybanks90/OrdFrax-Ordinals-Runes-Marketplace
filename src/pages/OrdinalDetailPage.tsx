import React from "react";
import { useParams } from "react-router-dom";
import { inscriptionData } from "../data/inscriptionData";
import Header from "../components/Header";

const OrdinalDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const ordinal = inscriptionData.find((item) => item.id === id);

  if (!ordinal) {
    return <div className="text-center text-red-500 mt-10">Ordinal not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="pt-24 px-6">
        {/* Ordinal Detail */}
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{`Ordinal ${ordinal.id}`}</h1>
          <img src={ordinal.imageUrl} alt={ordinal.description} className="w-full h-60 object-cover rounded-md" />
          <p className="text-gray-700 mt-4">{ordinal.description}</p>
          <div className="mt-4">
            <span className="text-gray-600 font-semibold">Status:</span> {ordinal.id}
          </div>
          <div className="mt-4">
            <a
              href={ordinal.transactionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Transaction
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrdinalDetailPage;
