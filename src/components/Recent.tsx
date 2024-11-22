import React from "react";
import { Button } from "./Button";
import OrdinalsCard from "./OrdinalsCard";

const Recent: React.FC = () => {
  const ordinalsData = Array.from({ length: 8 }).map((_, index) => ({
    image: `https://via.placeholder.com/150?text=Ordinal+${index + 1}`, // Placeholder image with dynamic text
    status: "Unconfirmed", // Static status for now
  }));

  return (
    <section className="bg-gray-100 py-16 px-6">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-[#F7931A] text-center">
        Recent Inscriptions
      </h2>

      {/* Media Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <Button label="Image" onClick={() => alert("Filtering by Images")} />
        <Button label="Text" onClick={() => alert("Filtering by Text")} />
        <Button label="Video" onClick={() => alert("Filtering by Video")} />
        <Button label="Audio" onClick={() => alert("Filtering by Audio")} />
      </div>

      {/* Ordinal Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {ordinalsData.map((ordinal, index) => (
          <OrdinalsCard 
            key={index} 
            image={ordinal.image} 
            status={ordinal.status} 
          />
        ))}
      </div>

      {/* More Button */}
      <div className="text-center mt-10">
        <Button label="More >" onClick={() => alert("Loading more inscriptions")} />
      </div>
    </section>
  );
};

export default Recent;
