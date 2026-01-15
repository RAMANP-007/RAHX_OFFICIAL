import React from "react";

const Cta = () => {
  return (
    <section id="contact" className="w-full min-h-[70vh] px-6 sm:px-10 lg:px-16 py-16 sm:py-20 flex items-center justify-center">
      {/* OUTER WRAPPER */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 shadow-xl rounded-3xl bg-white overflow-hidden">

        {/* LEFT SECTION */}
        <div className="flex items-center justify-center px-6 sm:px-8 py-12 sm:py-16">
          <div className="max-w-md text-center md:text-left space-y-6">

            {/* faded subtitle */}
            <p className="text-sm uppercase tracking-[0.25em] text-black/50">
              Let’s build something great
            </p>

            {/* main heading */}
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-black uppercase tracking-tight leading-[1.05]">
              Ready to start <br />
              your <span className="italic inline-block mr-3">next</span> project
            </h1>

            {/* CTA button */}
            <button className="inline-block rounded-full bg-black px-8 sm:px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:scale-105 active:scale-95">
              Get Started
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-center px-6 sm:px-8 py-12 sm:py-16 bg-gray-50">
          {/* CARD */}
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-lg p-8 text-center space-y-6">

            {/* availability */}
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
              </span>

              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                Available for projects
              </p>
            </div>

            {/* avatars */}
            <div className="flex items-center justify-center gap-3">
              <img
                src="Images/ctaImage.jpg"
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />

              <span className="text-xl font-bold text-black">+</span>

              <img
                src="Images/ctaImage2.jpg"
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>

            {/* call text */}
            <div>
              <h3 className="text-lg font-bold">
                Quick 15-minute call?
              </h3>
              <p className="text-sm text-black/60">
                Pick a time that works for you
              </p>
            </div>

            {/* button */}
            <button className="w-full rounded-xl bg-black px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:scale-[1.03] active:scale-95">
              Book a Call
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Cta;
