import React from "react";
import { useParams } from "react-router-dom";
import { inscriptionData } from "../data/inscriptionData";
import OrdinalsCard from "./OrdinalsCard";
import Header from "./Header"; // Import the Header component

const OrdinalDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL
  const ordinal = inscriptionData.find((item) => item.id === id); // Find ordinal by ID

  if (!ordinal) {
    // Show error if not found
    return (
      <div>
        <Header /> {/* Include Header */}
        <div className="text-center mt-16">
          <h1 className="text-2xl font-bold text-red-500">Ordinal Not Found</h1>
          <p className="text-gray-500 mt-2">
            The ordinal you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-20 px-4"> {/* Added padding-top to avoid overlap */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">{ordinal.id}</h1>

          {/* Render OrdinalsCard with metadata */}
          <OrdinalsCard
            id={ordinal.id}
            status={ordinal.status}
            image={ordinal.imageUrl}
            description={ordinal.description}
            transactionUrl={ordinal.transactionUrl}
          />

          {/* Additional Metadata */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-lg font-bold mb-2">Additional Details</h2>
            <p className="text-gray-600">{ordinal.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdinalDetailPage;
