import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Recent from "../components/Recent";

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <Services />
      <Recent />
      <main className="mt-20 p-4">
        <h1 className="text-2xl font-bold mb-4">About Ordfrax</h1>
        <p className="text-lg mb-2">
          Ordfrax is an ordinal inscription minting and listing marketplace built on ICP as Bitcoin L2.
        </p>
        <p className="text-lg">
          Explore the exciting world of digital inscriptions with us!
        </p>
      </main>
    </>
  );
};

export default AboutPage;
