import React, { useEffect } from "react";
import { initWorkflowStack } from "../components/WorkFlowStack.js";

const steps = [
  {
    title: "DISCOVER",
    description:
      "We start with a discovery call to understand your business and goals.",
    bg: "bg-indigo-50"
  },
  {
    title: "DESIGN",
    description:
      "We design clean, conversion-focused interfaces tailored to your needs.",
    bg: "bg-purple-50"
  },
  {
    title: "BUILD",
    description:
      "We build fast, scalable, production-ready web applications.",
    bg: "bg-blue-50"
  },
  {
    title: "LAUNCH & OPTIMIZE",
    description:
      "We launch, monitor, and optimize with post-launch support.",
    bg: "bg-rose-50"
  }
];

const Workflow = () => {
  useEffect(() => {
    initWorkflowStack();
  }, []);

  return (
    <section className="workflow-wrapper bg-neutral-100 py-20 sm:py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
      {/* Section heading */}
      <div className="max-w-6xl mx-auto text-center mb-16 sm:mb-20 lg:mb-32">
        <h2 className="text-[clamp(2.5rem,6vw,3.75rem)] font-black uppercase tracking-wide">
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
          >
            <div
              className="
                min-h-[60vh]
                flex
                flex-col
                items-center
                justify-center
                text-center
                px-6 sm:px-10 lg:px-12
                py-10 sm:py-14
                gap-6 sm:gap-8
              "
            >
              <h3 className="text-[clamp(2rem,5vw,3rem)] font-black uppercase">
                {step.title}
              </h3>

              <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-neutral-600">
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
