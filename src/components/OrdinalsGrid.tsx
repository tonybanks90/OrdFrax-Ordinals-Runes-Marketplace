import React from "react";
import { Link } from "react-router-dom";

interface Ordinal {
  id: number | string;
  name: string;
  image: string;
  status: string;
}

interface OrdinalsGridProps {
  ordinals: Ordinal[];
}

const OrdinalsGrid: React.FC<OrdinalsGridProps> = ({ ordinals }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {ordinals.map((ordinal) => (
        <Link
          to={`/ordinals/${ordinal.id}`}
          key={ordinal.id}
          className="block bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
        >
          <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
            <img src={ordinal.image} alt={ordinal.name} className="h-full" />
          </div>
          <h3 className="text-lg font-semibold mt-2">{ordinal.name}</h3>
          <p className="text-sm text-gray-500">{ordinal.status}</p>
        </Link>
      ))}
    </div>
  );
};

export default OrdinalsGrid;
