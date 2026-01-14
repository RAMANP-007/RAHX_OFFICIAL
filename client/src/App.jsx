import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Workflow from "./sections/Workflow";
import TeamSection from "./sections/TeamSection.jsx";
import ServiceMarquee from "./sections/ServiceMarquee.jsx";
import DetailedService from "./sections/DetailedService.jsx";

const App = () => {
  return (
    <>
     
      <Navbar />

      
     <div className="main-content">
       <Hero />
       <Workflow />
       <TeamSection />
       <ServiceMarquee />
       <DetailedService />
     </div>
    </>
  );
};

export default App;
