import React, { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Workflow from "./sections/Workflow";
import TeamSection from "./sections/TeamSection.jsx";
import ServiceMarquee from "./sections/ServiceMarquee.jsx";
import DetailedService from "./sections/DetailedService.jsx";
import Cta from "./sections/Cta.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false
    });

    const onScroll = () => {
      if (globalThis.ScrollTrigger?.update) {
        globalThis.ScrollTrigger.update();
      }
    };

    lenis.on("scroll", onScroll);

    let rafId;
    const raf = time => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />

      
     <div className="main-content relative z-10 overflow-x-hidden">
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
