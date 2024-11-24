import React from "react";
import { useParams } from "react-router-dom";
import { ordinalsData } from "../data/ordinalsData";
import Header from "../components/Header";
import OrdinalsGrid from "../components/OrdinalsGrid";

const CollectionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const collection = ordinalsData.find((item) => item.id === id);

  if (!collection) {
    return <div>Collection not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-24 px-6">
        {/* Collection Info Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold text-[#F7931A]">{collection.name}</h1>
          <p className="text-gray-700 mt-4">{collection.description}</p>
        </section>

        {/* Ordinals Grid */}
        <section className="mt-12">
          <OrdinalsGrid ordinals={collection.items} />
        </section>
      </main>
    </div>
  );
};

export default CollectionPage;
