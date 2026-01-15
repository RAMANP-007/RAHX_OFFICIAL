import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StaggeredMenu from "../components/staggerMenu.jsx";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isHeroOut, setIsHeroOut] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: "#hero",
      start: "bottom top",
      onEnter: () => setIsHeroOut(true),
      onLeaveBack: () => setIsHeroOut(false),
    });

    return () => trigger.kill();
  }, []);

  return (
    <StaggeredMenu
      isFixed
      position="right"

      /* 🔹 NAV LOGO COLOR (you can wire this later if needed) */
      logoColor={isHeroOut ? "#181818" : "#ffffff"}

      /* 🔹 MENU ITEMS */
      items={[
        { label: "Hero", link: "#hero" },
        { label: "Team", link: "#team" },
        { label: "Services", link: "#services" },
        { label: "Contact", link: "#contact" },
      ]}

      /* 🔹 SOCIAL ITEMS — ALL FIXED */
      socialItems={[
        {
          label: "Instagram",
          link: "https://www.instagram.com/rahx_officials/",
        },
        {
          label: "LinkedIn",
          link: "https://linkedin.com/company/rahx",
        },
        {
          label: "Facebook",
          link: "https://www.facebook.com/profile.php?id=61585968975083",
        },
        {
          label: "Discord",
          link: "https://discord.gg/wbrqSNXF7k",
        },
      ]}

      displaySocials
      displayItemNumbering

      /* 🔹 MENU BUTTON COLORS */
      menuButtonColor="#ffffff"
      openMenuButtonColor="#ffffff"
      changeMenuColorOnOpen

      /* 🔹 BACKGROUND LAYERS */
      colors={["#B19EEF", "#5227FF"]}

      /* 🔹 ACCENT */
      accentColor="#ff6b6b"
    />
  );
};

export default Navbar;
