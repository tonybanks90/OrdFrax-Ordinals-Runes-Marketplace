import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Recent from "../components/Recent";
import OrdinalsGallery from "../components/OrdinalsGallery";
import Footer from "../components/Footer";

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      
      <Services />
      <OrdinalsGallery />
     
      
      <Footer />
    </>
  );
};

export default AboutPage;
