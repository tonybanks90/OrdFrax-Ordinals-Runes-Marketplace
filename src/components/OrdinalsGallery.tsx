import React from "react";
import OrdinalsCard from "./OrdinalsCard";
import { inscriptionData } from "../data/inscriptionData";

const OrdinalsGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {inscriptionData.map((item) => (
        <OrdinalsCard
          key={item.id}
          id={item.id}
          image={item.imageUrl}
          status={item.status}
          description={item.description} transactionUrl={""}        />
      ))}
    </div>
  );
};

export default OrdinalsGallery;
