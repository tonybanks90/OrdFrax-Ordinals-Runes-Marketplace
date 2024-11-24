import React from "react";
import { Link } from "react-router-dom";

interface OrdinalsCardProps {
  id: string;
  image: string;
  status: string;
  description: string;
  transactionUrl: string;
}

const OrdinalsCard: React.FC<OrdinalsCardProps> = ({ id, image, status, description }) => {
  return (
    <Link to={`/ordinals/${id}`} className="block">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
        {/* Ordinal Image */}
        <img src={image} alt={`Ordinal ${id}`} className="w-full h-40 object-cover" />

        {/* Status */}
        <div className="absolute top-2 left-2 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded">
          {status}
        </div>

        {/* Card Content */}
        <div className="p-4">
          {/* Ordinal ID */}
          <p className="text-sm text-gray-500 font-mono truncate" title={id}>
            {id}
          </p>

          {/* Description */}
          <p className="text-gray-700 text-sm mt-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default OrdinalsCard;
