import InfiniteMenu from "../components/InfiniteMenu.jsx";
import { teamItems } from "../constants";

const TeamSection = () => {
  return (
    <section className="bg-white pt-40">
      {/* 🔹 TEXT SECTION (WHITE BG) */}
      <div className="max-w-6xl mx-auto text-center mb-24 px-6">
        <h2 className="text-6xl font-black uppercase tracking-wide">
          Meet the Team
        </h2>
        <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
          Real people. Real work. No corporate nonsense.
        </p>
      </div>

      {/* 🔹 INFINITE MENU SECTION (BLACK BG, FULL WIDTH) */}
      <div className="bg-black w-full py-32">
        <div className="h-[600px] max-w-6xl mx-auto">
          <InfiniteMenu items={teamItems} scale={1.0} />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
