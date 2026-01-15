import InfiniteMenu from "../components/InfiniteMenu.jsx";
import { teamItems } from "../constants";

const TeamSection = () => {
  return (
    <section className="bg-white pt-20 sm:pt-28 lg:pt-40">
      {/* 🔹 TEXT SECTION (WHITE BG) */}
      <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16 lg:mb-24 px-6 sm:px-10 lg:px-16">
        <h2 className="text-[clamp(2.5rem,6vw,3.75rem)] font-black uppercase tracking-wide">
          Meet the Team
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
          Real people. Real work. No corporate nonsense.
        </p>
      </div>

      {/* 🔹 INFINITE MENU SECTION (BLACK BG, FULL WIDTH) */}
      <div className="bg-black w-full py-16 sm:py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
        <div className="h-[420px] sm:h-[520px] lg:h-[600px] max-w-6xl mx-auto">
          <InfiniteMenu items={teamItems} scale={1.0} />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
