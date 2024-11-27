import React from "react";
import { Link } from "react-router-dom";

interface OrdinalsCardProps {
  id: string;
  image: string;
  status: string;
  description: string;
}

const OrdinalsCard: React.FC<OrdinalsCardProps> = ({
  id,
  image,
  status,
  description,
}) => {
  // Format ID to display first 4 and last 4 digits with ellipsis in the middle
  const formattedId = `${id.slice(0, 4)}...${id.slice(-4)}`;

  return (
    <Link to={`/ordinals/${id}`} className="block group">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto hover:shadow-xl transition-shadow duration-200">
        {/* Ordinal Image */}
        <div className="p-4">
          <img
            src={image}
            alt={`Ordinal Inscription: ${id}`}
            className="w-full h-40 object-cover rounded"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/150?text=Image+Unavailable";
            }}
          />
        </div>

        {/* Status */}
        <div className="absolute top-2 left-2 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded">
          {status}
        </div>

        {/* Card Content */}
        <div className="p-4">
          {/* Ordinal ID */}
          <p
            className="text-sm text-gray-500 font-mono truncate"
            title={id}
          >
            {formattedId}
          </p>

          {/* Description */}
          <p className="text-gray-700 text-sm mt-2">{description}</p>

          {/* Like and Comment Buttons */}
          <div className="flex items-center justify-between mt-4">
            {/* Like Button */}
            <button
              className="flex items-center bg-red-100 text-red-500 px-3 py-1 rounded text-sm"
            >
              ❤️ 0
            </button>

            {/* Comment Button */}
            <button
              className="flex items-center bg-blue-100 text-blue-500 px-3 py-1 rounded text-sm"
            >
              💬 0
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrdinalsCard;
