import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import TextType from "../components/TypinngText";
import Beams from "../components/Beams";

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
    <section id="hero" className="relative h-screen overflow-hidden bg-black">
      {/* Background Beams */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <Beams
          beamWidth={1.8}
          beamHeight={14}
          beamNumber={10}
          speed={1.6}
          noiseIntensity={1.5}
          scale={0.25}
          rotation={15}
        />
      </div>

      {/* Main Typing Text */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <TextType
          as="h1"
          text="We build websites that actually convert."
          loop={false}
          typingSpeed={65}
          showCursor={false}
          className="
            font-black
            uppercase
            tracking-[0.18em]
            leading-none
            text-white
            text-[clamp(3rem,7vw,6rem)]
          "
        />
      </div>

      {/* Logo */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 z-20">
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
      <div className="absolute bottom-16 right-16 z-20 max-w-xl">
        <p
          ref={subTextRef}
          className="
            text-xl
            md:text-2xl
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
