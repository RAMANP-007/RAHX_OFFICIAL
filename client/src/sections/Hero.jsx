import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import TextType from "../components/TypinngText";
import GradientBlinds from "../components/GradientBlinds";

const Hero = () => {
  const logoRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    const mainText = "We build websites that actually convert.";
    const typingSpeed = 65;
    const typingDuration = (mainText.length * typingSpeed) / 1000;

    gsap.set(logoRef.current, {
      opacity: 0,
      y: -120,
    });

    gsap.set(subTextRef.current, {
      opacity: 0,
      x: 120,
      y: 120,
    });

    const tl = gsap.timeline({ delay: typingDuration });

    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });

    tl.to(
      subTextRef.current,
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.3"
    );
  }, []);

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GradientBlinds
          gradientColors={["#FF9FFC", "#5227FF"]}
          angle={0}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      {/* Main Typing Text */}
      <div className="relative z-10 min-h-[100svh] flex items-center justify-center text-center px-6 sm:px-10 lg:px-16">
        <TextType
          as="h1"
          text="We build websites that actually convert"
          loop={false}
          typingSpeed={65}
          showCursor={false}
          className="
            font-black
            uppercase
            tracking-[0.18em]
            leading-[0.9]
            text-white
            text-[clamp(3rem,7vw,6rem)]
          "
        />
      </div>

      {/* Logo */}
      <div className="absolute top-[18%] sm:top-[22%] lg:top-[25%] left-1/2 -translate-x-1/2 z-20 px-6">
        <h1
          ref={logoRef}
          className="
            font-black
            uppercase
            tracking-[0.45em]
            text-white
            text-[clamp(1.8rem,3vw,2.8rem)]
          "
        >
          RAHX
        </h1>
      </div>

      {/* Subtext */}
      <div className="absolute bottom-10 sm:bottom-14 lg:bottom-16 left-6 right-6 sm:left-auto sm:right-10 lg:right-16 z-20 max-w-xl">
        <p
          ref={subTextRef}
          className="
            text-[clamp(1rem,3.5vw,1.5rem)]
            font-light
            tracking-wide
            text-white/60
          "
        >
          RAHX is a Gen-Z driven web agency focused on performance,
          clarity, and real business growth.
        </p>
      </div>
    </section>
  );
};

export default Hero;
