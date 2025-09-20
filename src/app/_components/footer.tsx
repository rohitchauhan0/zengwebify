import ScrollVelocity from "@/react-bits-comp/scroll-velocity";
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const velocityFast = 120;
  const velocitySlow = 60;

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-indigo-900 to-blue-900 text-white py-28 overflow-hidden">
      {/* Floating Scroll Texts */}
      <div className="absolute top-0 w-full">
        <ScrollVelocity
          texts={["ZengWebify", "Innovate", "Build", "Design", "Create"]}
          velocity={velocityFast}
          className="text-3xl font-bold uppercase tracking-widest opacity-20"
        />
        <ScrollVelocity
          texts={["ZengWebify", "Innovate", "Build", "Design", "Create"]}
          velocity={-velocitySlow}
          className="text-2xl font-bold uppercase tracking-widest opacity-20 mt-12"
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto text-center space-y-6 px-6">
        <h2 className="text-5xl font-extrabold">ZengWebify</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Transforming ideas into beautiful digital experiences. At ZengWebify, we craft web solutions that are fast, sleek, and unforgettable.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mt-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm mt-8">
          © {new Date().getFullYear()} ZengWebify. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
