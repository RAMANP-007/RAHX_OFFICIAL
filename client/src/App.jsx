import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Workflow from "./sections/Workflow";
import TeamSection from "./sections/TeamSection.jsx";
import ServiceMarquee from "./sections/ServiceMarquee.jsx";
import DetailedService from "./sections/DetailedService.jsx";
import Cta from "./sections/Cta.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <>
     
      <Navbar />

      
     <div className="main-content overflow-x-hidden">
       <Hero />
       <Workflow />
       <TeamSection />
       <ServiceMarquee />
       <DetailedService />
       <Cta />
       <Footer />
     </div>
    </>
  );
};

export default App;
