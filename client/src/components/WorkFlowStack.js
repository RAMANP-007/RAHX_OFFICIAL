import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initWorkflowStack = () => {
  // Clear previous triggers (important during reloads)
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  const cardsWrappers = gsap.utils.toArray(".workflow-wrapper .card-wrapper");
  const cards = gsap.utils.toArray(".workflow-wrapper .card");

  cardsWrappers.forEach((wrapper, i) => {
    const card = cards[i];

    let scale = 1;
    let rotation = 0;

    // Stack effect for previous cards
    if (i !== cards.length - 1) {
      scale = 0.9 + 0.025 * i;
      rotation = -10;
    }

    gsap.to(card, {
      scale,
      rotationX: rotation,
      transformOrigin: "top center",
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        start: `top ${60 + 10 * i}`,
        end: "bottom 550",
        endTrigger: ".workflow-wrapper",
        scrub: true,
        pin: wrapper,
        pinSpacing: false,
        invalidateOnRefresh: true,
        id: `workflow-card-${i + 1}`,
        // 🔴 enable markers ONLY for debugging
        // markers: true,
      }
    });
  });
};
