import React from "react";
import ScrollVelocity from "../components/ScrollVelocity.jsx";

const ServiceMarquee = () => {
  return (
    <section className="bg-black py-16 overflow-hidden">
      <ScrollVelocity
        texts={[
          "UI & UX DESIGN • WEBSITE DEVELOPMENT • SEO OPTIMIZATION • SOCIAL MEDIA MANAGEMENT • AI AUTOMATION"
        ]}
        velocity={120}
        numCopies={10}
        className="
          text-white
          text-[clamp(1.5rem,4vw,3rem)]
          font-black
          uppercase
          tracking-wider
          px-12
        "
      />
    </section>
  );
};

export default ServiceMarquee;
