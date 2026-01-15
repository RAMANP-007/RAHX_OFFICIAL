import React, { useEffect } from "react";
import { initWorkflowStack } from "../components/WorkFlowStack.js";

const steps = [
  {
    title: "DISCOVERY & CLARITY",
    description: "We align on goals, audience, and success metrics.",
    accent: "#FF3B3B",
    titleClass: "text-white",
    descClass: "text-white/90",
    bg: ""
  },
  {
    title: "STRATEGY & PLANNING",
    description: "We define the roadmap, scope, and milestones.",
    accent: "#FF8C1A",
    titleClass: "text-white",
    descClass: "text-white/90",
    bg: ""
  },
  {
    title: "UI / UX DESIGN",
    description: "We design intuitive flows and premium visuals.",
    accent: "#FFD60A",
    titleClass: "text-neutral-900",
    descClass: "text-neutral-800",
    bg: ""
  },
  {
    title: "DEVELOPMENT",
    description: "We build a fast, scalable, production-ready experience.",
    accent: "#2ECC71",
    titleClass: "text-white",
    descClass: "text-white/90",
    bg: ""
  },
  {
    title: "CONTENT & OPTIMIZATION",
    description: "We refine copy, performance, and SEO essentials.",
    accent: "#1E90FF",
    titleClass: "text-white",
    descClass: "text-white/90",
    bg: ""
  },
  {
    title: "TESTING & REVIEW",
    description: "We QA across devices and polish every detail.",
    accent: "#4B3FFF",
    titleClass: "text-white",
    descClass: "text-white/90",
    bg: ""
  },
  {
    title: "LAUNCH & SUPPORT",
    description: "We launch confidently and support ongoing improvements.",
    accent: "#9B5DE5",
    titleClass: "text-white",
    descClass: "text-white/90",
    bg: ""
  }
];

const Workflow = () => {
  useEffect(() => {
    initWorkflowStack();
  }, []);

  return (
    <section className="workflow-wrapper font-good-times bg-neutral-100 py-20 sm:py-24 lg:py-32 px-6 sm:px-10 lg:px-16 pb-[90vh] sm:pb-[95vh] lg:pb-[100vh]">
      {/* Section heading */}
      <div className="max-w-6xl mx-auto text-center mb-16 sm:mb-20 lg:mb-32">
        <h2 className="text-[clamp(3.25rem,8vw,5.5rem)] font-black uppercase tracking-wide">
          Our Workflow
        </h2>
      </div>

      {steps.map((step, index) => (
        <div key={index} className="card-wrapper">
          <div
            className={`
              card
              ${step.bg}
              rounded-xl
              border
              border-neutral-200
              max-w-4xl
              mx-auto
            `}
            style={{ backgroundColor: step.accent }}
          >
            <div
              className="
                min-h-[60vh]
                flex
                flex-col
                items-start
                justify-start
                text-left
                px-6 sm:px-10 lg:px-12
                py-10 sm:py-14
                gap-2
                gap-6 sm:gap-8
              "
            >
              <h3
                className={`text-[clamp(2.5rem,6vw,4.25rem)] font-black uppercase ${step.titleClass} w-full min-h-[30vh] flex items-start`}
              >
                {step.title}
              </h3>

              <p
                className={`max-w-xl text-base sm:text-lg ${step.descClass}`}
              >
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Workflow;
