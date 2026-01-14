import React from "react";
import MagicBento from "../components/MagicBento";
import { serviceCards } from "../constants";

const DetailedService = () => {
  return (
    <section className="bg-white py-48 relative overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-36 px-6">
        <h2 className="
          text-[clamp(3.5rem,8vw,6.5rem)]
          font-black
          uppercase
          tracking-tight
          text-neutral-900
        ">
          Our Services
        </h2>

        <p className="
          mt-8
          text-lg
          md:text-xl
          text-neutral-500
          max-w-3xl
          mx-auto
        ">
          Strategy-led design and development focused on performance,
          scalability, and real business impact.
        </p>
      </div>

      {/* MAGIC BENTO GRID */}
      <div className="max-w-7xl mx-auto px-6">
        <MagicBento
          cards={serviceCards}

          /* VISUAL EXPERIENCE */
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}

          /* INTERACTION */
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}

          /* PERFORMANCE */
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>

      {/* SOFT BOTTOM FADE (OPTIONAL DEPTH) */}
      <div className="
        pointer-events-none
        absolute
        bottom-0
        left-0
        w-full
        h-48
        bg-gradient-to-t
        from-white
        to-transparent
      " />
    </section>
  );
};

export default DetailedService;
