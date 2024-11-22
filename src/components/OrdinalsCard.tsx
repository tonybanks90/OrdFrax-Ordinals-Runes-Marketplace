import React from "react";
import { Button } from "./Button";

interface OrdinalsCardProps {
  image: string;
  status: string;
}

const OrdinalsCard: React.FC<OrdinalsCardProps> = ({ image, status }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Ordinal Image */}
      <img src={image} alt="Ordinal" className="w-full h-40 object-cover" />
      
      {/* Status */}
      <div className="absolute top-2 left-2 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded">
        {status}
      </div>
      <div className="p-4">
        {/* Small Status */}
        <span className="text-xs bg-yellow-300 text-black px-2 py-1 rounded mb-2 inline-block">
          {status}
        </span>
        
        {/* Button */}
        <Button label="View Details" onClick={() => alert("Viewing details")} />
      </div>
    </div>
  );
};

OrdinalsCard.defaultProps = {
  image: "https://via.placeholder.com/150",
  status: "Unconfirmed",
};

export default OrdinalsCard;
