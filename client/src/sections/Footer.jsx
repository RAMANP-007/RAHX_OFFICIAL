import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-400 px-6 md:px-16 lg:px-24 py-20">
      
      {/* Main grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* Brand */}
        <div>
          <h3 className="text-white text-2xl font-black tracking-wide">
            RAHX OFFICIAL
          </h3>
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            We design and build high-performance digital experiences.
            Strategy, design, and execution — done right.
          </p>
        </div>

        {/* Services */}
        <div>
          <p className="text-white font-semibold mb-4">Services</p>
          <ul className="space-y-2 text-sm">
            <li>UI & UX Design</li>
            <li>Website Development</li>
            <li>SEO Optimization</li>
            <li>AI Automation</li>
            <li>Social Media Management</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-white font-semibold mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Meet the Team</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <p className="text-white font-semibold mb-4">Connect</p>

          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.instagram.com/rahx_officials/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61585968975083"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                href="https://discord.gg/wbrqSNXF7k"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                Discord
              </a>
            </li>

            <li>
              <a
                href="mailto:rahxofficialweb@gmail.com"
                className="hover:text-white transition"
              >
                rahxofficialweb@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-neutral-800 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} RAHX OFFICIAL. All rights reserved.
        </p>

        <p className="text-xs text-neutral-500">  
          Built with precision. Not templates.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
