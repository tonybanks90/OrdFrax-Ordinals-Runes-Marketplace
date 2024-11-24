import React from "react";
import { useParams } from "react-router-dom";
import { ordinalsData } from "../data/ordinalsData";

const OrdinalDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const ordinal = ordinalsData.find((item) => item.id === id);

  if (!ordinal) {
    return <div>Collection not found.</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-[#F7931A] p-4 text-white">
        <h1 className="text-2xl font-bold">{ordinal.name}</h1>
      </header>
      <main className="p-6">
        <p>{ordinal.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {ordinal.items.map((item) => (
            <div key={item.id} className="bg-white shadow-md p-4 rounded-lg">
              <img src={item.image} alt={`Ordinal ${item.id}`} className="w-full h-32 object-cover rounded-md mb-4" />
              <p className="text-gray-600">{item.status}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OrdinalDetails;
