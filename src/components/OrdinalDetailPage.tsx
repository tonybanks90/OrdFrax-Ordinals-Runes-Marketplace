import React from "react";
import { useParams } from "react-router-dom";
import { inscriptionData } from "../data/inscriptionData"; // Your data source
import Header from "./Header"; // Import your reusable Header component
import Footer from "./Footer"
const InscriptionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from the URL
  const inscription = inscriptionData.find((item) => item.id === id); // Find the matching inscription

  if (!inscription) {
    return (
      <div>
        <Header />
        <div className="text-center mt-20">
          <h1 className="text-2xl font-bold text-red-500">Inscription Not Found</h1>
          <p className="text-gray-500 mt-2">
            The inscription you are looking for does not exist.
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
      <div className="pt-[8rem] max-w-8xl mx-auto p-14 ">
        <div className=" mx-auto flex flex-col md:flex-row gap-8">
          {/* Left: Image and Buy Section */}
          <div className="md:w-1/3 bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <img
              src={inscription.imageUrl}
              alt={`Inscription ${inscription.id}`}
              className="rounded-md w-full object-contain mb-4"
            />
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-bold mt-4 hover:bg-yellow-600">
              Buy Now - {inscription.status}
            </button>
          </div>

          {/* Right: Details Section */}
          <div className="md:w-2/3 bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Information</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Inscription Number</p>
                <p className="text-gray-700 font-medium">{inscription.InscriptionNo}</p>
              </div>
              <div>
                <p className="text-gray-500">Inscription ID</p>
                <p className="text-gray-700 font-medium break-all">{inscription.InscriptionID}</p>
              </div>
              <div>
                <p className="text-gray-500">Address</p>
                <p className="text-gray-700 font-medium break-all">{inscription.Address}</p>
              </div>
              <div>
                <p className="text-gray-500">Output Value</p>
                <p className="text-gray-700 font-medium">{inscription.status}</p>
              </div>
              <div>
                <p className="text-gray-500">Content</p>
                <a
                  href={inscription.ViewOn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Link
                </a>
              </div>
              <div>
                <p className="text-gray-500">Content Type</p>
                <p className="text-gray-700 font-medium">{inscription.ContentType}</p>
              </div>
              <div>
                <p className="text-gray-500">Timestamp</p>
                <p className="text-gray-700 font-medium">{inscription.TimeStamp}</p>
              </div>
              <div>
                <p className="text-gray-500">Genesis Height</p>
                <p className="text-gray-700 font-medium">{inscription.GenesisHeight}</p>
              </div>
              <div>
                <p className="text-gray-500">Genesis Transaction ID</p>
                <a
                  href={`https://explorer.url/${inscription.GenesisTransactionID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {inscription.GenesisTransactionID}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
      
    </div>

  );
};

export default InscriptionDetailPage;
