"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "@/react-bits-comp/bf-particle";
import RoundedTextCircle from "./_components/rounded_circle";
import { useRef } from "react";
import SpecialitySection from "./_components/specialCompSection";
import Services from "./_components/services";
import ProjectSection from "./_components/projects_section";
import Reviews from "./_components/reviews";
import Footer from "./_components/footer";
import { Navbar } from "./_components/navbar";


const Page = () => {
  const ref = useRef(null);




  return (
    <>
    <Navbar/>
      <div className="relative bg-gray-50 min-h-screen overflow-hidden top-0">

        {/* Full-page ribbons */}
        <div className="absolute inset-0 z-[999]">
          <Particles
            particleColors={['#000000', '#880808']}
            particleCount={600}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />

        </div>

        {/* Content */}
        <div className="max-w-screen-xl mx-auto relative flex items-center min-h-screen z-10 ">
          <h1 className="text-black text-8xl font-bricolage-grotesque font-extrabold leading-[1.2] z-50 fixed ">
            Your Digital Growth <br />{" "}
            <span className="font-normal text-7xl">Starts Here</span> With <br />
            <span className="hover:underline transition-all duration-300">
              ZengWebify
            </span>
          </h1>

          {/* Floating logo */}
          <motion.div
            className="h-3/5 w-2/5 absolute right-20"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/3d-logo.png"
              alt="404"
              width={1000}
              height={1000}
              className="h-full w-full object-contain relative"
            />
            <RoundedTextCircle className=" absolute right-0 -bottom-10" />
          </motion.div>
        </div>
      </div>
      <div className=" min-h-screen relative z-[9999] bg-black">
        <div className="absolute inset-0 z-[999]">
          <Particles
            particleColors={['#002047', '#880808']}
            particleCount={600}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={70}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />

        </div>

        <div className="max-w-screen-xl mx-auto flex items-center min-h-screen h-full z-10 ">
          <motion.div
            className="absolute -top-20"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            {/* Man - Middle */}
            <Image
              src="/images/man.png"
              alt="Man"
              width={2000}
              height={2000}
              className="h-full w-full object-contain relative z-10"
            />

            {/* Circle/Blue Line - Front */}
            <Image
              src="/images/arrow-down.png"
              alt="Circle"
              width={1000}
              height={1000}
              className=" object-contain absolute top-0 right-0 z-20"
            />
          </motion.div>


          <div className=" pt-64" ref={ref} >
            <h2 className="text-white text-7xl font-bricolage-grotesque font-extrabold leading-[1.2] text-center">Building Brands that <span className=" font-normal text-blue-400">resonate</span>, websites that convert.</h2>
            <p className="text-white text-2xl font-bricolage-grotesque  leading-[1.2] text-center mt-20">Your company deserves a brand-focused web design partner that empowers you to overcome business challenges. At Good Looking Design, we partner with forward-thinking founders to create smart websites, effective strategies, and impactful branding that drive results.</p>
          </div>

        </div>
      </div>

      <div className=" w-full bg-white min-h-screen relative z-[9999] ">
        <div className="absolute inset-0 z-[999]">
          <Particles
            particleColors={['#000000', '#880808']}
            particleCount={600}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={70}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />

        </div>
        <SpecialitySection />
      </div>

      <div className=" w-full bg-white min-h-screen relative z-[9999] ">
      <div className="absolute inset-0 z-[999]">
          <Particles
            particleColors={['#000000', '#880808']}
            particleCount={2000}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={70}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />

        </div>
        <Services />
      </div>

      <div className=" w-full bg-white min-h-screen relative z-[9999] ">
      <div className="absolute inset-0 z-[999]">
          <Particles
            particleColors={['#000000', '#880808']}
            particleCount={2000}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={70}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />

        </div>
            <ProjectSection/>
      </div>

      <div className=" w-full bg-white min-h-screen relative z-[9999] pt-20 overflow-hidden">
      
            <Reviews/>
       
      </div>

      <div className=" w-full bg-black relative z-[9999] pt-20 overflow-hidden">
            <Footer/>
      </div>

    </>
  );
};

export default Page;
